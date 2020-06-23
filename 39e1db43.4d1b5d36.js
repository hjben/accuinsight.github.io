(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{149:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return b}));var n=t(1),o=t(6),i=(t(0),t(365)),p={title:"query"},a={id:"pipeline/workflow/workspace/job-processing/query",title:"query",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/query.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/query",sidebar:"pipeline",previous:{title:"python",permalink:"/docs/pipeline/workflow/workspace/job-processing/python"},next:{title:"rScript",permalink:"/docs/pipeline/workflow/workspace/job-processing/r-script"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"RDBMS\uc5d0 JDBC\ubc29\uc2dd\uc73c\ub85c \uc811\uc18d\ud558\uc5ec \ucffc\ub9ac\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[query]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/query01_property.png",alt:"flow060"}))),Object(i.b)("p",null,"property \uc911 2~4 \ud56d\ubaa9\uc740 ","[\uc5f0\uacb0\uad00\ub9ac]","\uc5d0 \ub4f1\ub85d\ub41c JDBC \uc815\ubcf4 \uc120\ud0dd \uc2dc \uc790\ub3d9\uc73c\ub85c \uc785\ub825\ub418\uba70, \uc6d0\ud558\ub294 JDBC \ubaa9\ub85d\uc774 \uc5c6\uc744 \uacbd\uc6b0 ","[\uc124\uc815]"," > ","[JDBC \uad00\ub9ac]","\uc5d0\uc11c \ud544\uc694 JDBC\ub97c \uba3c\uc800 \ub4f1\ub85d\ud569\ub2c8\ub2e4.\n","[\uc5f0\uacb0\ud14c\uc2a4\ud2b8]"," \uc544\uc774\ucf58\uc744 \uc120\ud0dd\ud558\uc5ec JDBC \uc5f0\uacb0\uc124\uc815 \ud14c\uc2a4\ud2b8\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"query : \uc2e4\ud589\ud560 Query \uc785\ub825",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"[Query Editor]","\ub97c \uc120\ud0dd\ud574\uc11c \ud31d\uc5c5\ub41c editor\ub97c \ud1b5\ud574 \ucf54\ub529 \uac00\ub2a5"))),Object(i.b)("li",{parentName:"ol"},"username : ","[\uc124\uc815]"," > ","[JDBC \uad00\ub9ac]","\uc5d0 \uc800\uc7a5\ub41c JDBC \uc0ac\uc6a9\uc790ID"),Object(i.b)("li",{parentName:"ol"},"password : ","[\uc124\uc815]"," > ","[JDBC \uad00\ub9ac]","\uc5d0 \uc800\uc7a5\ub41c JDBC \uc0ac\uc6a9\uc790 \ube44\ubc00\ubc88\ud638"),Object(i.b)("li",{parentName:"ol"},"jdbcUrl : ","[\uc124\uc815]"," > ","[JDBC \uad00\ub9ac]","\uc5d0 \uc800\uc7a5\ub41c JDBC URL\uc815\ubcf4"),Object(i.b)("li",{parentName:"ol"},"variables",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"variable : \ubcc0\uc218 \uba85"),Object(i.b)("li",{parentName:"ul"},"value : \ubcc0\uc218\uc5d0 \ud560\ub2f9\ud560 \uac12"))),Object(i.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"Maria DB\uc5d0 \uc811\uc18d \ud6c4 user \uc815\ubcf4\ub97c \ud655\uc778\ud558\ub294 \ucffc\ub9ac\ub97c \uc218\ud589\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4. ","[\uc124\uc815]"," > ","[JDBC \uad00\ub9ac]","\uc5d0 \ub4f1\ub85d\ub41c \uc811\uc18d\uc815\ubcf4\ub97c ","[\uc5f0\uacb0\uad00\ub9ac]"," > ","[\ubaa9\ub85d\uc5f4\uae30]","\ub97c \ud1b5\ud574 \uc120\ud0dd\ud569\ub2c8\ub2e4. JDBC \uad00\ub9ac\uc5d0 \ub4f1\ub85d\ud55c \uc815\ubcf4\uac00 \uc5c6\uc744 \uacbd\uc6b0 ","[\ubaa9\ub85d\uc5f4\uae30]"," \ub0b4 ","[\uc2e0\uaddc\uc0dd\uc131]","\ubc84\ud2bc\uc744 \ud1b5\ud574 jdbc \uc815\ubcf4\ub97c \uc0c8\ub86d\uac8c \uc785\ub825/\uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/query02_property.png",alt:"flow055"}))))}b.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return O}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},u=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(t),f=n,O=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return t?o.a.createElement(O,a({ref:r},l,{components:t})):o.a.createElement(O,a({ref:r},l))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,p[1]=a;for(var l=2;l<i;l++)p[l]=t[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);