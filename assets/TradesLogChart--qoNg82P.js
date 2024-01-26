import{g as P,aT as v,m as y,o as x,c as U,a as Z,y as w,h as _,A as $,b as N,w as W,U as E,a4 as J,H as K,_ as k,b6 as H,r as Q,v as X,bc as Y,W as tt,n as V,aV as et,t as ot}from"./index-hWqA56e1.js";import{u as O,bd as L,b9 as S,ba as A,bb as B,bc as I,be as M}from"./installCanvasRenderer-mH2yUJmK.js";import{k as z,f as D,l as j,g as at,m as q,h as st,j as rt}from"./install-vFnXNIhS.js";function nt(i,e){const n=Math.min(...i),c=(Math.max(...i)-n)*1.01/e,f=[...Array(e).keys()].map(r=>[Math.round((n+r*c)*1e3)/1e3,0]);for(let r=0;r<i.length;r++){const a=Math.min(Math.floor((i[r]-n)/c),e-1);isNaN(a)||f[a][1]++}return f}const it={class:"d-flex flex-column h-100 position-relative"},lt={class:"flex-grow-1"},T="Trade count",ct=P({__name:"ProfitDistributionChart",props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean}},setup(i){O([z,L,S,D,A,B,I]);const e=i,n=v(),b=[10,15,20,25,50],c=y(()=>{const r=e.trades.map(a=>a.profit_ratio);return nt(r,n.profitDistributionBins)}),f=y(()=>({title:{text:"Profit distribution",show:e.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{source:c.value},tooltip:{trigger:"axis",axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[T],right:"5%",selectedMode:!1},xAxis:{type:"category",name:"Profit %",nameLocation:"middle",nameGap:25},yAxis:[{type:"value",name:T,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:35,position:"left"}],series:[{type:"bar",name:T,animation:!0,encode:{x:"x0",y:"y0"}}]}));return(r,a)=>{const l=J,g=K;return x(),U("div",it,[Z("div",lt,[i.trades?(x(),w(_(M),{key:0,option:_(f),autoresize:"",theme:_(n).chartTheme},null,8,["option","theme"])):$("",!0)]),N(g,{class:E(["z-2",i.showTitle?"ms-5 ps-5":"position-absolute"]),label:"Bins",style:{width:"33%","min-width":"12rem"},"label-for":"input-bins","label-cols":"6","content-cols":"6",size:"sm"},{default:W(()=>[N(l,{id:"input-bins",modelValue:_(n).profitDistributionBins,"onUpdate:modelValue":a[0]||(a[0]=t=>_(n).profitDistributionBins=t),size:"sm",class:"mt-1",options:b},null,8,["modelValue"])]),_:1},8,["class"])])}}}),_t=k(ct,[["__scopeId","data-v-1d5af327"]]),C="Profit",mt=P({__name:"CumProfitChart",props:{trades:{required:!0,type:Array},openTrades:{required:!1,type:Array,default:()=>[]},showTitle:{default:!0,type:Boolean},profitColumn:{default:"profit_abs",type:String}},setup(i){O([z,j,L,S,D,at,A,B,I]);const e=i,n=v(),b=H(),c=Q(),f=y(()=>e.openTrades.reduce((t,s)=>t+(s.total_profit_abs??s[e.profitColumn]??0),0)),r=y(()=>{const t=[],s={},p=e.trades.slice().sort((m,d)=>m.close_timestamp>d.close_timestamp?1:-1);let h=0;for(let m=0,d=p.length;m<d;m+=1){const o=p[m];o.close_timestamp&&o[e.profitColumn]&&(h+=o[e.profitColumn],s[o.close_timestamp]?(s[o.close_timestamp].profit+=o[e.profitColumn],s[o.close_timestamp][o.botId]?s[o.close_timestamp][o.botId]+=o[e.profitColumn]:s[o.close_timestamp][o.botId]=h):s[o.close_timestamp]={profit:h,[o.botId]:h},t.push({date:o.close_timestamp,profit:h,[o.botId]:h}))}const u=Object.entries(s).map(([m,d])=>({date:parseInt(m,10),profit:d.profit}));if(e.openTrades.length>0){let m=0,d=0;if(u.length>0){const R=u[u.length-1];m=R.profit??0,d=R.date??0}else d=e.openTrades[0].open_timestamp;const o=(m??0)+f.value;u.push({date:d,currentProfit:m});const F=Date.now()+24*60*60*1e3;u.push({date:F,currentProfit:o})}return u});function a(t=!1){const{colorProfit:s,colorLoss:p}=b;return{dataset:{dimensions:["date","profit","currentProfit"],source:r.value},series:[{type:"line",name:"currentProfit",animation:t,lineStyle:{color:f.value>0?s:p,type:"dotted"},itemStyle:{color:f.value>0?s:p},encode:{x:"date",y:"currentProfit"}},{type:"line",name:C,animation:t,step:"end",lineStyle:{color:n.chartTheme==="dark"?"#c2c2c2":"black"},itemStyle:{color:n.chartTheme==="dark"?"#c2c2c2":"black"},encode:{x:"date",y:"profit"}}]}}function l(t=!1){var p;const s=a(t);(p=c.value)==null||p.setOption(s,{replaceMerge:["series","dataset"],notMerge:!t})}function g(){var p,h;(p=c.value)==null||p.setOption({},{notMerge:!0});const t={title:{text:"Cumulative Profit",show:e.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",tooltip:{trigger:"axis",formatter:u=>{const m=u[0].data.profit,d=u[0].data.currentProfit,o=d?`Projected profit (incl. unrealized): ${V(d,3)}`:`Profit: ${V(m,3)}`;return`${et(u[1].data.date)}<br />${u[1].marker}${o}`},axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},legend:{data:[C],right:"5%",selectedMode:!1},useUTC:!1,xAxis:{type:"time"},yAxis:[{type:"value",name:C,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:40}],grid:{bottom:80},dataZoom:[{type:"inside",start:0,end:100},{bottom:10,start:0,end:100,...q}]},s=a(!0);t.series=s.series,t.dataset=s.dataset,(h=c.value)==null||h.setOption(t,{notMerge:!0}),l(!0)}return X(()=>{g()}),Y(()=>e.openTrades,()=>{l()},{throttle:60*1e3}),tt(()=>e.trades,()=>{l()}),(t,s)=>i.trades?(x(),w(_(M),{key:0,ref_key:"chart",ref:c,autoresize:"","manual-update":"",theme:_(n).chartTheme},null,8,["theme"])):$("",!0)}}),bt=k(mt,[["__scopeId","data-v-7d9dce4e"]]),G="Profit %",dt="#9be0a8",pt=P({__name:"TradesLogChart",props:{trades:{required:!0,type:Array},showTitle:{default:!0,type:Boolean}},setup(i){O([z,j,L,S,D,A,B,I,st,rt]);const e=i,n=v(),b=H(),c=y(()=>{const r=[],a=e.trades.slice(0).sort((l,g)=>l.close_timestamp>g.close_timestamp?1:-1);for(let l=0,g=a.length;l<g;l+=1){const t=a[l],s=[l,(t.profit_ratio*100).toFixed(2),t.pair,t.botName,ot(t.close_timestamp),t.is_short===void 0||!t.is_short?"Long":"Short"];r.push(s)}return r}),f=y(()=>{const r=c.value.length>0?(1-50/c.value.length)*100:100;return{title:{text:"Trades log",show:e.showTitle},backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["date","profit"],source:c.value},tooltip:{trigger:"axis",formatter:a=>{const l=a[0].data[3]?` | ${a[0].data[3]}`:"";return`${a[0].data[2]} | ${a[0].data[5]} ${l}<br>${a[0].data[4]}<br>Profit ${a[0].data[1]} %`},axisPointer:{type:"line",label:{backgroundColor:"#6a7985"}}},xAxis:{type:"value",show:!1},yAxis:[{type:"value",name:G,splitLine:{show:!1},nameRotate:90,nameLocation:"middle",nameGap:30}],grid:{bottom:80},dataZoom:[{type:"inside",start:r,end:100},{bottom:10,start:r,end:100,...q}],visualMap:[{show:!0,seriesIndex:0,pieces:[{max:0,color:b.colorLoss},{min:0,color:b.colorProfit}]}],series:[{type:"bar",name:G,barGap:"0%",barCategoryGap:"0%",animation:!1,label:{show:!0,position:"top",rotate:90,offset:[7.5,7.5],formatter:"{@[1]} %",color:n.chartTheme==="dark"?"#c2c2c2":"#3c3c3c"},encode:{x:0,y:1},itemStyle:{color:dt}}]}});return(r,a)=>i.trades.length>0?(x(),w(_(M),{key:0,option:_(f),autoresize:"",theme:_(n).chartTheme},null,8,["option","theme"])):$("",!0)}}),gt=k(pt,[["__scopeId","data-v-e692e8c1"]]);export{gt as _,bt as a,_t as b};
//# sourceMappingURL=TradesLogChart--qoNg82P.js.map
