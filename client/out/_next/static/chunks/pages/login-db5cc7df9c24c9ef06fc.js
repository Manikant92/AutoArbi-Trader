_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{SGa5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ne}));var a=n("q1tI"),r=n.n(a),o=n("L4PR"),i=n("o0o1"),c=n.n(i);function s(e,t,n,a,r,o,i){try{var c=e[o](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(a,r)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){s(o,a,r,i,c,"next",e)}function c(e){s(o,a,r,i,c,"throw",e)}i(void 0)}))}}var u=n("30+C"),d=n("ofer"),p=n("oa/T"),m=n("Ff2n"),f=n("rePB"),g=n("wx14"),b=(n("17x9"),n("iuhU")),h=n("H2TA"),y=n("wpWl"),v=n("i8i4"),O=n("gk1O"),j=n("bfFb"),w=n("Ovef");function E(e){return e.substring(2).toLowerCase()}var x=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,o=e.mouseEvent,i=void 0===o?"onClick":o,c=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,u=a.useRef(!1),d=a.useRef(null),p=a.useRef(!1),m=a.useRef(!1);a.useEffect((function(){return p.current=!0,function(){p.current=!1}}),[]);var f=a.useCallback((function(e){d.current=v.findDOMNode(e)}),[]),g=Object(j.a)(t.ref,f),b=Object(w.a)((function(e){var t=m.current;if(m.current=!1,p.current&&d.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(u.current)u.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(d.current)>-1;else n=!Object(O.a)(d.current).documentElement.contains(e.target)||d.current.contains(e.target);n||!r&&t||c(e)}})),h=function(e){return function(n){m.current=!0;var a=t.props[e];a&&a(n)}},y={ref:g};return!1!==l&&(y[l]=h(l)),a.useEffect((function(){if(!1!==l){var e=E(l),t=Object(O.a)(d.current),n=function(){u.current=!0};return t.addEventListener(e,b),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,b),t.removeEventListener("touchmove",n)}}}),[b,l]),!1!==i&&(y[i]=h(i)),a.useEffect((function(){if(!1!==i){var e=E(i),t=Object(O.a)(d.current);return t.addEventListener(e,b),function(){t.removeEventListener(e,b)}}}),[b,i]),a.createElement(a.Fragment,null,a.cloneElement(t,y))},k=n("NqtD"),C=n("x6Ns"),S=n("bqsI"),N=n("kKAo"),L=n("ye/S"),I=a.forwardRef((function(e,t){var n=e.action,r=e.classes,o=e.className,i=e.message,c=e.role,s=void 0===c?"alert":c,l=Object(m.a)(e,["action","classes","className","message","role"]);return a.createElement(N.a,Object(g.a)({role:s,square:!0,elevation:6,className:Object(b.a)(r.root,o),ref:t},l),a.createElement("div",{className:r.message},i),n?a.createElement("div",{className:r.action},n):null)})),T=Object(h.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(L.b)(e.palette.background.default,t);return{root:Object(g.a)({},e.typography.body2,Object(f.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(I),R=a.forwardRef((function(e,t){var n=e.action,r=e.anchorOrigin,o=(r=void 0===r?{vertical:"bottom",horizontal:"center"}:r).vertical,i=r.horizontal,c=e.autoHideDuration,s=void 0===c?null:c,l=e.children,u=e.classes,d=e.className,p=e.ClickAwayListenerProps,f=e.ContentProps,h=e.disableWindowBlurListener,v=void 0!==h&&h,O=e.message,j=e.onClose,E=e.onEnter,N=e.onEntered,L=e.onEntering,I=e.onExit,R=e.onExited,A=e.onExiting,P=e.onMouseEnter,M=e.onMouseLeave,D=e.open,z=e.resumeHideDuration,W=e.TransitionComponent,H=void 0===W?S.a:W,B=e.transitionDuration,F=void 0===B?{enter:y.b.enteringScreen,exit:y.b.leavingScreen}:B,V=e.TransitionProps,_=Object(m.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),G=a.useRef(),$=a.useState(!0),q=$[0],U=$[1],J=Object(w.a)((function(){j&&j.apply(void 0,arguments)})),Z=Object(w.a)((function(e){j&&null!=e&&(clearTimeout(G.current),G.current=setTimeout((function(){J(null,"timeout")}),e))}));a.useEffect((function(){return D&&Z(s),function(){clearTimeout(G.current)}}),[D,s,Z]);var X=function(){clearTimeout(G.current)},Q=a.useCallback((function(){null!=s&&Z(null!=z?z:.5*s)}),[s,z,Z]);return a.useEffect((function(){if(!v&&D)return window.addEventListener("focus",Q),window.addEventListener("blur",X),function(){window.removeEventListener("focus",Q),window.removeEventListener("blur",X)}}),[v,Q,D]),!D&&q?null:a.createElement(x,Object(g.a)({onClickAway:function(e){j&&j(e,"clickaway")}},p),a.createElement("div",Object(g.a)({className:Object(b.a)(u.root,u["anchorOrigin".concat(Object(k.a)(o)).concat(Object(k.a)(i))],d),onMouseEnter:function(e){P&&P(e),X()},onMouseLeave:function(e){M&&M(e),Q()},ref:t},_),a.createElement(H,Object(g.a)({appear:!0,in:D,onEnter:Object(C.a)((function(){U(!1)}),E),onEntered:N,onEntering:L,onExit:I,onExited:Object(C.a)((function(){U(!0)}),R),onExiting:A,timeout:F,direction:"top"===o?"down":"up"},V),l||a.createElement(T,Object(g.a)({message:O,action:n},f)))))})),A=Object(h.a)((function(e){var t={top:8},n={bottom:8},a={justifyContent:"flex-end"},r={justifyContent:"flex-start"},o={top:24},i={bottom:24},c={right:24},s={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(g.a)({},t,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({},o,l))),anchorOriginBottomCenter:Object(g.a)({},n,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({},i,l))),anchorOriginTopRight:Object(g.a)({},t,a,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({left:"auto"},o,c))),anchorOriginBottomRight:Object(g.a)({},n,a,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({left:"auto"},i,c))),anchorOriginTopLeft:Object(g.a)({},t,r,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({right:"auto"},o,s))),anchorOriginBottomLeft:Object(g.a)({},n,r,Object(f.a)({},e.breakpoints.up("sm"),Object(g.a)({right:"auto"},i,s)))}}),{flip:!1,name:"MuiSnackbar"})(R),P=n("r9w1"),M=n("ADg1"),D=n("cVXz"),z=n("tVbE"),W=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,i=e.component,c=void 0===i?"li":i,s=e.disableGutters,l=void 0!==s&&s,u=e.ListItemClasses,d=e.role,p=void 0===d?"menuitem":d,f=e.selected,h=e.tabIndex,y=Object(m.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),a.createElement(z.a,Object(g.a)({button:!0,role:p,tabIndex:n,component:c,selected:f,disableGutters:l,classes:Object(g.a)({dense:r.dense},u),className:Object(b.a)(r.root,o,f&&r.selected,!l&&r.gutters),ref:t},y))})),H=Object(h.a)((function(e){return{root:Object(g.a)({},e.typography.body1,Object(f.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(g.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(W),B=n("Spdj");function F(e){var t,n,a;return t=e,n=0,a=1,e=(Math.min(Math.max(n,t),a)-n)/(a-n),e=(e-=1)*e*e+1}var V=a.forwardRef((function(e,t){var n,r=e.classes,o=e.className,i=e.color,c=void 0===i?"primary":i,s=e.disableShrink,l=void 0!==s&&s,u=e.size,d=void 0===u?40:u,p=e.style,f=e.thickness,h=void 0===f?3.6:f,y=e.value,v=void 0===y?0:y,O=e.variant,j=void 0===O?"indeterminate":O,w=Object(m.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),E={},x={},C={};if("determinate"===j||"static"===j){var S=2*Math.PI*((44-h)/2);E.strokeDasharray=S.toFixed(3),C["aria-valuenow"]=Math.round(v),"static"===j?(E.strokeDashoffset="".concat(((100-v)/100*S).toFixed(3),"px"),x.transform="rotate(-90deg)"):(E.strokeDashoffset="".concat((n=(100-v)/100,n*n*S).toFixed(3),"px"),x.transform="rotate(".concat((270*F(v/70)).toFixed(3),"deg)"))}return a.createElement("div",Object(g.a)({className:Object(b.a)(r.root,o,"inherit"!==c&&r["color".concat(Object(k.a)(c))],{indeterminate:r.indeterminate,static:r.static}[j]),style:Object(g.a)({width:d,height:d},x,p),ref:t,role:"progressbar"},C,w),a.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},a.createElement("circle",{className:Object(b.a)(r.circle,l&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[j]),style:E,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})))})),_=Object(h.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(V),G=a.forwardRef((function(e,t){var n=e.disableSpacing,r=void 0!==n&&n,o=e.classes,i=e.className,c=Object(m.a)(e,["disableSpacing","classes","className"]);return a.createElement("div",Object(g.a)({className:Object(b.a)(o.root,i,!r&&o.spacing),ref:t},c))})),$=Object(h.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(G),q=n("Z3vd"),U=n("5AJ6"),J=Object(U.a)(a.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Z=Object(U.a)(a.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),X=Object(U.a)(a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),Q=Object(U.a)(a.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Y=Object(U.a)(a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),K=n("PsDL"),ee={success:a.createElement(J,{fontSize:"inherit"}),warning:a.createElement(Z,{fontSize:"inherit"}),error:a.createElement(X,{fontSize:"inherit"}),info:a.createElement(Q,{fontSize:"inherit"})},te=a.createElement(Y,{fontSize:"small"}),ne=a.forwardRef((function(e,t){var n=e.action,r=e.children,o=e.classes,i=e.className,c=e.closeText,s=void 0===c?"Close":c,l=e.color,u=e.icon,d=e.iconMapping,p=void 0===d?ee:d,f=e.onClose,h=e.role,y=void 0===h?"alert":h,v=e.severity,O=void 0===v?"success":v,j=e.variant,w=void 0===j?"standard":j,E=Object(m.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return a.createElement(N.a,Object(g.a)({role:y,square:!0,elevation:0,className:Object(b.a)(o.root,o["".concat(w).concat(Object(k.a)(l||O))],i),ref:t},E),!1!==u?a.createElement("div",{className:o.icon},u||p[O]||ee[O]):null,a.createElement("div",{className:o.message},r),null!=n?a.createElement("div",{className:o.action},n):null,null==n&&f?a.createElement("div",{className:o.action},a.createElement(K.a,{size:"small","aria-label":s,title:s,color:"inherit",onClick:f},te)):null)})),ae=Object(h.a)((function(e){var t="light"===e.palette.type?L.a:L.e,n="light"===e.palette.type?L.e:L.a;return{root:Object(g.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:t(e.palette.success.main,.6),backgroundColor:n(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:t(e.palette.info.main,.6),backgroundColor:n(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:t(e.palette.warning.main,.6),backgroundColor:n(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:t(e.palette.error.main,.6),backgroundColor:n(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:t(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:t(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:t(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:t(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(ne),re=n("nOHt"),oe=n("kfFl"),ie=n("yv+Y"),ce=n("EQI2"),se=n("++HY"),le=n("+JwS"),ue="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),de=new Uint8Array(16);function pe(){if(!ue)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ue(de)}for(var me=[],fe=0;fe<256;++fe)me[fe]=(fe+256).toString(16).substr(1);var ge=function(e,t){var n=t||0,a=me;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")};var be={appScript:{landing:"Hello \ud83d\udc4b Welcome to auto arbi-trader, your solution for private vehicle sales mediation! What will you be doing today?",secondAuthSignUp:"\ud83d\ude0a Nice to meet you! May I get your email, password, & role in this transaction?",secondAuthLogin:"\ud83e\udd73 Welcome Back, we are happy to have you! May I get your email & password?"},message:["I am authenticated, by the way I type."],route:{signUp:"/api/db/signup",verify:"/api/typing-dna/verify"},userId:function(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||pe)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var o=0;o<16;++o)t[a+o]=r[o];return t||ge(r)}()},he=n("R/WZ"),ye=Object(he.a)((function(e){return{typos:{color:"rgba(255, 255, 255, 0.7)"},currentChar:{borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px",background:"#62bdf9",color:"#212121"},charsToBeTyped:{background:"#0081cb",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},welcome:{textAlign:"center"},content:{minHeight:260,display:"flex",flexDirection:"column",justifyContent:"space-around"}}})),ve=r.a.createElement;function Oe(e){var t=e.open,n=e.setAuthDialogOpen,o=e.handleGoBackReset,i=ye(),s=i.content,u=i.typos,p=i.currentChar,m=i.charsToBeTyped,f=i.welcome,g=be.message,b=be.route,h=be.userId,y=Object(a.useState)(h)[0],v=Object(a.useState)(!1),O=v[0],j=v[1],w=Object(a.useState)(!1),E=w[0],x=w[1],k=Object(a.useState)(0),C=k[0],S=k[1],N=Object(a.useState)(0),L=N[0],I=N[1],T=Object(a.useState)(""),R=T[0],A=T[1],M=Object(a.useRef)(),D=Object(re.useRouter)(),z=function(){M.current.start(),j(!1),A(""),S(C+1),L===g.length-1?I(0):I(L+1),setTimeout((function(){document.querySelector("#input").focus()}),100)},W=function(){M.current.reset(),n(!1),o(),setTimeout((function(){j(!1),I(0),A("")}),200)},H=function(){var e=l(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M.current.stop(),j(!0),e.next=4,M.current.getTypingPattern({type:0,text:R});case 4:if(t=e.sent,!((n=M.current.getQuality(t))>.3)){e.next=17;break}return e.next=9,fetch(b.signUp,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:t,patternQuality:n,authSession:C,userID:y,input:R})});case 9:return a=e.sent,e.next=12,a.json();case 12:r=e.sent,o=r.message,200===a.status?(z(),1===o.result&&1===o.enrollment&&(x(!0),setTimeout((function(){D.push("/")}),1e3))):(alert("An error occurred on our end. Please refresh and try again."),z()),e.next=18;break;case 17:z();case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){M.current||(M.current=new TypingDNA)}),[M]),Object(a.useEffect)((function(){R.length===g[L].length&&H()}),[R]),ve("div",null,ve(oe.a,{open:t,onClose:W,"aria-labelledby":"form-dialog-title"},ve(ie.a,{id:"form-dialog-title"},ve("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),ve(ce.a,{className:s},ve(se.a,null,ve("span",null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type! ",!E&&ve("span",null,"*Please note, it may take up to 5 attempts."))),ve(d.a,{variant:"body1"},E?ve("h3",{className:f},"Welcome ",y):ve(r.a.Fragment,null,ve("span",null,"Please type ",ve("span",{className:u},"(typos accepted)"),":"," ",g[L].substring(0,R.length),ve("span",{className:p},g[L].charAt(R.length)),ve("span",{className:m},g[L].substring(R.length+1,g[L].length))),ve(P.a,{autoFocus:!0,inputProps:{spellCheck:"false"},autoComplete:"off",margin:"dense",id:"input",label:"Type Phrase Here",color:"secondary",value:R,disabled:O,onChange:function(e){return A(e.target.value)},fullWidth:!0})))),ve(le.a,null,ve(q.a,{onClick:W,color:"secondary"},"Go Back"))))}function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},xe=r.a.createElement;function ke(e){var t=e.useStyles,n=be.appScript,o=n.landing,i=n.secondAuthLogin,s=n.secondAuthSignUp,m=be.route.signUp,g=t(),b=g.root,h=g.brand,y=g.auto,v=g.arbiTrader,O=g.buttons,j=g.logo,w=g.email,E=g.formControl,x=g.selectEmpty,k=Object(a.useState)(null),C=k[0],S=k[1],N=Object(a.useState)(null),L=N[0],I=N[1],T=Object(a.useState)(!1),R=T[0],z=T[1],W=Object(a.useState)(!1),F=W[0],V=W[1],G=Object(a.useState)("Error!"),U=G[0],J=G[1],Z=Object(a.useState)(!1),X=Z[0],Q=Z[1],Y=function(e){var t=Object(a.useState)(e),n=t[0],r=t[1];return{values:n,updateValue:function(e){var t=e.target,a=t.value,o=t.type,i=t.name;"number"===o&&(a=parseInt(a)),r(we(we({},n),{},Object(f.a)({},i,a)))}}}({emailInput:"",passwordInput:"",passwordInputVerify:""}),K=Y.values,ee=Y.updateValue,te=K.emailInput,ne=K.passwordInput,re=K.passwordInputVerify,oe=function(e){S(e)},ie=function(){var e=l(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("signup"===C&&ne!==re||"signup"===C&&""===re||"signup"===C&&!L||""===ne||""===te)&&Ee(te)){e.next=10;break}!1===F&&(V(!0),setTimeout((function(){V(!1)}),3e3)),"signup"===C&&ne!==re&&J("Passwords do not match!"),"signup"===C&&""===re&&J("Re-Enter Password Empty!"),"signup"!==C||L||J("Transation Role Empty!"),""===ne&&J("Password Empty!"),""===te&&J("Email Empty!"),Ee(te)||J("Not a valid Email!"),e.next=21;break;case 10:if("signup"!==C){e.next=18;break}return Q(!0),console.log("".concat(m,"/").concat(L)),e.next=15,fetch("".concat(m,"/").concat(L),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({emailInput:te,passwordInput:ne})});case 15:e.sent,e.next=21;break;case 18:console.log("fetch login"),Q(!0),z(!0);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return xe(r.a.Fragment,null,xe(Oe,{open:R,setAuthDialogOpen:z,handleGoBackReset:function(){S(null),Q(!1)}}),xe(u.a,{className:b},xe("div",{className:h},xe("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:j}),xe(d.a,{variant:"h5",noWrap:!0},xe("span",{className:y},"auto")," ",xe("span",{className:v},"arbi-trader"))),xe(p.a,null,!1===X?xe(r.a.Fragment,null,null===C?xe(d.a,{align:"center",color:"textSecondary"},o):xe(r.a.Fragment,null,xe(A,{open:F,onClick:function(){return V(!1)}},xe(ae,{severity:"error"},U)),xe(d.a,{color:"textSecondary"},xe("span",null,"signup"===C?s:i)),xe("div",{className:w},xe(P.a,{color:"secondary",type:"email",label:"Email",id:"emailInput",name:"emailInput",value:te,onChange:ee,required:!0}),xe(P.a,{color:"secondary",type:"password",label:"Password",id:"passwordInput",name:"passwordInput",onChange:ee,value:ne,required:!0}),"signup"===C&&xe(r.a.Fragment,null,xe(P.a,{color:"secondary",type:"password",label:"Re-Enter Password",id:"passwordInputVerify",name:"passwordInputVerify",onChange:ee,value:re,required:!0}),xe(M.a,{className:E,color:"secondary",required:!0},xe(D.a,{value:L,onChange:function(e){return I(e.target.value)},displayEmpty:!0,className:x,inputProps:{"aria-label":"Without label"}},xe(H,{value:"",disabled:!0},"Transaction Role"),xe(H,{value:"buyer"},"Buying"),xe(H,{value:"seller"},"Selling")),xe(B.a,null,"Transaction Role")))))):xe(_,{color:"secondary"})),xe($,{className:O},null===C?xe(r.a.Fragment,null,xe(q.a,{size:"large",color:"secondary",onClick:function(){return oe("login")}},"Logging In"),xe(q.a,{size:"large",color:"secondary",onClick:function(){return oe("signup")}},"Signing Up")):xe(r.a.Fragment,null,xe(q.a,{disabled:X,size:"large",color:"secondary",onClick:function(){return oe(null)}},"Go Back"),xe(q.a,{disabled:X,size:"large",color:"secondary",onClick:ie},"login"===C?"Login":"Sign Up")))))}var Ce=Object(he.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{width:300,height:455,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center",padding:"8px"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",marginLeft:"6px",marginReft:"6px"},email:{display:"flex",flexDirection:"column"},formControl:{marginTop:"1px",minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),Se=r.a.createElement;function Ne(){o.a.buyer,o.a.seller;var e=Ce().page;return Se("div",{className:e},Se(ke,{useStyles:Ce}))}},u6Hu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n("SGa5")}])}},[["u6Hu",0,2,1,3,4,6]]]);