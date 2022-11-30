"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[11533],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(g,l(l({ref:e},s),{},{components:a})):r.createElement(g,l({ref:e},s))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85237:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"BigQuery is a serverless, highly scalable, and cost-effective data warehouse offered by Google Cloud Provider."},l="BigQuery",o={unversionedId:"integrations/sources/bigquery",id:"integrations/sources/bigquery",title:"BigQuery",description:"BigQuery is a serverless, highly scalable, and cost-effective data warehouse offered by Google Cloud Provider.",source:"@site/../docs/integrations/sources/bigquery.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/bigquery",permalink:"/integrations/sources/bigquery",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/bigquery.md",tags:[],version:"current",frontMatter:{description:"BigQuery is a serverless, highly scalable, and cost-effective data warehouse offered by Google Cloud Provider."},sidebar:"mySidebar",previous:{title:"BigCommerce",permalink:"/integrations/sources/bigcommerce"},next:{title:"Bing Ads",permalink:"/integrations/sources/bing-ads"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Service account",id:"service-account",level:4},{value:"Service account key",id:"service-account-key",level:4},{value:"Setup the BigQuery source in Airbyte",id:"setup-the-bigquery-source-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2},{value:"source-bigquery",id:"source-bigquery",level:3}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigquery"},"BigQuery"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The BigQuery source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is running."),(0,n.kt)("h3",{id:"resulting-schema"},"Resulting schema"),(0,n.kt)("p",null,"The BigQuery source does not alter the schema present in your database. Depending on the destination connected to this source, however, the schema may be altered. See the destination's documentation for more details."),(0,n.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("p",null,"The BigQuery data types mapping:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"BigQuery Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Resulting Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BOOL")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"INT64")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"FLOAT64")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"NUMERIC")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BIGNUMERIC")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"STRING")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BYTES")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DATE")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"In ISO8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"DATETIME")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"In ISO8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TIMESTAMP")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"In ISO8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TIME")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ARRAY")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"STRUCT")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"GEOGRAPHY")),(0,n.kt)("td",{parentName:"tr",align:"left"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Change Data Capture"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL Support"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"To use the BigQuery source, you'll need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Google Cloud Project with BigQuery enabled"),(0,n.kt)("li",{parentName:"ul"},'A Google Cloud Service Account with the "BigQuery User" and "BigQuery Data Editor" roles in your GCP project'),(0,n.kt)("li",{parentName:"ul"},"A Service Account Key to authenticate into your Service Account")),(0,n.kt)("p",null,"See the setup guide for more information about how to create the required resources."),(0,n.kt)("h4",{id:"service-account"},"Service account"),(0,n.kt)("p",null,"In order for Airbyte to sync data from BigQuery, it needs credentials for a ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts"},"Service Account"),' with the "BigQuery User" and "BigQuery Data Editor" roles, which grants permissions to run BigQuery jobs, write to BigQuery Datasets, and read table metadata. We highly recommend that this Service Account is exclusive to Airbyte for ease of permissioning and auditing. However, you can use a pre-existing Service Account if you already have one with the correct permissions.'),(0,n.kt)("p",null,"The easiest way to create a Service Account is to follow GCP's guide for ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-accounts"},"Creating a Service Account"),". Once you've created the Service Account, make sure to keep its ID handy as you will need to reference it when granting roles. Service Account IDs typically take the form ",(0,n.kt)("inlineCode",{parentName:"p"},"<account-name>@<project-name>.iam.gserviceaccount.com")),(0,n.kt)("p",null,'Then, add the service account as a Member in your Google Cloud Project with the "BigQuery User" role. To do this, follow the instructions for ',(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#granting-console"},"Granting Access")," in the Google documentation. The email address of the member you are adding is the same as the Service Account ID you just created."),(0,n.kt)("p",null,'At this point you should have a service account with the "BigQuery User" project-level permission.'),(0,n.kt)("h4",{id:"service-account-key"},"Service account key"),(0,n.kt)("p",null,"Service Account Keys are used to authenticate as Google Service Accounts. For Airbyte to leverage the permissions you granted to the Service Account in the previous step, you'll need to provide its Service Account Keys. See the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/service-accounts#service_account_keys"},"Google documentation")," for more information about Keys."),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Creating and Managing Service Account Keys")," guide to create a key. Airbyte currently supports JSON Keys only, so make sure you create your key in that format. As soon as you created the key, make sure to download it, as that is the only time Google will allow you to see its contents. Once you've successfully configured BigQuery as a source in Airbyte, delete this key from your computer."),(0,n.kt)("h3",{id:"setup-the-bigquery-source-in-airbyte"},"Setup the BigQuery source in Airbyte"),(0,n.kt)("p",null,"You should now have all the requirements needed to configure BigQuery as a source in the UI. You'll need the following information to configure the BigQuery source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Project ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Default Dataset ID ","[","Optional","]"),": the schema name if only one schema is interested. Dramatically boost source discover operation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Credentials JSON"),": the contents of your Service Account Key JSON file")),(0,n.kt)("p",null,"Once you've configured BigQuery as a source, delete the Service Account Key from your computer."),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("h3",{id:"source-bigquery"},"source-bigquery"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16238"},"15535")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update incremental query to avoid data missing when new data is inserted at the same time as a sync starts under non-CDC incremental mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16902"},"16902")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source BigQuery: added user agent header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15668"},"15668")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wrap logs in AirbyteLogMessage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14362"},"14362")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Integral columns are now discovered as int64 fields.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14574"},"14574")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed additionalProperties:false from JDBC source connectors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13864"},"13864")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated stacktrace format for any trace message errors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11484"},"11484")),(0,n.kt)("td",{parentName:"tr",align:"left"},"BigQuery connector escape column names")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8434"},"8434")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update fields in source-connectors specifications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6524"},"#","6524")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow ",(0,n.kt)("inlineCode",{parentName:"td"},"dataset_id")," null in spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6051"},"#","6051")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Handle NPE ",(0,n.kt)("inlineCode",{parentName:"td"},"dataset_id")," is not provided")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-16"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6135"},"#","6135")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc1b BigQuery source: Fix nested structs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4981"},"#","4981")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc1b BigQuery source: Fix nested arrays")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4457"},"#","4457")),(0,n.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Big Query.")))))}m.isMDXComponent=!0}}]);