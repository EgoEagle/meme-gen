(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(15),a(5)),m=a.n(o);function u(){return c.a.createElement("div",null,c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"trollface",src:m.a}),c.a.createElement("h1",{className:"title"}," Meme Generator ")))}var i=a(1),s=a(6),p=a(2);function f(){var e=c.a.useState([]),t=Object(p.a)(e,2),a=t[0],n=t[1],l=c.a.useState("http://i.imgflip.com/1bij.jpg"),r=Object(p.a)(l,2),o=r[0],m=r[1],u=c.a.useState({topText:"",botText:""}),f=Object(p.a)(u,2),g=f[0],E=f[1];function d(e){E(function(t){return Object(s.a)({},t,Object(i.a)({},e.target.name,e.target.value))})}return c.a.useEffect(function(){fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(e){return n(e.data.memes)})},[]),c.a.createElement("div",{className:"memebox"},c.a.createElement("div",{className:"inputDiv"},c.a.createElement("form",null,c.a.createElement("input",{className:"input1",placeholder:"    Top Text",onChange:d,name:"topText",value:g.topText}),c.a.createElement("input",{className:"input2",placeholder:"    Bottom Text",onChange:d,name:"botText",value:g.botText}))),c.a.createElement("button",{className:"generateButton",onClick:function(){var e=Math.floor(Math.random()*a.length),t=a[e].url;m(t)}}," Get a new meme image \ud83d\uddbc"),c.a.createElement("div",null,c.a.createElement("p",{className:"topText"}," ",g.topText," "),c.a.createElement("img",{className:"memeImg",src:o}),c.a.createElement("p",{className:"botText"}," ",g.botText)))}function g(){return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(f,null))}var E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),l(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(g,null)),E()},5:function(e,t,a){e.exports=a.p+"static/media/trollface.16ea36d1.png"},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.fb21b368.chunk.js.map