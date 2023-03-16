"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[62890],{4981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s="Transformations with SQL (Part 1/3)",i={unversionedId:"operator-guides/transformation-and-normalization/transformations-with-sql",id:"operator-guides/transformation-and-normalization/transformations-with-sql",title:"Transformations with SQL (Part 1/3)",description:"Transformations with SQL \\(Part 1/3\\)",source:"@site/../docs/operator-guides/transformation-and-normalization/transformations-with-sql.md",sourceDirName:"operator-guides/transformation-and-normalization",slug:"/operator-guides/transformation-and-normalization/transformations-with-sql",permalink:"/operator-guides/transformation-and-normalization/transformations-with-sql",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/transformation-and-normalization/transformations-with-sql.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Windows - Browsing Local File Output",permalink:"/operator-guides/locating-files-local-destination"},next:{title:"Transformations with dbt (Part 2/3)",permalink:"/operator-guides/transformation-and-normalization/transformations-with-dbt"}},l={},d=[{value:"Transformations with SQL (Part 1/3)",id:"transformations-with-sql-part-13-1",level:2},{value:"Overview",id:"overview",level:3},{value:"(Examples outputs are updated with Airbyte version 0.23.0-alpha from May 2021)",id:"examples-outputs-are-updated-with-airbyte-version-0230-alpha-from-may-2021",level:2},{value:"First transformation step: Normalization",id:"first-transformation-step-normalization",level:3},{value:"(Optional) Configure some Covid (data) source and Postgres destinations",id:"optional-configure-some-covid-data-source-and-postgres-destinations",level:3},{value:"Identify Workspace ID with Normalize steps",id:"identify-workspace-id-with-normalize-steps",level:3},{value:"Export Plain SQL files",id:"export-plain-sql-files",level:3},{value:"Simple SQL Query",id:"simple-sql-query",level:4},{value:"Customize SQL Query",id:"customize-sql-query",level:4}],c={toc:d},p="wrapper";function _(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transformations-with-sql-part-13"},"Transformations with SQL (Part 1/3)"),(0,r.kt)("h2",{id:"transformations-with-sql-part-13-1"},"Transformations with SQL ","(","Part 1/3",")"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This tutorial will describe how to integrate SQL based transformations with Airbyte syncs using plain SQL queries."),(0,r.kt)("p",null,"This is the first part of ELT tutorial. The second part goes deeper with ",(0,r.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-dbt"},"Transformations with dbt")," and then wrap-up with a third part on ",(0,r.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-airbyte"},"Transformations with Airbyte"),"."),(0,r.kt)("h2",{id:"examples-outputs-are-updated-with-airbyte-version-0230-alpha-from-may-2021"},"(","Examples outputs are updated with Airbyte version 0.23.0-alpha from May 2021",")"),(0,r.kt)("h3",{id:"first-transformation-step-normalization"},"First transformation step: Normalization"),(0,r.kt)("p",null,"At its core, Airbyte is geared to handle the EL ","(","Extract Load",")",' steps of an ELT process. These steps can also be referred in Airbyte\'s dialect as "Source" and "Destination".'),(0,r.kt)("p",null,"However, this is actually producing a table in the destination with a JSON blob column... For the typical analytics use case, you probably want this json blob normalized so that each field is its own column."),(0,r.kt)("p",null,"So, after EL, comes the T ","(","transformation",")",' and the first T step that Airbyte actually applies on top of the extracted data is called "Normalization". You can find more information about it ',(0,r.kt)("a",{parentName:"p",href:"/understanding-airbyte/basic-normalization"},"here"),"."),(0,r.kt)("p",null,"Airbyte runs this step before handing the final data over to other tools that will manage further transformation down the line."),(0,r.kt)("p",null,'To summarize, we can represent the ELT process in the diagram below. These are steps that happens between your "Source Database or API" and the final "Replicated Tables" with examples of implementation underneath:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(65974).Z,width:"1131",height:"689"})),(0,r.kt)("p",null,"Anyway, it is possible to short-circuit this process ","(","no vendor lock-in",")"," and handle it yourself by turning this option off in the destination settings page."),(0,r.kt)("p",null,"This could be useful if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You have a use-case not related to analytics that could be handled with data in its raw JSON format. "),(0,r.kt)("li",{parentName:"ol"},"You can implement your own transformer. For example, you could write them in a different language, create them in an analytics engine like Spark, or use a transformation tool such as dbt or Dataform."),(0,r.kt)("li",{parentName:"ol"},"You want to customize and change how the data is normalized with your own queries.")),(0,r.kt)("p",null,"In order to do so, we will now describe how you can leverage the basic normalization outputs that Airbyte generates to build your own transformations if you don't want to start from scratch."),(0,r.kt)("p",null,"Note: We will rely on docker commands that we've gone over as part of another ",(0,r.kt)("a",{parentName:"p",href:"/operator-guides/browsing-output-logs"},"Tutorial on Exploring Docker Volumes"),"."),(0,r.kt)("h3",{id:"optional-configure-some-covid-data-source-and-postgres-destinations"},"(","Optional",")"," Configure some Covid ","(","data",")"," source and Postgres destinations"),(0,r.kt)("p",null,"If you have sources and destinations already setup on your deployment, you can skip to the next section."),(0,r.kt)("p",null,"For the sake of this tutorial, let's create some source and destination as an example that we can refer to afterward. We'll be using a file accessible from a public API, so you can easily reproduce this setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Here are some examples of public API CSV:\nhttps://storage.googleapis.com/covid19-open-data/v2/latest/epidemiology.csv\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(97313).Z,width:"715",height:"702"})),(0,r.kt)("p",null,'And a local Postgres Database, making sure that "Basic normalization" is enabled:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(39614).Z,width:"930",height:"913"})),(0,r.kt)("p",null,"After setting up the connectors, we can trigger the sync and study the logs:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69855).Z,width:"1050",height:"720"})),(0,r.kt)("p",null,"Notice that the process ran in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/workspace/5/0")," folder."),(0,r.kt)("h3",{id:"identify-workspace-id-with-normalize-steps"},"Identify Workspace ID with Normalize steps"),(0,r.kt)("p",null,"If you went through the previous setup of source/destination section and run a sync, you were able to identify which workspace was used, let's define some environment variables to remember this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'NORMALIZE_WORKSPACE="5/0/"\n')),(0,r.kt)("p",null,"Or if you want to find any folder where the normalize step was run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# find automatically latest workspace where normalization was run\nNORMALIZE_WORKSPACE=`docker run --rm -i -v airbyte_workspace:/data  busybox find /data -path "*normalize/models*" | sed -E "s;/data/([0-9]+/[0-9]+/)normalize/.*;\\1;g" | sort | uniq | tail -n 1`\n')),(0,r.kt)("h3",{id:"export-plain-sql-files"},"Export Plain SQL files"),(0,r.kt)("p",null,"Airbyte is internally using a specialized tool for handling transformations called dbt."),(0,r.kt)("p",null,"The Airbyte Python module reads the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination_catalog.json")," file and generates dbt code responsible for interpreting and transforming the raw data."),(0,r.kt)("p",null,"The final output of dbt is producing SQL files that can be run on top of the destination that you selected."),(0,r.kt)("p",null,"Therefore, it is possible to extract these SQL files, modify them and run it yourself manually outside Airbyte!"),(0,r.kt)("p",null,"You would be able to find these at the following location inside the server's docker container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/tmp/workspace/${NORMALIZE_WORKSPACE}/build/run/airbyte_utils/models/generated/airbyte_tables/<schema>/<your_table_name>.sql\n")),(0,r.kt)("p",null,"In order to extract them, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env bash\ndocker cp airbyte-server:/tmp/workspace/${NORMALIZE_WORKSPACE}/build/run/airbyte_utils/models/generated/ models/\n\nfind models\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"models/airbyte_tables/quarantine/covid_epidemiology_f11.sql\n")),(0,r.kt)("p",null,"Let's inspect the generated SQL file by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat models/**/covid_epidemiology*.sql\n")),(0,r.kt)("p",null,"Example Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," create  table \"postgres\".quarantine.\"covid_epidemiology_f11__dbt_tmp\"\n  as (\n\nwith __dbt__CTE__covid_epidemiology_ab1_558 as (\n\n-- SQL model to parse JSON blob stored in a single column and extract into separated field columns as described by the JSON Schema\nselect\n    jsonb_extract_path_text(_airbyte_data, 'key') as \"key\",\n    jsonb_extract_path_text(_airbyte_data, 'date') as \"date\",\n    jsonb_extract_path_text(_airbyte_data, 'new_tested') as new_tested,\n    jsonb_extract_path_text(_airbyte_data, 'new_deceased') as new_deceased,\n    jsonb_extract_path_text(_airbyte_data, 'total_tested') as total_tested,\n    jsonb_extract_path_text(_airbyte_data, 'new_confirmed') as new_confirmed,\n    jsonb_extract_path_text(_airbyte_data, 'new_recovered') as new_recovered,\n    jsonb_extract_path_text(_airbyte_data, 'total_deceased') as total_deceased,\n    jsonb_extract_path_text(_airbyte_data, 'total_confirmed') as total_confirmed,\n    jsonb_extract_path_text(_airbyte_data, 'total_recovered') as total_recovered,\n    _airbyte_emitted_at\nfrom \"postgres\".quarantine._airbyte_raw_covid_epidemiology\n-- covid_epidemiology\n),  __dbt__CTE__covid_epidemiology_ab2_558 as (\n\n-- SQL model to cast each column to its adequate SQL type converted from the JSON schema type\nselect\n    cast(\"key\" as \n    varchar\n) as \"key\",\n    cast(\"date\" as \n    varchar\n) as \"date\",\n    cast(new_tested as \n    float\n) as new_tested,\n    cast(new_deceased as \n    float\n) as new_deceased,\n    cast(total_tested as \n    float\n) as total_tested,\n    cast(new_confirmed as \n    float\n) as new_confirmed,\n    cast(new_recovered as \n    float\n) as new_recovered,\n    cast(total_deceased as \n    float\n) as total_deceased,\n    cast(total_confirmed as \n    float\n) as total_confirmed,\n    cast(total_recovered as \n    float\n) as total_recovered,\n    _airbyte_emitted_at\nfrom __dbt__CTE__covid_epidemiology_ab1_558\n-- covid_epidemiology\n),  __dbt__CTE__covid_epidemiology_ab3_558 as (\n\n-- SQL model to build a hash column based on the values of this record\nselect\n    *,\n    md5(cast(\n\n    coalesce(cast(\"key\" as \n    varchar\n), '') || '-' || coalesce(cast(\"date\" as \n    varchar\n), '') || '-' || coalesce(cast(new_tested as \n    varchar\n), '') || '-' || coalesce(cast(new_deceased as \n    varchar\n), '') || '-' || coalesce(cast(total_tested as \n    varchar\n), '') || '-' || coalesce(cast(new_confirmed as \n    varchar\n), '') || '-' || coalesce(cast(new_recovered as \n    varchar\n), '') || '-' || coalesce(cast(total_deceased as \n    varchar\n), '') || '-' || coalesce(cast(total_confirmed as \n    varchar\n), '') || '-' || coalesce(cast(total_recovered as \n    varchar\n), '')\n\n as \n    varchar\n)) as _airbyte_covid_epidemiology_hashid\nfrom __dbt__CTE__covid_epidemiology_ab2_558\n-- covid_epidemiology\n)-- Final base SQL model\nselect\n    \"key\",\n    \"date\",\n    new_tested,\n    new_deceased,\n    total_tested,\n    new_confirmed,\n    new_recovered,\n    total_deceased,\n    total_confirmed,\n    total_recovered,\n    _airbyte_emitted_at,\n    _airbyte_covid_epidemiology_hashid\nfrom __dbt__CTE__covid_epidemiology_ab3_558\n-- covid_epidemiology from \"postgres\".quarantine._airbyte_raw_covid_epidemiology\n  );\n")),(0,r.kt)("h4",{id:"simple-sql-query"},"Simple SQL Query"),(0,r.kt)("p",null,"We could simplify the SQL query by removing some parts that may be unnecessary for your current usage ","(","such as generating a md5 column; ",(0,r.kt)("a",{parentName:"p",href:"https://blog.getdbt.com/the-most-underutilized-function-in-sql/"},"Why exactly would I want to use that?!"),")","."),(0,r.kt)("p",null,"It would turn into a simpler query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create table "postgres"."public"."covid_epidemiology"\nas (\n    select\n        _airbyte_emitted_at,\n        (current_timestamp at time zone \'utc\')::timestamp as _airbyte_normalized_at,\n\n        cast(jsonb_extract_path_text("_airbyte_data",\'key\') as varchar) as "key",\n        cast(jsonb_extract_path_text("_airbyte_data",\'date\') as varchar) as "date",\n        cast(jsonb_extract_path_text("_airbyte_data",\'new_tested\') as float) as new_tested,\n        cast(jsonb_extract_path_text("_airbyte_data",\'new_deceased\') as float) as new_deceased,\n        cast(jsonb_extract_path_text("_airbyte_data",\'total_tested\') as float) as total_tested,\n        cast(jsonb_extract_path_text("_airbyte_data",\'new_confirmed\') as float) as new_confirmed,\n        cast(jsonb_extract_path_text("_airbyte_data",\'new_recovered\') as float) as new_recovered,\n        cast(jsonb_extract_path_text("_airbyte_data",\'total_deceased\') as float) as total_deceased,\n        cast(jsonb_extract_path_text("_airbyte_data",\'total_confirmed\') as float) as total_confirmed,\n        cast(jsonb_extract_path_text("_airbyte_data",\'total_recovered\') as float) as total_recovered\n    from "postgres".public._airbyte_raw_covid_epidemiology\n);\n')),(0,r.kt)("h4",{id:"customize-sql-query"},"Customize SQL Query"),(0,r.kt)("p",null,"Feel free to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rename the columns as you desire"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"avoiding using keywords such as ",(0,r.kt)("inlineCode",{parentName:"li"},'"key"')," or ",(0,r.kt)("inlineCode",{parentName:"li"},'"date"')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can tweak the column data type if the ones generated by Airbyte are not the ones you favor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, let's use ",(0,r.kt)("inlineCode",{parentName:"li"},"Integer")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"Float")," for the number of Covid cases..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add deduplicating logic"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"if you can identify which columns to use as Primary Keys"),(0,r.kt)("p",{parentName:"li"},"(","since airbyte isn't able to detect those automatically yet...",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(","Note: actually I am not even sure if I can tell the proper primary key in this dataset...",")")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a View ","(","or materialized views",")"," instead of a Table.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"etc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create view \"postgres\".\"public\".\"covid_epidemiology\" as (\n    with parse_json_cte as (\n        select\n            _airbyte_emitted_at,\n\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'key') as varchar) as id,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'date') as varchar) as updated_at,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'new_tested') as float) as new_tested,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'new_deceased') as float) as new_deceased,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'total_tested') as float) as total_tested,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'new_confirmed') as float) as new_confirmed,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'new_recovered') as float) as new_recovered,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'total_deceased') as float) as total_deceased,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'total_confirmed') as float) as total_confirmed,\n            cast(jsonb_extract_path_text(\"_airbyte_data\",'total_recovered') as float) as total_recovered\n        from \"postgres\".public._airbyte_raw_covid_epidemiology\n    ),\n    cte as (\n        select\n            *,\n            row_number() over (\n                partition by id\n                order by updated_at desc\n            ) as row_num\n        from parse_json_cte\n    )\n    select\n        substring(id, 1, 2) as id, -- Probably not the right way to identify the primary key in this dataset...\n        updated_at,\n        _airbyte_emitted_at,\n\n        case when new_tested = 'NaN' then 0 else cast(new_tested as integer) end as new_tested,\n        case when new_deceased = 'NaN' then 0 else cast(new_deceased as integer) end as new_deceased,\n        case when total_tested = 'NaN' then 0 else cast(total_tested as integer) end as total_tested,\n        case when new_confirmed = 'NaN' then 0 else cast(new_confirmed as integer) end as new_confirmed,\n        case when new_recovered = 'NaN' then 0 else cast(new_recovered as integer) end as new_recovered,\n        case when total_deceased = 'NaN' then 0 else cast(total_deceased as integer) end as total_deceased,\n        case when total_confirmed = 'NaN' then 0 else cast(total_confirmed as integer) end as total_confirmed,\n        case when total_recovered = 'NaN' then 0 else cast(total_recovered as integer) end as total_recovered\n    from cte\n    where row_num = 1\n);\n")),(0,r.kt)("p",null,"Then you can run in your preferred SQL editor or tool!"),(0,r.kt)("p",null,"If you are familiar with dbt or want to learn more about it, you can continue with the following ",(0,r.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-dbt"},"tutorial using dbt"),"..."))}_.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,u=p["".concat(l,".").concat(m)]||p[m]||_[m]||o;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connecting-EL-with-T-1-e00c0e57a8bc7ff786f7fba94b8857c7.png"},39614:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connecting-EL-with-T-2-419bfcdd36dcf8bdc53940d2faef2d2b.png"},69855:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connecting-EL-with-T-3-4b3373448322275186590a0c5e69c29e.png"},65974:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connecting-EL-with-T-4-76a8ba79525fe9b69c81e4ca5ef0822e.png"}}]);