(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"+rzG":function(e,t,n){"use strict";n.d(t,"a",(function(){return pe}));var r=n("rePB"),a=n("q1tI"),o=n.n(a),i=n("iuhU"),c=n("YFqc"),s=n.n(c),l=n("5CWz"),d=n("wx14"),u=n("Ff2n"),p=(n("17x9"),n("H2TA")),f=n("NqtD"),b=n("kKAo"),m=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,c=void 0===o?"primary":o,s=e.position,l=void 0===s?"fixed":s,p=Object(u.a)(e,["classes","className","color","position"]);return a.createElement(b.a,Object(d.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(n.root,n["position".concat(Object(f.a)(l))],n["color".concat(Object(f.a)(c))],r,"fixed"===l&&"mui-fixed"),ref:t},p))})),v=Object(p.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(m),g=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.component,c=void 0===o?"div":o,s=e.disableGutters,l=void 0!==s&&s,p=e.variant,f=void 0===p?"regular":p,b=Object(u.a)(e,["classes","className","component","disableGutters","variant"]);return a.createElement(c,Object(d.a)({className:Object(i.a)(n.root,n[f],r,!l&&n.gutters),ref:t},b))})),h=Object(p.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(g),y=n("PsDL"),O=n("ofer"),j=n("Xt1q"),x=n("+Isj"),w=n("i8i4"),k=n("l3Wi"),E=n("dRu9"),C=n("bfFb"),N=n("tr08"),I=n("wpWl"),T=n("4Hym");function P(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var o=0,i=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(i-r.top,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var S={enter:I.b.enteringScreen,exit:I.b.leavingScreen},M=a.forwardRef((function(e,t){var n=e.children,r=e.direction,o=void 0===r?"down":r,i=e.in,c=e.onEnter,s=e.onEntered,l=e.onEntering,p=e.onExit,f=e.onExited,b=e.onExiting,m=e.style,v=e.timeout,g=void 0===v?S:v,h=e.TransitionComponent,y=void 0===h?E.a:h,O=Object(u.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),j=Object(N.a)(),x=a.useRef(null),I=a.useCallback((function(e){x.current=w.findDOMNode(e)}),[]),M=Object(C.a)(n.ref,I),R=Object(C.a)(M,t),L=function(e){return function(t){e&&(void 0===t?e(x.current):e(x.current,t))}},z=L((function(e,t){P(o,e),Object(T.b)(e),c&&c(e,t)})),B=L((function(e,t){var n=Object(T.a)({timeout:g,style:m},{mode:"enter"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(d.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.transition=j.transitions.create("transform",Object(d.a)({},n,{easing:j.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",l&&l(e,t)})),D=L(s),q=L(b),A=L((function(e){var t=Object(T.a)({timeout:g,style:m},{mode:"exit"});e.style.webkitTransition=j.transitions.create("-webkit-transform",Object(d.a)({},t,{easing:j.transitions.easing.sharp})),e.style.transition=j.transitions.create("transform",Object(d.a)({},t,{easing:j.transitions.easing.sharp})),P(o,e),p&&p(e)})),_=L((function(e){e.style.webkitTransition="",e.style.transition="",f&&f(e)})),H=a.useCallback((function(){x.current&&P(o,x.current)}),[o]);return a.useEffect((function(){if(!i&&"down"!==o&&"right"!==o){var e=Object(k.a)((function(){x.current&&P(o,x.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[o,i]),a.useEffect((function(){i||H()}),[i,H]),a.createElement(y,Object(d.a)({nodeRef:x,onEnter:z,onEntered:D,onEntering:B,onExit:A,onExited:_,onExiting:q,appear:!0,in:i,timeout:g},O),(function(e,t){return a.cloneElement(n,Object(d.a)({ref:R,style:Object(d.a)({visibility:"exited"!==e||i?void 0:"hidden"},m,n.props.style)},t))}))})),R={left:"right",right:"left",top:"down",bottom:"up"};var L={enter:I.b.enteringScreen,exit:I.b.leavingScreen},z=a.forwardRef((function(e,t){var n=e.anchor,r=void 0===n?"left":n,o=e.BackdropProps,c=e.children,s=e.classes,l=e.className,p=e.elevation,m=void 0===p?16:p,v=e.ModalProps,g=(v=void 0===v?{}:v).BackdropProps,h=Object(u.a)(v,["BackdropProps"]),y=e.onClose,O=e.open,w=void 0!==O&&O,k=e.PaperProps,E=void 0===k?{}:k,C=e.SlideProps,I=e.TransitionComponent,T=void 0===I?M:I,P=e.transitionDuration,S=void 0===P?L:P,z=e.variant,B=void 0===z?"temporary":z,D=Object(u.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),q=Object(N.a)(),A=a.useRef(!1);a.useEffect((function(){A.current=!0}),[]);var _=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?R[t]:t}(q,r),H=a.createElement(b.a,Object(d.a)({elevation:"temporary"===B?m:0,square:!0},E,{className:Object(i.a)(s.paper,s["paperAnchor".concat(Object(f.a)(_))],E.className,"temporary"!==B&&s["paperAnchorDocked".concat(Object(f.a)(_))])}),c);if("permanent"===B)return a.createElement("div",Object(d.a)({className:Object(i.a)(s.root,s.docked,l),ref:t},D),H);var F=a.createElement(T,Object(d.a)({in:w,direction:R[_],timeout:S,appear:A.current},C),H);return"persistent"===B?a.createElement("div",Object(d.a)({className:Object(i.a)(s.root,s.docked,l),ref:t},D),F):a.createElement(j.a,Object(d.a)({BackdropProps:Object(d.a)({},o,g,{transitionDuration:S}),BackdropComponent:x.a,className:Object(i.a)(s.root,s.modal,l),open:w,onClose:y,ref:t},D,h),F)})),B=Object(p.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(z),D=n("ye/S"),q=a.forwardRef((function(e,t){var n=e.absolute,r=void 0!==n&&n,o=e.classes,c=e.className,s=e.component,l=void 0===s?"hr":s,p=e.flexItem,f=void 0!==p&&p,b=e.light,m=void 0!==b&&b,v=e.orientation,g=void 0===v?"horizontal":v,h=e.role,y=void 0===h?"hr"!==l?"separator":void 0:h,O=e.variant,j=void 0===O?"fullWidth":O,x=Object(u.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return a.createElement(l,Object(d.a)({className:Object(i.a)(o.root,c,"fullWidth"!==j&&o[j],r&&o.absolute,f&&o.flexItem,m&&o.light,"vertical"===g&&o.vertical),role:y,ref:t},x))})),A=Object(p.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(D.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(q),_=n("eD//"),H=n("VD++"),F=n("ucBr"),V=n("MquD"),W="undefined"===typeof window?a.useEffect:a.useLayoutEffect,G=a.forwardRef((function(e,t){var n=e.alignItems,r=void 0===n?"center":n,o=e.autoFocus,c=void 0!==o&&o,s=e.button,l=void 0!==s&&s,p=e.children,f=e.classes,b=e.className,m=e.component,v=e.ContainerComponent,g=void 0===v?"li":v,h=e.ContainerProps,y=(h=void 0===h?{}:h).className,O=Object(u.a)(h,["className"]),j=e.dense,x=void 0!==j&&j,k=e.disabled,E=void 0!==k&&k,N=e.disableGutters,I=void 0!==N&&N,T=e.divider,P=void 0!==T&&T,S=e.focusVisibleClassName,M=e.selected,R=void 0!==M&&M,L=Object(u.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),z=a.useContext(V.a),B={dense:x||z.dense||!1,alignItems:r},D=a.useRef(null);W((function(){c&&D.current&&D.current.focus()}),[c]);var q=a.Children.toArray(p),A=q.length&&Object(F.a)(q[q.length-1],["ListItemSecondaryAction"]),_=a.useCallback((function(e){D.current=w.findDOMNode(e)}),[]),G=Object(C.a)(_,t),K=Object(d.a)({className:Object(i.a)(f.root,b,B.dense&&f.dense,!I&&f.gutters,P&&f.divider,E&&f.disabled,l&&f.button,"center"!==r&&f.alignItemsFlexStart,A&&f.secondaryAction,R&&f.selected),disabled:E},L),U=m||"li";return l&&(K.component=m||"div",K.focusVisibleClassName=Object(i.a)(f.focusVisible,S),U=H.a),A?(U=K.component||m?U:"div","li"===g&&("li"===U?U="div":"li"===K.component&&(K.component="div")),a.createElement(V.a.Provider,{value:B},a.createElement(g,Object(d.a)({className:Object(i.a)(f.container,y),ref:G},O),a.createElement(U,K,q),q.pop()))):a.createElement(V.a.Provider,{value:B},a.createElement(U,Object(d.a)({ref:G},K),q))})),K=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(G),U=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=Object(u.a)(e,["classes","className"]),c=a.useContext(V.a);return a.createElement("div",Object(d.a)({className:Object(i.a)(n.root,r,"flex-start"===c.alignItems&&n.alignItemsFlexStart),ref:t},o))})),J=Object(p.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(U),Y=a.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,c=e.disableTypography,s=void 0!==c&&c,l=e.inset,p=void 0!==l&&l,f=e.primary,b=e.primaryTypographyProps,m=e.secondary,v=e.secondaryTypographyProps,g=Object(u.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),h=a.useContext(V.a).dense,y=null!=f?f:n;null==y||y.type===O.a||s||(y=a.createElement(O.a,Object(d.a)({variant:h?"body2":"body1",className:r.primary,component:"span",display:"block"},b),y));var j=m;return null==j||j.type===O.a||s||(j=a.createElement(O.a,Object(d.a)({variant:"body2",className:r.secondary,color:"textSecondary",display:"block"},v),j)),a.createElement("div",Object(d.a)({className:Object(i.a)(r.root,o,h&&r.dense,p&&r.inset,y&&j&&r.multiline),ref:t},g),y,j)})),X=Object(p.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(Y),$=n("L+uM"),Q=n.n($),Z=n("uniG"),ee=n.n(Z),te=n("76vg"),ne=n.n(te),re=n("E2gh"),ae=n.n(re),oe=n("Kmmp"),ie=n.n(oe),ce=n("wG+f"),se=n.n(ce),le=n("tB9+"),de=n.n(le),ue=o.a.createElement;function pe(e){var t,n,o=e.children,c=e.classes,d=e.allDocsComplete,u=Object(N.a)(),p=Object(a.useState)(!1),f=p[0],b=p[1],m=c.root,g=c.appBar,j=c.appBarShift,x=c.menuButton,w=c.hide,k=c.logo,E=c.auto,C=c.arbiTrader,I=c.drawer,T=c.drawerOpen,P=c.drawerClose,S=c.content,M=c.toolbar,R=c.exitIcon;return ue("div",{className:m},ue(l.a,null),ue(v,{position:"fixed",className:Object(i.a)(g,Object(r.a)({},j,f))},ue(h,null,ue(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},edge:"start",className:Object(i.a)(x,Object(r.a)({},w,f))},ue(ee.a,null)),ue("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:k}),ue(O.a,{variant:"h6",noWrap:!0},ue("span",{className:E},"auto")," ",ue("span",{className:C},"arbi-trader")))),ue(B,{variant:"permanent",className:Object(i.a)(I,(t={},Object(r.a)(t,T,f),Object(r.a)(t,P,!f),t)),classes:{paper:Object(i.a)((n={},Object(r.a)(n,T,f),Object(r.a)(n,P,!f),n))}},ue("div",{className:M},ue(y.a,{onClick:function(){b(!1)}},"rtl"===u.direction?ue(ae.a,null):ue(ne.a,null))),ue(A,null),ue(_.a,null,ue(s.a,{href:"/"},ue(K,{button:!0},ue(J,null,ue(se.a,null)),ue(X,null,"View Progress"))),ue(s.a,{href:"/upload"},ue(K,{button:!0},ue(J,null,ue(de.a,null)),ue(X,null,"Upload Documents"))),ue(K,{button:!0,disabled:!d},ue(J,null,ue(ie.a,{color:d?"secondary":"primary"})),ue(X,null,"Send In Forms")),ue(A,null),ue(K,{button:!0},ue(J,null,ue(Q.a,{className:R})),ue(X,null,"Sign Out")))),ue("main",{className:S},ue("div",{className:M}),o))}},"49Ka":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("KQm4"),a=function(e,t){var n=[].concat(Object(r.a)(e.docs),Object(r.a)(t.docs));return n.filter((function(e){return!0===e.completed})).length===n.length}},"5CWz":function(e,t,n){"use strict";var r=n("wx14"),a=n("q1tI"),o=(n("17x9"),n("H2TA")),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(r.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(r.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,a.createElement(a.Fragment,null,n)}))},"76vg":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");t.default=i},"8/g6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n("kNCj")},E2gh:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");t.default=i},Kmmp:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Mail");t.default=i},"L+uM":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");t.default=i},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),l=new Map,d=window.IntersectionObserver,u={};var p=function(e,t){var n=o||(d?o=new d((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function f(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),u[t+"%"+n]=!0)}var b=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],b=(0,s.useRouter)(),m=b&&b.pathname||"/",v=i.default.useMemo((function(){var t=(0,c.resolveHref)(m,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,c.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),g=v.href,h=v.as;i.default.useEffect((function(){if(t&&d&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!u[g+"%"+h])return p(o,(function(){f(b,g,h)}))}),[t,o,g,h,b]);var y=e.children,O=e.replace,j=e.shallow,x=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var w=i.Children.only(y),k={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,g,h,O,j,x)}};return t&&(k.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(b,g,h,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(k.href=(0,c.addBasePath)((0,c.addLocale)(h,b&&b.locale,b&&b.defaultLocale))),i.default.cloneElement(w,k)};t.default=b},"fx/U":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n("rePB"),a=n("R/WZ");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=function(e,t){var n={root:{display:"flex"},appBar:{backgroundColor:"primary",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(r.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:i({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3),display:"grid",gap:"1.5rem"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},exitIcon:{color:"#ffcccb"}};switch(t){case"uploadStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 17.5vh 17.5vh 17.5vh 17.5vh"})});case"dashboardStyles":return i(i({},n),{},{content:i(i({},n.content),{},{gridTemplateRows:"5vh 38vh 38vh"})})}},s=Object(a.a)((function(e){return c(e,"uploadStyles")})),l=Object(a.a)((function(e){return c(e,"dashboardStyles")}))},kNCj:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return r.a})),n.d(t,"createChainedFunction",(function(){return a.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return i.a})),n.d(t,"deprecatedPropType",(function(){return c})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return l.a})),n.d(t,"ownerWindow",(function(){return d.a})),n.d(t,"requirePropFactory",(function(){return u})),n.d(t,"setRef",(function(){return p.a})),n.d(t,"unsupportedProp",(function(){return f})),n.d(t,"useControlled",(function(){return b.a})),n.d(t,"useEventCallback",(function(){return m.a})),n.d(t,"useForkRef",(function(){return v.a})),n.d(t,"unstable_useId",(function(){return h})),n.d(t,"useIsFocusVisible",(function(){return y.a}));var r=n("NqtD"),a=n("x6Ns"),o=n("5AJ6"),i=n("l3Wi");function c(e,t){return function(){return null}}var s=n("ucBr"),l=n("gk1O"),d=n("g+pH");function u(e){return function(){return null}}var p=n("GIek");function f(e,t,n,r,a){return null}var b=n("yCxk"),m=n("Ovef"),v=n("bfFb"),g=n("q1tI");function h(e){var t=g.useState(e),n=t[0],r=t[1],a=e||n;return g.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}var y=n("G7As")},"tB9+":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.default=i},uniG:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=i},vrJG:function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile");t.default=i},"wG+f":function(e,t,n){"use strict";var r=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("q1tI")),i=(0,r(n("8/g6")).default)(o.createElement("path",{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}),"Autorenew");t.default=i}}]);