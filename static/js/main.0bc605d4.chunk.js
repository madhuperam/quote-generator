(this.webpackJsonpquote_machine=this.webpackJsonpquote_machine||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),s=n(4),i=n.n(s),r=(n(14),n(5)),d=n(6),u=n(2),l=n(8),b=n(7),h=(n.p,n(15),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={author:"- Albert Einstein",quote:"A person who never made a mistake never tried anything new."},o.setRandomColor=o.setRandomColor.bind(Object(u.a)(o)),o.getRandomQuote=o.getRandomQuote.bind(Object(u.a)(o)),o}return Object(d.a)(n,[{key:"getRandomQuote",value:function(){var t=Math.floor(1643*Math.random()),e="",n="";fetch("https://type.fit/api/quotes").then((function(t){return t.json()})).then((function(o){n+=o[t].text,e+=o[t].author,console.log(e),console.log(n),document.getElementById("text").innerHTML=n,document.getElementById("author").innerHTML="- "+e})),this.setState((function(){return{author:e,quote:n}})),console.log(e),console.log(n)}},{key:"setRandomColor",value:function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];"#ffffff"===t&&(t="#ff4dc4"),this.getRandomQuote(),document.body.style.background=t,document.body.style.color=t;var n=document.getElementsByClassName("buttons");for(e=0;e<n.length;e++)n[e].style.background=t}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{id:"quote-box",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{id:"text-box",children:[Object(o.jsx)("i",{className:"fas fa-quote-left"}),Object(o.jsx)("p",{id:"text",children:"A person who never made a mistake never tried anything new."})]}),Object(o.jsx)("div",{id:"author",children:"- Albert Einstein"}),Object(o.jsxs)("div",{id:"buttons",children:[Object(o.jsx)("a",{href:"https://twitter.com/intent/tweet",id:"tweet-quote",target:"_blank",children:Object(o.jsx)("button",{className:"btn btn-default buttons posts",children:Object(o.jsx)("i",{className:"fab fa-twitter"})})}),Object(o.jsx)("a",{href:"https://facebook.com/",id:"post-quote",target:"_blank",children:Object(o.jsx)("button",{className:"btn btn-default buttons posts",children:Object(o.jsx)("i",{className:"fab fa-facebook"})})}),Object(o.jsx)("button",{id:"new-quote",className:"btn btn-default buttons",onClick:this.setRandomColor,children:"New quote"})]})]})}),Object(o.jsx)("div",{className:"coder",children:Object(o.jsx)("strong",{children:"Coded by Madhurima Peram"})})]})}}]),n}(c.a.Component)),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),a(t),c(t),s(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.0bc605d4.chunk.js.map