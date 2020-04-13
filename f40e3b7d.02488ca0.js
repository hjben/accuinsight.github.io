(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{210:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return d}));var n=r(1),o=r(6),a=(r(0),r(218)),c={title:"customCode"},p={id:"batchpipeline/workflow/workspace/data-processing-advanced/custom-code",title:"customCode",description:"## customCode",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-advanced/custom-code.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-advanced/custom-code",sidebar:"batchpipeline",previous:{title:"convertDate",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-advanced/convert-date"},next:{title:"dropNaCol",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-advanced/drop-na-col"}},i=[{value:"customCode",id:"customcode",children:[]}],l={rightToc:i};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"customcode"},"customCode"),Object(a.b)("p",null,"PySpark\uc758 DataFrame \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc815\uc758 \ucf54\ub4dc\ub97c \uc785\ub825 \ud560 \uc218 \uc788\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[customCode]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv009_customcode_workflow.png",alt:"preadv009"}))),Object(a.b)("p",null,"dataset \ubcc0\uacbd \uac00\ub2a5 (1\uc904 \uc785\ub825\ub9cc \uac00\ub2a5)\nex. withColumn('temp_filled_spark', filled_column)"),Object(a.b)("p",null,"code\tPySpark\uc758 DataFrame \ud568\uc218 1\uc904 \uc785\ub825\noverwriteSchema\t\uc2e4\ud589 \uacb0\uacfc\uc5d0 \ub300\ud55c \ub370\uc774\ud130 \uc2a4\ud0a4\ub9c8 \uc800\uc7a5 \uc5ec\ubd80"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"code : Dataframe\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud568\uc218\uac00 \ud3ec\ud568\ub41c \ucf54\ub4dc(filter(), drop(), limit() \ub4f1) \uc791\uc131"),Object(a.b)("li",{parentName:"ol"},"variableName : \ubcc0\uc218\uba85 \uc785\ub825"),Object(a.b)("li",{parentName:"ol"},"variableType : \ubcc0\uc218\ud0c0\uc785 \uc785\ub825"),Object(a.b)("li",{parentName:"ol"},"overwriteSchema : \uc2e4\ud589\uacb0\uacfc\uc5d0 \ub300\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uc7ac\uc815\uc758(\uccb4\ud06c\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc774\uc804 \uc2a4\ud0a4\ub9c8\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud568)"),Object(a.b)("li",{parentName:"ol"},"newSchema")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv010_customcode_property.png",alt:"preadv010"}))))}d.isMDXComponent=!0},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||s[b]||a;return r?o.a.createElement(m,p({ref:t},l,{components:r})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);