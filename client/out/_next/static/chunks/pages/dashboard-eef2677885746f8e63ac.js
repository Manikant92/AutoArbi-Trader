_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2wU4":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t("sFYk")}])},ot8U:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),r=t("q1tI");function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e){var a=Object(r.useState)(e),t=a[0],o=a[1];return{values:t,updateValue:function(e){var a=e.target,r=a.value,l=a.type,c=a.name;"number"===l&&(r=parseInt(r)),o(i(i({},t),{},Object(n.a)({},c,r)))}}}},sFYk:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return $}));var n=t("o0o1"),r=t.n(n),o=t("HaE+"),i=t("q1tI"),l=t.n(i),c=t("fE/f"),s=t("+rzG"),u=t("30+C"),d=t("oa/T"),m=t("ofer"),b=t("rePB"),f=t("R/WZ"),p=Object(f.a)((function(e){var a;return{root:{display:"grid",gap:"1em",minWidth:"260px",height:"50vh",marginBottom:"2em"},header:{display:"grid",gridTemplateColumns:"50% 50%"},progress:{display:"grid",margin:"0 50px 0 50px"},documents:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",flexWrap:"wrap"},items:{display:"flex",flexDirection:"row"},userNameFont:(a={fontSize:"3vw"},Object(b.a)(a,e.breakpoints.down("lg"),{fontSize:"2vw"}),Object(b.a)(a,e.breakpoints.down("sm"),{fontSize:"1.5em"}),a),font:Object(b.a)({fontSize:"1.5vw"},e.breakpoints.down("sm"),{fontSize:"1em"}),accent:{color:"#62bdf9"}}})),v=t("wx14"),y=t("Ff2n"),g=(t("17x9"),t("iuhU")),h=t("NqtD"),O=t("H2TA"),j=t("ye/S"),w=t("tr08"),N=i.forwardRef((function(e,a){var t=e.classes,n=e.className,r=e.color,o=void 0===r?"primary":r,l=e.value,c=e.valueBuffer,s=e.variant,u=void 0===s?"indeterminate":s,d=Object(y.a)(e,["classes","className","color","value","valueBuffer","variant"]),m=Object(w.a)(),b={},f={bar1:{},bar2:{}};if("determinate"===u||"buffer"===u)if(void 0!==l){b["aria-valuenow"]=Math.round(l),b["aria-valuemin"]=0,b["aria-valuemax"]=100;var p=l-100;"rtl"===m.direction&&(p=-p),f.bar1.transform="translateX(".concat(p,"%)")}else 0;if("buffer"===u)if(void 0!==c){var O=(c||0)-100;"rtl"===m.direction&&(O=-O),f.bar2.transform="translateX(".concat(O,"%)")}else 0;return i.createElement("div",Object(v.a)({className:Object(g.a)(t.root,t["color".concat(Object(h.a)(o))],n,{determinate:t.determinate,indeterminate:t.indeterminate,buffer:t.buffer,query:t.query}[u]),role:"progressbar"},b,{ref:a},d),"buffer"===u?i.createElement("div",{className:Object(g.a)(t.dashed,t["dashedColor".concat(Object(h.a)(o))])}):null,i.createElement("div",{className:Object(g.a)(t.bar,t["barColor".concat(Object(h.a)(o))],("indeterminate"===u||"query"===u)&&t.bar1Indeterminate,{determinate:t.bar1Determinate,buffer:t.bar1Buffer}[u]),style:f.bar1}),"determinate"===u?null:i.createElement("div",{className:Object(g.a)(t.bar,("indeterminate"===u||"query"===u)&&t.bar2Indeterminate,"buffer"===u?[t["color".concat(Object(h.a)(o))],t.bar2Buffer]:t["barColor".concat(Object(h.a)(o))]),style:f.bar2}))})),k=Object(O.a)((function(e){var a=function(a){return"light"===e.palette.type?Object(j.e)(a,.62):Object(j.a)(a,.5)},t=a(e.palette.primary.main),n=a(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:t},colorSecondary:{backgroundColor:n},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(N),x=l.a.createElement,C=Object(f.a)({root:{width:"100%"}});function z(e){var a=e.value,t=C().root;return x("div",{className:t},x(k,{variant:"determinate",value:a,color:100===a?"secondary":"primary"}))}var P=t("vrJG"),S=t.n(P),E=l.a.createElement;function I(e){var a=e.data,t=a.docs,n=a.name,r=a.title,o=p(),i=o.root,l=o.header,c=o.documents,s=o.items,b=o.progress,f=o.accent,v=o.font,y=o.userNameFont;var g=function(e){var a=0;return e.forEach((function(e){e.completed?a++:a=a})),a/e.length*100}(t);return E(u.a,{className:i},E(d.a,{className:l},E("div",null,E(m.a,{className:y},n),E(m.a,{className:"".concat(f," ").concat(v)},r)),E("div",{className:c},t.map((function(e){var a=e.id,t=e.completed,n=e.type;return E("div",{className:s,key:a},E(S.a,{className:v,color:t?"secondary":"primary"}),E(m.a,{className:v,color:"textSecondary"},n))})))),E("div",{className:b},E(z,{value:g})))}var B=t("kfFl"),D=t("yv+Y"),F=t("EQI2"),_=t("r9w1"),T=t("wb2y"),q=t("+JwS"),U=t("Z3vd"),L=Object(f.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px","& > *":{margin:e.spacing(1),width:"25ch"}},logoutButton:{color:"#d9534f"},content:{maxHeight:500}}})),J=t("ULge"),M=t("ot8U"),V=l.a.createElement;function W(e){var a=e.open,t=(e.userFields,L()),n=t.content,c=t.root,s=t.logoutButton,u=J.a.route,d=u.logout,m=u.session,b=Object(i.useState)(null),f=b[0],p=b[1],v=Object(M.a)({firstName:"",lastName:"",state:"",county:"",city:"",street:"",zip:"",transactionId:"",price:"",vin:"",year:"",make:"",model:"",body:"",odometer:"",titleNumber:"",licenseNumber:""}),y=v.values,g=v.updateValue,h=y.firstName,O=y.lastName,j=y.state,w=y.county,N=y.city,k=y.street,x=y.zip,C=y.transactionId,z=y.price,P=y.vin,S=y.year,E=y.make,I=y.model,W=y.body,X=y.odometer,Y=y.titleNumber,H=y.licenseNumber,R=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d,{method:"POST"});case 2:e.sent,window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var a,t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,n=t.role,p(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),V("div",null,V(B.a,{open:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},V(D.a,{id:"alert-dialog-title"},"Please fill out this form \ud83d\ude0a"),V(F.a,{className:n},V("form",{className:c,noValidate:!0,autoComplete:"off"},V(_.a,{value:h,name:"firstName",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"First Name",color:"secondary"}),V(_.a,{value:O,name:"lastName",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Last Name",color:"secondary"}),V(_.a,{value:j,name:"state",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"State",color:"secondary"}),V(_.a,{value:w,name:"county",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"County",color:"secondary"}),V(_.a,{value:N,name:"city",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"City",color:"secondary"}),V(_.a,{value:k,name:"street",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Street",color:"secondary"}),V(_.a,{value:x,name:"zip",onChange:g,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Zip",color:"secondary"}),V(T.a,null),V(l.a.Fragment,null,"buyer"===f&&V(_.a,{value:C,name:"transactionId",onChange:g,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Transaction ID",color:"secondary"}),"seller"===f&&V(l.a.Fragment,null,V(_.a,{value:z,name:"price",onChange:g,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Price",color:"secondary"}),V(_.a,{value:P,name:"vin",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Vin",color:"secondary"}),V(_.a,{value:S,name:"year",onChange:g,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Year",color:"secondary"}),V(_.a,{value:E,name:"make",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Make",color:"secondary"}),V(_.a,{value:I,name:"model",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Model",color:"secondary"}),V(_.a,{value:W,name:"body",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Body",color:"secondary"}),V(_.a,{value:X,name:"odometer",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Odometer",color:"secondary"}),V(T.a,null),V(_.a,{value:Y,name:"titleNumber",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"Title Number",color:"secondary"}),V(_.a,{value:H,name:"licenseNumber",onChange:g,variant:"outlined",id:"outlined-size-normal",label:"License Plate Number",color:"secondary"}))))),V(q.a,null,V(U.a,{size:"large",className:s,onClick:R},"Log Out"),V(U.a,{size:"large",color:"secondary"},"Submit"))))}var X=t("L4PR"),Y=t("fx/U"),H=t("49Ka"),R="/api/db/check-user",Z=l.a.createElement;function $(){var e=Object(Y.a)(),a=X.a.buyer,t=X.a.seller,n=R,u=Object(i.useState)(!1),d=u[0],m=u[1];return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var a,t,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{method:"POST"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,o=t.message,console.log(o),"Some info missing"===o&&m(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Z(c.a,null,Z(s.a,{allDocsComplete:Object(H.a)(a,t),classes:e},Z(l.a.Fragment,null,Z(W,{open:d}),Z(I,{key:2,data:t})),Z(l.a.Fragment,null,Z(I,{key:1,data:a}))))}}},[["2wU4",0,2,1,3,4,5]]]);