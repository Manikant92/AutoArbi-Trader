_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{SGa5:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var n=a("q1tI"),r=a.n(n),o=a("L4PR"),i=a("30+C"),s=a("oa/T"),c=a("ofer"),l=a("r9w1"),u=a("wx14"),d=a("Ff2n"),f=(a("17x9"),a("iuhU")),h=a("H2TA"),p=n.forwardRef((function(e,t){var a=e.disableSpacing,r=void 0!==a&&a,o=e.classes,i=e.className,s=Object(d.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(u.a)({className:Object(f.a)(o.root,i,!r&&o.spacing),ref:t},s))})),g=Object(h.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(p),m=a("Z3vd"),y=a("o0o1"),b=a.n(y);function v(e,t,a,n,r,o,i){try{var s=e[o](i),c=s.value}catch(l){return void a(l)}s.done?t(c):Promise.resolve(c).then(n,r)}var w=a("KQm4"),x=a("kfFl"),k=a("yv+Y"),j=a("EQI2"),N=a("++HY"),S=a("NqtD");function O(e){var t,a,n;return t=e,a=0,n=1,e=(Math.min(Math.max(a,t),n)-a)/(n-a),e=(e-=1)*e*e+1}var D=n.forwardRef((function(e,t){var a,r=e.classes,o=e.className,i=e.color,s=void 0===i?"primary":i,c=e.disableShrink,l=void 0!==c&&c,h=e.size,p=void 0===h?40:h,g=e.style,m=e.thickness,y=void 0===m?3.6:m,b=e.value,v=void 0===b?0:b,w=e.variant,x=void 0===w?"indeterminate":w,k=Object(d.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),j={},N={},D={};if("determinate"===x||"static"===x){var C=2*Math.PI*((44-y)/2);j.strokeDasharray=C.toFixed(3),D["aria-valuenow"]=Math.round(v),"static"===x?(j.strokeDashoffset="".concat(((100-v)/100*C).toFixed(3),"px"),N.transform="rotate(-90deg)"):(j.strokeDashoffset="".concat((a=(100-v)/100,a*a*C).toFixed(3),"px"),N.transform="rotate(".concat((270*O(v/70)).toFixed(3),"deg)"))}return n.createElement("div",Object(u.a)({className:Object(f.a)(r.root,o,"inherit"!==s&&r["color".concat(Object(S.a)(s))],{indeterminate:r.indeterminate,static:r.static}[x]),style:Object(u.a)({width:p,height:p},N,g),ref:t,role:"progressbar"},D,k),n.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},n.createElement("circle",{className:Object(f.a)(r.circle,l&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[x]),style:j,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))})),C=Object(h.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(D),T=a("+JwS"),E=["Nothing in this world is worth having or worth doing unless it means effort, pain, difficulty.","To sit home, read one's favorite paper, and scoff at the misdeeds of the men who do things is easy, but it is markedly ineffective. It is what evil men count upon the good men's doing.","The unforgivable crime is soft hitting. Do not hit at all if it can be avoided; but never hit softly."],P=r.a.createElement;function _(e){var t=e.open,a=e.handleDialogClose,o=e.styles,i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(!1),f=d[0],h=d[1],p=Object(n.useState)(""),g=p[0],y=p[1],S=Object(n.useState)(""),O=S[0],D=S[1],_=E,F=Object(n.useRef)(),I=function(){y([].concat(Object(w.a)(g),[O]).join("")),W()},A=function(){F.current.reset(),h(!1),u(0),a()},W=function(){var e,t=(e=b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F.current.stop(),h(!0),e.next=4,F.current.getTypingPattern({type:1,text:g});case 4:return t=e.sent,console.log(t),e.next=8,fetch("/api/typing-dna/signup",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({typingPattern:t})});case 8:return a=e.sent,e.next=11,a.json();case 11:n=e.sent,console.log(n),200===a.status&&(F.current.start(),u(s+1),h(!1),D(""));case 14:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){v(o,n,r,i,s,"next",e)}function s(e){v(o,n,r,i,s,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){F.current||(F.current=new TypingDNA)}),[F]),P("div",null,P(x.a,{open:t,onClose:A,"aria-labelledby":"form-dialog-title"},P(k.a,{id:"form-dialog-title"},P("img",{width:"200",src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true"})),P(j.a,{className:o},P(N.a,null,"To ensure the highest level of security, we are using a technology that will test who you are by the way you type!"),P(c.a,{variant:"body1",component:"body1"},s<_.length?P(r.a.Fragment,null,"Please type ",P("span",{style:{color:"rgba(255, 255, 255, 0.7)"}},"(typos accepted)"),": ",_[s].substring(0,O.length),P("span",{style:{background:"#0081cb",borderRadius:"2px"}},_[s].substring(O.length,_[s].length)),P(l.a,{autoFocus:!0,autoComplete:"off",margin:"dense",id:"name",label:"Type Message Here",color:"secondary",value:O,inputProps:{spellCheck:"false"},disabled:f,onChange:function(e){return t=e.target.value,D(t),void(t.length===_[s].length&&I());var t},fullWidth:!0})):P(C,{color:"secondary"}))),P(T.a,null,P(m.a,{onClick:A,color:"secondary"},"Go Back"))))}var F=r.a.createElement;function I(e){var t=(0,e.useStyles)(),a=t.root,o=t.dialog,u=t.brand,d=t.auto,f=t.arbiTrader,h=t.buttons,p=t.logo,y=Object(n.useState)(null),b=y[0],v=y[1],w=Object(n.useState)(!1),x=w[0],k=w[1],j=function(e){v(e)};return Object(n.useEffect)((function(){"seller"===b&&k(!0)}),[b]),F(i.a,{className:a},F(_,{styles:o,open:x,handleDialogClose:function(){k(!1),v(null)}}),F(s.a,null,F("div",{className:u},F("img",{src:"https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true",alt:"logo",className:p}),F(c.a,{variant:"h5",noWrap:!0},F("span",{className:d},"auto")," ",F("span",{className:f},"arbi-trader"))),"buyer"==b?F(l.a,{color:"secondary",id:"standard-required",label:"Transaction ID",required:!0}):F(c.a,{variant:"h6",color:"textSecondary"},"Welcome! What role will you be needing assistance in your transaction today?")),F(g,{className:h},"buyer"==b?F(r.a.Fragment,null,F(m.a,{size:"large",color:"secondary",onClick:function(){return j(null)}},"Go Back"),F(m.a,{size:"large",color:"secondary"},"Submit")):F(r.a.Fragment,null,F(m.a,{size:"large",color:"secondary",onClick:function(){return j("buyer")}},"Buying"),F(m.a,{size:"large",color:"secondary",onClick:function(){return j("seller")}},"Selling"))))}var A=a("R/WZ"),W=Object(A.a)((function(e){return{page:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},root:{minWidth:275,maxWidth:300,display:"flex",flexDirection:"column",alignItems:"center"},brand:{display:"grid",gridAutoFlow:"column",justifyContent:"center",alignItems:"center"},logo:{maxWidth:50,padding:e.spacing(1),paddingLeft:e.spacing(0)},auto:{color:"#62bdf9"},arbiTrader:{color:"#0081cb"},buttons:{display:"flex",width:"100%",justifyContent:"space-around",margin:"6px"},dialog:{minHeight:160}}})),z=r.a.createElement;function M(){o.a.buyer,o.a.seller;var e=W().page;return z("div",{className:e},z(I,{useStyles:W}))}},u6Hu:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return a("SGa5")}])}},[["u6Hu",0,2,1,4,5,7]]]);