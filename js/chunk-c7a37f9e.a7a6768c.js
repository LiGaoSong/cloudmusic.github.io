(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7a37f9e"],{"107c":function(e,t,n){var c=n("d039"),r=n("da84"),i=r.RegExp;e.exports=c((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var c=n("2ba4"),r=n("c65b"),i=n("e330"),o=n("d784"),a=n("44e7"),s=n("825a"),l=n("1d80"),u=n("4840"),d=n("8aa5"),b=n("50c4"),f=n("577e"),m=n("dc4a"),p=n("4dae"),g=n("14c3"),j=n("9263"),O=n("9f7f"),v=n("d039"),h=O.UNSUPPORTED_Y,x=4294967295,E=Math.min,N=[].push,V=i(/./.exec),k=i(N),y=i("".slice),S=!v((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=f(l(this)),o=void 0===n?x:n>>>0;if(0===o)return[];if(void 0===e)return[i];if(!a(e))return r(t,i,e,o);var s,u,d,b=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,O=new RegExp(e.source,m+"g");while(s=r(j,O,i)){if(u=O.lastIndex,u>g&&(k(b,y(i,g,s.index)),s.length>1&&s.index<i.length&&c(N,b,p(s,1)),d=s[0].length,g=u,b.length>=o))break;O.lastIndex===s.index&&O.lastIndex++}return g===i.length?!d&&V(O,"")||k(b,""):k(b,y(i,g)),b.length>o?p(b,0,o):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:r(t,this,e,n)}:t,[function(t,n){var c=l(this),o=void 0==t?void 0:m(t,e);return o?r(o,t,c,n):r(i,f(c),t,n)},function(e,c){var r=s(this),o=f(e),a=n(i,r,o,c,i!==t);if(a.done)return a.value;var l=u(r,RegExp),m=r.unicode,p=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(h?"g":"y"),j=new l(h?"^(?:"+r.source+")":r,p),O=void 0===c?x:c>>>0;if(0===O)return[];if(0===o.length)return null===g(j,o)?[o]:[];var v=0,N=0,V=[];while(N<o.length){j.lastIndex=h?0:N;var S,I=g(j,h?y(o,N):o);if(null===I||(S=E(b(j.lastIndex+(h?N:0)),o.length))===v)N=d(o,N,m);else{if(k(V,y(o,v,N)),V.length===O)return V;for(var D=1;D<=I.length-1;D++)if(k(V,I[D]),V.length===O)return V;N=v=S}}return k(V,y(o,v)),V}]}),!S,h)},"14c3":function(e,t,n){var c=n("da84"),r=n("c65b"),i=n("825a"),o=n("1626"),a=n("c6b6"),s=n("9263"),l=c.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var c=r(n,e,t);return null!==c&&i(c),c}if("RegExp"===a(e))return r(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},"28c8":function(e,t,n){},"2abe":function(e,t,n){"use strict";n("740a")},4470:function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),r={class:"songlist"},i=["onClick"],o={class:"songinfo"},a={class:"song-name"},s={class:"song-name1"},l={class:"song-name2"},u={class:"sone-album"},d={class:"sone-duration"};function b(e,t,n,b,f,m){var p=Object(c["resolveComponent"])("el-image"),g=Object(c["resolveComponent"])("el-scrollbar");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(g,{height:"550px"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.songlist,(function(e,t){var n,r;return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"song",key:t,onClick:function(t){return b.goSong(e.id)}},[Object(c["createElementVNode"])("div",o,[Object(c["createVNode"])(p,{style:{width:"50px",height:"50px","border-radius":"10px"},src:e.al.picUrl,lazy:""},null,8,["src"]),Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("span",s,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("span",l,Object(c["toDisplayString"])(null===(n=e.ar[0])||void 0===n?void 0:n.name),1)])]),Object(c["createElementVNode"])("div",u,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(null===(r=e.al)||void 0===r?void 0:r.name),1)]),Object(c["createElementVNode"])("div",d,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(b.formatDuring(e.dt)),1)])],8,i)})),128))]})),_:1})])}var f={name:"Rank",props:{songlist:{type:Array,default:function(){return[]}}},setup:function(e){function t(e){return parseInt(e)<10?"0"+e:e}var n=function(e){var n=t(parseInt(e%36e5/6e4)),c=t(parseInt(e%6e4/1e3));return n+":"+c};console.log(n(256e3));var c=function(e){alert(e+"点什么点")};return{formatDuring:n,goSong:c}}},m=(n("7e95"),n("6b0d")),p=n.n(m);const g=p()(f,[["render",b],["__scopeId","data-v-14d8afa8"]]);t["a"]=g},"44e7":function(e,t,n){var c=n("861d"),r=n("c6b6"),i=n("b622"),o=i("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"4a3f":function(e,t,n){},"523c":function(e,t,n){},"6b60":function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-6114348a"),e=e(),Object(c["popScopeId"])(),e},i={class:"singer-detail"},o={class:"singer-info"},a={class:"singer-info-item"},s={class:"singer-name"},l={class:"singer-briefDesc"},u=Object(c["createTextVNode"])(" 歌手简介 "),d={class:"singer-detail-tabs"},b={class:"song-heard"},f=Object(c["createTextVNode"])(" 歌曲列表"),m=r((function(){return Object(c["createElementVNode"])("div",null,[Object(c["createElementVNode"])("span",{class:"one"},[Object(c["createElementVNode"])("i",{class:"iconfont icon-shoucang"}),Object(c["createTextVNode"])("播放全部")]),Object(c["createElementVNode"])("span",{class:"two"},[Object(c["createElementVNode"])("i",{class:"iconfont icon-shoucang"}),Object(c["createTextVNode"])("收藏")])],-1)})),p={class:"mvlist"},g={class:"synopsis"};function j(e,t,n,r,j,O){var v=Object(c["resolveComponent"])("el-image"),h=Object(c["resolveComponent"])("songlist"),x=Object(c["resolveComponent"])("el-tab-pane"),E=Object(c["resolveComponent"])("mv-list-item"),N=Object(c["resolveComponent"])("album"),V=Object(c["resolveComponent"])("hot-singer-list"),k=Object(c["resolveComponent"])("el-tabs");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",i,[Object(c["createElementVNode"])("div",o,[Object(c["createVNode"])(v,{style:{width:"200px",height:"200px","border-radius":"10px","box-shadow":"6px 6px 13px #bdbdbd"},src:r.getArtists.picUrl},null,8,["src"]),Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("h1",s,Object(c["toDisplayString"])(r.getArtists.name),1),Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("h2",null,[u,r.isShowDesc?(Object(c["openBlock"])(),Object(c["createElementBlock"])("em",{key:0,class:"desc-close",onClick:t[0]||(t[0]=function(e){return r.isShowDesc=!r.isShowDesc})},"X")):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("div",{class:"synopsis",onClick:t[1]||(t[1]=function(e){return r.isShowDesc=!r.isShowDesc})},Object(c["toDisplayString"])(r.getArtists.briefDesc),1),r.isShowDesc?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,class:"cover-desc-all",onClick:t[2]||(t[2]=function(e){return r.isShowDesc=!r.isShowDesc})},Object(c["toDisplayString"])(r.getArtists.briefDesc),1)):Object(c["createCommentVNode"])("",!0)])])]),Object(c["createElementVNode"])("div",d,[Object(c["createVNode"])(k,{modelValue:r.activeName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.activeName=e}),class:"demo-tabs",stretch:""},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(x,{label:"单曲",name:"first"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",b,[Object(c["createElementVNode"])("h4",null,[f,Object(c["createElementVNode"])("em",null,Object(c["toDisplayString"])(r.getArtistsSong.length)+"首歌",1)]),m]),Object(c["createVNode"])(h,{songlist:r.getArtistsSong},null,8,["songlist"])]})),_:1}),Object(c["createVNode"])(x,{label:"MV",name:"second"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",p,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.getArtistsmv,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])(E,{key:t,MvItem:e},null,8,["MvItem"])})),128))])]})),_:1}),Object(c["createVNode"])(x,{label:"专辑",name:"third"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(N,{album:r.getArtistsAlbum},null,8,["album"])]})),_:1}),Object(c["createVNode"])(x,{label:"歌手描述",name:"fourth"},{default:Object(c["withCtx"])((function(){return[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(r.getArtistsDesc,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"singer-details",key:t},[Object(c["createElementVNode"])("h2",null,Object(c["toDisplayString"])(e.ti),1),Object(c["createElementVNode"])("div",g,Object(c["toDisplayString"])(e.txt),1)])})),128))]})),_:1}),Object(c["createVNode"])(x,{label:"相似歌手",name:"fiveth"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(V,{hotSinger:r.getArtistsSimi},null,8,["hotSinger"])]})),_:1})]})),_:1},8,["modelValue"])])])}var O=n("4470"),v=n("7b8d"),h=n("a588"),x=(n("fb6a"),function(e){return Object(c["pushScopeId"])("data-v-2e2b4720"),e=e(),Object(c["popScopeId"])(),e}),E={id:"albumlist"},N={class:"albumInfo"},V=["onClick"],k={class:"albumimg"},y={class:"albumname"},S=x((function(){return Object(c["createElementVNode"])("i",{class:"iconfont icon-shouyinji"},null,-1)}));function I(e,t,n,r,i,o){var a=Object(c["resolveComponent"])("el-image");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",E,[Object(c["createElementVNode"])("div",N,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.album,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"albumInfo",key:t,onClick:function(t){return r.goAlbumDetail(e.id)}},[Object(c["createElementVNode"])("div",k,[Object(c["createVNode"])(a,{src:e.picUrl},null,8,["src"])]),Object(c["createElementVNode"])("div",y,[Object(c["createElementVNode"])("h1",null,[S,Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.name),1)]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.artists.slice(0,2),(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:t},Object(c["toDisplayString"])(e.name),1)})),128))])],8,V)})),128))])])}n("ac1f"),n("1276"),n("a15b");var D=n("6c02"),C={name:"albumList",props:{album:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(D["d"])(),t=function(e){var t=String(e).split("");return t.length<=4?t:t.slice(0,t.length-4).join("")+"万"},n=function(t){console.log(t),e.push({path:"/album/detail",query:{id:t}})};return{numberChange:t,goAlbumDetail:n}}},B=(n("2abe"),n("6b0d")),A=n.n(B);const w=A()(C,[["render",I],["__scopeId","data-v-2e2b4720"]]);var _=w,R=n("a1e9"),M=n("5502"),L=n("5c40"),T={name:"SingerDetail",components:{songlist:O["a"],mvListItem:v["a"],hotSingerList:h["a"],HotSingerList:h["a"],album:_},setup:function(){var e=Object(R["s"])("first"),t=Object(R["s"])(!1),n=Object(M["b"])(),c=Object(D["c"])(),r=Object(L["q"])((function(){return n.state.singer.artistsSong})),i=Object(L["q"])((function(){return n.state.singer.artists})),o=Object(L["q"])((function(){return n.state.singer.artistsMV})),a=Object(L["q"])((function(){return n.state.singer.artistsSimi})),s=Object(L["q"])((function(){return n.state.singer.artistsAlbum})),l=Object(L["q"])((function(){return n.state.singer.artistsDesc})),u=function(e){n.dispatch("getArtistsSong",e),n.dispatch("getArtistsMV",e),n.dispatch("getArtistsDesc",e),n.dispatch("getArtistsSimi",e),n.dispatch("getArtistsAlbum",e)};return Object(L["kc"])((function(){return c.query}),(function(t){u(t.id),e.value="first"})),Object(L["ob"])((function(){u(c.query.id)})),{activeName:e,getArtistsSong:r,getArtistsmv:o,getArtists:i,isShowDesc:t,getArtistsDesc:l,getArtistsSimi:a,getArtistsAlbum:s}}};n("9756");const q=A()(T,[["render",j],["__scopeId","data-v-6114348a"]]);t["default"]=q},7265:function(e,t,n){"use strict";n("28c8")},"740a":function(e,t,n){},"7b8d":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),r=function(e){return Object(c["pushScopeId"])("data-v-032b5818"),e=e(),Object(c["popScopeId"])(),e},i={class:"img-item"},o=r((function(){return Object(c["createElementVNode"])("i",{class:"iconfont icon-bofang"},null,-1)})),a={class:"info"},s={class:"info-name MVname"},l={class:"info-name info-huise"},u={class:"info-name info-huise"},d=r((function(){return Object(c["createElementVNode"])("i",{class:"iconfont icon-shipinbofang"},null,-1)}));function b(e,t,n,r,b,f){var m=Object(c["resolveComponent"])("el-image");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"item",onClick:t[0]||(t[0]=function(e){return r.goMvDetail(n.MvItem.id)})},[Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(m,{src:n.MvItem.cover?n.MvItem.cover:n.MvItem.imgurl},null,8,["src"]),o]),Object(c["createElementVNode"])("div",a,[Object(c["createElementVNode"])("p",s,Object(c["toDisplayString"])(n.MvItem.name),1),Object(c["createElementVNode"])("p",l,Object(c["toDisplayString"])(n.MvItem.artistName),1),Object(c["createElementVNode"])("p",u,[d,Object(c["createTextVNode"])(Object(c["toDisplayString"])(r.numberChange(n.MvItem.playCount)),1)])])])}n("ac1f"),n("1276"),n("a15b"),n("fb6a");var f=n("6c02"),m={name:"MvListItem",props:{MvItem:{type:Object,default:function(){return{}}}},setup:function(){var e=Object(f["d"])(),t=function(e){var t=String(e).split("");return t.length<=4?e:t.slice(0,t.length-4).join("")+"万"},n=function(t){e.push({path:"/mvlist/detail",query:{mvid:t}})};return{numberChange:t,goMvDetail:n}}},p=(n("9d8d"),n("6b0d")),g=n.n(p);const j=g()(m,[["render",b],["__scopeId","data-v-032b5818"]]);t["a"]=j},"7e95":function(e,t,n){"use strict";n("4a3f")},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},9263:function(e,t,n){"use strict";var c=n("c65b"),r=n("e330"),i=n("577e"),o=n("ad6d"),a=n("9f7f"),s=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),b=n("107c"),f=s("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,p=m,g=r("".charAt),j=r("".indexOf),O=r("".replace),v=r("".slice),h=function(){var e=/a/,t=/b*/g;return c(m,e,"a"),c(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),x=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],N=h||E||x||d||b;N&&(p=function(e){var t,n,r,a,s,d,b,N=this,V=u(N),k=i(e),y=V.raw;if(y)return y.lastIndex=N.lastIndex,t=c(p,y,k),N.lastIndex=y.lastIndex,t;var S=V.groups,I=x&&N.sticky,D=c(o,N),C=N.source,B=0,A=k;if(I&&(D=O(D,"y",""),-1===j(D,"g")&&(D+="g"),A=v(k,N.lastIndex),N.lastIndex>0&&(!N.multiline||N.multiline&&"\n"!==g(k,N.lastIndex-1))&&(C="(?: "+C+")",A=" "+A,B++),n=new RegExp("^(?:"+C+")",D)),E&&(n=new RegExp("^"+C+"$(?!\\s)",D)),h&&(r=N.lastIndex),a=c(m,I?n:N,A),I?a?(a.input=v(a.input,B),a[0]=v(a[0],B),a.index=N.lastIndex,N.lastIndex+=a[0].length):N.lastIndex=0:h&&a&&(N.lastIndex=N.global?a.index+a[0].length:r),E&&a&&a.length>1&&c(f,a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a&&S)for(a.groups=d=l(null),s=0;s<S.length;s++)b=S[s],d[b[0]]=a[b[1]];return a}),e.exports=p},9756:function(e,t,n){"use strict";n("a554")},"9d8d":function(e,t,n){"use strict";n("523c")},"9f7f":function(e,t,n){var c=n("d039"),r=n("da84"),i=r.RegExp,o=c((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||c((function(){return!i("a","y").sticky})),s=o||c((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:a,UNSUPPORTED_Y:o}},a15b:function(e,t,n){"use strict";var c=n("23e7"),r=n("e330"),i=n("44ad"),o=n("fc6a"),a=n("a640"),s=r([].join),l=i!=Object,u=a("join",",");c({target:"Array",proto:!0,forced:l||!u},{join:function(e){return s(o(this),void 0===e?",":e)}})},a554:function(e,t,n){},a588:function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),r={class:"singer"},i={class:"title-name"},o={class:"tabs"},a={class:"name"};function s(e,t,n,s,l,u){var d=Object(c["resolveComponent"])("el-image");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createElementVNode"])("h1",i,[Object(c["renderSlot"])(e.$slots,"title-name",{},void 0,!0)]),Object(c["createElementVNode"])("div",o,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.hotSinger,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"singer-name",key:t},[Object(c["createElementVNode"])("h2",a,Object(c["toDisplayString"])(e.name),1),Object(c["createVNode"])(d,{style:{width:"100px",height:"100px"},src:e.picUrl,onClick:function(t){return s.goSingerDeatil(e.id)}},null,8,["src","onClick"])])})),128))])])}var l=n("6c02"),u={name:"HotSingerList",props:{hotSinger:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(l["d"])(),t=function(t){e.push({path:"/singer/detail",query:{id:t}})};return{goSingerDeatil:t}}},d=(n("7265"),n("6b0d")),b=n.n(d);const f=b()(u,[["render",s],["__scopeId","data-v-2997ac6d"]]);t["a"]=f},ac1f:function(e,t,n){"use strict";var c=n("23e7"),r=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var c=n("825a");e.exports=function(){var e=c(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var c=n("e330"),r=n("cb2d"),i=n("9263"),o=n("d039"),a=n("b622"),s=n("9112"),l=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var b=a(e),f=!o((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),m=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!f||!m||n){var p=c(/./[b]),g=t(b,""[e],(function(e,t,n,r,o){var a=c(e),s=t.exec;return s===i||s===u.exec?f&&!o?{done:!0,value:p(t,n,r)}:{done:!0,value:a(n,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(u,b,g[1])}d&&s(u[b],"sham",!0)}},fce3:function(e,t,n){var c=n("d039"),r=n("da84"),i=r.RegExp;e.exports=c((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-c7a37f9e.a7a6768c.js.map