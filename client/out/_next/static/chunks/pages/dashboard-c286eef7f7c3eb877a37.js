_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2wU4":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t("sFYk")}])},sFYk:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return G}));var n=t("q1tI"),r=t.n(n),o=t("fE/f"),i=t("+rzG"),l=t("30+C"),s=t("oa/T"),c=t("ofer"),d=t("rePB"),u=t("R/WZ"),m=Object(u.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px",height:"50vh",marginBottom:"2em"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(d.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(d.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(d.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),b=t("wx14"),f=t("Ff2n"),p=(t("17x9"),t("iuhU")),v=t("NqtD"),y=t("H2TA"),g=t("ye/S"),h=t("tr08"),N=n.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,l=e.value,s=e.valueBuffer,c=e.variant,d=void 0===c?"indeterminate":c,u=Object(f.a)(e,["classes","className","color","value","valueBuffer","variant"]),m=Object(h.a)(),y={},g={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==l){y["aria-valuenow"]=Math.round(l),y["aria-valuemin"]=0,y["aria-valuemax"]=100;var N=l-100;"rtl"===m.direction&&(N=-N),g.bar1.transform="translateX(".concat(N,"%)")}else 0;if("buffer"===d)if(void 0!==s){var w=(s||0)-100;"rtl"===m.direction&&(w=-w),g.bar2.transform="translateX(".concat(w,"%)")}else 0;return n.createElement("div",Object(b.a)({className:Object(p.a)(t.root,t["color".concat(Object(v.a)(i))],r,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[d]),role:"progressbar"},y,{ref:a},u),"buffer"===d?n.createElement("div",{className:Object(p.a)(t.dashed,t["dashedColor".concat(Object(v.a)(i))])}):null,n.createElement("div",{className:Object(p.a)(t.bar,t["barColor".concat(Object(v.a)(i))],("indeterminate"===d||"query"===d)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[d]),style:g.bar1}),"determinate"===d?null:n.createElement("div",{className:Object(p.a)(t.bar,("indeterminate"===d||"query"===d)&&t.bar2Indeterminate,"buffer"===d?[t["color".concat(Object(v.a)(i))],t.bar2Buffer]:t["barColor".concat(Object(v.a)(i))]),style:g.bar2}))})),w=Object(y.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(g.e)(a,.62):Object(g.a)(a,.5)},t=a(e.palette.primary.main),n=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(N),O=r.a.createElement,k=Object(u.a)({root:{width:"100%"}});function x(e){var a=e.value,t=k().root;return O("div",{className:t},O(w,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var C=t("vrJG"),j=t.n(C),z=r.a.createElement;function S(e){var a=e.data,t=a.docs,n=a.name,r=a.title,o=m(),i=o.root,d=o.header,u=o.documents,b=o.items,f=o.progress,p=o.accent,v=o.font,y=o.userNameFont;var g=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(t);return z(l.a,{className:i},z(s.a,{className:d},z("div",null,z(c.a,{className:y},n),z(c.a,{className:"".concat(p," ").concat(v)},r)),z("div",{className:u},t.map((function(e){var a=e.id,t=e.completed,n=e.type;return z("div",{className:b,key:a},z(j.a,{className:v,color:t?"secondary":"primary"}),z(c.a,{className:v,color:"textSecondary"},n))})))),z("div",{className:f},z(x,{value:g})))}var E=t("o0o1"),P=t.n(E),I=t("HaE+"),T=t("79Xs"),_=t("kfFl"),B=t("yv+Y"),F=t("EQI2"),D=t("r9w1"),q=t("wb2y"),L=t("+JwS"),U=t("Z3vd"),X=t("ZiQX"),M=Object(u.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px","& > *":{margin:e.spacing(1),width:"25ch"}},logoutButton:{color:"#d9534f"},content:{maxHeight:500}}})),J=t("ULge"),W="/api/db/check-user",Y=t("ot8U"),Z=r.a.createElement;function H(){var e=M(),a=e.content,t=e.root,o=e.logoutButton,i=J.a.route,l=i.logout,s=i.session,c=W,d=Object(n.useState)(!1),u=d[0],m=d[1],b=Object(n.useState)(!1),f=b[0],p=b[1],v=Object(n.useState)(null),y=v[0],g=v[1],h=Object(n.useState)(!1),N=h[0],w=h[1],O=Object(n.useState)("Error!"),k=O[0],x=O[1],C=Object(Y.a)({firstName:"",lastName:"",state:"",county:"",city:"",street:"",zip:"",transactionId:"",price:"",vin:"",year:"",make:"",model:"",body:"",odometer:"",titleNumber:"",licenseNumber:""}),j=C.values,z=C.updateValue,S=j.firstName,E=j.lastName,H=j.state,R=j.county,V=j.city,$=j.street,A=j.zip,G=j.transactionId,Q=j.price,K=j.vin,ee=j.year,ae=j.make,te=j.model,ne=j.body,re=j.odometer,oe=j.titleNumber,ie=j.licenseNumber,le=function(){var e=Object(I.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===S||""===E||""===H||""===R||""===V||""===$||""===A||"buyer"===y&&""===G||"seller"===y&&""===Q||"seller"===y&&""===K||"seller"===y&&""===ee||"seller"===y&&""===ae||"seller"===y&&""===te||"seller"===y&&""===ne||"seller"===y&&""===re||"seller"===y&&""===oe||"seller"===y&&""===ie?(x("Missing Fields!"),!1===N&&(w(!0),setTimeout((function(){w(!1)}),3e3))):(p(!0),setTimeout((function(){p(!1),m(!1)}),1e3));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(I.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l,{method:"POST"});case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){var e=Object(I.a)(P.a.mark((function e(){var a,t,n,r,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,n=t.role,g(n),e.next=10,fetch(c,{method:"POST"});case 10:return r=e.sent,e.next=13,r.json();case 13:o=e.sent,"Some info missing"===o.message&&m(!0);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Z("div",null,Z(T.a,{open:N},Z(X.a,{severity:"error"},k)),Z(_.a,{open:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},Z(B.a,{id:"alert-dialog-title"},"Please fill out this form \ud83d\ude0a"),Z(F.a,{className:a},Z("form",{className:t,noValidate:!0,autoComplete:"off"},Z(D.a,{disabled:f,value:S,name:"firstName",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"First Name",color:"secondary"}),Z(D.a,{disabled:f,value:E,name:"lastName",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Last Name",color:"secondary"}),Z(D.a,{disabled:f,value:H,name:"state",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"State",color:"secondary"}),Z(D.a,{disabled:f,value:R,name:"county",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"County",color:"secondary"}),Z(D.a,{disabled:f,value:V,name:"city",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"City",color:"secondary"}),Z(D.a,{disabled:f,value:$,name:"street",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Street",color:"secondary"}),Z(D.a,{disabled:f,value:A,name:"zip",onChange:z,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Zip",color:"secondary"}),Z(q.a,null),Z(r.a.Fragment,null,"buyer"===y&&Z(D.a,{disabled:f,value:G,name:"transactionId",onChange:z,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Transaction ID",color:"secondary"}),"seller"===y&&Z(r.a.Fragment,null,Z(D.a,{disabled:f,value:Q,name:"price",onChange:z,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Price",color:"secondary"}),Z(D.a,{disabled:f,value:K,name:"vin",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Vin",color:"secondary"}),Z(D.a,{disabled:f,value:ee,name:"year",onChange:z,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Year",color:"secondary"}),Z(D.a,{disabled:f,value:ae,name:"make",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Make",color:"secondary"}),Z(D.a,{disabled:f,value:te,name:"model",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Model",color:"secondary"}),Z(D.a,{disabled:f,value:ne,name:"body",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Body",color:"secondary"}),Z(D.a,{disabled:f,value:re,name:"odometer",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Odometer",color:"secondary"}),Z(q.a,null),Z(D.a,{disabled:f,value:oe,name:"titleNumber",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"Title Number",color:"secondary"}),Z(D.a,{disabled:f,value:ie,name:"licenseNumber",onChange:z,variant:"outlined",id:"outlined-size-normal",label:"License Plate Number",color:"secondary"}))))),Z(L.a,null,Z(U.a,{disabled:f,size:"large",className:o,onClick:se},"Log Out"),Z(U.a,{disabled:f,size:"large",color:"secondary",onClick:le},"Submit"))))}var R=t("L4PR"),V=t("fx/U"),$=t("49Ka"),A=r.a.createElement;function G(){var e=Object(V.a)(),a=R.a.buyer,t=R.a.seller;return A(o.a,null,A(i.a,{allDocsComplete:Object($.a)(a,t),classes:e},A(H,null),A(S,{key:2,data:t}),A(S,{key:1,data:a})))}}},[["2wU4",0,2,1,3,4,6,5]]]);