(self.webpackChunkca_docs=self.webpackChunkca_docs||[]).push([[62],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2969:function(e,t,n){"use strict";n.d(t,{y:function(){return a}});var r=n(7294),a=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)}},1007:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(2969),{sidebar_position:2}),c={unversionedId:"backtest/exchange_fee",id:"backtest/exchange_fee",isDocsHomePage:!1,title:"\u624b\u7e8c\u8cbb",description:"\u56de\u6e2c\u8a02\u55ae\u6210\u4ea4\u624b\u7e8c\u8cbb \u4e0d\u6703\u56e0\u4ea4\u6613\u6240\u4e0d\u540c\u800c\u6539\u8b8a",source:"@site/i18n/zh-tw/docusaurus-plugin-content-docs/current/backtest/exchange_fee.mdx",sourceDirName:"backtest",slug:"/backtest/exchange_fee",permalink:"/public/docs/backtest/exchange_fee",editUrl:"https://github.com/Crypto-Arsenal/public/edit/master/docs/backtest/exchange_fee.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u5ff5",permalink:"/public/docs/backtest/concept"},next:{title:"\u7e3e\u6548\u8a08\u7b97",permalink:"/public/docs/backtest/performance"}},l=[{value:"\u624b\u7e8c\u8cbb\u512a\u5148\u9806\u5e8f",id:"\u624b\u7e8c\u8cbb\u512a\u5148\u9806\u5e8f",children:[]},{value:"\u652f\u4ed8\u5e63\u5225\u512a\u5148\u9806\u5e8f",id:"\u652f\u4ed8\u5e63\u5225\u512a\u5148\u9806\u5e8f",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u56de\u6e2c\u8a02\u55ae\u6210\u4ea4\u624b\u7e8c\u8cbb \u4e0d\u6703\u56e0\u4ea4\u6613\u6240\u4e0d\u540c\u800c\u6539\u8b8a"))),(0,o.kt)("h3",{id:"\u624b\u7e8c\u8cbb\u512a\u5148\u9806\u5e8f"},"\u624b\u7e8c\u8cbb\u512a\u5148\u9806\u5e8f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u8b80\u53d6 ",(0,o.kt)("a",{parentName:"p",href:"/docs/strategy/python#%E5%AD%98%E5%8F%96%E7%AD%96%E7%95%A5%E5%8F%83%E6%95%B8"},"\u7b56\u7565 option")," ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange_fee")," \u4f86\u8a08\u7b97")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9810\u8a2d\u7528 0.001 \u8a08\u7b97"))),(0,o.kt)("h3",{id:"\u652f\u4ed8\u5e63\u5225\u512a\u5148\u9806\u5e8f"},"\u652f\u4ed8\u5e63\u5225\u512a\u5148\u9806\u5e8f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8cb7\u5165\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"target currency")," \u652f\u4ed8 / \u8ce3\u51fa\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"base currency")," \u652f\u4ed8")))}p.isMDXComponent=!0}}]);