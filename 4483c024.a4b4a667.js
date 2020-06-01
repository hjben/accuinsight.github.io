(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),a=(r(0),r(329)),p={title:"pyspark"},l={id:"pipeline/workflow/workspace/job-processing/pyspark",title:"pyspark",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/pyspark.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/pyspark",sidebar:"pipeline",previous:{title:"mlTrain",permalink:"/docs/pipeline/workflow/workspace/job-processing/ml-train"},next:{title:"python",permalink:"/docs/pipeline/workflow/workspace/job-processing/python"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],i={rightToc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"definition"},"Definition"),Object(a.b)("p",null,'pyspark \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uc5ec \uc2e4\ud589\ud558\ub294 \ub178\ub4dc\uc774\ub2e4. property \ud328\ub110 "3.source"\uc5d0 pyspark \ucf54\ub4dc\ub97c \uc785\ub825\ud55c\ub2e4. Source Editor \ubc84\ud2bc("3.source" \uc6b0\uce21 \uccab \ubc88\uc9f8 \ubc84\ud2bc) \ud074\ub9ad \uc2dc Editor\uac00 \ud31d\uc5c5\ub418\uba70 \ubcf4\ub2e4 \ud070 \ud654\uba74\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4. \ub610\ud55c Jupyter \uc0ac\uc774\ud2b8 \ubc14\ub85c\uac00\uae30("3.source" \uc6b0\uce21 \ub450 \ubc88\uc9f8 \ubc84\ud2bc) \uc120\ud0dd\uc2dc Jupyter Notebook\uc774 \uc5f4\ub9ac\uba70, Notebook\uc5d0\uc11c interactive\ud558\uac8c \uc791\uc5c5\ud560 \uc218 \uc788\ub2e4.',Object(a.b)("br",{parentName:"p"}),"\n","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[pyspark]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(a.b)("h3",{id:"set"},"Set"),Object(a.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(a.b)("h4",{id:"property"},"property"),Object(a.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow015_pyspark_property.png",alt:"flow015"}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Node_description : \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825  ")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"version : spark \ubc84\uc804 \uc785\ub825(Spark2\uac00 \uace0\uc815\uac12\uc784)"),Object(a.b)("li",{parentName:"ol"},"appName : appName \uc785\ub825"),Object(a.b)("li",{parentName:"ol"},"source : \uc2e4\ud589\ud560 source code \uc785\ub825")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"[Source Editor]","\ub97c \uc120\ud0dd\ud574\uc11c \ud31d\uc5c5\ub41c editor\ub97c \ud1b5\ud574 \ucf54\ub529 \uac00\ub2a5"),Object(a.b)("li",{parentName:"ul"},"[Jupyter \ubc14\ub85c\uac00\uae30]","\ub97c \uc120\ud0dd\ud574\uc11c jupyter notebook \uc0ac\uc6a9 \uac00\ub2a5 ")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(a.b)("li",{parentName:"ol"},"sparkOpts : \uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ud560 \uc18d\uc131 (key, value) \uc785\ub825"),Object(a.b)("li",{parentName:"ol"},"master : spark master \uc785\ub825 ( ex. yarn )"),Object(a.b)("li",{parentName:"ol"},"mode : mode \uc785\ub825 ( ex. client )"),Object(a.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("p",null,"\uc785\ub825\ubc1b\uc740 \uc22b\uc790\uc758 \ud3c9\uade0\uc744 \uad6c\ud574 output.txt\ud30c\uc77c\uc744 \uc0dd\uc131\ud558\ub294 \uc608\uc81c\uc774\ub2e4. "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"property \ud328\ub110\uc758 3.source \uc635\uc158\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825\ud55c\ub2e4. ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'"""\n>>> from pyspark.context import SparkContext\n>>> sc = SparkContext(\'local\', \'test\')\n>>> b = sc.parallelize([1, 2, 3, 4])\n>>> basicAvg(b)\n2.5\n"""\n\nimport sys\nsys.stdout = open(\'output.txt\',\'w\')\n\nfrom pyspark import SparkContext\n\n\ndef basicAvg(nums):\n    """Compute the avg"""\n    sumCount = nums.map(lambda x: (x, 1)).fold(\n        (0, 0), (lambda x, y: (x[0] + y[0], x[1] + y[1])))\n    return sumCount[0] / float(sumCount[1])\n\nif __name__ == "__main__":\n    master = "local"\n    if len(sys.argv) == 2:\n        master = sys.argv[1]\n    sc = SparkContext(master, "Sum")\n    nums = sc.parallelize([1, 2, 3, 4])\n    avg = basicAvg(nums)\n    print (avg)\n')),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow071_pyspark_coding%EB%82%B4%EC%97%AD.png",alt:"flow071"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc800\uc7a5/\uc2e4\ud589\uc2dc \uc544\ub798\uc640 \uac19\uc774 output.txt\ud30c\uc77c\uc774 \uc0dd\uc131\ub41c\ub2e4. ")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow072_pyspark_%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"flow072"}))," "),Object(a.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"pyspark node \uc2e4\ud589\uc2dc ","[\uc2e4\ud589\ud560 \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc8fc\ud53c\ud130 \ub178\ud2b8\ubd81\uc774 \uc5c6\uc2b5\ub2c8\ub2e4]"," \uba54\uc2dc\uc9c0")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pyspark node\ub97c \uc2e4\ud589\ud558\ub294 \ud074\ub7ec\uc2a4\ud130\uc5d0 jupyter-notebook \ucee8\ud14c\uc774\ub108\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 ","[\uc778\uc2a4\ud134\uc2a4 \uc0c1\uc138]"," > ","[\ud750\ub984]"," \ud0ed \ud558\ub2e8\uc758 STD \ub85c\uadf8\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc5d0\ub7ec\uba54\uc2dc\uc9c0 \uae30\ub85d\ub428")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'java.io.IOException: Cannot run program "/usr/local/bin/python3.6": error=2, No such file or directory'),Object(a.b)("li",{parentName:"ul"},"run_spark2.sh PYSPARK_PYTHON \uc2e4\ud589\uacbd\ub85c \ubcc0\uacbd ")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"# export PYSPARK_PYTHON=/usr/local/bin/python3.6 \nexport PYSPARK_PYTHON=/opt/conda/bin/python3.6\n")))}b.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,O=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return r?o.a.createElement(O,l({ref:t},i,{components:r})):o.a.createElement(O,l({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);