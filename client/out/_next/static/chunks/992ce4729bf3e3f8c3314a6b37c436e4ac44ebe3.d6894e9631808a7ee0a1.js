(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"+rzG":function(e,t,n){"use strict";n.d(t,"a",(function(){return pe}));var r=n("rePB"),a=n("o0o1"),o=n.n(a),i=n("HaE+"),c=n("q1tI"),s=n.n(c),l=n("iuhU"),u=n("YFqc"),d=n.n(u),p=n("5CWz"),f=n("wx14"),m=n("Ff2n"),h=(n("17x9"),n("H2TA")),v=n("NqtD"),b=n("kKAo"),g=c.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.color,o=void 0===a?"primary":a,i=e.position,s=void 0===i?"fixed":i,u=Object(m.a)(e,["classes","className","color","position"]);return c.createElement(b.a,Object(f.a)({square:!0,component:"header",elevation:4,className:Object(l.a)(n.root,n["position".concat(Object(v.a)(s))],n["color".concat(Object(v.a)(o))],r,"fixed"===s&&"mui-fixed"),ref:t},u))})),y=Object(h.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(g),O=c.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.component,o=void 0===a?"div":a,i=e.disableGutters,s=void 0!==i&&i,u=e.variant,d=void 0===u?"regular":u,p=Object(m.a)(e,["classes","className","component","disableGutters","variant"]);return c.createElement(o,Object(f.a)({className:Object(l.a)(n.root,n[d],r,!s&&n.gutters),ref:t},p))})),j=Object(h.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(O),x=n("PsDL"),w=n("ofer"),E=n("Xt1q"),k=n("+Isj"),T=n("i8i4"),C=n("l3Wi"),P=n("dRu9"),S=n("bfFb"),I=n("tr08"),M=n("wpWl"),N=n("4Hym");function R(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var o=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-r.top,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var L={enter:M.b.enteringScreen,exit:M.b.leavingScreen},z=c.forwardRef((function(e,t){var n=e.children,r=e.direction,a=void 0===r?"down":r,o=e.in,i=e.onEnter,s=e.onEntered,l=e.onEntering,u=e.onExit,d=e.onExited,p=e.onExiting,h=e.style,v=e.timeout,b=void 0===v?L:v,g=e.TransitionComponent,y=void 0===g?P.a:g,O=Object(m.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Object(I.a)(),x=c.useRef(null),w=c.useCallback((function(e){x.current=T.findDOMNode(e)}),[]),E=Object(S.a)(n.ref,w),k=Object(S.a)(E,t),M=function(e){return function(t){e&&(void 0===t?e(x.current):e(x.current,t))}},z=M((function(e,t){R(a,e),Object(N.b)(e),i&&i(e,t)})),q=M((function(e,t){var n=Object(N.a)({timeout:b,style:h},{mode:"enter"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(f.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.transition=j.transitions.create("transform",Object(f.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",l&&l(e,t)})),B=M(s),D=M(p),_=M((function(e){var t=Object(N.a)({timeout:b,style:h},{mode:"exit"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(f.a)({},t,{easing:j.transitions.easing.sharp})),e.style.transition=j.transitions.create("transform",Object(f.a)({},t,{easing:j.transitions.easing.sharp})),R(a,e),u&&u(e)})),A=M((function(e){e.style.webkitTransition="",e.style.transition="",d&&d(e)})),H=c.useCallback((function(){x.current&&R(a,x.current)}),[a]);return c.useEffect((function(){if(!o&&"down"!==a&&"right"!==a){var e=Object(C.a)((function(){x.current&&R(a,x.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[a,o]),c.useEffect((function(){o||H()}),[o,H]),c.createElement(y,Object(f.a)({nodeRef:x,onEnter:z,onEntered:B,onEntering:q,onExit:_,onExited:A,onExiting:D,appear:!0,in:o,timeout:b},O),(function(e,t){return c.cloneElement(n,Object(f.a)({ref:k,style:Object(f.a)({visibility:"exited"!==e||o?void 0:"hidden"},h,n.props.style)},t))}))})),q={left:"right",right:"left",top:"down",bottom:"up"};var B={enter:M.b.enteringScreen,exit:M.b.leavingScreen},D=c.forwardRef((function(e,t){var n=e.anchor,r=void 0===n?"left":n,a=e.BackdropProps,o=e.children,i=e.classes,s=e.className,u=e.elevation,d=void 0===u?16:u,p=e.ModalProps,h=(p=void 0===p?{}:p).BackdropProps,g=Object(m.a)(p,["BackdropProps"]),y=e.onClose,O=e.open,j=void 0!==O&&O,x=e.PaperProps,w=void 0===x?{}:x,T=e.SlideProps,C=e.TransitionComponent,P=void 0===C?z:C,S=e.transitionDuration,M=void 0===S?B:S,N=e.variant,R=void 0===N?"temporary":N,L=Object(m.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),D=Object(I.a)(),_=c.useRef(!1);c.useEffect((function(){_.current=!0}),[]);var A=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?q[t]:t}(D,r),H=c.createElement(b.a,Object(f.a)({elevation:"temporary"===R?d:0,square:!0},w,{className:Object(l.a)(i.paper,i["paperAnchor".concat(Object(v.a)(A))],w.className,"temporary"!==R&&i["paperAnchorDocked".concat(Object(v.a)(A))])}),o);if("permanent"===R)return c.createElement("div",Object(f.a)({className:Object(l.a)(i.root,i.docked,s),ref:t},L),H);var F=c.createElement(P,Object(f.a)({in:j,direction:q[A],timeout:M,appear:_.current},T),H);return"persistent"===R?c.createElement("div",Object(f.a)({className:Object(l.a)(i.root,i.docked,s),ref:t},L),F):c.createElement(E.a,Object(f.a)({BackdropProps:Object(f.a)({},a,h,{transitionDuration:M}),BackdropComponent:k.a,className:Object(l.a)(i.root,i.modal,s),open:j,onClose:y,ref:t},L,g),F)})),_=Object(h.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(D),A=n("ye/S"),H=c.forwardRef((function(e,t){var n=e.absolute,r=void 0!==n&&n,a=e.classes,o=e.className,i=e.component,s=void 0===i?"hr":i,u=e.flexItem,d=void 0!==u&&u,p=e.light,h=void 0!==p&&p,v=e.orientation,b=void 0===v?"horizontal":v,g=e.role,y=void 0===g?"hr"!==s?"separator":void 0:g,O=e.variant,j=void 0===O?"fullWidth":O,x=Object(m.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(s,Object(f.a)({className:Object(l.a)(a.root,o,"fullWidth"!==j&&a[j],r&&a.absolute,d&&a.flexItem,h&&a.light,"vertical"===b&&a.vertical),role:y,ref:t},x))})),F=Object(h.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(A.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(H),W=n("eD//"),V=n("tVbE"),G=n("MquD"),U=c.forwardRef((function(e,t){var n=e.classes,r=e.className,a=Object(m.a)(e,["classes","className"]),o=c.useContext(G.a);return c.createElement("div",Object(f.a)({className:Object(l.a)(n.root,r,"flex-start"===o.alignItems&&n.alignItemsFlexStart),ref:t},a))})),K=Object(h.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(U),J=c.forwardRef((function(e,t){var n=e.children,r=e.classes,a=e.className,o=e.disableTypography,i=void 0!==o&&o,s=e.inset,u=void 0!==s&&s,d=e.primary,p=e.primaryTypographyProps,h=e.secondary,v=e.secondaryTypographyProps,b=Object(m.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),g=c.useContext(G.a).dense,y=null!=d?d:n;null==y||y.type===w.a||i||(y=c.createElement(w.a,Object(f.a)({variant:g?"body2":"body1",className:r.primary,component:"span",display:"block"},p),y));var O=h;return null==O||O.type===w.a||i||(O=c.createElement(w.a,Object(f.a)({variant:"body2",className:r.secondary,color:"textSecondary",display:"block"},v),O)),c.createElement("div",Object(f.a)({className:Object(l.a)(r.root,a,g&&r.dense,u&&r.inset,y&&O&&r.multiline),ref:t},b),y,O)})),Y=Object(h.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(J),X=n("L+uM"),Z=n.n(X),Q=n("uniG"),$=n.n(Q),ee=n("76vg"),te=n.n(ee),ne=n("E2gh"),re=n.n(ne),ae=n("Kmmp"),oe=n.n(ae),ie=n("wG+f"),ce=n.n(ie),se=n("tB9+"),le=n.n(se),ue=n("ULge"),de=s.a.createElement;function pe(e){var t,n,a=e.children,s=e.classes,u=e.allDocsComplete,f=Object(I.a)(),m=Object(c.useState)(!1),h=m[0],v=m[1],b=ue.a.route.logout,g=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b,{method:"POST"});case 2:e.sent,window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=s.root,E=s.appBar,k=s.appBarShift,T=s.menuButton,C=s.hide,P=s.logo,S=s.auto,M=s.arbiTrader,N=s.drawer,R=s.drawerOpen,L=s.drawerClose,z=s.content,q=s.toolbar,B=s.exitIcon;return de("div",{className:O},de(p.a,null),de(y,{position:"fixed",className:Object(l.a)(E,Object(r.a)({},k,h))},de(j,null,de(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){v(!0)},edge:"start",className:Object(l.a)(T,Object(r.a)({},C,h))},de($.a,null)),de("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:P}),de(w.a,{variant:"h6",noWrap:!0},de("span",{className:S},"auto")," ",de("span",{className:M},"arbi-trader")))),de(_,{variant:"permanent",className:Object(l.a)(N,(t={},Object(r.a)(t,R,h),Object(r.a)(t,L,!h),t)),classes:{paper:Object(l.a)((n={},Object(r.a)(n,R,h),Object(r.a)(n,L,!h),n))}},de("div",{className:q},de(x.a,{onClick:function(){v(!1)}},"rtl"===f.direction?de(re.a,null):de(te.a,null))),de(F,null),de(W.a,null,de(d.a,{href:"/dashboard"},de(V.a,{button:!0},de(K,null,de(ce.a,null)),de(Y,null,"View Progress"))),de(d.a,{href:"/upload"},de(V.a,{button:!0},de(K,null,de(le.a,null)),de(Y,null,"Upload Documents"))),de(V.a,{button:!0,disabled:!u},de(K,null,de(oe.a,{color:u?"secondary":"primary"})),de(Y,null,"Send In Forms")),de(F,null),de(V.a,{button:!0,onClick:g},de(K,null,de(Z.a,{className:B})),de(Y,null,"Sign Out")))),de("main",{className:z},de("div",{className:q}),a))}},"49Ka":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KQm4"),a=function(e,t){var n=[].concat(Object(r.a)(e.docs),Object(r.a)(t.docs));return n.filter((function(e){return!0===e.completed})).length===n.length}},"5CWz":function(e,t,n){"use strict";var r=n("wx14"),a=n("q1tI"),o=(n("17x9"),n("H2TA")),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,a.createElement(a.Fragment,null,n)}))},"76vg":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=i},"8/g6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n("kNCj")},E2gh:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=i},Kmmp:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.default=i},"L+uM":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");t.default=i},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var p=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function f(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],m=(0,s.useRouter)(),h=m&&m.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(h,e.as):o||a}}),[h,e.href,e.as]),b=v.href,g=v.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,c.isLocalURL)(b)&&!d[b+"%"+g])return p(o,(function(){f(m,b,g)}))}),[t,o,b,g,m]);var y=e.children,O=e.replace,j=e.shallow,x=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var w=i.Children.only(y),E={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,b,g,O,j,x)}};return t&&(E.onMouseEnter=function(e){(0,c.isLocalURL)(b)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(m,b,g,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(E.href=(0,c.addBasePath)((0,c.addLocale)(g,m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(w,E)};t.default=m},"fE/f":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("q1tI"),c=n.n(i),s=n("ULge"),l=n("R/WZ"),u=Object(l.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"}}})),d=c.a.createElement;function p(e){var t=e.children,n=s.a.route.session,r=(u().page,Object(i.useState)(null)),l=(r[0],r[1]);return Object(i.useEffect)((function(){!function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,(o=r.user_id)?l(o):setTimeout((function(){window.location.replace("/")}),500);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),d(c.a.Fragment,null,d(c.a.Fragment,null,t))}},"fx/U":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n("rePB"),a=n("R/WZ");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t){var n={root:{display:"flex"},appBar:{backgroundColor:"primary",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(r.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:i({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),display:"flex",flexDirection:"column",height:"100vh",justifyContent:"flex-start"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},exitIcon:{color:"#ffcccb"}};switch(t){case"uploadStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 17.5vh 17.5vh 17.5vh 17.5vh"})});case"dashboardStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 38vh 38vh"})})}},s=Object(a.a)((function(e){return c(e,"uploadStyles")})),l=Object(a.a)((function(e){return c(e,"dashboardStyles")}))},kNCj:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return a.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return u.a})),n.d(t,"requirePropFactory",(function(){return d})),n.d(t,"setRef",(function(){return p.a})),n.d(t,"unsupportedProp",(function(){return f})),n.d(t,"useControlled",(function(){return m.a})),n.d(t,"useEventCallback",(function(){return h.a})),n.d(t,"useForkRef",(function(){return v.a})),n.d(t,"unstable_useId",(function(){return g})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var r=n("NqtD"),a=n("x6Ns"),o=n("5AJ6"),i=n("l3Wi");function c(e,t){return function(){return null}}var s=n("ucBr"),l=n("gk1O"),u=n("g+pH");function d(e){return function(){return null}}var p=n("GIek");function f(e,t,n,r,a){return null}var m=n("yCxk"),h=n("Ovef"),v=n("bfFb"),b=n("q1tI");function g(e){var t=b.useState(e),n=t[0],r=t[1],a=e||n;return b.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}var y=n("G7As")},"tB9+":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=i},uniG:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},vrJG:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");t.default=i},"wG+f":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),"Autorenew");t.default=i}}]);