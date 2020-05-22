/*! For license information please see 29b2d794.bad5ba85.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(11),c=(n(226),n(225)),i={id:"conflict-server",title:"Server Side Conflict Resolution",sidebar_label:"Conflict Server"},l={id:"conflict-server",title:"Server Side Conflict Resolution",description:"When performing data synchronization between multiple clients it is common for remote devices to become offline for a certain amount of time. As a result of being offline, data that is modified by a client can become outdated with the server. Further operations on that record can cause a conflict (often called a collision).",source:"@site/../docs/ref-conflict-server.md",permalink:"/docs/next/conflict-server",editUrl:"https://github.com/aerogear/offix/edit/master/website/../docs/ref-conflict-server.md",version:"next",sidebar_label:"Conflict Server",sidebar:"docs",previous:{title:"Client Side Conflict Resolution",permalink:"/docs/next/conflict-client"},next:{title:"React - using Offix Hooks",permalink:"/docs/next/react"}},a=[{value:"Usage",id:"usage",children:[]},{value:"Conflict Resolution",id:"conflict-resolution",children:[{value:"Prerequisites:",id:"prerequisites",children:[]}]},{value:"Enabling Conflict Resolution",id:"enabling-conflict-resolution",children:[{value:"Version Based Conflict Resolution",id:"version-based-conflict-resolution",children:[]}]},{value:"Implementing Custom Conflict Resolution",id:"implementing-custom-conflict-resolution",children:[]},{value:"Conflict Resolution Specification for other languages",id:"conflict-resolution-specification-for-other-languages",children:[{value:"Structure of the conflict error",id:"structure-of-the-conflict-error",children:[]}]}],u={rightToc:a};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When performing data synchronization between multiple clients it is common for remote devices to become offline for a certain amount of time. As a result of being offline, data that is modified by a client can become outdated with the server. Further operations on that record can cause a conflict (often called a collision)."),Object(c.b)("p",null,"Offix provides out of the box conflict resolution for any Node.JS platform.\nFor other languages, you can follow the conflict specification chapter to implement a custom detection mechanism for your resolvers."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Install the conflict package inside your Node.js project."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install offix-conflicts-server\n")),Object(c.b)("h2",{id:"conflict-resolution"},"Conflict Resolution"),Object(c.b)("h3",{id:"prerequisites"},"Prerequisites:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"GraphQL server with resolvers"),Object(c.b)("li",{parentName:"ul"},"Database or any other form of data storage that can cause data conflicts")),Object(c.b)("h2",{id:"enabling-conflict-resolution"},"Enabling Conflict Resolution"),Object(c.b)("p",null,"To enable conflict resolution developers need to use one of the pluggable conflict implementations in each individual resolver."),Object(c.b)("h3",{id:"version-based-conflict-resolution"},"Version Based Conflict Resolution"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Add conflict package dependency to project")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const { conflictHandler } = require('offix-conflicts-server');\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Add version field to GraphQL type that should support conflict resolution")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Greeting {\n  msg: String\n  version: Int\n}\n")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Add example mutations")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Mutation {\n  changeGreeting(msg: String!, version: Int!): Greeting\n}\n")),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Implement resolver for mutation")),Object(c.b)("p",null,"Every conflict can be handled using a set of predefined steps"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"// 1. Read data from data source\n// 2. Check for conflicts\nconst conflict = conflictHandler.checkForConflicts(serverData, clientData);\nif (conflict) {\n  throw conflict;\n}\n// 5. Save object to data source\n")),Object(c.b)("p",null,"Resolvers can be implemented to handle conflicts on client ."),Object(c.b)("h2",{id:"implementing-custom-conflict-resolution"},"Implementing Custom Conflict Resolution"),Object(c.b)("p",null,"The",Object(c.b)("inlineCode",{parentName:"p"},"ObjectState")," interface is a complete conflict resolution implementation that provides a set of rules to detect and handle conflicts. The interface will allow developers to handle conflicts on the client. Client-side applications will need to match the server side implementation. Currently, we support the following implementations:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"VersionObjectState")," - allows to operate based on version field in schema"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"HashObjectState")," - allows to operate based on object hashes")),Object(c.b)("h2",{id:"conflict-resolution-specification-for-other-languages"},"Conflict Resolution Specification for other languages"),Object(c.b)("p",null,"The conflict resolution package can be replicated to any language by implementing conflict detection logic in resolvers."),Object(c.b)("p",null,"Conflict detection should return a specific format of error when a conflict has been detected. This error will be processed by offix-client and sent back again as a new mutation. To detect conflicts on the server\nyou can use one of many strategies, for example:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Calculate hashes of the data"),Object(c.b)("li",{parentName:"ul"},"Use specialized field like version or lastChangedDate"),Object(c.b)("li",{parentName:"ul"},"Have separate storage with history of the changes")),Object(c.b)("h3",{id:"structure-of-the-conflict-error"},"Structure of the conflict error"),Object(c.b)("p",null,"The server needs to return a specific error when a conflict is detected\ncontaining both the server and client states:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),' "extensions": {\n        "code": "INTERNAL_SERVER_ERROR",\n        "exception": {\n          "conflictInfo": {\n            "serverState": {\n                 //..\n            },\n            "clientState": {\n              //..\n            }\n          },\n        }\n }\n')))}s.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},f=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||c;return n?o.a.createElement(d,l({ref:t},u,{components:n})):o.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},226:function(e,t,n){"use strict";e.exports=n(227)},227:function(e,t,n){"use strict";var r=n(228),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,r(S,O.prototype),S.isPureReactComponent=!0;var C={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return{$$typeof:c,type:e,key:i,ref:l,props:o,_owner:C.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var N=/\/+/g,P=[];function _(e,t,n,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,n){return null==e?0:function e(t,n,r,o){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var a=!1;if(null===t)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case c:case i:a=!0}}if(a)return r(o,t,""===n?"."+I(t,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+I(l=t[u],u);a+=e(l,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(l=t.next()).done;)a+=e(l=l.value,s=n+I(l,u++),r,o);else if("object"===l)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return a}(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var c="";null!=n&&(c=(""+n).replace(N,"$&/")+"/"),T(e,D,t=_(t,c,r,o)),$(t)}var U={current:null};function F(){var e=U.current;if(null===e)throw Error(y(321));return e}var M={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;T(e,A,t=_(null,null,t,n)),$(t)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(y(143));return e}},t.Component=O,t.Fragment=l,t.Profiler=u,t.PureComponent=w,t.StrictMode=a,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,l=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,a=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)x.call(t,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];o.children=u}return{$$typeof:c,type:e.type,key:i,ref:l,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},228:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,a=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(a[s]=n[s]);if(r){l=r(n);for(var f=0;f<l.length;f++)c.call(n,l[f])&&(a[l[f]]=n[l[f]])}}return a}}}]);