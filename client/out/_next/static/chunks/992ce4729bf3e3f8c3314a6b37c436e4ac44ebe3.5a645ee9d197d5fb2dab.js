(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"+rzG":function(e,n){throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-babel-loader.js):\nSyntaxError: /Users/archivaldi/Documents/4wheelz/client/src/components/MiniDrawer.js: Identifier 'handleLogout' has already been declared (54:10)\n\n\x1b[0m \x1b[90m 52 | \x1b[39m    }\x1b[0m\n\x1b[0m \x1b[90m 53 | \x1b[39m\x1b[0m\n\x1b[0m\x1b[31m\x1b[1m>\x1b[22m\x1b[39m\x1b[90m 54 | \x1b[39m    \x1b[36mconst\x1b[39m handleLogout \x1b[33m=\x1b[39m \x1b[36masync\x1b[39m () \x1b[33m=>\x1b[39m {\x1b[0m\n\x1b[0m \x1b[90m    | \x1b[39m          \x1b[31m\x1b[1m^\x1b[22m\x1b[39m\x1b[0m\n\x1b[0m \x1b[90m 55 | \x1b[39m        \x1b[36mconst\x1b[39m res \x1b[33m=\x1b[39m \x1b[36mawait\x1b[39m fetch(\x1b[32m'/api/typing-dna/destroyAccount'\x1b[39m\x1b[33m,\x1b[39m {\x1b[0m\n\x1b[0m \x1b[90m 56 | \x1b[39m            method\x1b[33m:\x1b[39m \x1b[32m'POST'\x1b[39m\x1b[0m\n\x1b[0m \x1b[90m 57 | \x1b[39m        })\x1b[0m\n    at Object._raise (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:776:17)\n    at Object.raiseWithData (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:769:17)\n    at Object.raise (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:737:17)\n    at ScopeHandler.checkRedeclarationInScope (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:4955:12)\n    at ScopeHandler.declareName (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:4921:12)\n    at Object.checkLVal (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:9672:24)\n    at Object.parseVarId (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:12461:10)\n    at Object.parseVar (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:12436:12)\n    at Object.parseVarStatement (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:12251:10)\n    at Object.parseStatementContent (/Users/archivaldi/Documents/4wheelz/client/node_modules/@babel/parser/lib/index.js:11843:21)")},"8/g6":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=t("kNCj")},bJni:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a={userInfo:"/api/db/check-user",addUserInfo:"/api/db/add-info"}},bVjH:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var a=t("o0o1"),r=t.n(a),i=t("HaE+"),o=t("q1tI"),l=t.n(o),s=t("79Xs"),c=t("kfFl"),d=t("yv+Y"),u=t("EQI2"),m=t("r9w1"),b=t("wx14"),f=t("Ff2n"),p=(t("17x9"),t("iuhU")),h=t("H2TA"),v=t("ye/S"),g=o.forwardRef((function(e,n){var t=e.absolute,a=void 0!==t&&t,r=e.classes,i=e.className,l=e.component,s=void 0===l?"hr":l,c=e.flexItem,d=void 0!==c&&c,u=e.light,m=void 0!==u&&u,h=e.orientation,v=void 0===h?"horizontal":h,g=e.role,y=void 0===g?"hr"!==s?"separator":void 0:g,w=e.variant,j=void 0===w?"fullWidth":w,O=Object(f.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(s,Object(b.a)({className:Object(p.a)(r.root,i,"fullWidth"!==j&&r[j],a&&r.absolute,d&&r.flexItem,m&&r.light,"vertical"===v&&r.vertical),role:y,ref:n},O))})),y=Object(h.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(v.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(g),w=t("+JwS"),j=t("Z3vd"),O=t("ZiQX"),x=t("R/WZ"),S=Object(x.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px","& > *":{margin:e.spacing(1),width:"25ch"}},logoutButton:{color:"#d9534f"},content:{maxHeight:500}}})),z=t("ULge"),C=t("bJni"),N=t("ot8U"),k=l.a.createElement;function I(){var e=S(),n=e.content,t=e.root,a=e.logoutButton,b=z.a.route,f=b.logout,p=b.session,h=C.a.userInfo,v=C.a.addUserInfo,g=Object(o.useState)(!1),x=g[0],I=g[1],D=Object(o.useState)(!1),P=D[0],_=D[1],E=Object(o.useState)(null),T=E[0],U=E[1],F=Object(o.useState)(!1),R=F[0],V=F[1],L=Object(o.useState)("Error!"),M=L[0],H=L[1],W=Object(N.a)({firstName:"",lastName:"",state:"",county:"",city:"",street:"",zip:"",transactionId:"",price:"",vin:"",year:"",make:"",model:"",body:"",odometer:"",titleNumber:"",regDate:"",regNumber:"",licenseNumber:""}),B=W.values,J=W.updateValue,q=B.firstName,A=B.lastName,G=B.state,Z=B.county,X=B.city,Q=B.street,Y=B.zip,K=B.transactionId,$=B.price,ee=B.vin,ne=B.year,te=B.make,ae=B.model,re=B.body,ie=B.odometer,oe=B.titleNumber,le=B.regDate,se=B.regNumber,ce=B.licenseNumber,de=function(){var e=Object(i.a)(r.a.mark((function e(){var n,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(""===q||""===A||""===G||""===Z||""===X||""===Q||""===Y||"buyer"===T&&""===K||"seller"===T&&""===$||"seller"===T&&""===ee||"seller"===T&&""===ne||"seller"===T&&""===te||"seller"===T&&""===ae||"seller"===T&&""===re||"seller"===T&&""===ie||"seller"===T&&""===oe||"seller"===T&&""===ce)){e.next=5;break}H("Missing Fields!"),!1===R&&(V(!0),setTimeout((function(){V(!1)}),3e3)),e.next=14;break;case 5:return _(!0),e.next=8,fetch(v,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({firstName:q,lastName:A,state:G,county:Z,city:X,street:Q,zip:Y,transactionId:K,price:$,vin:ee,year:ne,make:te,model:ae,body:re,odometer:ie,titleNumber:oe,regDate:le,regNumber:se,licenseNumber:ce})});case 8:return n=e.sent,e.next=11,n.json();case 11:t=e.sent,console.log(t),t.user_id?window.location.replace("/dashboard"):(H(t.error),!1===R&&(V(!0),setTimeout((function(){V(!1)}),3e3)),_(!1));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f,{method:"POST"});case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){!function(){var e=Object(i.a)(r.a.mark((function e(){var n,t,a,i,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p,{method:"POST"});case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,a=t.role,U(a),e.next=10,fetch(h,{method:"POST"});case 10:return i=e.sent,e.next=13,i.json();case 13:o=e.sent,"Some info missing"===o.message&&I(!0);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),k("div",null,k(s.a,{open:R},k(O.a,{severity:"error"},M)),k(c.a,{open:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},k(d.a,{id:"alert-dialog-title"},"Please fill out this form \ud83d\ude0a"),k(u.a,{className:n},k("form",{className:t,noValidate:!0,autoComplete:"off"},k(m.a,{disabled:P,value:q,name:"firstName",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"First Name",color:"secondary"}),k(m.a,{disabled:P,value:A,name:"lastName",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Last Name",color:"secondary"}),k(m.a,{disabled:P,value:G,name:"state",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"State",color:"secondary"}),k(m.a,{disabled:P,value:Z,name:"county",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"County",color:"secondary"}),k(m.a,{disabled:P,value:X,name:"city",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"City",color:"secondary"}),k(m.a,{disabled:P,value:Q,name:"street",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Street",color:"secondary"}),k(m.a,{disabled:P,value:Y,name:"zip",onChange:J,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Zip",color:"secondary"}),k(y,null),k(l.a.Fragment,null,"buyer"===T&&k(m.a,{disabled:P,value:K,name:"transactionId",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Transaction ID",color:"secondary"}),"seller"===T&&k(l.a.Fragment,null,k(m.a,{disabled:P,value:$,name:"price",onChange:J,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Price",color:"secondary"}),k(m.a,{disabled:P,value:ee,name:"vin",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Vin",color:"secondary"}),k(m.a,{disabled:P,value:ne,name:"year",onChange:J,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Year",color:"secondary"}),k(m.a,{disabled:P,value:te,name:"make",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Make",color:"secondary"}),k(m.a,{disabled:P,value:ae,name:"model",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Model",color:"secondary"}),k(m.a,{disabled:P,value:re,name:"body",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Body",color:"secondary"}),k(m.a,{disabled:P,value:ie,name:"odometer",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Odometer",color:"secondary"}),k(y,null),k(m.a,{disabled:P,value:le,name:"regDate",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Registration Date",color:"secondary"}),k(m.a,{disabled:P,value:se,name:"regNumber",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Registration Number",color:"secondary"}),k(m.a,{disabled:P,value:oe,name:"titleNumber",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"Title Number",color:"secondary"}),k(m.a,{disabled:P,value:ce,name:"licenseNumber",onChange:J,variant:"outlined",id:"outlined-size-normal",label:"License Plate Number",color:"secondary"}))))),k(w.a,null,k(j.a,{disabled:P,size:"large",className:a,onClick:ue},"Log Out"),k(j.a,{disabled:P,size:"large",color:"secondary",onClick:de},"Submit"))))}},"fE/f":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t("o0o1"),r=t.n(a),i=t("HaE+"),o=t("q1tI"),l=t.n(o),s=t("iae6"),c=t("ULge"),d=t("wKsx"),u=l.a.createElement;function m(e){var n=e.children,t=c.a.route.session,a=Object(d.a)().page,m=Object(o.useState)(null),b=m[0],f=m[1];return Object(o.useEffect)((function(){!function(){var e=Object(i.a)(r.a.mark((function e(){var n,a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,(i=a.user_id)?f(i):window.location.replace("/");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),u(l.a.Fragment,null,b?u(l.a.Fragment,null,n):u("div",{className:a},u(s.a,{color:"secondary"})))}},"fx/U":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return c}));var a=t("rePB"),r=t("R/WZ");function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=function(e,n){var t={root:{display:"flex"},appBar:{backgroundColor:"primary",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(a.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:o({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),display:"flex",flexDirection:"column",height:"100vh",justifyContent:"flex-start"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},exitIcon:{color:"#d9534f"}};switch(n){case"uploadStyles":return o(o({},t),{},{content:o(o({},t.content),{},{gridTemplateRows:"5vh 17.5vh 17.5vh 17.5vh 17.5vh"})});case"dashboardStyles":return o(o({},t),{},{content:o(o({},t.content),{},{gridTemplateRows:"5vh 38vh 38vh"}),loading:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}})}},s=Object(r.a)((function(e){return l(e,"uploadStyles")})),c=Object(r.a)((function(e){return l(e,"dashboardStyles")}))},kNCj:function(e,n,t){"use strict";t.r(n),t.d(n,"capitalize",(function(){return a.a})),t.d(n,"createChainedFunction",(function(){return r.a})),t.d(n,"createSvgIcon",(function(){return i.a})),t.d(n,"debounce",(function(){return o.a})),t.d(n,"deprecatedPropType",(function(){return l})),t.d(n,"isMuiElement",(function(){return s.a})),t.d(n,"ownerDocument",(function(){return c.a})),t.d(n,"ownerWindow",(function(){return d.a})),t.d(n,"requirePropFactory",(function(){return u})),t.d(n,"setRef",(function(){return m.a})),t.d(n,"unsupportedProp",(function(){return b})),t.d(n,"useControlled",(function(){return f.a})),t.d(n,"useEventCallback",(function(){return p.a})),t.d(n,"useForkRef",(function(){return h.a})),t.d(n,"unstable_useId",(function(){return g})),t.d(n,"useIsFocusVisible",(function(){return y.a}));var a=t("NqtD"),r=t("x6Ns"),i=t("5AJ6"),o=t("l3Wi");function l(e,n){return function(){return null}}var s=t("ucBr"),c=t("gk1O"),d=t("g+pH");function u(e){return function(){return null}}var m=t("GIek");function b(e,n,t,a,r){return null}var f=t("yCxk"),p=t("Ovef"),h=t("bfFb"),v=t("q1tI");function g(e){var n=v.useState(e),t=n[0],a=n[1],r=e||t;return v.useEffect((function(){null==t&&a("mui-".concat(Math.round(1e5*Math.random())))}),[t]),r}var y=t("G7As")},vrJG:function(e,n,t){"use strict";var a=t("TqRt"),r=t("284h");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("q1tI")),o=(0,a(t("8/g6")).default)(i.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");n.default=o}}]);