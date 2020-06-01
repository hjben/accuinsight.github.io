(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(6),c=(r(0),r(329)),i={title:"filter"},l={id:"pipeline/workflow/workspace/data-processing-basic/filter",title:"filter",description:"## filter",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/filter.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/filter",sidebar:"pipeline",previous:{title:"fillna",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/fill-na"},next:{title:"isin",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/is-in"}},b=[{value:"filter",id:"filter",children:[]}],o={rightToc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"filter"},"filter"),Object(c.b)("p",null,"\uc6d0\ud558\ub294 \ub370\uc774\ud130\ub9cc \ubd88\ub7ec\uc624\uae30 \uc704\ud574 \ud544\ud130\ub9c1 \uc870\uac74\uc744 \uc124\uc815\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[filter]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic025_filter_workflow.png",alt:"prebasic025"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"filters : filtering \uc635\uc158\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"col : \ud544\ud130\ub9c1 \ub300\uc0c1 \uceec\ub7fc \uc120\ud0dd\ud55c\ub2e4. \ud655\uc778\ud574\uc57c \ud560 \uceec\ub7fc\uc774 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0 \uc88c\uce21 ","[+]","\ubc84\ud2bc\uc744 \uc120\ud0dd\ud55c\ub2e4. ")),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"filterOption"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"less than(<)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"less than or equal(<=)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"equal(=)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"not equal(!=)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"greater than or equal(>=)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"greater than(>)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contains")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"not contains")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"like")))),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'filterValue : \ud544\ud130 \uae30\uc900\uac12\uc744 \uc785\ub825\ud55c\ub2e4. \ubb38\uc790\uc5f4 \uc785\ub825\uc2dc \uc30d\ub530\uc634\ud45c("")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubb38\uc790\uc5f4\uc744 \uac10\uc2f8\uc918\uc57c \ud55c\ub2e4.'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"filterOperator : \ud544\ud130 \uc0ac\uc774\uc758 \uc870\uac74 \uc5f0\uc0b0\uc790\ub97c \uc120\ud0dd(AND, OR)\ud55c\ub2e4. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"useCustom : \uc0ac\uc6a9\uc790 \uc785\ub825 \uae30\ub2a5 \uc0ac\uc6a9 \uc2dc \uc120\ud0dd\ud55c\ub2e4. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"customCondition : \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\ub294 \uc870\uac74\uc2dd\uc744 \uc9c1\uc811 \uc785\ub825\ud55c\ub2e4. 1\ubc88 Property\ub85c \ud574\uacb0\ud560 \uc218 \uc5c6\ub294 \ubcf5\uc7a1\ud55c \uc870\uac74\uc758 \uacbd\uc6b0 \uc0ac\uc6a9\ud55c\ub2e4."))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic026_filter_property.png",alt:"prebasic026"}))),Object(c.b)("p",null,"\uc0ac\uc6a9\uc790\uc785\ub825 \uae30\ub2a5 \ud65c\uc6a9 \uc608\uc2dc\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic027_filter_property02.png",alt:"prebasic027"}))))}p.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(r),O=n,m=s["".concat(i,".").concat(O)]||s[O]||u[O]||c;return r?a.a.createElement(m,l({ref:t},o,{components:r})):a.a.createElement(m,l({ref:t},o))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=O;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<c;o++)i[o]=r[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);