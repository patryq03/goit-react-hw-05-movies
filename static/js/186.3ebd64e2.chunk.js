"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{315:function(e,n,t){t.d(n,{Hg:function(){return o},Jh:function(){return v},TP:function(){return p},z1:function(){return s},zv:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(294),i="29926744d88f87de2894846856dc31dc";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,t){t.r(n);var r=t(439),a=t(689),u=t(791),c=t(315),i=t(184);n.default=function(){var e=(0,u.useState)([]),n=(0,r.Z)(e,2),t=n[0],o=n[1],s=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.Jh)(s).then((function(e){return o(e.results)}))}),[s]),(0,i.jsx)("ul",{children:t.length>0?t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:t})]},r)})):"Sorry, we don't have any review for this movie"})}}}]);
//# sourceMappingURL=186.3ebd64e2.chunk.js.map