(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=(c(9),c(10),c(3)),o=c(0);var j=function(e){var t=e.moviedata;return console.log(e),Object(o.jsxs)("div",{className:"moviecard",children:[Object(o.jsxs)("div",{className:"moviepos",children:[Object(o.jsx)("img",{className:"pos",src:"https://image.tmdb.org/t/p/w200".concat(t.poster_path),alt:t.title}),Object(o.jsxs)("div",{className:"titlediv",children:[Object(o.jsx)("h1",{className:"title",children:t.title}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Origin language:"}),"  ",t.original_language]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Ratings :"}),t.vote_average]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Vote count: "}),t.vote_count]})]})]}),Object(o.jsxs)("div",{className:"moviedescard",children:[Object(o.jsxs)("p",{className:"moviedes",children:[Object(o.jsx)("strong",{children:"Release Date - "}),t.release_date]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{className:"moviedes",children:[Object(o.jsx)("strong",{children:"Description"})," ",Object(o.jsx)("br",{}),t.overview]}),Object(o.jsx)("hr",{})]})]})};var l=function(){var e=Object(s.useState)("a"),t=Object(i.a)(e,2),c=(t[0],t[1]),n=Object(s.useState)([]),a=Object(i.a)(n,2),r=a[0],l=a[1];return Object(s.useEffect)((function(){return fetch("https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&query=a&page=1&include_adult=false").then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results)}))}),[]),Object(o.jsxs)("div",{className:"searchbar",children:[Object(o.jsxs)("div",{className:"searchdiv",children:[Object(o.jsx)("input",{type:"text",class:"search",onChange:function(e){e.preventDefault(),c(e.target.value),console.log(e.target.value),fetch("https://api.themoviedb.org/3/search/movie?api_key=56665026e3870c33d4fef3747976d333&query=".concat(e.target.value,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){e.errors?l([]):l(e.results)}))}}),Object(o.jsx)("button",{class:"search_btn",children:"Search"})]}),r.length>0&&r.map((function(e){return Object(o.jsx)(j,{moviedata:e})}))]})};var d=function(){return Object(o.jsx)("div",{className:"Main",children:Object(o.jsx)(l,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.f81d8fb3.chunk.js.map