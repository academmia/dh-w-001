import{c as q,a as P,_ as I}from"./InfoBox.vue_vue_type_script_setup_true_lang-q_8BdJhc.js";import{g as x,o as r,c as m,a as c,x as t,y as l,A as n,U as S,aJ as V,b as f,w as s,F as w,S as F,C as d,h as i,t as g,B as k,n as o,q as y,p as B,d as R,_ as T}from"./index-hWqA56e1.js";const z={class:"d-flex"},D=x({__name:"ValuePair",props:{description:{type:String,required:!0},help:{type:String,default:"",required:!1},classLabel:{type:String,default:"col-4 fw-bold mb-0"},classValue:{type:String,default:"col-8"}},setup(e){return(v,C)=>{const a=q;return r(),m("div",z,[c("div",{class:S(["d-flex justify-content-between me-2",e.classLabel])},[c("label",null,t(e.description),1),e.help?(r(),l(a,{key:0,hint:e.help},null,8,["hint"])):n("",!0)],2),c("div",{class:S(e.classValue)},[V(v.$slots,"default")],2)])}}}),h=e=>(B("data-v-64f4c765"),e=e(),R(),e),O={class:"container text-start"},L={class:"row"},N={class:"col-lg-5"},M=h(()=>c("h5",{class:"detail-header"},"General",-1)),j=h(()=>c("summary",null,"Details",-1)),A={key:0},E={class:"mt-2 mt-lg-0 col-lg-7"},G=h(()=>c("h5",{class:"detail-header"},"Stoploss",-1)),J={key:3},U=h(()=>c("h5",{class:"detail-header"},"Futures/Margin",-1)),Z={key:4},H=["title"],K={class:"ms-1"},Q={key:1,title:"remaining"},W={title:"Filled"},X=x({__name:"TradeDetail",props:{trade:{required:!0,type:Object},stakeCurrency:{required:!0,type:String}},setup(e){return(v,C)=>{const a=D,_=P,$=I;return r(),m("div",O,[c("div",L,[c("div",N,[M,f(a,{description:"TradeId"},{default:s(()=>[d(t(e.trade.trade_id),1)]),_:1}),f(a,{description:"Pair"},{default:s(()=>[d(t(e.trade.pair),1)]),_:1}),f(a,{description:"Open date"},{default:s(()=>[d(t(i(g)(e.trade.open_timestamp)),1)]),_:1}),e.trade.enter_tag?(r(),l(a,{key:0,description:"Entry tag"},{default:s(()=>[d(t(e.trade.enter_tag),1)]),_:1})):n("",!0),f(a,{description:"Stake"},{default:s(()=>[d(t(i(k)(e.trade.stake_amount,e.stakeCurrency))+" "+t(e.trade.leverage&&e.trade.leverage!==1?`(${e.trade.leverage}x)`:""),1)]),_:1}),f(a,{description:"Amount"},{default:s(()=>[d(t(e.trade.amount),1)]),_:1}),f(a,{description:"Open Rate"},{default:s(()=>[d(t(i(o)(e.trade.open_rate)),1)]),_:1}),e.trade.is_open&&e.trade.current_rate?(r(),l(a,{key:1,description:"Current Rate"},{default:s(()=>[d(t(i(o)(e.trade.current_rate)),1)]),_:1})):n("",!0),!e.trade.is_open&&e.trade.close_rate?(r(),l(a,{key:2,description:"Close Rate"},{default:s(()=>[d(t(i(o)(e.trade.close_rate)),1)]),_:1})):n("",!0),e.trade.close_timestamp?(r(),l(a,{key:3,description:"Close date"},{default:s(()=>[d(t(i(g)(e.trade.close_timestamp)),1)]),_:1})):n("",!0),e.trade.is_open&&e.trade.realized_profit&&!e.trade.total_profit_abs?(r(),l(a,{key:4,description:"Realized Profit"},{default:s(()=>[f(_,{class:"ms-2",trade:e.trade,mode:"realized"},null,8,["trade"])]),_:1})):n("",!0),e.trade.is_open&&e.trade.total_profit_abs?(r(),l(a,{key:5,description:"Total Profit"},{default:s(()=>[f(_,{class:"ms-2",trade:e.trade,mode:"total"},null,8,["trade"])]),_:1})):n("",!0),e.trade.profit_ratio&&e.trade.profit_abs?(r(),l(a,{key:6,description:`${e.trade.is_open?"Current Profit":"Close Profit"}`},{default:s(()=>[f(_,{class:"ms-2",trade:e.trade},null,8,["trade"])]),_:1},8,["description"])):n("",!0),c("details",null,[j,e.trade.min_rate?(r(),l(a,{key:0,description:"Min Rate"},{default:s(()=>[d(t(i(o)(e.trade.min_rate)),1)]),_:1})):n("",!0),e.trade.max_rate?(r(),l(a,{key:1,description:"Max Rate"},{default:s(()=>[d(t(i(o)(e.trade.max_rate)),1)]),_:1})):n("",!0),f(a,{description:"Open-Fees"},{default:s(()=>[d(t(e.trade.fee_open_cost)+" "+t(e.trade.quote_currency)+" ",1),e.trade.quote_currency!==e.trade.fee_open_currency?(r(),m("span",A," (in "+t(e.trade.fee_open_currency)+") ",1)):n("",!0),d(" ("+t(i(y)(e.trade.fee_open))+") ",1)]),_:1}),e.trade.fee_close_cost&&e.trade.fee_close?(r(),l(a,{key:2,description:"Fees close"},{default:s(()=>[d(t(e.trade.fee_close_cost)+" "+t(e.trade.fee_close_currency)+" ("+t(i(y)(e.trade.fee_close))+") ",1)]),_:1})):n("",!0)])]),c("div",E,[G,f(a,{description:"Stoploss"},{default:s(()=>[d(t(i(y)(e.trade.stop_loss_pct/100))+" | "+t(i(o)(e.trade.stop_loss_abs)),1)]),_:1}),e.trade.initial_stop_loss_pct&&e.trade.initial_stop_loss_abs?(r(),l(a,{key:0,description:"Initial Stoploss"},{default:s(()=>[d(t(i(y)(e.trade.initial_stop_loss_pct/100))+" | "+t(i(o)(e.trade.initial_stop_loss_abs)),1)]),_:1})):n("",!0),e.trade.is_open&&e.trade.stoploss_current_dist_ratio&&e.trade.stoploss_current_dist?(r(),l(a,{key:1,description:"Current stoploss dist"},{default:s(()=>[d(t(i(y)(e.trade.stoploss_current_dist_ratio))+" | "+t(i(o)(e.trade.stoploss_current_dist)),1)]),_:1})):n("",!0),e.trade.stoploss_last_update_timestamp?(r(),l(a,{key:2,description:"Stoploss last updated"},{default:s(()=>[d(t(i(g)(e.trade.stoploss_last_update_timestamp)),1)]),_:1})):n("",!0),e.trade.trading_mode!==void 0&&e.trade.trading_mode!=="spot"?(r(),m("div",J,[U,f(a,{description:"Direction"},{default:s(()=>[d(t(e.trade.is_short?"short":"long")+" - "+t(e.trade.leverage)+"x ",1)]),_:1}),e.trade.funding_fees!==void 0?(r(),l(a,{key:0,description:"Funding fees"},{default:s(()=>[d(t(i(o)(e.trade.funding_fees)),1)]),_:1})):n("",!0),e.trade.interest_rate!==void 0?(r(),l(a,{key:1,description:"Interest rate"},{default:s(()=>[d(t(i(o)(e.trade.interest_rate)),1)]),_:1})):n("",!0),e.trade.liquidation_price!==void 0?(r(),l(a,{key:2,description:"Liquidation Price"},{default:s(()=>[d(t(i(o)(e.trade.liquidation_price)),1)]),_:1})):n("",!0)])):n("",!0),e.trade.orders?(r(),m("details",Z,[c("summary",null,"Orders "+t(e.trade.orders.length>1?`[${e.trade.orders.length}]`:""),1),(r(!0),m(w,null,F(e.trade.orders,(u,b)=>(r(),m("div",{key:b},[c("span",{title:`${u.ft_order_side} ${u.order_type} order for ${i(k)(u.amount,e.trade.base_currency??"")} at ${i(k)(u.safe_price,e.trade.quote_currency??"")}, filled ${i(o)(u.filled)}`},[d(" (#"+t(b+1)+") ",1),u.order_timestamp?(r(),l($,{key:0,date:u.order_timestamp,"show-timezone":""},null,8,["date"])):n("",!0),c("b",K,t(u.ft_order_side),1),d(" for "),c("b",null,t(i(o)(u.safe_price)),1),d(" | "),u.remaining&&u.remaining!==0?(r(),m("span",Q,t(i(o)(u.remaining,8))+" / ",1)):n("",!0),c("span",W,t(i(o)(u.filled??0,8)),1)],8,H)]))),128))])):n("",!0)])])])}}}),ee=T(X,[["__scopeId","data-v-64f4c765"]]);export{ee as _};
//# sourceMappingURL=TradeDetail-SQ0XUPOd.js.map
