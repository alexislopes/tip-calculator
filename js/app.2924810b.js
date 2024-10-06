(function(){"use strict";var t={4963:function(t,e,a){var r=a(5471),n=a(5668),s=a(7314),o=a(6930),l=function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e(n.A,[e("div",{staticClass:"container"},[e(s.A,{staticClass:"floating__button",attrs:{elevation:"2",icon:""},on:{click:a.handleClick}},[e(o.A,[t._v(t._s(a.icons[a.step]))])],1),e("h1",{staticClass:"logo"},[t._v("Le/Tip")]),e("div",{staticClass:"container__content"},[e(a.PainelEntrada,{directives:[{name:"show",rawName:"v-show",value:"desktop"===a.device||"entrada"===a.step,expression:"device === 'desktop' || step === 'entrada'"}]}),e(a.PainelResultado,{directives:[{name:"show",rawName:"v-show",value:"desktop"===a.device||"resultado"===a.step,expression:"device === 'desktop' || step === 'resultado'"}]})],1)],1)])},i=[],c=a(1241),u=a(3501),v=a(3180),d=a(9466),p=a(632),_=function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"painel__entrada"},[e(u.A,{staticStyle:{display:"flex","justify-content":"center"},attrs:{borderless:"",mandatory:""},model:{value:a.currency,callback:function(t){a.currency=t},expression:"currency"}},[e(s.A,{attrs:{text:"white",color:"#940DFF",value:"EUR"}},[t._v(" EUR ")]),e(s.A,{attrs:{text:"white",color:"#940DFF",value:"USD"}},[t._v(" USD ")])],1),e(p.A,{attrs:{color:"#940DFF","hide-details":"",type:"number",label:`Valor ${a.sign[a.currency]}`,placeholder:`Digite em ${a.sign[a.currency]}`,outlined:""},model:{value:a.valor,callback:function(e){a.valor=t._n(e)},expression:"valor"}}),e("div",[e("label",[t._v("Gorjeta "),e(v.A,[t._v(t._s(a.gorjeta)+"%")])],1),e("div",{staticClass:"slider__container"},[e("span",{staticClass:"slider__container__hint"},[t._v("10")]),e(d.A,{attrs:{"track-color":"purple",color:"#940DFF",hint:"Gorjeta",max:"20",min:"10"},model:{value:a.gorjeta,callback:function(t){a.gorjeta=t},expression:"gorjeta"}}),e("span",{staticClass:"slider__container__hint"},[t._v("20")])],1)]),e("div",[e("label",[t._v("Pessoas "),e(v.A,[t._v(" "+t._s(a.pessoas)+" ")])],1),e("div",{staticClass:"slider__container"},[e("span",{staticClass:"slider__container__hint"},[t._v("2")]),e(d.A,{attrs:{"track-color":"purple",color:"#940DFF",hint:"Pessoas",max:"16",min:"2"},model:{value:a.pessoas,callback:function(t){a.pessoas=t},expression:"pessoas"}}),e("span",{staticClass:"slider__container__hint"},[t._v("16")])],1)])],1)},f=[];const m=(0,r.KR)("EUR"),h=(0,r.KR)(0),y=(0,r.KR)(10),g=(0,r.KR)(2),b=(0,r.KR)(0),w=()=>{const t=(0,r.EW)((()=>y.value*h.value/100)),e=(0,r.EW)((()=>h.value+t.value)),a=(0,r.EW)((()=>e.value/g.value)),n=(0,r.EW)((()=>new Intl.NumberFormat(navigator.language,{style:"currency",currency:"BRL"}).format(a.value*b.value)));return{currency:m,gorjetaCalculada:t,total:e,porPessoa:a,emReal:n,valor:h,gorjeta:y,pessoas:g,quote:b}};var x=(0,r.pM)({__name:"PainelEntrada",setup(t){const{pessoas:e,gorjeta:a,valor:r,currency:n}=w(),s={EUR:"€",USD:"$"};return{__sfc:!0,pessoas:e,gorjeta:a,valor:r,currency:n,sign:s}}}),C=x,A=a(1656),R=(0,A.A)(C,_,f,!1,null,null,null),j=R.exports,F=a(1484),k=a(7296),P=a(2556),S=function(){var t=this,e=t._self._c,a=t._self._setupProxy;return e("div",{staticClass:"painel__resultado"},[e(F.A,{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{outlined:""}},[e(k.A,{attrs:{"three-line":""}},[e(P.pr,[e(P.w,[t._v("Conta")]),e(P.UZ,{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(a.currencyFormatted(a.valor))+" ")])],1)],1)],1),e(F.A,{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{outlined:""}},[e(k.A,{attrs:{"three-line":""}},[e(P.pr,[e(P.w,[t._v("Gorjeta")]),e(P.UZ,{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(a.currencyFormatted(a.gorjetaCalculada))+" ")])],1)],1)],1),e(F.A,{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{outlined:""}},[e(k.A,{attrs:{"three-line":""}},[e(P.pr,[e(P.w,[t._v("Total")]),e(P.UZ,{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(a.currencyFormatted(a.total))+" ")])],1)],1)],1),e(F.A,{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{outlined:""}},[e(k.A,{attrs:{"three-line":""}},[e(P.pr,[e(P.w,[t._v("Por pessoa")]),e(P.UZ,{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(a.currencyFormatted(a.porPessoa))+" ")])],1)],1)],1),e(F.A,{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{outlined:""}},[e(k.A,{attrs:{"three-line":""}},[e(P.pr,[e(P.w,[t._v("Em R$")]),e(P.UZ,{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(a.emReal)+" "),e(v.A,{staticStyle:{color:"white",position:"absolute",top:"0",right:"0",transform:"translate3d(15px, -15px, 0)"},attrs:{color:"#940DFF",trackColor:"#940DFF"}},[t._v(t._s(a.currency)+" em "+t._s(new Date(a.lastSync).toLocaleDateString("pt-BR",{month:"short",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}))+": "),e("strong",[t._v(" "+t._s(new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(a.quote)))])])],1)],1)],1)],1)],1)},E=[];const O=(0,c.Hyi)({baseUrl:"https://economia.awesomeapi.com.br/last"});var U=(0,r.pM)({__name:"PainelResultado",setup(t){const{currency:e,gorjetaCalculada:a,total:n,porPessoa:s,emReal:o,valor:l,quote:i}=w(),c=(0,r.KR)();function u(t){return new Intl.NumberFormat(navigator.language,{style:"currency",currency:e.value}).format(t)}const v=(0,r.EW)((()=>`${e.value}-BRL`)),{data:d}=O(v,{refetch:!0});return(0,r.wB)(d,(()=>{const t=`${e.value}BRL`,a=JSON.parse(d.value);i.value=a[t].high,c.value=a[t].create_date})),{__sfc:!0,currency:e,gorjetaCalculada:a,total:n,porPessoa:s,emReal:o,valor:l,quote:i,lastSync:c,currencyFormatted:u,URL:v,data:d}}}),D=U,K=(0,A.A)(D,S,E,!1,null,null,null),B=K.exports,L={__name:"App",setup(t){const{width:e}=(0,c.lWr)(),a=(0,r.EW)((()=>e.value<768?"mobile":"desktop"));function n(){o.value="entrada"===o.value?"resultado":"entrada"}const s=(0,r.KR)({entrada:"mdi mdi-chevron-right",resultado:"mdi mdi-chevron-left"}),o=(0,r.KR)("entrada");return{__sfc:!0,width:e,device:a,handleClick:n,icons:s,step:o,PainelEntrada:j,PainelResultado:B}}},T=L,W=(0,A.A)(T,l,i,!1,null,null,null),$=W.exports,N=a(5868);r.Ay.use(N.A);var M=new N.A({});r.Ay.config.productionTip=!1,new r.Ay({vuetify:M,render:t=>t($)}).$mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],s=t[u][2];for(var l=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[i])}))?r.splice(i--,1):(l=!1,s<o&&(o=s));if(l){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,o=r[0],l=r[1],i=r[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var u=i(a)}for(e&&e(r);c<o.length;c++)s=o[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},r=self["webpackChunkle_tip"]=self["webpackChunkle_tip"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(4963)}));r=a.O(r)})();
//# sourceMappingURL=app.2924810b.js.map