package io.airbyte.integrations.destination.bigquery.typing_deduping;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.JsonNode;
import io.airbyte.commons.json.Jsons;
import io.airbyte.integrations.destination.bigquery.typing_deduping.CatalogParser.ParsedCatalog;
import io.airbyte.integrations.destination.bigquery.typing_deduping.SqlGenerator.QuotedColumnId;
import io.airbyte.integrations.destination.bigquery.typing_deduping.SqlGenerator.QuotedStreamId;
import io.airbyte.protocol.models.v0.AirbyteStream;
import io.airbyte.protocol.models.v0.ConfiguredAirbyteCatalog;
import io.airbyte.protocol.models.v0.ConfiguredAirbyteStream;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

class CatalogParserTest {

  private SqlGenerator<String, String> sqlGenerator;
  private CatalogParser<String> parser;

  @BeforeEach
  public void setup() {
    sqlGenerator = mock(SqlGenerator.class);
    // noop quoting logic
    when(sqlGenerator.quoteColumnId(any())).thenAnswer(invocation -> {
      String fieldName = invocation.getArgument(0);
      return new QuotedColumnId(fieldName, fieldName);
    });
    when(sqlGenerator.quoteStreamId(any(), any())).thenAnswer(invocation -> {
      String namespace = invocation.getArgument(0);
      String name = invocation.getArgument(1);
      return new QuotedStreamId(namespace, name, namespace + "_" + name, namespace, name);
    });

    parser = new CatalogParser<>(sqlGenerator);
  }

  /**
   * Both these streams want the same raw table name ("a_b_c"). Verify that they don't actually use the same raw table.
   */
  @Test
  public void rawNameCollision() {
    final ConfiguredAirbyteCatalog catalog = new ConfiguredAirbyteCatalog().withStreams(List.of(
        stream("a", "b_c"),
        stream("a_b", "c")
    ));

    final ParsedCatalog<?> parsedCatalog = parser.parseCatalog(catalog);

    assertNotEquals(
        parsedCatalog.streams().get(0).id().rawName(),
        parsedCatalog.streams().get(1).id().rawName()
    );
  }

  /**
   * Both these streams will write to the same final table name ("foofoo"). Verify that they don't actually use the same tablename.
   */
  @Test
  public void finalNameCollision() {
    when(sqlGenerator.quoteStreamId(any(), any())).thenAnswer(invocation -> {
      String namespace = invocation.getArgument(0);
      String name = (invocation.getArgument(1));

      // emulate quoting logic that causes a name collision
      name = name.replaceAll("bar", "");
      return new QuotedStreamId(namespace, name, namespace + "_" + name, namespace, name);
    });
    final ConfiguredAirbyteCatalog catalog = new ConfiguredAirbyteCatalog().withStreams(List.of(
        stream("a", "foobarfoo"),
        stream("a", "foofoo")
    ));

    final ParsedCatalog<?> parsedCatalog = parser.parseCatalog(catalog);

    assertNotEquals(
        parsedCatalog.streams().get(0).id().name(),
        parsedCatalog.streams().get(1).id().name()
    );
  }

  /**
   * The schema contains two fields, which will both end up named "foofoo" after quoting. Verify that they don't actually use the same column name.
   */
  @Test
  public void columnNameCollision() {
    when(sqlGenerator.quoteColumnId(any())).thenAnswer(invocation -> {
      String fieldName = invocation.getArgument(0);

      // emulate quoting logic that causes a name collision
      fieldName = fieldName.replaceAll("bar", "");
      return new QuotedColumnId(fieldName, fieldName);
    });
    JsonNode schema = Jsons.deserialize("""
        {
          "type": "object",
          "properties": {
            "foobarfoo": {"type": "string"},
            "foofoo": {"type": "string"}
          }
        }
        """);
    final ConfiguredAirbyteCatalog catalog = new ConfiguredAirbyteCatalog().withStreams(List.of(stream("a", "a", schema)));

    final ParsedCatalog<?> parsedCatalog = parser.parseCatalog(catalog);

    assertEquals(2, parsedCatalog.streams().get(0).columns().size());
  }

  private static ConfiguredAirbyteStream stream(String namespace, String name) {
    return stream(
        namespace,
        name,
        Jsons.deserialize("""
            {
              "type": "object",
              "properties": {
                "name": {"type": "string"}
              }
            }
            """)
    );
  }

  private static ConfiguredAirbyteStream stream(String namespace, String name, JsonNode schema) {
    return new ConfiguredAirbyteStream().withStream(
        new AirbyteStream()
            .withNamespace(namespace)
            .withName(name)
            .withJsonSchema(schema));
  }
}
