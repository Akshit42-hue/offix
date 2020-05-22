(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(1),r=n(11),i=(n(0),n(225)),c={id:"conflict-server",title:"Server Side Conflict Resolution",sidebar_label:"Conflict Server"},a={id:"version-0.15.0/conflict-server",title:"Server Side Conflict Resolution",description:"When performing data synchronization between multiple clients it is common for remote devices to become offline for a certain amount of time. As a result of being offline, data that is modified by a client can become outdated with the server. Further operations on that record can cause a conflict (often called a collision).",source:"@site/versioned_docs/version-0.15.0/ref-conflict-server.md",permalink:"/docs/conflict-server",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.15.0/ref-conflict-server.md",version:"0.15.0",sidebar_label:"Conflict Server",sidebar:"version-0.15.0/docs",previous:{title:"Client Side Conflict Resolution",permalink:"/docs/conflict-client"},next:{title:"React - using Offix Hooks",permalink:"/docs/react"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Conflict Resolution",id:"conflict-resolution",children:[{value:"Prerequisites:",id:"prerequisites",children:[]}]},{value:"Enabling Conflict Resolution",id:"enabling-conflict-resolution",children:[{value:"Version Based Conflict Resolution",id:"version-based-conflict-resolution",children:[]}]},{value:"Implementing Custom Conflict Resolution",id:"implementing-custom-conflict-resolution",children:[]},{value:"Conflict Resolution Specification for other languages",id:"conflict-resolution-specification-for-other-languages",children:[{value:"Structure of the conflict error",id:"structure-of-the-conflict-error",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When performing data synchronization between multiple clients it is common for remote devices to become offline for a certain amount of time. As a result of being offline, data that is modified by a client can become outdated with the server. Further operations on that record can cause a conflict (often called a collision)."),Object(i.b)("p",null,"Offix provides out of the box conflict resolution for any Node.JS platform.\nFor other languages, you can follow the conflict specification chapter to implement a custom detection mechanism for your resolvers."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Install the conflict package inside your Node.js project."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install offix-conflicts-server\n")),Object(i.b)("h2",{id:"conflict-resolution"},"Conflict Resolution"),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GraphQL server with resolvers"),Object(i.b)("li",{parentName:"ul"},"Database or any other form of data storage that can cause data conflicts")),Object(i.b)("h2",{id:"enabling-conflict-resolution"},"Enabling Conflict Resolution"),Object(i.b)("p",null,"To enable conflict resolution developers need to use one of the pluggable conflict implementations in each individual resolver."),Object(i.b)("h3",{id:"version-based-conflict-resolution"},"Version Based Conflict Resolution"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add conflict package dependency to project")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const { conflictHandler } = require('offix-conflicts-server');\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add version field to GraphQL type that should support conflict resolution")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-graphql"}),"type Greeting {\n  msg: String\n  version: Int\n}\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Add example mutations")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  changeGreeting(msg: String!, version: Int!): Greeting\n}\n")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Implement resolver for mutation")),Object(i.b)("p",null,"Every conflict can be handled using a set of predefined steps"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"// 1. Read data from data source\n// 2. Check for conflicts\nconst conflict = conflictHandler.checkForConflicts(serverData, clientData);\nif (conflict) {\n  throw conflict;\n}\n// 5. Save object to data source\n")),Object(i.b)("p",null,"Resolvers can be implemented to handle conflicts on client ."),Object(i.b)("h2",{id:"implementing-custom-conflict-resolution"},"Implementing Custom Conflict Resolution"),Object(i.b)("p",null,"The",Object(i.b)("inlineCode",{parentName:"p"},"ObjectState")," interface is a complete conflict resolution implementation that provides a set of rules to detect and handle conflicts. The interface will allow developers to handle conflicts on the client. Client-side applications will need to match the server side implementation. Currently, we support the following implementations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VersionObjectState")," - allows to operate based on version field in schema"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HashObjectState")," - allows to operate based on object hashes")),Object(i.b)("h2",{id:"conflict-resolution-specification-for-other-languages"},"Conflict Resolution Specification for other languages"),Object(i.b)("p",null,"The conflict resolution package can be replicated to any language by implementing conflict detection logic in resolvers."),Object(i.b)("p",null,"Conflict detection should return a specific format of error when a conflict has been detected. This error will be processed by offix-client and sent back again as a new mutation. To detect conflicts on the server\nyou can use one of many strategies, for example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Calculate hashes of the data"),Object(i.b)("li",{parentName:"ul"},"Use specialized field like version or lastChangedDate"),Object(i.b)("li",{parentName:"ul"},"Have separate storage with history of the changes")),Object(i.b)("h3",{id:"structure-of-the-conflict-error"},"Structure of the conflict error"),Object(i.b)("p",null,"The server needs to return a specific error when a conflict is detected\ncontaining both the server and client states:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),' "extensions": {\n        "code": "INTERNAL_SERVER_ERROR",\n        "exception": {\n          "conflictInfo": {\n            "serverState": {\n                 //..\n            },\n            "clientState": {\n              //..\n            }\n          },\n        }\n }\n')))}u.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},f=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),p=o,d=f["".concat(c,".").concat(p)]||f[p]||b[p]||i;return n?r.a.createElement(d,a({ref:t},s,{components:n})):r.a.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);