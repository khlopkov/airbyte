"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[225],{70033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="Sentry Integration",c={unversionedId:"operator-guides/sentry-integration",id:"operator-guides/sentry-integration",title:"Sentry Integration",description:"Airbyte provides an opportunity to aggregate connectors' exceptions and errors via Sentry.",source:"@site/../docs/operator-guides/sentry-integration.md",sourceDirName:"operator-guides",slug:"/operator-guides/sentry-integration",permalink:"/operator-guides/sentry-integration",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/sentry-integration.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Configuring Airbyte",permalink:"/operator-guides/configuring-airbyte"},next:{title:"Using custom connectors",permalink:"/operator-guides/using-custom-connectors"}},s={},l=[{value:"UML diagram",id:"uml-diagram",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sentry-integration"},"Sentry Integration"),(0,o.kt)("p",null,"Airbyte provides an opportunity to aggregate connectors' exceptions and errors via ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.io/"},"Sentry"),".\nBy default, this option is off. There are 2 possible mechanisms for its activation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define the ",(0,o.kt)("inlineCode",{parentName:"li"},"SENTRY_DSN")," environment variable into Dockerfile of necessary connectors."),(0,o.kt)("li",{parentName:"ol"},"Define the ",(0,o.kt)("inlineCode",{parentName:"li"},"SENTRY_DSN")," into the workspace environment file (",(0,o.kt)("inlineCode",{parentName:"li"},".env"),"). Workers will add this variable to all docker connectors automatically.")),(0,o.kt)("p",null,"Most connectors written using the Airbyte Python or Java CDKs automatically detect this environment variable and activate Sentry profiling accordingly. "),(0,o.kt)("h2",{id:"uml-diagram"},"UML diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(83033).Z,width:"772",height:"1058"})))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),y=o,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},83033:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sentry-flow-v1-77f21deba3ed04428ca87d49c965ad8a.png"}}]);