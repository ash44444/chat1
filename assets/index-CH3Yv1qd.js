import{r as n}from"./index-BwT0TMFD.js";const y=new Map,E=(e,l,f=[])=>{const[p,u]=n.useState(),[h,c]=n.useState(!1),[g,a]=n.useState(""),[d,t]=n.useState(0);return n.useEffect(()=>{const o=new AbortController;if(y.has(l)){u(JSON.parse(y.get(l)));return}return c(!0),fetch(e,{credentials:"include",signal:o.signal}).then(async r=>{const i=await r.json();if(r.ok)u(i),y.set(l,JSON.stringify(i));else throw new Error(i.message||"Errro while fetching!")}).catch(r=>{r.name!=="AbortError"&&a(r.message||"Something went wrong!")}).finally(()=>c(!1)),()=>{o.abort()}},[d,...f]),{data:p,loading:h,error:g,refetch:()=>{y.delete(l),t(o=>o+1)},clearCache:()=>{y.delete(l)}}},v=e=>/^[a-zA-Z0-9]+$/.test(e),b=(e,l=5,f=10)=>{const p=e==="multiple"?[]:null,u=e==="multiple"?[]:null,[h,c]=n.useState(null),[g,a]=n.useState(p),[d,t]=n.useState(u);return{file:g,preview:d,error:h,changeHandler:s=>{if(s.target.files){if(e==="single"){const o=s.target.files[0];if(s.target.files.length>1)return c("Cannot upload more than 1 file, please select type as 'Multiple'");if(o.size>1024*1024*l)return c("File size too large");const r=new FileReader;r.readAsDataURL(o),r.onloadend=()=>{t(r.result)},a(o)}if(e==="multiple"){const o=Array.from(s.target.files);if(f&&o.length>f)return c(`Maximum ${f} files allowed`);for(const r of o){if(r.size>1024*1024*l){c("File size too large");return}const i=new FileReader;i.readAsDataURL(r),i.onloadend=()=>{t(w=>Array.isArray(w)?[...w,i.result]:[i.result])},a(w=>Array.isArray(w)?[...w,r]:[r])}}}}}},A=(e,l=()=>{})=>{const[f,p]=n.useState(e),[u,h]=n.useState("");return{value:f,changeHandler:g=>{let a;typeof f=="number"?a=Number(g.target.value):a=g.target.value,p(a);const d=l(a);h(d?d.errorMessage:"")},error:u}},x=(e,l,f,p,u,h=!1)=>{const[c,g]=n.useState([]),a=n.useRef(null),d=n.useCallback(()=>{a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{if(!e.current)return;const{scrollTop:t}=e.current;if(t===0){if(l===f)return;p(s=>s+1)}},200)},[l,f]);return n.useEffect(()=>{const t=e.current;return t&&t.addEventListener("scroll",d),()=>{t&&t.removeEventListener("scroll",d)}},[d,c]),n.useEffect(()=>{let t=0,m=0;e.current&&(t=e.current.scrollHeight,m=e.current.scrollTop),u&&g(s=>{const o=new Set(s.map(i=>i._id)),r=u==null?void 0:u.filter(i=>!o.has(i._id));return h?[...(Array.isArray(r)?[...r]:[r]).reverse(),...s]:[...r,...s]}),requestAnimationFrame(()=>{if(e.current){const s=m+e.current.scrollHeight-t;e.current.scrollTop=s}})},[u]),{data:c,setData:g}};n.memo(({size:e=10,color:l="black",styles:f,zoom:p="2",mode:u="normal"})=>{if(e<1||e>40)throw new Error("Size must be between 1 and 40");const h=n.useRef(),c=n.useRef({x:0,y:0}),g=n.useRef(!1),a=t=>{c.current={x:t.clientX,y:t.clientY};const s=t.target.getAttribute("data-firebolt-zoom");g.current=!!s},d=n.useCallback(()=>{let t=c.current.x,m=c.current.y;const s=h.current;s&&(Array.from(s).forEach((o,r)=>{o.style.left=`${t-12}px`,o.style.top=`${m-12}px`,o.x=t,o.y=m;const i=(s.length-r)/s.length;o.style.scale=i.toString();const w=s[r+1]||s[0];t+=(Number(w.x||0)-t)*.3,m+=(Number(w.y||0)-m)*.3,r===0&&g.current&&(o.style.scale=p)}),requestAnimationFrame(d))},[]);return n.useEffect(()=>(h.current=document.getElementsByClassName("6pp-firebolt-Cursor"),d(),window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}),[]),n.createElement("div",{style:{zIndex:"10000",mixBlendMode:u,pointerEvents:"none"}},Array.from({length:e}).map((t,m)=>n.createElement("div",{className:"6pp-firebolt-Cursor",key:m,style:{position:"fixed",height:"24px",width:"24px",borderRadius:"50%",left:0,top:0,backgroundColor:l,userSelect:"none",pointerEvents:"none",transition:"scale 0.2s",...f}})))});export{b as a,x as b,E as c,v as i,A as u};
