(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"+rzG":function(e,t,n){"use strict";n.d(t,"a",(function(){return de}));var a=n("rePB"),r=n("KQm4"),o=n("o0o1"),i=n.n(o),c=n("HaE+"),l=n("q1tI"),s=n.n(l),u=n("iuhU"),d=n("YFqc"),f=n.n(d),p=n("5CWz"),m=n("wx14"),b=n("Ff2n"),v=(n("17x9"),n("H2TA")),h=n("NqtD"),g=n("kKAo"),y=l.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.color,o=void 0===r?"primary":r,i=e.position,c=void 0===i?"fixed":i,s=Object(b.a)(e,["classes","className","color","position"]);return l.createElement(g.a,Object(m.a)({square:!0,component:"header",elevation:4,className:Object(u.a)(n.root,n["position".concat(Object(h.a)(c))],n["color".concat(Object(h.a)(o))],a,"fixed"===c&&"mui-fixed"),ref:t},s))})),O=Object(v.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(y),j=l.forwardRef((function(e,t){var n=e.classes,a=e.className,r=e.component,o=void 0===r?"div":r,i=e.disableGutters,c=void 0!==i&&i,s=e.variant,d=void 0===s?"regular":s,f=Object(b.a)(e,["classes","className","component","disableGutters","variant"]);return l.createElement(o,Object(m.a)({className:Object(u.a)(n.root,n[d],a,!c&&n.gutters),ref:t},f))})),x=Object(v.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(a.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(j),w=n("PsDL"),k=n("ofer"),E=n("Xt1q"),C=n("+Isj"),N=n("i8i4"),S=n("l3Wi"),T=n("dRu9"),I=n("bfFb"),P=n("tr08"),z=n("wpWl"),M=n("4Hym");function L(e,t){var n=function(e,t){var n,a=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var r=window.getComputedStyle(t);n=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var o=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-a.left,"px)"):"right"===e?"translateX(-".concat(a.left+a.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-a.top,"px)"):"translateY(-".concat(a.top+a.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var R={enter:z.b.enteringScreen,exit:z.b.leavingScreen},q=l.forwardRef((function(e,t){var n=e.children,a=e.direction,r=void 0===a?"down":a,o=e.in,i=e.onEnter,c=e.onEntered,s=e.onEntering,u=e.onExit,d=e.onExited,f=e.onExiting,p=e.style,v=e.timeout,h=void 0===v?R:v,g=e.TransitionComponent,y=void 0===g?T.a:g,O=Object(b.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Object(P.a)(),x=l.useRef(null),w=l.useCallback((function(e){x.current=N.findDOMNode(e)}),[]),k=Object(I.a)(n.ref,w),E=Object(I.a)(k,t),C=function(e){return function(t){e&&(void 0===t?e(x.current):e(x.current,t))}},z=C((function(e,t){L(r,e),Object(M.b)(e),i&&i(e,t)})),q=C((function(e,t){var n=Object(M.a)({timeout:h,style:p},{mode:"enter"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(m.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.transition=j.transitions.create("transform",Object(m.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",s&&s(e,t)})),B=C(c),D=C(f),H=C((function(e){var t=Object(M.a)({timeout:h,style:p},{mode:"exit"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(m.a)({},t,{easing:j.transitions.easing.sharp})),e.style.transition=j.transitions.create("transform",Object(m.a)({},t,{easing:j.transitions.easing.sharp})),L(r,e),u&&u(e)})),A=C((function(e){e.style.webkitTransition="",e.style.transition="",d&&d(e)})),_=l.useCallback((function(){x.current&&L(r,x.current)}),[r]);return l.useEffect((function(){if(!o&&"down"!==r&&"right"!==r){var e=Object(S.a)((function(){x.current&&L(r,x.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[r,o]),l.useEffect((function(){o||_()}),[o,_]),l.createElement(y,Object(m.a)({nodeRef:x,onEnter:z,onEntered:B,onEntering:q,onExit:H,onExited:A,onExiting:D,appear:!0,in:o,timeout:h},O),(function(e,t){return l.cloneElement(n,Object(m.a)({ref:E,style:Object(m.a)({visibility:"exited"!==e||o?void 0:"hidden"},p,n.props.style)},t))}))})),B={left:"right",right:"left",top:"down",bottom:"up"};var D={enter:z.b.enteringScreen,exit:z.b.leavingScreen},H=l.forwardRef((function(e,t){var n=e.anchor,a=void 0===n?"left":n,r=e.BackdropProps,o=e.children,i=e.classes,c=e.className,s=e.elevation,d=void 0===s?16:s,f=e.ModalProps,p=(f=void 0===f?{}:f).BackdropProps,v=Object(b.a)(f,["BackdropProps"]),y=e.onClose,O=e.open,j=void 0!==O&&O,x=e.PaperProps,w=void 0===x?{}:x,k=e.SlideProps,N=e.TransitionComponent,S=void 0===N?q:N,T=e.transitionDuration,I=void 0===T?D:T,z=e.variant,M=void 0===z?"temporary":z,L=Object(b.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),R=Object(P.a)(),H=l.useRef(!1);l.useEffect((function(){H.current=!0}),[]);var A=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?B[t]:t}(R,a),_=l.createElement(g.a,Object(m.a)({elevation:"temporary"===M?d:0,square:!0},w,{className:Object(u.a)(i.paper,i["paperAnchor".concat(Object(h.a)(A))],w.className,"temporary"!==M&&i["paperAnchorDocked".concat(Object(h.a)(A))])}),o);if("permanent"===M)return l.createElement("div",Object(m.a)({className:Object(u.a)(i.root,i.docked,c),ref:t},L),_);var F=l.createElement(S,Object(m.a)({in:j,direction:B[A],timeout:I,appear:H.current},k),_);return"persistent"===M?l.createElement("div",Object(m.a)({className:Object(u.a)(i.root,i.docked,c),ref:t},L),F):l.createElement(E.a,Object(m.a)({BackdropProps:Object(m.a)({},r,p,{transitionDuration:I}),BackdropComponent:C.a,className:Object(u.a)(i.root,i.modal,c),open:j,onClose:y,ref:t},L,v),F)})),A=Object(v.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(H),_=n("wb2y"),F=n("eD//"),W=n("tVbE"),V=n("MquD"),U=l.forwardRef((function(e,t){var n=e.classes,a=e.className,r=Object(b.a)(e,["classes","className"]),o=l.useContext(V.a);return l.createElement("div",Object(m.a)({className:Object(u.a)(n.root,a,"flex-start"===o.alignItems&&n.alignItemsFlexStart),ref:t},r))})),G=Object(v.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(U),J=l.forwardRef((function(e,t){var n=e.children,a=e.classes,r=e.className,o=e.disableTypography,i=void 0!==o&&o,c=e.inset,s=void 0!==c&&c,d=e.primary,f=e.primaryTypographyProps,p=e.secondary,v=e.secondaryTypographyProps,h=Object(b.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=l.useContext(V.a).dense,y=null!=d?d:n;null==y||y.type===k.a||i||(y=l.createElement(k.a,Object(m.a)({variant:g?"body2":"body1",className:a.primary,component:"span",display:"block"},f),y));var O=p;return null==O||O.type===k.a||i||(O=l.createElement(k.a,Object(m.a)({variant:"body2",className:a.secondary,color:"textSecondary",display:"block"},v),O)),l.createElement("div",Object(m.a)({className:Object(u.a)(a.root,r,g&&a.dense,s&&a.inset,y&&O&&a.multiline),ref:t},h),y,O)})),K=Object(v.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(J),X=n("L+uM"),Y=n.n(X),Z=n("uniG"),Q=n.n(Z),$=n("76vg"),ee=n.n($),te=n("E2gh"),ne=n.n(te),ae=n("Kmmp"),re=n.n(ae),oe=n("wG+f"),ie=n.n(oe),ce=n("tB9+"),le=n.n(ce),se=n("ULge"),ue=s.a.createElement;function de(e){var t,n,o=e.children,s=e.classes,d=e.allDocsComplete,m=Object(P.a)(),b=Object(l.useState)(!1),v=b[0],h=b[1],g=se.a.route.logout,y=Object(l.useState)([]),j=y[0],E=y[1],C=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g,{method:"POST"});case 2:e.sent,window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/anvil/createEtchSigh",{method:"POST"});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(i.a.mark((function e(){var t,n,a,o,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Hit the button"),e.next=3,fetch("/api/db/userInfo",{method:"POST"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a=n.govId,o=n.registration,c=n.title,l=n.billOfSale,E((function(e){return[].concat(Object(r.a)(e),[a,o,c,l])})),console.log(j);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=s.root,I=s.appBar,z=s.appBarShift,M=s.menuButton,L=s.hide,R=s.logo,q=s.auto,B=s.arbiTrader,D=s.drawer,H=s.drawerOpen,V=s.drawerClose,U=s.content,J=s.toolbar,X=s.exitIcon;return ue("div",{className:T},ue(p.a,null),ue(O,{position:"fixed",className:Object(u.a)(I,Object(a.a)({},z,v))},ue(x,null,ue(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){h(!0)},edge:"start",className:Object(u.a)(M,Object(a.a)({},L,v))},ue(Q.a,null)),ue("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:R}),ue(k.a,{variant:"h6",noWrap:!0},ue("span",{className:q},"auto")," ",ue("span",{className:B},"arbi-trader")))),ue(A,{variant:"permanent",className:Object(u.a)(D,(t={},Object(a.a)(t,H,v),Object(a.a)(t,V,!v),t)),classes:{paper:Object(u.a)((n={},Object(a.a)(n,H,v),Object(a.a)(n,V,!v),n))}},ue("div",{className:J},ue(w.a,{onClick:function(){h(!1)}},"rtl"===m.direction?ue(ne.a,null):ue(ee.a,null))),ue(_.a,null),ue(F.a,null,ue(f.a,{href:"/dashboard"},ue(W.a,{button:!0},ue(G,null,ue(ie.a,null)),ue(K,null,"View Progress"))),ue(f.a,{href:"/upload"},ue(W.a,{button:!0,onClick:S},ue(G,null,ue(le.a,null)),ue(K,null,"Upload Documents"))),ue(W.a,{button:!0,disabled:!d,onClick:N},ue(G,null,ue(re.a,{color:d?"secondary":"primary"})),ue(K,null,"Send In Forms")),ue(_.a,null),ue(W.a,{button:!0,onClick:C},ue(G,null,ue(Y.a,{className:X})),ue(K,null,"Sign Out")))),ue("main",{className:U},ue("div",{className:J}),o))}},"49Ka":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("KQm4"),r=function(e,t){var n=[].concat(Object(a.a)(e.docs),Object(a.a)(t.docs));return n.filter((function(e){return!0===e.completed})).length===n.length}},"5CWz":function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),o=(n("17x9"),n("H2TA")),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)}))},"76vg":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=i},"8/g6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n("kNCj")},E2gh:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=i},Kmmp:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.default=i},"L+uM":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");t.default=i},YFqc:function(e,t,n){e.exports=n("cTJO")},bJni:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={userInfo:"/api/db/check-user",addUserInfo:"/api/db/add-info"}},bVjH:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),c=n.n(i),l=n("79Xs"),s=n("kfFl"),u=n("yv+Y"),d=n("EQI2"),f=n("r9w1"),p=n("wb2y"),m=n("+JwS"),b=n("Z3vd"),v=n("ZiQX"),h=n("R/WZ"),g=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"300px","& > *":{margin:e.spacing(1),width:"25ch"}},logoutButton:{color:"#d9534f"},content:{maxHeight:500}}})),y=n("ULge"),O=n("bJni"),j=n("ot8U"),x=c.a.createElement;function w(){var e=g(),t=e.content,n=e.root,a=e.logoutButton,h=y.a.route,w=h.logout,k=h.session,E=O.a.userInfo,C=O.a.addUserInfo,N=Object(i.useState)(!1),S=N[0],T=N[1],I=Object(i.useState)(!1),P=I[0],z=I[1],M=Object(i.useState)(null),L=M[0],R=M[1],q=Object(i.useState)(!1),B=q[0],D=q[1],H=Object(i.useState)("Error!"),A=H[0],_=H[1],F=Object(j.a)({firstName:"Nate",lastName:"Ryan",state:"TX",county:"Williamson",city:"Austin",street:"12300 Patron",zip:"78758",transactionId:"",price:"12000",vin:"heyhey",year:"1975",make:"volks",model:"beetle",body:"standard",odometer:"100000",titleNumber:"15-1700",licenseNumber:"eat@$$"}),W=F.values,V=F.updateValue,U=W.firstName,G=W.lastName,J=W.state,K=W.county,X=W.city,Y=W.street,Z=W.zip,Q=W.transactionId,$=W.price,ee=W.vin,te=W.year,ne=W.make,ae=W.model,re=W.body,oe=W.odometer,ie=W.titleNumber,ce=W.licenseNumber,le=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(""===U||""===G||""===J||""===K||""===X||""===Y||""===Z||"buyer"===L&&""===Q||"seller"===L&&""===$||"seller"===L&&""===ee||"seller"===L&&""===te||"seller"===L&&""===ne||"seller"===L&&""===ae||"seller"===L&&""===re||"seller"===L&&""===oe||"seller"===L&&""===ie||"seller"===L&&""===ce)){e.next=5;break}_("Missing Fields!"),!1===B&&(D(!0),setTimeout((function(){D(!1)}),3e3)),e.next=14;break;case 5:return z(!0),e.next=8,fetch(C,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({firstName:U,lastName:G,state:J,county:K,city:X,street:Y,zip:Z,transactionId:Q,price:$,vin:ee,year:te,make:ne,model:ae,body:re,odometer:oe,titleNumber:ie,licenseNumber:ce})});case 8:return t=e.sent,e.next=11,t.json();case 11:n=e.sent,console.log(n),n.user_id?window.location.replace("/dashboard"):(_(n.error),!1===B&&(D(!0),setTimeout((function(){D(!1)}),3e3)),z(!1));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w,{method:"POST"});case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(k,{method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.role,R(a),e.next=10,fetch(E,{method:"POST"});case 10:return o=e.sent,e.next=13,o.json();case 13:i=e.sent,"Some info missing"===i.message&&T(!0);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),x("div",null,x(l.a,{open:B},x(v.a,{severity:"error"},A)),x(s.a,{open:S,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},x(u.a,{id:"alert-dialog-title"},"Please fill out this form \ud83d\ude0a"),x(d.a,{className:t},x("form",{className:n,noValidate:!0,autoComplete:"off"},x(f.a,{disabled:P,value:U,name:"firstName",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"First Name",color:"secondary"}),x(f.a,{disabled:P,value:G,name:"lastName",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Last Name",color:"secondary"}),x(f.a,{disabled:P,value:J,name:"state",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"State",color:"secondary"}),x(f.a,{disabled:P,value:K,name:"county",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"County",color:"secondary"}),x(f.a,{disabled:P,value:X,name:"city",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"City",color:"secondary"}),x(f.a,{disabled:P,value:Y,name:"street",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Street",color:"secondary"}),x(f.a,{disabled:P,value:Z,name:"zip",onChange:V,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Zip",color:"secondary"}),x(p.a,null),x(c.a.Fragment,null,"buyer"===L&&x(f.a,{disabled:P,value:Q,name:"transactionId",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Transaction ID",color:"secondary"}),"seller"===L&&x(c.a.Fragment,null,x(f.a,{disabled:P,value:$,name:"price",onChange:V,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Price",color:"secondary"}),x(f.a,{disabled:P,value:ee,name:"vin",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Vin",color:"secondary"}),x(f.a,{disabled:P,value:te,name:"year",onChange:V,type:"number",variant:"outlined",id:"outlined-size-normal",label:"Year",color:"secondary"}),x(f.a,{disabled:P,value:ne,name:"make",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Make",color:"secondary"}),x(f.a,{disabled:P,value:ae,name:"model",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Model",color:"secondary"}),x(f.a,{disabled:P,value:re,name:"body",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Body",color:"secondary"}),x(f.a,{disabled:P,value:oe,name:"odometer",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Odometer",color:"secondary"}),x(p.a,null),x(f.a,{disabled:P,value:ie,name:"titleNumber",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"Title Number",color:"secondary"}),x(f.a,{disabled:P,value:ce,name:"licenseNumber",onChange:V,variant:"outlined",id:"outlined-size-normal",label:"License Plate Number",color:"secondary"}))))),x(m.a,null,x(b.a,{disabled:P,size:"large",className:a,onClick:se},"Log Out"),x(b.a,{disabled:P,size:"large",color:"secondary",onClick:le},"Submit"))))}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var o,i=r(n("q1tI")),c=n("elyg"),l=n("nOHt"),s=new Map,u=window.IntersectionObserver,d={};var f=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,a){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=a(n,2),o=r[0],s=r[1],m=(0,l.useRouter)(),b=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(b,e.href,!0),n=a(t,2),r=n[0],o=n[1];return{href:r,as:e.as?(0,c.resolveHref)(b,e.as):o||r}}),[b,e.href,e.as]),h=v.href,g=v.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(h)&&!d[h+"%"+g])return f(o,(function(){p(m,h,g)}))}),[t,o,h,g,m]);var y=e.children,O=e.replace,j=e.shallow,x=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var w=i.Children.only(y),k={ref:function(e){e&&s(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,h,g,O,j,x)}};return t&&(k.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),p(m,h,g,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(g,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(w,k)};t.default=m},"fE/f":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("o0o1"),r=n.n(a),o=n("HaE+"),i=n("q1tI"),c=n.n(i),l=n("iae6"),s=n("ULge"),u=n("wKsx"),d=c.a.createElement;function f(e){var t=e.children,n=s.a.route.session,a=Object(u.a)().page,f=Object(i.useState)(null),p=f[0],m=f[1];return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,(o=a.user_id)?m(o):window.location.replace("/");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),d(c.a.Fragment,null,p?d(c.a.Fragment,null,t):d("div",{className:a},d(l.a,{color:"secondary"})))}},"fx/U":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var a=n("rePB"),r=n("R/WZ");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t){var n={root:{display:"flex"},appBar:{backgroundColor:"primary",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(a.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:i({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),display:"flex",flexDirection:"column",height:"100vh",justifyContent:"flex-start"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},exitIcon:{color:"#d9534f"}};switch(t){case"uploadStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 17.5vh 17.5vh 17.5vh 17.5vh"})});case"dashboardStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 38vh 38vh"}),loading:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}})}},l=Object(r.a)((function(e){return c(e,"uploadStyles")})),s=Object(r.a)((function(e){return c(e,"dashboardStyles")}))},kNCj:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return r.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return l.a})),n.d(t,"ownerDocument",(function(){return s.a})),n.d(t,"ownerWindow",(function(){return u.a})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return f.a})),n.d(t,"unsupportedProp",(function(){return p})),n.d(t,"useControlled",(function(){return m.a})),n.d(t,"useEventCallback",(function(){return b.a})),n.d(t,"useForkRef",(function(){return v.a})),n.d(t,"unstable_useId",(function(){return g})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var a=n("NqtD"),r=n("x6Ns"),o=n("5AJ6"),i=n("l3Wi");function c(e,t){return function(){return null}}var l=n("ucBr"),s=n("gk1O"),u=n("g+pH");function d(e){return function(){return null}}var f=n("GIek");function p(e,t,n,a,r){return null}var m=n("yCxk"),b=n("Ovef"),v=n("bfFb"),h=n("q1tI");function g(e){var t=h.useState(e),n=t[0],a=t[1],r=e||n;return h.useEffect((function(){null==n&&a("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}var y=n("G7As")},"tB9+":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=i},uniG:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},vrJG:function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");t.default=i},"wG+f":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),"Autorenew");t.default=i},wb2y:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("ye/S"),s=o.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,l=e.classes,s=e.className,u=e.component,d=void 0===u?"hr":u,f=e.flexItem,p=void 0!==f&&f,m=e.light,b=void 0!==m&&m,v=e.orientation,h=void 0===v?"horizontal":v,g=e.role,y=void 0===g?"hr"!==d?"separator":void 0:g,O=e.variant,j=void 0===O?"fullWidth":O,x=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(d,Object(a.a)({className:Object(i.a)(l.root,s,"fullWidth"!==j&&l[j],c&&l.absolute,p&&l.flexItem,b&&l.light,"vertical"===h&&l.vertical),role:y,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);