import{jsx as r}from"react/jsx-runtime";import e from"@darkroom.engineering/tempus";import t from"clsx";import n from"lenis";import{useState as s,useEffect as l,createContext as o,forwardRef as i,useRef as c,useCallback as a,useImperativeHandle as u,useContext as f}from"react";"function"==typeof SuppressedError&&SuppressedError;const p=o(null),d=new class Store{constructor(r){this.listeners=[],this.state=r}set(r){this.state=r;for(let r of this.listeners)r(this.state)}subscribe(r){return this.listeners=[...this.listeners,r],()=>{this.listeners=this.listeners.filter((e=>e!==r))}}get(){return this.state}}({});function m(){const r=f(p),e=function(r){const[e,t]=s(r.get());return l((()=>r.subscribe((r=>t(r)))),[r]),e}(d);return null!=r?r:e}function b(r,e=[],t=0){const{lenis:n,addCallback:s,removeCallback:o}=m();return l((()=>{if(r&&s&&o&&n)return s(r,t),r(n),()=>{o(r)}}),[n,s,o,t,...e]),n}const h=i(((o,i)=>{var{children:f,root:m=!1,options:b={},autoRaf:h=!0,rafPriority:y=0,className:v}=o,g=function(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]])}return t}(o,["children","root","options","autoRaf","rafPriority","className"]);const O=c(null),k=c(null),[N,j]=s(void 0),w=c([]),C=a(((r,e)=>{w.current.push({callback:r,priority:e}),w.current.sort(((r,e)=>r.priority-e.priority))}),[]),P=a((r=>{w.current=w.current.filter((e=>e.callback!==r))}),[]);u(i,(()=>({wrapper:O.current,content:k.current,lenis:N})),[N]),l((()=>{const r=new n(Object.assign(Object.assign({},b),!m&&{wrapper:O.current,content:k.current}));return j(r),()=>{r.destroy(),j(void 0)}}),[m,JSON.stringify(b)]),l((()=>{if(N&&h)return e.add((r=>{null==N||N.raf(r)}),y)}),[N,h,y]),l((()=>{if(m&&N)return d.set({lenis:N,addCallback:C,removeCallback:P}),()=>d.set({})}),[m,N,C,P]);const S=a((r=>{for(let e=0;e<w.current.length;e++)w.current[e].callback(r)}),[]);l((()=>(null==N||N.on("scroll",S),()=>{null==N||N.off("scroll",S)})),[N,S]);const x=a((()=>{O.current&&(O.current.className=t(null==N?void 0:N.className,v))}),[N,v]);return l((()=>(x(),null==N||N.on("className change",x),()=>{null==N||N.off("className change",x)})),[N,x]),r(p.Provider,{value:{lenis:N,addCallback:C,removeCallback:P},children:m?f:r("div",Object.assign({ref:O,className:t(null==N?void 0:N.className,v)},g,{children:r("div",{ref:k,children:f})}))})}));export{h as Lenis,p as LenisContext,h as ReactLenis,h as default,b as useLenis};
//# sourceMappingURL=lenis-react.mjs.map
