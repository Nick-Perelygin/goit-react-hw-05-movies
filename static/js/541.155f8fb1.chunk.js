"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541,789],{541:function(t,n,e){e.r(n),e.d(n,{default:function(){return u}});var c=e(439),a=e(789),r=e(689),o=e(791),i=e(184);function u(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],u=n[1],f=(0,r.UO)().id;return(0,o.useEffect)((function(){a.default.getCreditsMovies(f).then((function(t){return u(t.cast)}))}),[f]),(0,i.jsx)("ul",{children:f&&e.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:t.name}),(0,i.jsxs)("p",{children:["Character: ",t.character]}),(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.profile_path),alt:"".concat(t.name),width:"200px"})]},t.id)}))})}},789:function(t,n,e){e.r(n);var c="https://api.themoviedb.org/3",a={getTrendingMovies:function(){return fetch("".concat(c).concat("/trending/all/day","?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(t){return t.json()})).catch((function(t){return alert("".concat(t))}))},getSearchMovies:function(t){return fetch("".concat(c).concat("/search/movie","?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&query=").concat(t,"&page=1&language=en-US")).then((function(t){return t.json()})).catch((function(t){return alert("".concat(t))}))},getDetailsMovies:function(t){var n="/movie/".concat(t);return fetch("".concat(c).concat(n,"?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(t){return t.json()})).catch((function(t){return alert("".concat(t))}))},getCreditsMovies:function(t){var n="/movie/".concat(t,"/credits");return fetch("".concat(c).concat(n,"?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(t){return t.json()})).catch((function(t){return alert("".concat(t))}))},getReviewsMovies:function(t){var n="/movie/".concat(t,"/reviews");return fetch("".concat(c).concat(n,"?api_key=").concat("80849c20aa63241eb028c4e7b7d0f3a8","&page=1&language=en-US")).then((function(t){return t.json()})).catch((function(t){return alert("".concat(t))}))}};n.default=a}}]);
//# sourceMappingURL=541.155f8fb1.chunk.js.map