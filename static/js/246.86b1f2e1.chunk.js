"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[246],{246:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),u=e(552),a=e(689),c=e(791),i="reviews_revList__6mpol",o="reviews_revAuth__ZoNBF",s=e(184),p=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],p=n[1],f=(0,a.UO)().id;return(0,c.useEffect)((function(){(0,u.tx)(f).then((function(t){return p(t.results)})).catch((function(){return alert("Some problems with API")}))}),[f]),(0,s.jsx)("ul",{className:i,children:e.length>0?e.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{className:o,children:"Autor: ".concat(t.author)}),(0,s.jsx)("p",{children:t.content})]},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,n){return t+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())})):(0,s.jsx)("li",{children:"There are no reviews."})})}},552:function(t,n,e){e.d(n,{IR:function(){return p},Jn:function(){return l},LP:function(){return o},M1:function(){return m},Q$:function(){return g},t2:function(){return h},tx:function(){return y}});var r=e(861),u=e(757),a=e.n(u),c=e(912),i="0bf9a11da9d083f4751315d07dcbd89b";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return"https://image.tmdb.org/t/p/w".concat(n,"/").concat(t)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(i,"&language=en-US")).then((function(t){return t.data.genres}));case 2:return e=t.sent,t.abrupt("return",e.reduce((function(t,e){return n.includes(e.id)&&t.push(e.name),t}),[]));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=246.86b1f2e1.chunk.js.map