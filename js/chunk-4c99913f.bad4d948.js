(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c99913f"],{2824:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"singer"},a={class:"singerInfo"},i=Object(r["createTextVNode"])("上一页"),o=Object(r["createTextVNode"])("下一页"),l={class:"singerdetail"},b={class:"top filter-item"},s=["onClick"],u={class:"center filter-item"},d=["onClick"],f={class:"bottom filter-item"},p=["onClick"];function O(e,t,n,O,j,m){var v=Object(r["resolveComponent"])("singer-item"),g=Object(r["resolveComponent"])("el-button");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("div",a,[Object(r["createVNode"])(v,{singer:O.Singer},null,8,["singer"]),Object(r["createVNode"])(g,{type:"primary",onClick:O.PreviousPage,disabled:0==e.parma.offset},{default:Object(r["withCtx"])((function(){return[i]})),_:1},8,["onClick","disabled"]),Object(r["createVNode"])(g,{type:"primary",onClick:O.NextPage},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["onClick"])]),Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",b,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(O.renderInitial,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("span",{key:n,class:Object(r["normalizeClass"])(n===e.initialIndex?"active":""),onClick:function(e){return O.selectType("initial",n)}},Object(r["toDisplayString"])(t.label),11,s)})),128))]),Object(r["createElementVNode"])("div",u,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.area,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("span",{key:n,class:Object(r["normalizeClass"])(n===e.areaIndex?"active":""),onClick:function(e){return O.selectType("area",n)}},Object(r["toDisplayString"])(t.label),11,d)})),128))]),Object(r["createElementVNode"])("div",f,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.type,(function(t,n){return Object(r["openBlock"])(),Object(r["createElementBlock"])("span",{key:n,class:Object(r["normalizeClass"])(n===e.typeIndex?"active":""),onClick:function(e){return O.selectType("type",n)}},Object(r["toDisplayString"])(t.label),11,p)})),128))])])])}var j=n("5530"),m=(n("99af"),n("5502")),v=(n("b0c0"),function(e){return Object(r["pushScopeId"])("data-v-a288bd4e"),e=e(),Object(r["popScopeId"])(),e}),g={class:"maix-box"},y=["onClick"],k={class:"item-img"},h={class:"item-info"},E={class:"name"},C={class:"details"},N=v((function(){return Object(r["createElementVNode"])("p",null,"专辑",-1)})),w=v((function(){return Object(r["createElementVNode"])("p",null,"单曲",-1)}));function x(e,t,n,c,a,i){var o=Object(r["resolveComponent"])("el-image");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",g,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.singer,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"item",key:t,onClick:function(t){return c.goSingerDetail(e.id)}},[Object(r["createElementVNode"])("div",k,[Object(r["createVNode"])(o,{style:{width:"100px",height:"100px"},src:e.picUrl},null,8,["src"])]),Object(r["createElementVNode"])("div",h,[Object(r["createElementVNode"])("div",E,[Object(r["createElementVNode"])("h2",null,Object(r["toDisplayString"])(e.name),1)]),Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("span",null,[N,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.albumSize),1)]),Object(r["createElementVNode"])("span",null,[w,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.musicSize),1)])])])],8,y)})),128))])}var S=n("6c02"),V={name:"SingerItem",props:{singer:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(S["d"])(),t=function(t){e.push({path:"/singer/detail",query:{id:t}})};return{goSingerDetail:t}}},B=(n("568c"),n("6b0d")),P=n.n(B);const I=P()(V,[["render",x],["__scopeId","data-v-a288bd4e"]]);var D=I,T=n("a1e9"),_=n("5c40"),z={name:"Singer",components:{singerItem:D},setup:function(){var e=Object(m["b"])(),t=Object(T["q"])({type:[{label:"全部",val:-1},{label:"男歌手",val:1},{label:"女歌手",val:2},{label:"乐队",val:3}],area:[{label:"全部",val:-1},{label:"华语",val:7},{label:"欧美",val:96},{label:"日本",val:8},{label:"韩国",val:16},{label:"其他",val:0}],initial:[{label:"热门",val:-1},{label:"#",val:0}],parma:{type:"-1",area:"-1",initial:"-1",limit:18,offset:0},list:[],typeIndex:0,areaIndex:0,initialIndex:0}),n=function(e,n){t[e+"Index"]=n,t.list=[],t.parma.offset=0,t.parma[e]=t[e][n].val,r()},r=function(){e.dispatch("getSinger",t.parma)},c=Object(_["q"])((function(){for(var e=[],n=0;n<26;n++)e.push({label:String.fromCharCode(65+n),val:String.fromCharCode(97+n)});return t.initial=[t.initial[0]].concat(e,[t.initial[1]])})),a=function(){t.parma.offset<=0||(t.parma.offset-=18,r())},i=function(){t.parma.offset+=18,r()},o=Object(_["q"])((function(){return e.state.singer.singer}));return Object(_["ob"])((function(){r()})),Object(j["a"])(Object(j["a"])({},Object(T["A"])(t)),{},{renderInitial:c,Singer:o,PreviousPage:a,selectType:n,NextPage:i})}};n("976c");const q=P()(z,[["render",O],["__scopeId","data-v-23a5d43c"]]);t["default"]=q},"4de4":function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").filter,a=n("1dde"),i=a("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"568c":function(e,t,n){"use strict";n("b597")},"976c":function(e,t,n){"use strict";n("f7d2")},"99af":function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),a=n("d039"),i=n("e8b5"),o=n("861d"),l=n("7b0b"),b=n("07fa"),s=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),O=f("isConcatSpreadable"),j=9007199254740991,m="Maximum allowed index exceeded",v=c.TypeError,g=p>=51||!a((function(){var e=[];return e[O]=!1,e.concat()[0]!==e})),y=d("concat"),k=function(e){if(!o(e))return!1;var t=e[O];return void 0!==t?!!t:i(e)},h=!g||!y;r({target:"Array",proto:!0,arity:1,forced:h},{concat:function(e){var t,n,r,c,a,i=l(this),o=u(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?i:arguments[t],k(a)){if(c=b(a),d+c>j)throw v(m);for(n=0;n<c;n++,d++)n in a&&s(o,d,a[n])}else{if(d>=j)throw v(m);s(o,d++,a)}return o.length=d,o}})},b597:function(e,t,n){},b64b:function(e,t,n){var r=n("23e7"),c=n("7b0b"),a=n("df75"),i=n("d039"),o=i((function(){a(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(e){return a(c(e))}})},dbb4:function(e,t,n){var r=n("23e7"),c=n("83ab"),a=n("56ef"),i=n("fc6a"),o=n("06cf"),l=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),c=o.f,b=a(r),s={},u=0;while(b.length>u)n=c(r,t=b[u++]),void 0!==n&&l(s,t,n);return s}})},e439:function(e,t,n){var r=n("23e7"),c=n("d039"),a=n("fc6a"),i=n("06cf").f,o=n("83ab"),l=c((function(){i(1)})),b=!o||l;r({target:"Object",stat:!0,forced:b,sham:!o},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})},f7d2:function(e,t,n){}}]);
//# sourceMappingURL=chunk-4c99913f.bad4d948.js.map