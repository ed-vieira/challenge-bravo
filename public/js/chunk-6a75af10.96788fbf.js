(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a75af10"],{1406:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Moedas")]),n("currency-component"),n("router-link",{staticClass:"btn btn-outline-success",attrs:{tag:"button",to:"/currency/compare-currency"}},[t._v("\n      Todas as moedas\n  ")])],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello",attrs:{id:"app"}},[n("div",{},[n("h1",[t._v(t._s(t.msg))]),n("h3",[t._v(t._s(t.coin1)+" X "+t._s(t.coin2))])]),n("div",{staticClass:"container"},[n("div",{staticClass:"row padding-block"},[n("div",{staticClass:"col-lg-4 offset-lg-1"},[n("autocomplete",{attrs:{search:t.search,placeholder:"Pesquise por moedas","aria-label":"Pesquise por moedas","get-result-value":t.getResultValue,"auto-select":""},on:{submit:t.handleSubmit}})],1),n("div",{staticClass:"col-lg-2"},[n("button",{staticClass:"btn btn-circle btn-xl btn-outline-success",on:{click:t.getCurrencyValues}},[n("i",{staticClass:"fa fa-dollar-sign"})])]),n("div",{staticClass:"col-lg-4"},[n("autocomplete",{attrs:{search:t.search,placeholder:"Pesquise por moedas","aria-label":"Pesquise por moedas","get-result-value":t.getResultValue2,"auto-select":""},on:{submit:t.handleSubmit2}})],1)]),n("div",{staticClass:"row padding-block"},[t.resultCoin?n("div",{staticClass:"col-lg-8 col-lg-offset-2"},[n("div",{staticClass:"form-inline padding-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.c,expression:"c"}],staticClass:"form-control",attrs:{type:"number",min:"0"},domProps:{value:t.c},on:{input:function(e){e.target.composing||(t.c=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-success",on:{click:t.calculate}},[t._v("Calcular valor em "+t._s(t.resultCoin.comparedTo._symbol))])]),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-stripped table-hover "},[t._m(0),n("tbody",[n("tr",[n("td",[t._v(t._s(t.resultCoin.base._symbol))]),n("td",[t._v(t._s(t.resultCoin.base._value))])]),n("tr",[n("td",[t._v(t._s(t.resultCoin.comparedTo._symbol))]),n("td",[t._v(t._s(t.resultCoin.comparedTo._value))])]),n("tr",{attrs:{colspan:"2"}},[n("td",[t._v("Data")]),n("td",[t._v(t._s(t._f("formatDate")(t.resultCoin.date)))])])])])])]):t._e()])]),n("router-view")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{},[n("tr",[n("th",[t._v("Sigla")]),n("th",[t._v("Preço\n                      "),n("i",{staticClass:"fa fa-dollar-sign"})])])])}],c=(n("f559"),n("ac6a"),n("456d"),n("95bf")),r=n("ca55"),l={name:"CurrencyComponent",props:{msg:String},data:function(){return{test:[],resultCoin:null,AllCoins:null,barTitle:"",c:"",coin1:"",coin2:""}},components:{Autocomplete:c["a"]},methods:{loadData:function(t){var e=this;axios(t).then(function(t){e.test=t.data.rates}).catch(function(t){return console.log(t)})},loadCoin:function(t){var e=this,n=axios(t).then(function(t){return t.data}).catch(function(t){return console.log(t)});this.$loading(!0),Object(r["a"])(n).then(function(t){e.resultCoin=t.rates}).catch(function(t){console.log(t)})},loadCompare:function(t){var e=this,n=axios(t).then(function(t){return t.data}).catch(function(t){return console.log(t)});this.$loading(!0),Object(r["a"])(n).then(function(t){e.resultCoin=t.data}).catch(function(){})},search:function(t){return t.length<1?[]:Object.keys(this.test).filter(function(e,n){return e.toLowerCase().startsWith(t.toLowerCase())})},getResultValue:function(t){return t},handleSubmit:function(t){""!=this.coin1&&this.coin1==t||(this.coin1=t,""!=this.coin1&&""!=this.coin2&&this.getCurrencyValues())},getResultValue2:function(t){return t},handleSubmit2:function(t){""!=this.coin2&&this.coin2==t||(this.coin2=t,""!=this.coin1&&""!=this.coin2&&this.getCurrencyValues())},getCurrencyValues:function(){""!=this.coin1&&""!=this.coin2&&this.loadCompare({url:"/currency/".concat(this.coin1,"/").concat(this.coin2)})},calculate:function(){""!=this.coin1&&""!=this.coin2&&this.loadCompare({url:"/currency/".concat(this.coin1,"/").concat(this.coin2,"/").concat(this.c)})}},created:function(){this.loadData({url:"/currency"})}},u=l,d=(n("4c1f"),n("2877")),h=Object(d["a"])(u,i,o,!1,null,null,null),f=h.exports,m={name:"homeCurrency",components:{CurrencyComponent:f}},v=m,p=Object(d["a"])(v,a,s,!1,null,null,null);e["default"]=p.exports},"3e76":function(t,e,n){},"456d":function(t,e,n){var a=n("4bf8"),s=n("0d58");n("5eda")("keys",function(){return function(t){return s(a(t))}})},"4c1f":function(t,e,n){"use strict";var a=n("3e76"),s=n.n(a);s.a},5147:function(t,e,n){var a=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(s){}}return!0}},"5eda":function(t,e,n){var a=n("5ca1"),s=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],o={};o[t]=e(n),a(a.S+a.F*i(function(){n(1)}),"Object",o)}},aae3:function(t,e,n){var a=n("d3f4"),s=n("2d95"),i=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==s(t))}},ac6a:function(t,e,n){for(var a=n("cadf"),s=n("0d58"),i=n("2aba"),o=n("7726"),c=n("32e9"),r=n("84f2"),l=n("2b4c"),u=l("iterator"),d=l("toStringTag"),h=r.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(f),v=0;v<m.length;v++){var p,g=m[v],b=f[g],C=o[g],_=C&&C.prototype;if(_&&(_[u]||c(_,u,h),_[d]||c(_,d,g),r[g]=h,b))for(p in a)_[p]||i(_,p,a[p],!0)}},d2c8:function(t,e,n){var a=n("aae3"),s=n("be13");t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(s(t))}},f559:function(t,e,n){"use strict";var a=n("5ca1"),s=n("9def"),i=n("d2c8"),o="startsWith",c=""[o];a(a.P+a.F*n("5147")(o),"String",{startsWith:function(t){var e=i(this,t,o),n=s(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return c?c.call(e,a,n):e.slice(n,n+a.length)===a}})}}]);
//# sourceMappingURL=chunk-6a75af10.96788fbf.js.map