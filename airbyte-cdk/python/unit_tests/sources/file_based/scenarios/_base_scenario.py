#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from typing import Any, Dict, List, Mapping, Optional

from unit_tests.sources.file_based.in_memory_files_source import InMemoryFilesSource


class BaseTestScenario:
    name: str
    config: Mapping[str, Any]
    files: Dict[str, Any]
    expected_catalog: Dict[str, Any]
    expected_records: List[Dict[str, Any]]
    expected_discover_error: Optional[Exception] = None
    expected_read_error: Optional[Exception] = None

    def __init__(self):
        self.source = InMemoryFilesSource(self.files)
        self.validate()

    def validate(self):
        streams = {s["name"] for s in self.config["streams"]}
        expected_streams = {s["name"] for s in self.expected_catalog["streams"]}
        assert expected_streams <= streams

    def configured_catalog(self) -> Dict[str, Any]:
        catalog = {"streams": []}
        for stream in self.expected_catalog["streams"]:
            catalog["streams"].append(
                {
                    "stream": stream,
                    "sync_mode": "incremental",
                    "destination_sync_mode": "append",
                }
            )

        return catalog
