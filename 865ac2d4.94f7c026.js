(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{210:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(1),o=r(6),a=(r(0),r(331)),c={title:"ssh"},l={id:"batchpipeline/workflow/workspace/job-processing/ssh",title:"ssh",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/ssh.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/ssh",sidebar:"batchpipeline",previous:{title:"sqoop",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/sqoop"},next:{title:"subWorkflow",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/sub-workflow"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:p};function i(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,"\uc6d0\uaca9 host\uc5d0 ssh \uba85\ub839\uc5b4 \uc2e4\ud589\uc2dc \uc0ac\uc6a9\ud55c\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[sqoop]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(a.b)("h4",{id:"property"},"property"),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow023_ssh_property.png",alt:"flow023"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"captionOutput : captureOutput \uc5ec\ubd80 \uc120\ud0dd"),Object(a.b)("li",{parentName:"ol"},"host : ssh host \uc785\ub825 (ex. user@host.com)"),Object(a.b)("li",{parentName:"ol"},"command : \uc2e4\ud589\ud560 command \uc785\ub825 ( ex. ls )"),Object(a.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(a.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130 Name Node\uc5d0 \uc704\uce58\ud55c shell\uc744 \uc2e4\ud589\ud55c\ub2e4. shell \uc704\uce58\ub294 dpcore \uacc4\uc815 \ud648\ub514\ub809\ud1a0\ub9ac(/home/dpcore/air.sh)\uba70, \ub3d9\uc77c \uc704\uce58\uc5d0 air.sh\uc5d0\uc11c \uc804\ucc98\ub9ac\ud560 csv\ud30c\uc77c(AIR_HOUR_2019_noh.csv)\ub3c4 \uc788\ub2e4.",Object(a.b)("br",{parentName:"p"}),"\n","air.sh\uc758 \ub0b4\uc6a9\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4. "),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'awk -F"[,]" \'$2 == "103" { print $0 }\' ~dpcore/AIR_HOUR_2019_noh.csv > air_pollution_yongsan.csv\n\n1> AIR_HOUR_2019_noh.csv \ud30c\uc77c\uc5d0\uc11c \ub450\ubc88\uc9f8 \ud544\ub4dc\uac12\uc774 103\uc778 \ub808\ucf54\ub4dc\ub97c air_pollution_yongsan.csv\ub77c\ub294 \ud30c\uc77c\ub85c \ucd94\ucd9c\n2> AIR_HOUR_2019_noh.csv \ud30c\uc77c\uc740 fork/join \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud55c "\uc11c\uc6b8\uc2dc \ub300\uae30\uc624\uc5fc \uc815\ubcf4" \ub370\uc774\ud130\uc784\n- station_cd(\uad00\uce21\uc18c\ucf54\ub4dc)\uac00 103\uc740 \uc6a9\uc0b0\uc5d0 \uc704\uce58\ud55c \uad00\uce21\uc18c\uc5d0\uc11c \uce21\uc815\ud55c \ub370\uc774\ud130\ub97c \uc758\ubbf8\n')),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"kbtest \ud074\ub7ec\uc2a4\ud130\uc5d0 \uac80\uc0ac\ub300\uc0c1 \ud30c\uc77c(/home/dpcore/AIR_HOUR_2019_noh.csv)\uacfc shell(/home/dpcore/air.sh)\uc744 \uc801\uc7ac\ud55c\ub2e4. "),Object(a.b)("li",{parentName:"ol"},"[ssh]"," \ub178\ub4dc drag & drop \ud6c4 \uc544\ub798\uc640 \uac19\uc774 property \uac12\uc744 \uc124\uc815\ud55c\ub2e4.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[setting]"," \ud328\ub110\uc5d0\uc11c \uc2e4\ud589\ub300\uc0c1 \ud074\ub7ec\uc2a4\ud130\ub97c kbtest\ub85c \uc124\uc815 "),Object(a.b)("li",{parentName:"ul"},"[property]"," \ud328\ub110\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \uc124\uc815",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"2.host : dpcore@kbtest-accu-hdfs-nn "),Object(a.b)("li",{parentName:"ul"},"3.command : sh air.sh")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"[Note]"," ssh password-less"),Object(a.b)("br",{parentName:"p"}),"\n","ssh \ub178\ub4dc \uc2e4\ud589\uc744 \uc704\ud574 ssh password-less \uc124\uc815\uc774 \ud544\uc694\ud558\ub2e4.  "),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},'server : ssh \uc811\uc18d\ub300\uc0c1 host (example\uc5d0\uc11c "2.host"\uc5d0 \uc785\ub825\ub418\ub294 \uc11c\ubc84/\uacc4\uc815)  '),Object(a.b)("li",{parentName:"ul"},"client : ssh \ub178\ub4dc\uac00 \uc2e4\ud589\ub418\ub294 host (oozie\ub97c \uad6c\ub3d9\ud558\ub294 eco node)  "),Object(a.b)("li",{parentName:"ul"},"client\uc758 oozie, dpcore \uacc4\uc815 \ub300\uc0c1\uc73c\ub85c password-less \uc124\uc815   "))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"[Note]"," ssh vs shell"),Object(a.b)("br",{parentName:"p"}),"\n","shell command\ub97c \uc2e4\ud589\uc2dc\ud0a8\ub2e4\ub294 \uc810\uc5d0\uc11c shell \ub178\ub4dc\uc640 \uc131\uaca9\uc774 \uc720\uc0ac\ud558\ub098 \uc544\ub798\uc640 \uac19\uc740 \ucc28\uc774\uac00 \uc788\ub2e4.  "),Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"shell : \uc2e4\ud589\ud558\uace0\uc790 \ud558\ub294 shell\uc744 hdfs\uc5d0 \uc801\uc7ac\ud574\uc57c \ud558\ubbc0\ub85c, shell \uba85\ub839\uc744 \uc2e4\ud589\ud558\ub294  \ub178\ub4dc\ub294 random\ud558\uac8c \uc9c0\uc815\ub41c\ub2e4.  "),Object(a.b)("li",{parentName:"ul"},"ssh : shell\uc744 \uc218\ud589\ud558\ub294 \ub178\ub4dc\ub97c \uc784\uc758\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4. ssh \ub178\ub4dc \uc2e4\ud589\uc744 \uc704\ud574\uc11c password-less \uc124\uc815\uc774 \ud544\uc694\ud558\ub2e4.  "))))}i.isMDXComponent=!0},331:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),i=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=i(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=i(r),m=n,O=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(O,l({ref:t},s,{components:r})):o.a.createElement(O,l({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);