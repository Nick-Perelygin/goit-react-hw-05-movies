"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{785:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var c=t(439),a=t(789),o=t(689),r=t(791),i=t(184);function u(){var e=(0,r.useState)([]),n=(0,c.Z)(e,2),t=n[0],u=n[1],s=(0,o.UO)().id;return(0,r.useEffect)((function(){a.Z.getReviewsMovies(s).then((function(e){return u(e.results)}))}),[s]),(0,i.jsxs)("ul",{children:[t&&t.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",e.author]}),(0,i.jsx)("p",{children:e.content})]},e.id)})),0===t.length&&(0,i.jsx)("p",{children:"We don't have any reviews for this movie"})]})}},789:function(e,n){var t="https://api.themoviedb.org/3",c={getTrendingMovies:function(){return fetch("".concat(t).concat("/trending/all/day","?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(e){return e.json()})).catch((function(e){return alert("".concat(e))}))},getSearchMovies:function(e){return fetch("".concat(t).concat("/search/movie","?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&query=").concat(e,"&page=1&language=en-US")).then((function(e){return e.json()})).catch((function(e){return alert("".concat(e))}))},getDetailsMovies:function(e){var n="/movie/".concat(e);return fetch("".concat(t).concat(n,"?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(e){return e.json()})).catch((function(e){return alert("".concat(e))}))},getCreditsMovies:function(e){var n="/movie/".concat(e,"/credits");return fetch("".concat(t).concat(n,"?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(e){return e.json()})).catch((function(e){return alert("".concat(e))}))},getReviewsMovies:function(e){var n="/movie/".concat(e,"/reviews");return fetch("".concat(t).concat(n,"?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(e){return e.json()})).catch((function(e){return alert("".concat(e))}))}};n.Z=c}}]);
//# sourceMappingURL=785.efdb10c0.chunk.js.map