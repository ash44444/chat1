import{r as n,aG as Qe,H as G,az as Ae,j as K,F as w,z as ge,B as ye,D as X,G as Pe,J as Q,K as ve,aw as Ze}from"./index-BwT0TMFD.js";import{h as et,u as be,l as tt,r as ot,m as Fe,c as nt,n as rt,o as Z,M as st,P as it,e as _e,d as at,f as ee,i as lt}from"./Modal-UznUDvWG.js";let ke=0;function ct(e){const[t,o]=n.useState(e),h=e||t;return n.useEffect(()=>{t==null&&(ke+=1,o(`mui-${ke}`))},[t]),h}const ze=Qe.useId;function Vt(e){if(ze!==void 0){const t=ze();return e??t}return ct(e)}function Bt({controlled:e,default:t,name:o,state:h="value"}){const{current:g}=n.useRef(e!==void 0),[P,d]=n.useState(t),f=g?e:P,u=n.useCallback(v=>{g||d(v)},[]);return[f,u]}var a={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),se=Symbol.for("react.context"),ut=Symbol.for("react.server_context"),ie=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ft=Symbol.for("react.offscreen"),Ke;Ke=Symbol.for("react.module.reference");function _(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xe:switch(e=e.type,e){case te:case ne:case oe:case ae:case le:return e;default:switch(e=e&&e.$$typeof,e){case ut:case se:case ie:case ue:case ce:case re:return e;default:return t}}case Ee:return t}}}a.ContextConsumer=se;a.ContextProvider=re;a.Element=xe;a.ForwardRef=ie;a.Fragment=te;a.Lazy=ue;a.Memo=ce;a.Portal=Ee;a.Profiler=ne;a.StrictMode=oe;a.Suspense=ae;a.SuspenseList=le;a.isAsyncMode=function(){return!1};a.isConcurrentMode=function(){return!1};a.isContextConsumer=function(e){return _(e)===se};a.isContextProvider=function(e){return _(e)===re};a.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xe};a.isForwardRef=function(e){return _(e)===ie};a.isFragment=function(e){return _(e)===te};a.isLazy=function(e){return _(e)===ue};a.isMemo=function(e){return _(e)===ce};a.isPortal=function(e){return _(e)===Ee};a.isProfiler=function(e){return _(e)===ne};a.isStrictMode=function(e){return _(e)===oe};a.isSuspense=function(e){return _(e)===ae};a.isSuspenseList=function(e){return _(e)===le};a.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===te||e===ne||e===oe||e===ae||e===le||e===ft||typeof e=="object"&&e!==null&&(e.$$typeof===ue||e.$$typeof===ce||e.$$typeof===re||e.$$typeof===se||e.$$typeof===ie||e.$$typeof===Ke||e.getModuleId!==void 0)};a.typeOf=_;const pt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function he(e){return`scale(${e}, ${e**2})`}const dt={entering:{opacity:1,transform:he(1)},entered:{opacity:1,transform:"none"}},pe=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ue=n.forwardRef(function(t,o){const{addEndListener:h,appear:g=!0,children:P,easing:d,in:f,onEnter:u,onEntered:v,onEntering:R,onExit:x,onExited:k,onExiting:E,style:O,timeout:M="auto",TransitionComponent:b=tt}=t,l=G(t,pt),H=et(),r=n.useRef(),s=Ae(),p=n.useRef(null),S=be(p,P.ref,o),i=c=>T=>{if(c){const L=p.current;T===void 0?c(L):c(L,T)}},D=i(R),F=i((c,T)=>{ot(c);const{duration:L,delay:N,easing:m}=Fe({style:O,timeout:M,easing:d},{mode:"enter"});let $;M==="auto"?($=s.transitions.getAutoHeightDuration(c.clientHeight),r.current=$):$=L,c.style.transition=[s.transitions.create("opacity",{duration:$,delay:N}),s.transitions.create("transform",{duration:pe?$:$*.666,delay:N,easing:m})].join(","),u&&u(c,T)}),U=i(v),V=i(E),z=i(c=>{const{duration:T,delay:L,easing:N}=Fe({style:O,timeout:M,easing:d},{mode:"exit"});let m;M==="auto"?(m=s.transitions.getAutoHeightDuration(c.clientHeight),r.current=m):m=T,c.style.transition=[s.transitions.create("opacity",{duration:m,delay:L}),s.transitions.create("transform",{duration:pe?m:m*.666,delay:pe?L:L||m*.333,easing:N})].join(","),c.style.opacity=0,c.style.transform=he(.75),x&&x(c)}),B=i(k),W=c=>{M==="auto"&&H.start(r.current||0,c),h&&h(p.current,c)};return K.jsx(b,w({appear:g,in:f,nodeRef:p,onEnter:F,onEntered:U,onEntering:D,onExit:z,onExited:B,onExiting:V,addEndListener:W,timeout:M==="auto"?null:M},l,{children:(c,T)=>n.cloneElement(P,w({style:w({opacity:0,transform:he(.75),visibility:c==="exited"&&!f?"hidden":void 0},dt[c],O,P.props.style),ref:S},T))}))});Ue.muiSupportAuto=!0;const mt=Ue,ht=n.createContext({}),gt=ht;function yt(e){return ge("MuiList",e)}ye("MuiList",["root","padding","dense","subheader"]);const Pt=["children","className","component","dense","disablePadding","subheader"],vt=e=>{const{classes:t,disablePadding:o,dense:h,subheader:g}=e;return ve({root:["root",!o&&"padding",h&&"dense",g&&"subheader"]},yt,t)},bt=X("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>w({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),xt=n.forwardRef(function(t,o){const h=Pe({props:t,name:"MuiList"}),{children:g,className:P,component:d="ul",dense:f=!1,disablePadding:u=!1,subheader:v}=h,R=G(h,Pt),x=n.useMemo(()=>({dense:f}),[f]),k=w({},h,{component:d,dense:f,disablePadding:u}),E=vt(k);return K.jsx(gt.Provider,{value:x,children:K.jsxs(bt,w({as:d,className:Q(E.root,P),ref:o,ownerState:k},R,{children:[v,g]}))})}),Et=xt,St=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function de(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function je(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function We(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function Y(e,t,o,h,g,P){let d=!1,f=g(e,t,t?o:!1);for(;f;){if(f===e.firstChild){if(d)return!1;d=!0}const u=h?!1:f.disabled||f.getAttribute("aria-disabled")==="true";if(!f.hasAttribute("tabindex")||!We(f,P)||u)f=g(e,f,o);else return f.focus(),!0}return!1}const wt=n.forwardRef(function(t,o){const{actions:h,autoFocus:g=!1,autoFocusItem:P=!1,children:d,className:f,disabledItemsFocusable:u=!1,disableListWrap:v=!1,onKeyDown:R,variant:x="selectedMenu"}=t,k=G(t,St),E=n.useRef(null),O=n.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});nt(()=>{g&&E.current.focus()},[g]),n.useImperativeHandle(h,()=>({adjustStyleForScrollbar:(r,s)=>{const p=!E.current.style.width;if(r.clientHeight<E.current.clientHeight&&p){const S=`${rt(Z(r))}px`;E.current.style[s.direction==="rtl"?"paddingLeft":"paddingRight"]=S,E.current.style.width=`calc(100% + ${S})`}return E.current}}),[]);const M=r=>{const s=E.current,p=r.key,S=Z(s).activeElement;if(p==="ArrowDown")r.preventDefault(),Y(s,S,v,u,de);else if(p==="ArrowUp")r.preventDefault(),Y(s,S,v,u,je);else if(p==="Home")r.preventDefault(),Y(s,null,v,u,de);else if(p==="End")r.preventDefault(),Y(s,null,v,u,je);else if(p.length===1){const i=O.current,D=p.toLowerCase(),F=performance.now();i.keys.length>0&&(F-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&D!==i.keys[0]&&(i.repeating=!1)),i.lastTime=F,i.keys.push(D);const U=S&&!i.repeating&&We(S,i);i.previousKeyMatched&&(U||Y(s,S,!1,u,de,i))?r.preventDefault():i.previousKeyMatched=!1}R&&R(r)},b=be(E,o);let l=-1;n.Children.forEach(d,(r,s)=>{if(!n.isValidElement(r)){l===s&&(l+=1,l>=d.length&&(l=-1));return}r.props.disabled||(x==="selectedMenu"&&r.props.selected||l===-1)&&(l=s),l===s&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(l+=1,l>=d.length&&(l=-1))});const H=n.Children.map(d,(r,s)=>{if(s===l){const p={};return P&&(p.autoFocus=!0),r.props.tabIndex===void 0&&x==="selectedMenu"&&(p.tabIndex=0),n.cloneElement(r,p)}return r});return K.jsx(Et,w({role:"menu",ref:b,className:f,onKeyDown:M,tabIndex:g?0:-1},k,{children:H}))}),Mt=wt;function Ct(e){return ge("MuiPopover",e)}ye("MuiPopover",["root","paper"]);const Rt=["onEntering"],Tt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Lt=["slotProps"];function Oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function He(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Ne(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function me(e){return typeof e=="function"?e():e}const $t=e=>{const{classes:t}=e;return ve({root:["root"],paper:["paper"]},Ct,t)},It=X(st,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ge=X(it,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Dt=n.forwardRef(function(t,o){var h,g,P;const d=Pe({props:t,name:"MuiPopover"}),{action:f,anchorEl:u,anchorOrigin:v={vertical:"top",horizontal:"left"},anchorPosition:R,anchorReference:x="anchorEl",children:k,className:E,container:O,elevation:M=8,marginThreshold:b=16,open:l,PaperProps:H={},slots:r,slotProps:s,transformOrigin:p={vertical:"top",horizontal:"left"},TransitionComponent:S=mt,transitionDuration:i="auto",TransitionProps:{onEntering:D}={},disableScrollLock:F=!1}=d,U=G(d.TransitionProps,Rt),V=G(d,Tt),z=(h=s==null?void 0:s.paper)!=null?h:H,B=n.useRef(),W=be(B,z.ref),c=w({},d,{anchorOrigin:v,anchorReference:x,elevation:M,marginThreshold:b,externalPaperSlotProps:z,transformOrigin:p,TransitionComponent:S,transitionDuration:i,TransitionProps:U}),T=$t(c),L=n.useCallback(()=>{if(x==="anchorPosition")return R;const y=me(u),I=(y&&y.nodeType===1?y:Z(B.current).body).getBoundingClientRect();return{top:I.top+Oe(I,v.vertical),left:I.left+He(I,v.horizontal)}},[u,v.horizontal,v.vertical,R,x]),N=n.useCallback(y=>({vertical:Oe(y,p.vertical),horizontal:He(y,p.horizontal)}),[p.horizontal,p.vertical]),m=n.useCallback(y=>{const C={width:y.offsetWidth,height:y.offsetHeight},I=N(C);if(x==="none")return{top:null,left:null,transformOrigin:Ne(I)};const Re=L();let q=Re.top-I.vertical,J=Re.left-I.horizontal;const Te=q+C.height,Le=J+C.width,$e=_e(me(u)),Ie=$e.innerHeight-b,De=$e.innerWidth-b;if(b!==null&&q<b){const j=q-b;q-=j,I.vertical+=j}else if(b!==null&&Te>Ie){const j=Te-Ie;q-=j,I.vertical+=j}if(b!==null&&J<b){const j=J-b;J-=j,I.horizontal+=j}else if(Le>De){const j=Le-De;J-=j,I.horizontal+=j}return{top:`${Math.round(q)}px`,left:`${Math.round(J)}px`,transformOrigin:Ne(I)}},[u,x,L,N,b]),[$,Se]=n.useState(l),A=n.useCallback(()=>{const y=B.current;if(!y)return;const C=m(y);C.top!==null&&(y.style.top=C.top),C.left!==null&&(y.style.left=C.left),y.style.transformOrigin=C.transformOrigin,Se(!0)},[m]);n.useEffect(()=>(F&&window.addEventListener("scroll",A),()=>window.removeEventListener("scroll",A)),[u,F,A]);const Ve=(y,C)=>{D&&D(y,C),A()},Be=()=>{Se(!1)};n.useEffect(()=>{l&&A()}),n.useImperativeHandle(f,()=>l?{updatePosition:()=>{A()}}:null,[l,A]),n.useEffect(()=>{if(!l)return;const y=at(()=>{A()}),C=_e(u);return C.addEventListener("resize",y),()=>{y.clear(),C.removeEventListener("resize",y)}},[u,l,A]);let we=i;i==="auto"&&!S.muiSupportAuto&&(we=void 0);const qe=O||(u?Z(me(u)).body:void 0),fe=(g=r==null?void 0:r.root)!=null?g:It,Me=(P=r==null?void 0:r.paper)!=null?P:Ge,Je=ee({elementType:Me,externalSlotProps:w({},z,{style:$?z.style:w({},z.style,{opacity:0})}),additionalProps:{elevation:M,ref:W},ownerState:c,className:Q(T.paper,z==null?void 0:z.className)}),Ce=ee({elementType:fe,externalSlotProps:(s==null?void 0:s.root)||{},externalForwardedProps:V,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:qe,open:l},ownerState:c,className:Q(T.root,E)}),{slotProps:Xe}=Ce,Ye=G(Ce,Lt);return K.jsx(fe,w({},Ye,!lt(fe)&&{slotProps:Xe,disableScrollLock:F},{children:K.jsx(S,w({appear:!0,in:l,onEntering:Ve,onExited:Be,timeout:we},U,{children:K.jsx(Me,w({},Je,{children:k}))}))}))}),Ft=Dt;function _t(e){return ge("MuiMenu",e)}ye("MuiMenu",["root","paper","list"]);const kt=["onEntering"],zt=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],jt={vertical:"top",horizontal:"right"},Ot={vertical:"top",horizontal:"left"},Ht=e=>{const{classes:t}=e;return ve({root:["root"],paper:["paper"],list:["list"]},_t,t)},Nt=X(Ft,{shouldForwardProp:e=>Ze(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),At=X(Ge,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Kt=X(Mt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Ut=n.forwardRef(function(t,o){var h,g;const P=Pe({props:t,name:"MuiMenu"}),{autoFocus:d=!0,children:f,className:u,disableAutoFocusItem:v=!1,MenuListProps:R={},onClose:x,open:k,PaperProps:E={},PopoverClasses:O,transitionDuration:M="auto",TransitionProps:{onEntering:b}={},variant:l="selectedMenu",slots:H={},slotProps:r={}}=P,s=G(P.TransitionProps,kt),p=G(P,zt),S=Ae(),i=S.direction==="rtl",D=w({},P,{autoFocus:d,disableAutoFocusItem:v,MenuListProps:R,onEntering:b,PaperProps:E,transitionDuration:M,TransitionProps:s,variant:l}),F=Ht(D),U=d&&!v&&k,V=n.useRef(null),z=(m,$)=>{V.current&&V.current.adjustStyleForScrollbar(m,S),b&&b(m,$)},B=m=>{m.key==="Tab"&&(m.preventDefault(),x&&x(m,"tabKeyDown"))};let W=-1;n.Children.map(f,(m,$)=>{n.isValidElement(m)&&(m.props.disabled||(l==="selectedMenu"&&m.props.selected||W===-1)&&(W=$))});const c=(h=H.paper)!=null?h:At,T=(g=r.paper)!=null?g:E,L=ee({elementType:H.root,externalSlotProps:r.root,ownerState:D,className:[F.root,u]}),N=ee({elementType:c,externalSlotProps:T,ownerState:D,className:F.paper});return K.jsx(Nt,w({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:i?"right":"left"},transformOrigin:i?jt:Ot,slots:{paper:c,root:H.root},slotProps:{root:L,paper:N},open:k,ref:o,transitionDuration:M,TransitionProps:w({onEntering:z},s),ownerState:D},p,{classes:O,children:K.jsx(Kt,w({onKeyDown:B,actions:V,autoFocus:d&&(W===-1||v),autoFocusItem:U,variant:l},R,{className:Q(F.list,R.className),children:f}))}))}),qt=Ut;export{mt as G,gt as L,qt as M,Mt as a,Bt as b,Et as c,Vt as u};
