import{B as U,z as _,D as w,F as c,r as i,G as B,H as L,j as e,J as A,K as k,S as z,U as D}from"./index-BwT0TMFD.js";import"./Menu-BcV6mNcf.js";import{a as I,A as $}from"./Avatar-WPLaIzDg.js";import{B as V}from"./Menu-BUBWf6En.js";function F(s){return _("MuiAvatarGroup",s)}const H=U("MuiAvatarGroup",["root","avatar"]),J=H,K=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],P={small:-16,medium:null},T=s=>{const{classes:a}=s;return k({root:["root"],avatar:["avatar"]},F,a)},W=w("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(s,a)=>c({[`& .${J.avatar}`]:a.avatar},a.root)})(({theme:s,ownerState:a})=>{const t=a.spacing&&P[a.spacing]!==void 0?P[a.spacing]:-a.spacing;return{[`& .${I.root}`]:{border:`2px solid ${(s.vars||s).palette.background.default}`,boxSizing:"content-box",marginLeft:t??-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}}),q=i.forwardRef(function(a,t){var r;const p=B({props:a,name:"MuiAvatarGroup"}),{children:j,className:M,component:g="div",componentsProps:N={},max:m=5,renderSurplus:f,slotProps:b={},spacing:y="medium",total:S,variant:u="circular"}=p,E=L(p,K);let o=m<2?2:m;const G=c({},p,{max:m,spacing:y,component:g,variant:u}),v=T(G),d=i.Children.toArray(j).filter(n=>i.isValidElement(n)),l=S||d.length;l===o&&(o+=1),o=Math.min(l+1,o);const C=Math.min(d.length,o-1),x=Math.max(l-o,l-C,0),R=f?f(x):`+${x}`,h=(r=b.additionalAvatar)!=null?r:N.additionalAvatar;return e.jsxs(W,c({as:g,ownerState:G,className:A(v.root,M),ref:t},E,{children:[x?e.jsx($,c({variant:u},h,{className:A(v.avatar,h==null?void 0:h.className),children:R})):null,d.slice(0,C).reverse().map(n=>i.cloneElement(n,{className:A(n.props.className,v.avatar),variant:n.props.variant||u}))]}))}),O=q,aa=({avatar:s=[],max:a=4})=>e.jsx(z,{direction:"row",spacing:.5,children:e.jsx(O,{max:a,sx:{position:"relative"},children:e.jsx(V,{width:"5rem",height:"3rem",children:s.map((t,r)=>e.jsx($,{src:D(t),alt:`Avatar ${r}`,sx:{width:"3rem",height:"3rem",position:"absolute",left:{xs:`${.5+r}rem`,sm:`${r}rem`}}},Math.random()*100))})})});export{aa as A};
