(self.webpackChunk=self.webpackChunk||[]).push([[784],{3905:(e,t,o)=>{"use strict";o.d(t,{Zo:()=>d,kt:()=>u});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(o),u=a,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||r;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},88246:(e,t,o)=>{"use strict";o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>d,default:()=>h});var n=o(22122),a=o(19756),r=(o(67294),o(3905)),i=["components"],l={id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host (PH)"},s=void 0,c={unversionedId:"learn-polkadot-host",id:"learn-polkadot-host",isDocsHomePage:!1,title:"Polkadot Host (PH)",description:"The architecture of Polkadot can be divided into two different parts, the Polkadot runtime and the",source:"@site/../docs/learn-polkadot-host.md",sourceDirName:".",slug:"/learn-polkadot-host",permalink:"/docs/learn-polkadot-host",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-polkadot-host.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626453756,formattedLastUpdatedAt:"7/16/2021",frontMatter:{id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host (PH)"},sidebar:"docs",previous:{title:"Transaction Fees",permalink:"/docs/learn-transaction-fees"},next:{title:"Treasury",permalink:"/docs/learn-treasury"}},d=[{value:"Components of the Polkadot host",id:"components-of-the-polkadot-host",children:[]},{value:"Diagram",id:"diagram",children:[]},{value:"Resources",id:"resources",children:[]}],p={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The architecture of Polkadot can be divided into two different parts, the Polkadot ",(0,r.kt)("em",{parentName:"p"},"runtime")," and the\nPolkadot ",(0,r.kt)("em",{parentName:"p"},"host"),". The Polkadot runtime is the core state transition logic of the chain and can be\nupgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot\nhost is the environment in which the runtime executes and is expected to remain stable and mostly\nstatic over the lifetime of Polkadot."),(0,r.kt)("p",null,"The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this\nreason, implementation teams can build an alternative implementation of the Polkadot host while\ntreating the Polkadot runtime as a black box. For more details of the interactions between the host\nand the runtime, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-spec/"},"specification"),"."),(0,r.kt)("h2",{id:"components-of-the-polkadot-host"},"Components of the Polkadot host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networking components such as Libp2p that facilitates network interactions."),(0,r.kt)("li",{parentName:"ul"},"State storage and the storage trie along with the database layer."),(0,r.kt)("li",{parentName:"ul"},"Consensus engine for GRANDPA and BABE."),(0,r.kt)("li",{parentName:"ul"},"Wasm interpreter and virtual machine."),(0,r.kt)("li",{parentName:"ul"},"Low level primitives for a blockchain, such as cryptographic primitives like hash functions.")),(0,r.kt)("p",null,"A compiled Polkadot runtime, a blob of Wasm code, can be uploaded into the Polkadot host and used as\nthe logic for the execution of state transitions. Without a runtime, the Polkadot host is unable to\nmake state transitions or produce any blocks."),(0,r.kt)("h2",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,"Below is a diagram that displays the Polkadot host surrounding the Polkadot runtime. Think of the\nruntime (in white) as a component that can be inserted, swapped out, or removed entirely. While the\nparts in grey are stable and can not change without an explicit hard fork."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot host",src:o(46806).Z})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot Host Protocol Specification")," - Incubator for the\nPolkadot Host spec, including tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafeSystems/go-pre"},"ChainSafe's Go PH")," is a 25-person development team\nbased in Toronto, Canada. ChainSafe is building an implementation of the beacon chain for Ethereum\n2.0 client in TypeScript and this Go implementation of Polkadot.")))}h.isMDXComponent=!0},46806:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o.p+"assets/images/updated_pre-d5849e650527f0dc796f8cad044d1f35.png"}}]);