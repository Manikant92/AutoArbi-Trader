_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2wU4":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t("sFYk")}])},sFYk:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return U}));var r=t("o0o1"),n=t.n(r),o=t("HaE+"),i=t("q1tI"),c=t.n(i),l=t("iae6"),s=t("79Xs"),d=t("ZiQX"),u=t("bJni"),f=t("fE/f"),m=t("+rzG"),b=t("30+C"),p=t("oa/T"),v=t("ofer"),g=t("rePB"),y=t("R/WZ"),h=Object(y.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px",height:"50vh",marginBottom:"2em"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(g.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(g.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(g.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),O=t("wx14"),j=t("Ff2n"),w=(t("17x9"),t("iuhU")),k=t("NqtD"),x=t("H2TA"),N=t("ye/S"),S=t("tr08"),E=i.forwardRef((function(e,a){var t=e.classes,r=e.className,n=e.color,o=void 0===n?"primary":n,c=e.value,l=e.valueBuffer,s=e.variant,d=void 0===s?"indeterminate":s,u=Object(j.a)(e,["classes","className","color","value","valueBuffer","variant"]),f=Object(S.a)(),m={},b={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==c){m["aria-valuenow"]=Math.round(c),m["aria-valuemin"]=0,m["aria-valuemax"]=100;var p=c-100;"rtl"===f.direction&&(p=-p),b.bar1.transform="translateX(".concat(p,"%)")}else 0;if("buffer"===d)if(void 0!==l){var v=(l||0)-100;"rtl"===f.direction&&(v=-v),b.bar2.transform="translateX(".concat(v,"%)")}else 0;return i.createElement("div",Object(O.a)({className:Object(w.a)(t.root,t["color".concat(Object(k.a)(o))],r,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[d]),role:"progressbar"},m,{ref:a},u),"buffer"===d?i.createElement("div",{className:Object(w.a)(t.dashed,t["dashedColor".concat(Object(k.a)(o))])}):null,i.createElement("div",{className:Object(w.a)(t.bar,t["barColor".concat(Object(k.a)(o))],("indeterminate"===d||"query"===d)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[d]),style:b.bar1}),"determinate"===d?null:i.createElement("div",{className:Object(w.a)(t.bar,("indeterminate"===d||"query"===d)&&t.bar2Indeterminate,"buffer"===d?[t["color".concat(Object(k.a)(o))],t.bar2Buffer]:t["barColor".concat(Object(k.a)(o))]),style:b.bar2}))})),C=Object(x.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(N.e)(a,.62):Object(N.a)(a,.5)},t=a(e.palette.primary.main),r=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:r},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(E),I=c.a.createElement,P=Object(y.a)({root:{width:"100%"}});function _(e){var a=e.value,t=P().root;return I("div",{className:t},I(C,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var z=t("vrJG"),D=t.n(z),B=c.a.createElement;function T(e){var a=e.userData,t=a.firstName,r=a.lastName,n=(a.govId,a.title,a.billOfSale,a.registration,Object(i.useState)([])),o=n[0],l=n[1],s=h(),d=s.root,u=s.header,f=s.documents,m=s.items,g=s.progress,y=s.accent,O=s.font,j=s.userNameFont;var w=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(o);return Object(i.useEffect)((function(){var e=0,t=[];for(var r in a)if("govId"===r||"title"===r||"billOfSale"===r||"registration"===r){var n=void 0;"govId"===r&&(n="Government ID"),"title"===r&&(n="Vehicle Title"),"billOfSale"===r&&(n="Bill of Sale"),"registration"===r&&(n="Registration");var o={completed:a[r],type:n,id:e};t.push(o),e++}l(t)}),[a]),B(b.a,{className:d},B(p.a,{className:u},B("div",null,B(v.a,{className:j},B("span",null,t," ",r)),B(v.a,{className:"".concat(y," ").concat(O)},4===o.length?"Seller":"Buyer")),B("div",{className:f},o.length>0&&B(c.a.Fragment,null,o.map((function(e){var a=e.id,t=e.completed,r=e.type;return B("div",{className:m,key:a},B(D.a,{className:O,color:t?"secondary":"primary"}),B(v.a,{className:O,color:"textSecondary"},r))}))))),B("div",{className:g},B(_,{value:w})))}var q=t("bVjH"),F=t("L4PR"),X=t("fx/U"),J=t("49Ka"),R=c.a.createElement;function U(){var e=Object(X.a)(),a=F.a.buyer,t=F.a.seller,r=u.a.userInfo,b=Object(i.useState)(null),p=b[0],v=b[1],g=Object(i.useState)("No Id"),y=g[0],h=g[1],O=Object(i.useState)(!1),j=O[0],w=O[1];return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(n.a.mark((function e(){var a,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,v(t),t.seller.transaction_id&&(h("Your Transaction ID: ".concat(t.seller.transaction_id)),w(!0));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),console.log(r.seller),R(f.a,null,null===p?R("div",{className:e.loading},R(l.a,{color:"secondary"})):R(m.a,{allDocsComplete:Object(J.a)(a,t),classes:e},R(q.a,null),!r.seller&&R(s.a,{open:j},R(d.a,{severity:"info"},y)),p&&R(c.a.Fragment,null,p.seller&&R(T,{key:2,userData:p.seller}),p.buyer&&R(T,{key:1,userData:p.buyer}))))}}},[["2wU4",0,2,1,3,4,5]]]);