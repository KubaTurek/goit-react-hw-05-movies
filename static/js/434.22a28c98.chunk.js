"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[434],{444:function(e,t,n){n.d(t,{Bt:function(){return p},Ch:function(){return d},Tg:function(){return s},YG:function(){return i},y:function(){return o}});var r=n(861),a=n(757),c=n.n(a),u=n(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/trending/all/day?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US");case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/credits?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/reviews?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?api_key=3d397a8b948d538760c15d5dd702d031&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},434:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(87),i=n(791),o=n(444),p="movies_search__form__I80DJ",d="movies_search__input__xJN0r",l="movies_search__button__Jsczk",f="movies_search__container__z+rEm",v="movies_search__item__jGWOt",h="movies_image__Z23Rn",_=n(184),m=function(){var e,t=(0,i.useState)(""),n=(0,a.Z)(t,2),c=n[0],m=n[1],g=(0,s.lr)(),x=(0,a.Z)(g,2),b=x[0],y=x[1],w=b.get("query"),k=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),e.next=3,(0,o.Ch)(t);case 3:n=e.sent,m(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){k(w)}),[w]),(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:p,children:(0,_.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),y({query:e.target.input.value})}(e)},children:[(0,_.jsx)("input",{className:d,type:"text",placeholder:"search a film",name:"input"}),(0,_.jsx)("button",{className:l,type:"submit",children:"Search"})]})}),(0,_.jsx)("ul",{className:f,children:null!==c&&void 0!==c&&null!==(e=c.results)&&void 0!==e&&e.length&&null!==w?c.results.map((function(e){return(0,_.jsx)("li",{className:v,children:(0,_.jsxs)(s.rU,{to:"".concat(e.id),state:{from:"/Movies/?query=".concat(w)},children:[(0,_.jsx)("img",{className:h,alt:e.title,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path)}),(0,_.jsx)("p",{children:e.title})]})},e.id)})):(0,_.jsx)("p",{})})]})}}}]);
//# sourceMappingURL=434.22a28c98.chunk.js.map