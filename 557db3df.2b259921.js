(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),i=(r(0),r(331)),a={title:"hiveToHdfs"},p={id:"pipeline/workflow/workspace/job-processing/hive-to-hdfs",title:"hiveToHdfs",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/hive-to-hdfs.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/hive-to-hdfs",sidebar:"pipeline",previous:{title:"hdfsToServer",permalink:"/docs/pipeline/workflow/workspace/job-processing/hdfs-to-server"},next:{title:"hive",permalink:"/docs/pipeline/workflow/workspace/job-processing/hive"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\uc6d0\uaca9\uc5d0 \uc788\ub294 Hive \ud14c\uc774\ube14 \ub370\uc774\ud130\ub97c HDFS\ub85c \uac00\uc838\uc62c \uc218 \uc788\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hiveToHdfs]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow009_hivetohdfs_property.png",alt:"flow009"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc0ad\uc81c/\ud3f4\ub354\uc0dd\uc131 \uc791\uc5c5 \uc120 \uc218\ud589(\uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc18\ubcf5\uc2e4\ud589 \uc2dc \ud65c\uc6a9\uac00\ub2a5)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"delete : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 \ud3f4\ub354/\ud30c\uc77c \uacbd\ub85c"),Object(i.b)("li",{parentName:"ul"},"mkdir\t: \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(i.b)("li",{parentName:"ol"},"cluster : Hive\ub97c \uc218\ud589\ud560 \ud074\ub7ec\uc2a4\ud130(\uc9c1\uc811 \uc785\ub825 \uc120\ud0dd\uc2dc 3,4,5 \uc815\ubcf4 \uc9c1\uc811 \uc785\ub825)"),Object(i.b)("li",{parentName:"ol"},"url : HIVE \uc811\uc18d \uc8fc\uc18c(JDBC URL). jdbc:hive2://hdp-master01:10000"),Object(i.b)("li",{parentName:"ol"},"user\t: Hive \uc0ac\uc6a9\uc790 \uc774\ub984\t"),Object(i.b)("li",{parentName:"ol"},"password\t: Hive \uc0ac\uc6a9\uc790 \uc554\ud638"),Object(i.b)("li",{parentName:"ol"},"path : \uacb0\uacfc\ubb3c\uc744 \uc800\uc7a5\ud560 HDFS \uacbd\ub85c"),Object(i.b)("li",{parentName:"ol"},"filename\t: \uc800\uc7a5\ud560 \ud30c\uc77c \uc774\ub984"),Object(i.b)("li",{parentName:"ol"},"header : \uceec\ub7fc \uba85 \ud5e4\ub354 \ud3ec\ud568 \uc720\ubb34",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uccb4\ud06c\ubc15\uc2a4 \uc120\ud0dd : \uceec\ub7fc\uc815\ubcf4 \ud3ec\ud568"),Object(i.b)("li",{parentName:"ul"},"\uccb4\ud06c\ubc15\uc2a4 \ud574\uc81c : \uceec\ub7fc\uc815\ubcf4 \ubbf8\ud3ec\ud568"))),Object(i.b)("li",{parentName:"ol"},"overwrite : HDFS\uc5d0 \ud574\ub2f9 \ud30c\uc77c\uc774 \uc874\uc7ac\ud560\uacbd\uc6b0 overwrite/append \uc5ec\ubd80",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\uccb4\ud06c\ubc15\uc2a4 \uc120\ud0dd : overwrite \uc218\ud589(\ud574\ub2f9 \ud30c\uc77c \ub36e\uc5b4\uc4f0\uae30)"),Object(i.b)("li",{parentName:"ul"},"\uccb4\ud06c\ubc15\uc2a4 \ud574\uc81c : append \uc218\ud589(\ud574\ub2f9 \ud30c\uc77c\uc5d0 \ub0b4\uc6a9 append)"))),Object(i.b)("li",{parentName:"ol"},"delimiter : HDFS\uc5d0 \uc800\uc7a5\ud560 \uacb0\uacfc\ubb3c \ud30c\uc77c\uc758 \uad6c\ubd84\uc790"),Object(i.b)("li",{parentName:"ol"},"sql : \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud55c SQL \uc785\ub825(SELECT \ucffc\ub9ac \uc0ac\uc6a9)"),Object(i.b)("li",{parentName:"ol"},"version : Hive \ubc84\uc804(1.2.1, 3.1.1 \uc911 \ud0dd1)"),Object(i.b)("li",{parentName:"ol"},"retry",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"max : \uc2e4\ud589 \uc2e4\ud328 \uc2dc \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(i.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uc8fc\uae30(\ubd84 \ub2e8\uc704)"))),Object(i.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130 hive\uc5d0 \uc800\uc7a5\ub41c iris \ud14c\uc774\ube14\uc744 \uc870\ud68c\ud558\uc5ec test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 result.csv \ud30c\uc77c\ub85c \uc800\uc7a5\ud55c\ub2e4. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[\ube0c\ub77c\uc6b0\uc800]"," > ","[HIVE]"," \uc5d0\uc11c kbtest \ud074\ub7ec\uc2a4\ud130 Hive \uacc4\uc815\uc758 iris \ud14c\uc774\ube14 \ub0b4\uc5ed\uc744 \ud655\uc778\ud55c\ub2e4. ")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow030_hivetohdfs_%EC%9B%90%EA%B2%A9hive%ED%85%8C%EC%9D%B4%EB%B8%94%EC%A0%95%EB%B3%B4.png",alt:"flow030"}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"setting, property \ud328\ub110\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud55c\ub2e4. "),Object(i.b)("p",{parentName:"li"},"\u2460 setting \ud328\ub110\uc5d0\uc11c ","[hiveToHdfs]"," \ub178\ub4dc\ub97c \uc2e4\ud589\ud560 \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd",Object(i.b)("br",{parentName:"p"}),"\n","\u2461 property \ud328\ub110\uc5d0\uc11c hive\uac00 \uc704\uce58\ud55c \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd",Object(i.b)("br",{parentName:"p"}),"\n","\u2462 path \uc785\ub825\ud56d\ubaa9\uc758 \ud30c\uc77c \ube0c\ub77c\uc6b0\uc800\ub97c \uc5f4\uc5b4\uc11c result.csv\ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uacbd\ub85c \uc120\ud0dd",Object(i.b)("br",{parentName:"p"}),"\n","\u2463 query \uc785\ub825  "))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow031_hivetohdfs_property%EC%83%81%EC%84%B8%EB%82%B4%EC%9A%A9.png",alt:"flow031"}))),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow032_hivetohdfs_property_%ED%8C%8C%EC%9D%BC%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%97%90%EC%84%9C%EC%A0%80%EC%9E%A5%EA%B2%BD%EB%A1%9C%EC%84%A4%EC%A0%95.png",alt:"flow032"}))),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc\ub294 \uc544\ub798\uc640 \uac19\ub2e4. ")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow033_hivetohdfs_%EC%B5%9C%EC%A2%85%EA%B2%B0%EA%B3%BC%ED%95%99%EC%9D%B8.png",alt:"flow033"}))))}b.isMDXComponent=!0},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,O=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return r?o.a.createElement(O,p({ref:t},c,{components:r})):o.a.createElement(O,p({ref:t},c))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);