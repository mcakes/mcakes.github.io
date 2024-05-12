import{r as s,_ as B,$ as Z,a as F,j as e,i as E,g as X,c as S,b as O,d as P}from"./index-BmTmhgNX.js";const W=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Y=W.reduce((r,n)=>{const a=s.forwardRef((h,p)=>{const{asChild:u,...v}=h,w=u?Z:n;return s.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),s.createElement(w,B({},v,{ref:p}))});return a.displayName=`Primitive.${n}`,{...r,[n]:a}},{}),A=s.forwardRef((r,n)=>{var a;const{container:h=globalThis==null||(a=globalThis.document)===null||a===void 0?void 0:a.body,...p}=r;return h?F.createPortal(s.createElement(Y.div,B({},p,{ref:n})),h):null});var z="fec6b8638e76466d1b7c01af48179311896075973b211358ed0723298a2a19d4",J={root:"_root_hgyrj_2",initialized:"_initialized_hgyrj_29",header:"_header_hgyrj_32",actions:"_actions_hgyrj_49",button:"_button_hgyrj_54",scrollToRoot:"_scrollToRoot_hgyrj_68",text:"_text_hgyrj_75",main:"_main_hgyrj_78",timeline:"_timeline_hgyrj_87",guides:"_guides_hgyrj_93",guide:"_guide_hgyrj_93",percent:"_percent_hgyrj_109",progress:"_progress_hgyrj_118",trail:"_trail_hgyrj_123",gradient:"_gradient_hgyrj_132",marker:"_marker_hgyrj_141",thumb:"_thumb_hgyrj_151",tweens:"_tweens_hgyrj_165",row:"_row_hgyrj_171",footer:"_footer_hgyrj_180",version:"_version_hgyrj_192",bsmnt:"_bsmnt_hgyrj_195",tween:"_tween_hgyrj_165",waypoint:"_waypoint_hgyrj_224",onCall:"_onCall_hgyrj_238",onReverseCall:"_onReverseCall_hgyrj_239",active:"_active_hgyrj_250",selectWrapper:"_selectWrapper_hgyrj_264",select:"_select_hgyrj_264",arrow:"_arrow_hgyrj_280",highlight:"_highlight_hgyrj_292"},U=`@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
._root_hgyrj_2 {
  --color-gray-lighter: #a3a3a3;
  --color-gray-light: #383838;
  --color-gray: #232323;
  --color-gray-dark: #121212;
  --color-black: #000000;
  --color-white: #ffffff;
  --color-orange: #ff4d00;
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 800px;
  height: auto;
  max-height: 50vh;
  position: fixed;
  z-index: 9999;
  background: #2b2d37;
  border: 1px solid var(--color-gray-light);
  border-radius: 8px;
  overflow: hidden;
  line-height: 1;
  top: 16px;
  left: 16px;
  font-family: "JetBrains Mono", monospace;
  visibility: hidden;
  color: var(--color-white);
}
._root_hgyrj_2._initialized_hgyrj_29 {
  visibility: visible;
}
._root_hgyrj_2 ._header_hgyrj_32 {
  background: var(--color-gray-dark);
  text-align: center;
  padding: 4px 16px;
  min-height: 44px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}
._root_hgyrj_2 ._header_hgyrj_32:hover {
  cursor: grab;
}
._root_hgyrj_2 ._header_hgyrj_32:active {
  cursor: grabbing;
}
._root_hgyrj_2 ._header_hgyrj_32 ._actions_hgyrj_49 {
  display: flex;
  gap: 0 8px;
  align-items: center;
}
._root_hgyrj_2 ._header_hgyrj_32 ._actions_hgyrj_49 ._button_hgyrj_54 {
  color: var(--color-white);
  display: flex;
  align-items: center;
  height: 24px;
  padding: 0px 4px;
  border-radius: 4px;
  background: var(--color-gray);
  border: 1px solid var(--color-gray-light);
}
._root_hgyrj_2 ._header_hgyrj_32 ._actions_hgyrj_49 ._button_hgyrj_54 svg {
  width: 14px;
  height: 14px;
}
._root_hgyrj_2 ._header_hgyrj_32 ._actions_hgyrj_49 ._scrollToRoot_hgyrj_68 {
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  gap: 0 8px;
}
._root_hgyrj_2 ._header_hgyrj_32 ._actions_hgyrj_49 ._scrollToRoot_hgyrj_68 ._text_hgyrj_75 {
  transform: translateY(0.05em);
}
._root_hgyrj_2 ._main_hgyrj_78 {
  border-top: 1px solid var(--color-gray-light);
  border-bottom: 1px solid var(--color-gray-light);
  background: var(--color-black);
  padding: 24px 32px 24px;
  flex: 1;
  overflow: auto;
  max-height: 100%;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 {
  margin-top: 32px;
  position: relative;
  height: 100%;
  width: 100%;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._guides_hgyrj_93 {
  position: absolute;
  height: 100%;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._guides_hgyrj_93 ._guide_hgyrj_93 {
  position: absolute;
  height: 100%;
  width: 1px;
  border-right: 1px dashed rgba(255, 255, 255, 0.5333333333);
  font-size: 14px;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._guides_hgyrj_93 ._guide_hgyrj_93 ._percent_hgyrj_109 {
  padding-bottom: 16px;
  position: absolute;
  top: 0;
  left: 50%;
  line-height: 1;
  transform: translateY(-100%) translateX(-50%);
  color: rgba(255, 255, 255, 0.5333333333);
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._progress_hgyrj_118 {
  pointer-events: none;
  position: absolute;
  inset: 0;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._progress_hgyrj_118 ._trail_hgyrj_123 {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._progress_hgyrj_118 ._trail_hgyrj_123 ._gradient_hgyrj_132 {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  width: 200px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.14) 0.53%, rgba(255, 255, 255, 0) 100%);
  transform: translateX(-100%);
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._progress_hgyrj_118 ._marker_hgyrj_141 {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-white);
  box-sizing: content-box;
  font-size: 14px;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._progress_hgyrj_118 ._marker_hgyrj_141 ._thumb_hgyrj_151 {
  top: 0;
  transform: translateX(-50%) translateY(-100%);
  left: 50%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2px;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._progress_hgyrj_118 ._marker_hgyrj_141 ._thumb_hgyrj_151 ._percent_hgyrj_109 {
  line-height: 1;
  padding-bottom: 3px;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._tweens_hgyrj_165 {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._tweens_hgyrj_165 ._row_hgyrj_171 {
  padding: 4px 0;
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._tweens_hgyrj_165 ._row_hgyrj_171:nth-child(odd) {
  background: rgba(20, 21, 26, 0.3764705882);
}
._root_hgyrj_2 ._main_hgyrj_78 ._timeline_hgyrj_87 ._tweens_hgyrj_165 ._row_hgyrj_171:nth-child(even) {
  background: rgba(20, 21, 26, 0.5647058824);
}
._root_hgyrj_2 ._footer_hgyrj_180 {
  background: var(--color-gray-dark);
  text-transform: uppercase;
  text-align: center;
  padding: 4px 16px;
  min-height: 44px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
}
._root_hgyrj_2 ._footer_hgyrj_180 ._version_hgyrj_192 {
  color: var(--color-gray-lighter);
}
._root_hgyrj_2 ._footer_hgyrj_180 ._bsmnt_hgyrj_195 {
  color: var(--color-orange);
}

._tween_hgyrj_165 {
  --duration-percentage: 0;
  --start-offset-percentage: 0;
  left: var(--start-offset-percentage);
  /* (1px for outline width + 1px for outline offset) */
  width: calc(var(--duration-percentage) - 3px);
  cursor: default;
  font-size: 12px;
  color: var(--color-white);
  position: relative;
  display: flex;
  align-items: center;
  min-height: 12px;
  height: 18px;
  background: white;
  padding-left: 8px;
  font-weight: 500;
  border-radius: 0px 4px 4px 0px;
  margin: 0 2px;
  outline: 1px solid var(--color-gray-light);
  outline-offset: 1px;
  overflow: hidden;
  white-space: nowrap;
}

._waypoint_hgyrj_224 {
  --start-offset-percentage: 0;
  position: relative;
  left: var(--start-offset-percentage);
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-gray);
  border: 1px solid var(--color-gray-light);
  border-radius: 6px;
  transform: translateX(-50%);
}
._waypoint_hgyrj_224 ._onCall_hgyrj_238,
._waypoint_hgyrj_224 ._onReverseCall_hgyrj_239 {
  opacity: 0;
  transition-property: transform opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}
._waypoint_hgyrj_224 ._onCall_hgyrj_238 {
  position: absolute;
  right: -8px;
  transform: translateX(50%);
}
._waypoint_hgyrj_224 ._onCall_hgyrj_238._active_hgyrj_250 {
  opacity: 1;
  transform: translateX(100%) scale(1.2);
}
._waypoint_hgyrj_224 ._onReverseCall_hgyrj_239 {
  position: absolute;
  left: -8px;
  transform: translateX(-50%);
}
._waypoint_hgyrj_224 ._onReverseCall_hgyrj_239._active_hgyrj_250 {
  opacity: 1;
  transform: translateX(-100%) scale(1.2);
}

._selectWrapper_hgyrj_264 {
  position: relative;
}
._selectWrapper_hgyrj_264 ._select_hgyrj_264 {
  appearance: none;
  cursor: pointer;
  background: var(--color-gray);
  color: var(--color-white);
  border: 1px solid var(--color-gray-light);
  height: 24px;
  border-radius: 4px;
  width: max-content;
  min-width: 110px;
  padding: 0 8px;
  padding-right: 24px;
}
._selectWrapper_hgyrj_264 ._arrow_hgyrj_280 {
  pointer-events: none;
  position: absolute;
  content: "";
  right: 8px;
  top: 50%;
  width: 12px;
  height: 12px;
  z-index: 10;
  transform: translateY(-50%);
}

._highlight_hgyrj_292 {
  background: rgba(236, 91, 41, 0.6666666667);
  z-index: 999;
}

@media (max-width: 768px) {
  ._root_hgyrj_2 {
    left: 50%;
    transform: translateX(-50%);
  }
  ._root_hgyrj_2 ._version_hgyrj_192 {
    display: none;
  }
  ._root_hgyrj_2 ._scrollToRoot_hgyrj_68 ._text_hgyrj_75 {
    display: none;
  }
}`;(function(){if(typeof document<"u"&&!document.getElementById(z)){var r=document.createElement("style");r.id=z,r.textContent=U,document.head.appendChild(r)}})();var t=J,G={name:"@bsmnt/scrollytelling",author:"JB <jb@basement.studio>",version:"0.3.3",main:"./dist/index.js",module:"./dist/index.mjs",types:"./dist/index.d.ts",source:"./src/index.ts",sideEffects:!1,scripts:{dev:"yarn build --watch",build:"tsup --config tsup.config.ts"},peerDependencies:{gsap:">=3",react:">=18","react-dom":">=18"},dependencies:{"@radix-ui/react-portal":">=1","@radix-ui/react-slot":">=1"},devDependencies:{"@types/react":"^18.0.17","@types/react-dom":"^18.0.6","esbuild-scss-modules-plugin":"^1.1.1",gsap:"^3.11.5",react:"^18.2.0","react-dom":"^18.2.0",tsconfig:"*",tsup:"^6.2.3","type-fest":"^3.0.0",typescript:"^4.8.4"}},K=r=>{const n=document.createElement("div");n.style.position="fixed";const a=r.getBoundingClientRect();return n.style.top=`${a.top}px`,n.style.left=`${a.left}px`,n.style.width=`${a.width}px`,n.style.height=`${a.height}px`,n.classList.add(t.highlight),document.body.appendChild(n),()=>{document.body.removeChild(n)}},V=[["#F87171","#991B1B"],["#FACC15","#854D0E"],["#4ADE80","#166534"],["#2DD4BF","#115E59"],["#38BDF8","#075985"],["#818CF8","#3730A3"],["#C084FC","#6B21A8"],["#E879F9","#86198F"],["rgba(244, 114, 182, 0.40)","#9D174D"]],q=({tween:r,root:n,idx:a})=>{var h,p;const[u,v]=s.useState(!1),[w,b]=s.useState(!1);s.useEffect(()=>{if(u){const _=r.targets().map(d=>{if(d instanceof SVGElement||d instanceof HTMLElement)return K(d)});return()=>{_.forEach(d=>d&&d())}}},[u,r]),s.useEffect(()=>{const _=()=>{var d;const m=(d=n.tween)==null?void 0:d.progress();if(!m)return;const x=r._start/100,k=(r._start+r._dur)/100;m>=x&&m<=k?b(!0):b(!1)};return E.on("timeline:update",_)},[n.tween,r._dur,r._start]);const T=r.targets().map(_=>{if(_ instanceof SVGElement||_ instanceof HTMLElement)return`${_.tagName.toLocaleLowerCase()}${_.id?`#${_.id}`:""}${_.classList.length?"."+_.classList[0]:""}`;if(_ instanceof Object){const d=Object.keys(_).filter(x=>x!="_gsap"),m=d.slice(0,3);return d.length>m.length&&m.push("..."),`${_.constructor.name} { ${m.join(", ")} }`}}).join(", ");return e.jsx("div",{title:T,className:`${t.tween}${w?` ${[t.active]}`:""}`,style:{"--duration-percentage":r._dur+"%","--start-offset-percentage":r._start+"%",background:"linear-gradient(90deg, transparent 0%, "+((h=V[a%V.length])==null?void 0:h[0])+" 100%)",outlineColor:(p=V[a%V.length])==null?void 0:p[1],minWidth:16},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),onClick:()=>{var _;const d=(_=n.tween)==null?void 0:_.scrollTrigger;if(!d)return;const m=d.start,x=d.end,k=m+(x-m)*(r._start/100);console.log({start:m,end:x,tweenStart:r._start}),window.scrollTo({top:k,behavior:"smooth"})},children:T})},Q=({tween:r,root:n})=>{const[a,h]=s.useState(void 0);return s.useEffect(()=>{r.data.type==="waypoint"&&(r.data._internalOnCall=()=>{h("complete")},r.data._internalOnReverseCall=()=>{h("reverse-complete")})},[r.data]),e.jsxs("div",{style:{"--start-offset-percentage":r._start+"%"},className:t.waypoint,onClick:()=>{var p,u;const v=(p=n.tween)==null?void 0:p.scrollTrigger;if(v&&r.data.type==="waypoint"&&((u=n.tween)==null?void 0:u.labels[r.data.label])){const b=v.labelToScroll(r.data.label);window.scrollTo({top:b+0,behavior:"smooth"})}},children:[e.jsx("span",{className:S(t.onReverseCall,a==="reverse-complete"&&t.active),children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M6.375 9.75L2.625 6L6.375 2.25M9.375 9.75L5.625 6L9.375 2.25",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M1.5 1.5V2.25V1.5ZM1.5 10.5V7.5V10.5ZM1.5 7.5L2.885 7.1535C3.9272 6.89302 5.0282 7.01398 5.989 7.4945L6.043 7.5215C6.98459 7.9921 8.06137 8.11772 9.086 7.8765L10.643 7.5105C10.4523 5.76591 10.4515 4.00577 10.6405 2.261L9.0855 2.627C8.06097 2.86794 6.98439 2.74215 6.043 2.2715L5.989 2.2445C5.0282 1.76398 3.9272 1.64302 2.885 1.9035L1.5 2.25M1.5 7.5V2.25V7.5Z",fill:"white",fillOpacity:"0.12"}),e.jsx("path",{d:"M1.5 1.5V2.25M1.5 2.25L2.885 1.9035C3.9272 1.64302 5.0282 1.76398 5.989 2.2445L6.043 2.2715C6.98439 2.74215 8.06097 2.86794 9.0855 2.627L10.6405 2.261C10.4515 4.00577 10.4523 5.76591 10.643 7.5105L9.086 7.8765C8.06137 8.11772 6.98459 7.9921 6.043 7.5215L5.989 7.4945C5.0282 7.01398 3.9272 6.89302 2.885 7.1535L1.5 7.5M1.5 2.25V7.5M1.5 10.5V7.5",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("span",{className:S(t.onCall,a==="complete"&&t.active),children:e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.625 2.25L9.375 6L5.625 9.75M2.625 2.25L6.375 6L2.625 9.75",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})})})]})},ee=({root:r})=>{const[n,a]=s.useState(0);return s.useEffect(()=>{const h=()=>{var p;const u=(p=r==null?void 0:r.tween)==null?void 0:p.progress();a(u??0)};return E.on("timeline:update",h)},[r==null?void 0:r.tween]),e.jsxs(e.Fragment,{children:[(n*100).toFixed(0),"%"]})},te=r=>e.jsxs("div",{className:t.selectWrapper,children:[e.jsx("select",O(P({},r),{className:S(t.select,r.className)})),e.jsx("svg",{className:t.arrow,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M9.75 4.125L6 7.875L2.25 4.125",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})})]}),re=()=>{var r;const n=s.useRef(null),a=s.useRef(null),h=s.useRef(null),p=s.useRef(null),[u,v]=s.useState([]),[w,b]=s.useState(),[T,_]=s.useState(!1),[d,m]=s.useState(!1),[x,k]=s.useState(!1),[D,I]=s.useState(),[$,H]=s.useState(!0),j=(r=u.find(o=>o.id===w))!=null?r:u[0];return s.useEffect(()=>{if(!$)return;const o=()=>{I(window.scrollY)};window.addEventListener("scroll",o);const i=u.find(l=>{var c;const y=(c=l==null?void 0:l.tween)==null?void 0:c.progress(),f=Math.round(y*100)/100;return f!==void 0&&f>0&&f<1});if(i)return b(i.id),()=>{window.removeEventListener("scroll",o)}},[$,u,D]),s.useEffect(()=>{const o=()=>{var i;const l=(i=j==null?void 0:j.tween)==null?void 0:i.progress();!h.current||!p.current||l===void 0||(h.current.style.left=`${l*100}%`,p.current.style.left=`${l*100}%`)};return E.on("timeline:update",o)},[j==null?void 0:j.tween]),s.useEffect(()=>{const o=n.current,i=a.current,l=sessionStorage.getItem("@bmsmnt/scrollytelling-visualizer:position");if(!o||!i)return;let c=0,y=0,f=0,L=0;if(l){const{top:g,left:C}=JSON.parse(l);o.style.top=g,o.style.left=C}const N=g=>{g=g||window.event;const C=g.target;C instanceof HTMLElement&&(C.closest("button")||C.closest("select")||C.closest("input"))||(g.preventDefault(),f=g.clientX,L=g.clientY,document.addEventListener("mouseup",R),document.addEventListener("mousemove",M))},M=g=>{o&&(g=g||window.event,g.preventDefault(),c=f-g.clientX,y=L-g.clientY,f=g.clientX,L=g.clientY,o.style.top=o.offsetTop-y+"px",o.style.left=o.offsetLeft-c+"px")};function R(){document.removeEventListener("mouseup",R),document.removeEventListener("mousemove",M),sessionStorage.setItem("@bmsmnt/scrollytelling-visualizer:position",JSON.stringify({top:o==null?void 0:o.style.top,left:o==null?void 0:o.style.left}))}return i.addEventListener("mousedown",N),k(!0),()=>{i.removeEventListener("mousedown",N),R()}},[]),s.useEffect(()=>E.on("timeline:refresh",()=>{const o=[];X.globalTimeline.getChildren().forEach(i=>{var l;if(!((l=i.data)!=null&&l.isScrollytellingTween))return;const c=i.data;switch(c.type){case"root":{const y=o.find(f=>f.id===c.id);y?(y.debug=c.debug,y.tween=i,y.label=c.label):o.push({id:c.id,debug:c.debug,label:c.label,children:[],tween:i});break}case"rest":case"waypoint":case"animation":{const y=o.find(f=>f.id===c.rootId);y?y.children.push(i):o.push({id:c.rootId,debug:!1,label:c.rootId,children:[i],tween:void 0});break}}}),o.sort((i,l)=>{var c,y,f,L;const N=(y=(c=i.tween)==null?void 0:c.scrollTrigger)==null?void 0:y.trigger,M=(L=(f=l.tween)==null?void 0:f.scrollTrigger)==null?void 0:L.trigger;if(!N||!M)return 0;const R=N.getBoundingClientRect().top,g=M.getBoundingClientRect().top;return R-g}),v(o.filter(i=>i.debug))}),[]),s.useEffect(()=>{E.emit("timeline:refresh")},[]),T?e.jsx(e.Fragment,{}):e.jsxs("div",{className:S(t.root,x&&t.initialized),ref:n,children:[e.jsxs("header",{className:t.header,ref:a,children:[e.jsxs("div",{className:t.actions,children:[e.jsx(te,{value:w,onChange:o=>b(o.currentTarget.value),onPointerDown:o=>o.stopPropagation(),children:u.map(o=>e.jsx("option",{value:o.id,children:o.label},o.id))}),e.jsx("div",{className:t.actions,children:e.jsxs("button",{className:S(t.button,t.scrollToRoot),onClick:()=>{var o,i;const l=(i=(o=j==null?void 0:j.tween)==null?void 0:o.scrollTrigger)==null?void 0:i.trigger;l&&(H(!1),setTimeout(()=>{H(!0)},1500),l.scrollIntoView({behavior:"smooth"}))},children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M10.875 6.00004L6.398 1.52254C6.178 1.30304 5.822 1.30304 5.6025 1.52254L1.125 6.00004M9.75 4.87504V9.93754C9.75 10.248 9.498 10.5 9.1875 10.5H7.125V8.06254C7.125 7.75204 6.873 7.50004 6.5625 7.50004H5.4375C5.127 7.50004 4.875 7.75204 4.875 8.06254V10.5H2.8125C2.502 10.5 2.25 10.248 2.25 9.93754V4.87504M7.875 10.5H3.75",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("span",{className:t.text,children:"SCROLL TO ROOT"})]})})]}),e.jsxs("div",{className:t.actions,children:[e.jsx("button",{className:t.button,onClick:()=>m(o=>!o),children:d?e.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.43359 8C2.43359 7.72386 2.65745 7.5 2.93359 7.5H13.0669C13.3431 7.5 13.5669 7.72386 13.5669 8C13.5669 8.27614 13.3431 8.5 13.0669 8.5H2.93359C2.65745 8.5 2.43359 8.27614 2.43359 8Z",fill:"white"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 2.43311C8.27614 2.43311 8.5 2.65697 8.5 2.93311L8.5 13.0664C8.5 13.3426 8.27614 13.5664 8 13.5664C7.72386 13.5664 7.5 13.3426 7.5 13.0664L7.5 2.93311C7.5 2.65697 7.72386 2.43311 8 2.43311Z",fill:"white"})]}):e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.43359 8C2.43359 7.72386 2.65745 7.5 2.93359 7.5H13.0669C13.3431 7.5 13.5669 7.72386 13.5669 8C13.5669 8.27614 13.3431 8.5 13.0669 8.5H2.93359C2.65745 8.5 2.43359 8.27614 2.43359 8Z",fill:"white"})})}),e.jsx("button",{className:t.button,onClick:()=>_(!0),children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5402 4.27333C12.7648 4.04878 12.7648 3.68471 12.5402 3.46016C12.3157 3.23561 11.9516 3.23561 11.7271 3.46016L8.00033 7.18691L4.27358 3.46016C4.04903 3.23561 3.68496 3.23561 3.46041 3.46016C3.23585 3.68471 3.23585 4.04878 3.46041 4.27333L7.18715 8.00008L3.46041 11.7268C3.23585 11.9514 3.23585 12.3154 3.46041 12.54C3.68496 12.7646 4.04903 12.7646 4.27358 12.54L8.00033 8.81325L11.7271 12.54C11.9516 12.7646 12.3157 12.7646 12.5402 12.54C12.7648 12.3154 12.7648 11.9514 12.5402 11.7268L8.8135 8.00008L12.5402 4.27333Z",fill:"white"})})})]})]}),!d&&e.jsxs(e.Fragment,{children:[e.jsx("main",{className:t.main,children:e.jsxs("div",{className:t.timeline,children:[e.jsxs("div",{className:t.guides,children:[e.jsx("div",{className:t.guide,style:{left:"0%"},children:e.jsx("span",{className:t.percent,children:"0%"})}),e.jsx("div",{className:t.guide,style:{left:"25%"},children:e.jsx("span",{className:t.percent,children:"25%"})}),e.jsx("div",{className:t.guide,style:{left:"50%"},children:e.jsx("span",{className:t.percent,children:"50%"})}),e.jsx("div",{className:t.guide,style:{left:"75%"},children:e.jsx("span",{className:t.percent,children:"75%"})}),e.jsx("div",{className:t.guide,style:{left:"100%"},children:e.jsx("span",{className:t.percent,children:"100%"})})]}),e.jsx("div",{className:t.tweens,children:j==null?void 0:j.children.map((o,i)=>{const l=o.data;return l.type==="animation"?e.jsx("div",{className:t.row,children:e.jsx(q,{tween:o,root:j,idx:i})},i):l.type==="waypoint"?e.jsx("div",{className:t.row,children:e.jsx(Q,{tween:o,root:j,idx:i})},i):e.jsx(e.Fragment,{})})}),e.jsxs("div",{className:t.progress,children:[e.jsx("div",{className:t.marker,ref:h,children:e.jsxs("span",{className:t.thumb,children:[e.jsx("span",{className:t.percent,children:e.jsx(ee,{root:j})}),e.jsxs("svg",{width:"8",height:"11",viewBox:"0 0 8 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"path-1-inside-1_2793_1632",fill:"white",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0H0V8L4 11L8 8V0Z"})}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 0H0V8L4 11L8 8V0Z",fill:"white"}),e.jsx("path",{d:"M0 0V-1H-1V0H0ZM8 0H9V-1H8V0ZM0 8H-1V8.5L-0.6 8.8L0 8ZM4 11L3.4 11.8L4 12.25L4.6 11.8L4 11ZM8 8L8.6 8.8L9 8.5V8H8ZM0 1H8V-1H0V1ZM1 8V0H-1V8H1ZM4.6 10.2L0.6 7.2L-0.6 8.8L3.4 11.8L4.6 10.2ZM7.4 7.2L3.4 10.2L4.6 11.8L8.6 8.8L7.4 7.2ZM7 0V8H9V0H7Z",fill:"white",mask:"url(#path-1-inside-1_2793_1632)"})]})]})}),e.jsx("div",{className:t.trail,children:e.jsx("div",{className:t.gradient,ref:p})})]})]})}),e.jsxs("footer",{className:t.footer,children:[e.jsxs("span",{children:["Visualizer",e.jsxs("span",{className:t.version,children:[" (v.",G.version,")"]})]}),e.jsxs("span",{children:["made with 🖤 by"," ",e.jsx("a",{href:"https://basement.studio",target:"_blank",className:t.bsmnt,rel:"noopener",children:"bsmnt"}),"."]})]})]})]})};function ne(){const[r,n]=s.useState(!1);return s.useEffect(()=>{const a=window;a.__scrollytelling_alreadyMountedDebuggerInstance||(n(!0),a.__scrollytelling_alreadyMountedDebuggerInstance=!0)},[]),r?e.jsx(A,{children:e.jsx(re,{})}):e.jsx(e.Fragment,{})}export{ne as default};
