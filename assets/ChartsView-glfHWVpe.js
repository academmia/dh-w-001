import{_ as V}from"./CandleChartContainer-l9ilJ2pQ.js";import{_ as x,a as W,b as M}from"./StrategySelect.vue_vue_type_script_setup_true_lang-IyRLYE9x.js";import{g as w,u as y,r as v,m as _,v as S,c as p,h as t,a as o,b as c,z as u,A as C,o as f}from"./index-hWqA56e1.js";import"./EditValue.vue_vue_type_script_setup_true_lang-kXZMK3u9.js";import"./plus-box-outline-StGTkMY8.js";import"./installCanvasRenderer-mH2yUJmK.js";import"./install-vFnXNIhS.js";import"./createSeriesDataSimply-nKRAsgXy.js";const T={class:"d-flex flex-column h-100"},k={key:0,class:"mx-md-3 mt-2"},N={class:"d-flex flex-wrap mx-1 gap-1 gap-md-2"},U={class:"col-12 col-md-3 text-start me-md-1"},$=o("span",null,"Strategy",-1),A={class:"col-12 col-md-3 text-start"},P=o("span",null,"Timeframe",-1),R={class:"mx-md-2 mt-2 pb-1 h-100"},J=w({__name:"ChartsView",setup(z){const e=y(),i=v(""),l=v(""),r=v(""),n=_(()=>e.activeBot.isWebserverMode?r.value||e.activeBot.strategy.timeframe||"":e.activeBot.timeframe),B=_(()=>{if(e.activeBot.isWebserverMode){if(n.value&&n.value!==""){const d=n.value;return e.activeBot.pairlistWithTimeframe.filter(([a,m])=>(console.log(a,m,d),m===d)).map(([a])=>a)}return e.activeBot.pairlist}return e.activeBot.whitelist});return S(()=>{e.activeBot.isWebserverMode?e.activeBot.getAvailablePairs({timeframe:e.activeBot.timeframe}):(!e.activeBot.whitelist||e.activeBot.whitelist.length===0)&&e.activeBot.getWhitelist()}),(d,a)=>{const m=x,g=W,h=M,b=V;return f(),p("div",T,[t(e).activeBot.isWebserverMode?(f(),p("div",k,[o("div",N,[o("div",U,[$,c(m,{modelValue:t(i),"onUpdate:modelValue":a[0]||(a[0]=s=>u(i)?i.value=s:null),class:"mt-1"},null,8,["modelValue"])]),o("div",A,[P,c(g,{modelValue:t(r),"onUpdate:modelValue":a[1]||(a[1]=s=>u(r)?r.value=s:null),class:"mt-1"},null,8,["modelValue"])]),c(h,{modelValue:t(l),"onUpdate:modelValue":a[2]||(a[2]=s=>u(l)?l.value=s:null)},null,8,["modelValue"])])])):C("",!0),o("div",R,[c(b,{"available-pairs":t(B),"historic-view":t(e).activeBot.isWebserverMode,timeframe:t(n),trades:t(e).activeBot.trades,timerange:t(e).activeBot.isWebserverMode?t(l):"",strategy:t(e).activeBot.isWebserverMode?t(i):"","plot-config-modal":!1},null,8,["available-pairs","historic-view","timeframe","trades","timerange","strategy"])])])}}});export{J as default};
//# sourceMappingURL=ChartsView-glfHWVpe.js.map
