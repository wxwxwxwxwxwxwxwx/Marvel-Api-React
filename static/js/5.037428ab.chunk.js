(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},212:function(e,t,c){},222:function(e,t,c){"use strict";c.r(t);var a=c(5),r=c(0),n=c(44),s=c(19),i=c(38),o=(c(100),c.p+"static/media/mjolnir.61f31e18.png"),l=c(42),u=c(3),j=function(e){var t=e.char,c=t.name,a=t.thumbnail,r=t.description,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(u.jsxs)("div",{className:"randomchar__block",children:[Object(u.jsx)("img",{src:a,style:i,alt:"Random character",className:"randomchar__img"}),Object(u.jsxs)("div",{className:"randomchar__info",children:[Object(u.jsx)("p",{className:"randomchar__name",children:c}),Object(u.jsx)("p",{className:"randomchar__descr",children:r}),Object(u.jsxs)("div",{className:"randomchar__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),c=t[0],n=t[1],h=Object(l.a)(),b=h.loading,d=h.error,m=h.clearError,O=h.getCharacterById;Object(r.useEffect)((function(){p()}),[]);var f=function(e){n(e)},p=function(){m();var e=Math.floor(100*Math.random()+1011e3);O(e).then(f)},x=d?Object(u.jsx)(i.a,{}):null,v=b?Object(u.jsx)(s.a,{}):null,_=b||d?null:Object(u.jsx)(j,{char:c});return Object(u.jsxs)("div",{className:"randomchar",children:[x,v,_,Object(u.jsxs)("div",{className:"randomchar__static",children:[Object(u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(u.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(u.jsx)("button",{className:"button button__main",onClick:p,children:Object(u.jsx)("div",{className:"inner",children:"try it"})}),Object(u.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},b=c(7),d=(c(101),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),n=c[0],o=c[1],j=Object(r.useState)(!1),h=Object(a.a)(j,2),d=h[0],m=h[1],O=Object(r.useState)(240),f=Object(a.a)(O,2),p=f[0],x=f[1],v=Object(r.useState)(!1),_=Object(a.a)(v,2),g=_[0],N=_[1],k=Object(r.useRef)([]),y=Object(l.a)(),w=y.loading,C=y.error,E=y.getAllCharacters;Object(r.useEffect)((function(){S(p,!0)}),[]);var S=function(e,t){m(!t),E(e).then(F)},F=function(e){var t=!1;e.length<9&&(t=!0),o([].concat(Object(b.a)(n),Object(b.a)(e))),m(!1),x((function(e){return e+9})),N(t)},T=function(e){k.current.forEach((function(e){return e.classList.remove("char__item_selected")})),k.current[e].classList.add("char__item_selected"),k.current[e].focus()},I=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(u.jsxs)("li",{className:"char__item",ref:function(e){return k.current[c]=e},onClick:function(){e.onCharSelected(t.id),T(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),T(c))},children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(u.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(u.jsx)("ul",{className:"char__grid",children:c})}(n),B=C?Object(u.jsx)(i.a,{}):null,M=w&&!d?Object(u.jsx)(s.a,{}):null;return Object(u.jsxs)("div",{className:"char__list",children:[B,M,I,Object(u.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return S(p)},children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})}),m=(c(102),c(103),function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(u.jsxs)("div",{className:"skeleton",children:[Object(u.jsxs)("div",{className:"pulse skeleton__header",children:[Object(u.jsx)("div",{className:"pulse skeleton__circle"}),Object(u.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"}),Object(u.jsx)("div",{className:"pulse skeleton__block"})]})]})}),O=function(e){var t=e.char,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"char__basics",children:[Object(u.jsx)("img",{src:r,alt:c,style:o}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"char__info-name",children:c}),Object(u.jsxs)("div",{className:"char__btns",children:[Object(u.jsx)("a",{href:n,className:"button button__main",children:Object(u.jsx)("div",{className:"inner",children:"homepage"})}),Object(u.jsx)("a",{href:s,className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(u.jsx)("div",{className:"char__descr",children:a}),Object(u.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(u.jsx)("ul",{className:"char__comics-list",children:0===i.length?Object(u.jsx)("div",{children:"There is no comics for this character :("}):i.slice(0,10).map((function(e,t){return Object(u.jsx)("li",{className:"char__comics-item",children:e.name},t)}))})]})},f=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],o=c[1],j=Object(l.a)(),h=j.loading,b=j.error,d=j.getCharacterById,f=j.clearError;Object(r.useEffect)((function(){p()}),[]),Object(r.useEffect)((function(){p()}),[e.charId]);var p=function(){var t=e.charId;t&&(f(),d(t).then(x))},x=function(e){o(e)},v=n||h||b?null:Object(u.jsx)(m,{}),_=b?Object(u.jsx)(i.a,{}):null,g=h?Object(u.jsx)(s.a,{}):null,N=h||b||!n?null:Object(u.jsx)(O,{char:n});return Object(u.jsxs)("div",{className:"char__info",children:[v,_,g,N]})},p=c(216),x=c(217),v=c(10),_=(c(212),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(l.a)(),o=s.loading,j=s.error,h=s.getCharacterByName,b=s.clearError,d=function(e){n(e)},m=j?Object(u.jsx)("div",{className:"char__search-critical-error",children:Object(u.jsx)(i.a,{})}):null,O=c?c.length>0?Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(u.jsx)(v.b,{to:"/Marvel-Api-React/characters/".concat(c[0].id),className:"button button__secondary",children:Object(u.jsx)("div",{className:"inner",children:"To page"})})]}):Object(u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(u.jsxs)("div",{className:"char__search-form",children:[Object(u.jsx)(p.d,{initialValues:{charName:""},validationSchema:x.a({charName:x.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),h(t).then(d)},children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(u.jsxs)("div",{className:"char__search-wrapper",children:[Object(u.jsx)(p.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(u.jsx)("button",{type:"submit",className:"button button__main",disabled:o,children:Object(u.jsx)("div",{className:"inner",children:"find"})})]}),Object(u.jsx)(p.a,{component:"div",className:"char__search-error",name:"charName"})]})}),O,m]})}),g=c(65),N=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(n.a,{children:[Object(u.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(u.jsx)("title",{children:"Marvel information portal"})]}),Object(u.jsx)(g.a,{children:Object(u.jsx)(h,{})}),Object(u.jsxs)("div",{className:"char__content",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(g.a,{children:Object(u.jsx)(f,{charId:c})}),Object(u.jsx)(g.a,{children:Object(u.jsx)(_,{})})]}),Object(u.jsx)(g.a,{children:Object(u.jsx)(d,{onCharSelected:function(e){s((function(t){return e}))}})})]}),Object(u.jsx)("img",{className:"bg-decoration",src:N,alt:"vision"})]})}},38:function(e,t,c){"use strict";var a=c.p+"static/media/error.9c0716bc.png",r=c(3);t.a=function(){return Object(r.jsx)("img",{src:a,style:{display:"block",width:"230px",height:"230px",objectFit:"contain",margin:"0 auto"},alt:"Error"})}},42:function(e,t,c){"use strict";var a=c(4),r=c.n(a),n=c(6),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=73da627187167e6c6216bd7cbd93f7f2",j=201,h=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:j,e.next=3,c("".concat(l,"comics?limit=8&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters?name=").concat(t,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",p(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name.length>22?e.name.substr(0,22)+"...":e.name,description:e.description?e.description.substr(0,203)+"...":"There is no data for this character :(",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){return{id:e.id,title:e.title,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,price:e.prices[0].price+"$",description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us"}};return{loading:t,error:a,clearError:o,getAllCharacters:h,getCharacterById:O,getAllComics:b,getComic:m,getCharacterByName:d}}},65:function(e,t,c){"use strict";var a=c(5),r=c(0),n=c(38),s=c(3);t.a=function(e){var t=Object(r.useState)(!1),c=Object(a.a)(t,2),i=c[0],o=c[1];try{return i?Object(s.jsx)(n.a,{}):e.children}catch(l){console.log(l),o(!0)}}}}]);
//# sourceMappingURL=5.037428ab.chunk.js.map