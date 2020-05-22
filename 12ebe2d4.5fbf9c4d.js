(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(1),i=t(11),o=(t(0),t(225)),r={id:"react",title:"React - using Offix Hooks",sidebar_label:"React"},l={id:"version-0.14.0/react",title:"React - using Offix Hooks",description:"`ApolloOfflineClient` is compatible with all of the official [Apollo React Hooks](https://www.apollographql.com/docs/react/api/react-hooks/) such as `useQuery`, `useMutation` and `useSubscription`.",source:"@site/versioned_docs/version-0.14.0/ref-react-offix-hooks.md",permalink:"/docs/0.14.0/react",editUrl:"https://github.com/aerogear/offix/edit/master/website/versioned_docs/version-0.14.0/ref-react-offix-hooks.md",version:"0.14.0",sidebar_label:"React",sidebar:"version-0.14.0/docs",previous:{title:"Server Side Conflict Resolution",permalink:"/docs/0.14.0/conflict-server"},next:{title:"React Native",permalink:"/docs/0.14.0/react-native"}},c=[{value:"App Initialization",id:"app-initialization",children:[]},{value:"useOfflineMutation",id:"useofflinemutation",children:[{value:"State Properties",id:"state-properties",children:[]}]},{value:"useNetworkStatus",id:"usenetworkstatus",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ApolloOfflineClient")," is compatible with all of the official ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/react-hooks/"}),"Apollo React Hooks")," such as ",Object(o.b)("inlineCode",{parentName:"p"},"useQuery"),", ",Object(o.b)("inlineCode",{parentName:"p"},"useMutation")," and ",Object(o.b)("inlineCode",{parentName:"p"},"useSubscription"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"react-offix-hooks")," library provides an additional ",Object(o.b)("inlineCode",{parentName:"p"},"useOfflineMutation")," React hook for performing offline mutations."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," ",Object(o.b)("inlineCode",{parentName:"p"},"react-offix-hooks")," is experimental. Please try it and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/offix/issues/new/choose"}),"log any issues")," to help us improve it."),Object(o.b)("h2",{id:"app-initialization"},"App Initialization"),Object(o.b)("p",null,"In a normal React application that uses Apollo Client, the client is created at startup and the root component is wrapped with ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloProvider"),"."),Object(o.b)("p",null,"Because ",Object(o.b)("inlineCode",{parentName:"p"},"client.init()")," needs to be called and this is an asynchronous function call, an extra step is needed. The root ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloProvider")," also needs to be wrapped with ",Object(o.b)("inlineCode",{parentName:"p"},"ApolloOfflineProvider")," for the ",Object(o.b)("inlineCode",{parentName:"p"},"useOfflineMutation")," hook to work."),Object(o.b)("p",null,"Below is a boilerplate example that can be used."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import React, { useState, useEffect } from 'react'\nimport { render } from 'react-dom'\n\nimport { ApolloOfflineClient } from 'offix-client'\nimport { ApolloOfflineProvider } from 'react-offix-hooks'\nimport { ApolloProvider } from '@apollo/react-hooks'\n\nconst client = new ApolloOfflineClient(clientConfig)\n\nconst App = () => {\n  const [initialized, setInitialized] = useState(false)\n\n  // initialize the offix client and set the apollo client\n  useEffect(() => {\n    client.init().then(() => setInitialized(true))\n  }, [])\n\n  if (initialized) {\n    return (\n      <ApolloOfflineProvider client={client}>\n        <ApolloProvider client={client}>\n          <MyRootComponent/>\n        </ApolloProvider>\n      </ApolloOfflineProvider>\n    )\n  }\n  return <h2>Loading...</h2>\n}\n\n\nrender(<App />, document.getElementById('root'))\n")),Object(o.b)("p",null,"In the example above, the following happens."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"An ",Object(o.b)("inlineCode",{parentName:"li"},"ApolloOfflineClient")," is created."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"useState()")," is used to set a boolean that will be ",Object(o.b)("inlineCode",{parentName:"li"},"true")," once the client is initialized."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"client.init()")," is called inside a ",Object(o.b)("inlineCode",{parentName:"li"},"useEffect")," call making sure the initialization happens only once."),Object(o.b)("li",{parentName:"ol"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"initialized")," is true, then the application is rendered including the ",Object(o.b)("inlineCode",{parentName:"li"},"ApolloOfflineProvider")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"ApolloProvider"),". Otherwise a loading screen is shown.")),Object(o.b)("h2",{id:"useofflinemutation"},"useOfflineMutation"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useOfflineMutation")," is similar to ",Object(o.b)("inlineCode",{parentName:"p"},"useMutation")," but it internally calls ",Object(o.b)("inlineCode",{parentName:"p"},"client.offlineMutate"),". ",Object(o.b)("inlineCode",{parentName:"p"},"useOfflineMutation")," will throw an offline error if the mutation was made while offline which needs to be handled in the client."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import gql from 'graphql-tag'\nimport { useOfflineMutation } from 'react-offix-hooks'\n\nconst ADD_MESSAGE_MUTATION = gql`\n  mutation addMessage($chatId: String!, $content: String!) {\n    addMessage(chatId: $chatId, content: $content)\n  }\n`\n\nfunction addMessageForm({ chatId }) {\n  const inputRef = useRef()\n\n  const [addMessage] = useOfflineMutation(ADD_MESSAGE_MUTATION)\n\n  async function handleSubmit() {\n    try {\n      await addMessage({\n        variables: {\n          chatId,\n          content: inputRef.current.value,\n        }\n      });\n    } catch(error) {\n      if (error.offline) {\n        error.watchOfflineChange();\n      }\n    }\n  }\n\n  return (\n    <form>\n      <input ref={inputRef} />\n      <button onClick={handleSubmit}>Send Message</button>\n    </form>\n  )\n}\n")),Object(o.b)("h3",{id:"state-properties"},"State Properties"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useOfflineMutation")," provides additional state that can be used to build UIs."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import gql from 'graphql-tag'\nimport { useOfflineMutation } from 'react-offix-hooks'\n\nconst ADD_MESSAGE_MUTATION = gql`\n  mutation addMessage($chatId: String!, $content: String!) {\n    addMessage(chatId: $chatId, content: $content)\n  }\n`\n\nfunction addMessageForm({ chatId }) {\n  const inputRef = useRef()\n\n  const [addMessage, state] = useOfflineMutation(ADD_MESSAGE_MUTATION, {\n    variables: {\n      chatId,\n      content: inputRef.current.value,\n    }\n  })\n\n  return (\n    <form>\n      <input ref={inputRef} />\n      <button onClick={addMessage}>Send Message</button>\n    </form>\n  )\n}\n")),Object(o.b)("p",null,"The following properties are available on the ",Object(o.b)("inlineCode",{parentName:"p"},"state")," returned from ",Object(o.b)("inlineCode",{parentName:"p"},"useOfflineMutation")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"called")," - true when the mutation was called."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"data")," - the result of the mutation."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"error")," - error returned from the mutation (not including offline errors)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hasError")," - true when an error occurred."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"loading")," - true when a mutation is in flight or when an offline mutation hasn't been fulfilled yet."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"calledWhileOffline")," - true when mutation was called while offline.")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ADD_TASK = gql`\nmutation createTask($description: String!, $title: String!, $status: TaskStatus){\n    createTask(description: $description, title: $title, status: $status){\n      id\n      title\n      description\n      version\n      status\n    }\n  }\n`;\n\nconst [addTask, {\n    called,\n    data,\n    error,\n    hasError,\n    loading,\n    calledWhileOffline,\n  }] = useOfflineMutation(ADD_TASK, {\n    variables: {\n      description,\n      title,\n      status: 'OPEN',\n      version: 1\n    },\n    updateQuery: GET_TASKS,\n    returnType: 'Task'\n  })\n")),Object(o.b)("p",null,"Before the mutation is called:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "called": false,\n  "hasError": false,\n  "loading": false,\n  "calledWhileOffline": false,\n}\n')),Object(o.b)("p",null,"After the mutation is called while online:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "called": true,\n  "data": {\n    "createTask": {\n      "id": "134",\n      "title": "created while online",\n      "description": "this is a description",\n      "version": 1,\n      "status": "OPEN",\n      "__typename": "Task"\n    }\n  },\n  "hasError": false,\n  "loading": false,\n  "calledWhileOffline": false,\n}\n')),Object(o.b)("h2",{id:"usenetworkstatus"},"useNetworkStatus"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"useNetworkStatus")," hook can be used to build components that render differently depending on the network state. The hook returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," when the network is online and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," when the network is offline. The hook uses a listener to return a new value when the network status changes."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"import React from 'react';\nimport { useNetworkStatus } from 'react-offix-hooks';\n\nexport default App = () => {\n  const isOnline = useNetworkStatus();\n  return <span>Network status: { isOnline }</span>;\n}\n")))}p.isMDXComponent=!0},225:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},u=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return t?i.a.createElement(f,l({ref:n},s,{components:t})):i.a.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);