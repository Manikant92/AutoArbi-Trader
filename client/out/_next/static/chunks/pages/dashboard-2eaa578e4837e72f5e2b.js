_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"08aZ":function(e,t){throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\src\\components\\UserProgressCard.js: Identifier 'title' has already been declared (7:63)\n\n\x1b[0m \x1b[90m  5 | \x1b[39m\x1b[36mimport\x1b[39m \x1b[33mAttachFileIcon\x1b[39m \x1b[36mfrom\x1b[39m \x1b[32m'@material-ui/icons/AttachFile'\x1b[39m\x1b[33m;\x1b[39m\x1b[0m\n\x1b[0m \x1b[90m  6 | \x1b[39m\x1b[0m\n\x1b[0m\x1b[31m\x1b[1m>\x1b[22m\x1b[39m\x1b[90m  7 | \x1b[39m\x1b[36mexport\x1b[39m \x1b[36mdefault\x1b[39m \x1b[36mfunction\x1b[39m \x1b[33mUserProgressCard\x1b[39m({ data\x1b[33m:\x1b[39m { docs\x1b[33m,\x1b[39m name\x1b[33m,\x1b[39m title }\x1b[33m,\x1b[39m userData }) {\x1b[0m\n\x1b[0m \x1b[90m    | \x1b[39m                                                               \x1b[31m\x1b[1m^\x1b[22m\x1b[39m\x1b[0m\n\x1b[0m \x1b[90m  8 | \x1b[39m    \x1b[36mconst\x1b[39m { firstName\x1b[33m,\x1b[39m lastName\x1b[33m,\x1b[39m govId\x1b[33m,\x1b[39m title\x1b[33m,\x1b[39m billOfSale\x1b[33m,\x1b[39m registration } \x1b[33m=\x1b[39m userData\x1b[33m;\x1b[39m\x1b[0m\n\x1b[0m \x1b[90m  9 | \x1b[39m    \x1b[36mconst\x1b[39m docsTwo \x1b[33m=\x1b[39m [govId\x1b[33m,\x1b[39m title\x1b[33m,\x1b[39m billOfSale\x1b[33m,\x1b[39m registration]\x1b[0m\n\x1b[0m \x1b[90m 10 | \x1b[39m    \x1b[36mconst\x1b[39m {\x1b[0m\n    at Object._raise (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:776:17)\n    at Object.raiseWithData (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:769:17)\n    at Object.raise (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:737:17)\n    at ScopeHandler.checkRedeclarationInScope (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:4955:12)\n    at ScopeHandler.declareName (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:4935:14)\n    at Object.checkLVal (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:9672:24)\n    at Object.checkLVal (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:9689:16)\n    at Object.checkLVal (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:9689:16)\n    at Object.checkParams (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:11353:12)\n    at Object.<anonymous> (C:\\Users\\natha\\Desktop\\Current Projects\\4wheelz\\client\\node_modules\\@babel\\parser\\lib\\index.js:11328:14)")},"2wU4":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n("sFYk")}])},sFYk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n("o0o1"),r=n.n(a),s=n("HaE+"),m=n("q1tI"),o=n.n(m),l=n("iae6"),c=n("79Xs"),i=n("ZiQX"),d=n("bJni"),u=n("fE/f"),b=n("+rzG"),p=n("08aZ"),j=n.n(p),h=n("bVjH"),f=n("L4PR"),w=n("fx/U"),_=n("49Ka"),C=o.a.createElement;function k(){var e=Object(w.a)(),t=f.a.buyer,n=f.a.seller,a=d.a.userInfo,o=Object(m.useState)(null),p=o[0],k=o[1],x=Object(m.useState)("No Id"),O=x[0],P=x[1],D=Object(m.useState)(!1),U=D[0],z=D[1];return Object(m.useEffect)((function(){!function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,k(n),n.seller.transaction_id&&(P("Your Transaction ID: ".concat(n.seller.transaction_id)),z(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),C(u.a,null,null===p?C("div",{className:e.loading},C(l.a,{color:"secondary"})):C(b.a,{allDocsComplete:Object(_.a)(t,n),classes:e},C(h.a,null),C(c.a,{open:U},C(i.a,{severity:"info"},O)),C(j.a,{key:2,userData:p.seller,data:n})))}}},[["2wU4",0,2,1,3,4,5]]]);