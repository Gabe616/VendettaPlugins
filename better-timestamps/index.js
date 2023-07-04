(function(h,T,e,L,m,C,B,_,d,x){"use strict";const{TextStyleSheet:P}=T.findByProps("TextStyleSheet"),{View:S,Text:A}=C.General,{FormRow:F}=C.Forms;function H(n){const r=T.findByProps("colors","meta"),i=T.findByStoreName("ThemeStore");return r.meta.resolveSemanticColor(i.theme,n)}function D(n){let{title:r,icon:i,children:o,padding:t}=n;const a=e.stylesheet.createThemedStyleSheet({mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:d.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:d.semanticColors.HEADER_SECONDARY},main:{backgroundColor:d.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(S,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(S,{style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&e.React.createElement(S,{style:{marginRight:4}},e.React.createElement(F.Icon,{style:a.icon,source:i,size:"small"})),e.React.createElement(A,{style:a.mainText},r)),e.React.createElement(S,{style:a.main},t?e.React.createElement(S,{style:{paddingHorizontal:16,paddingVertical:16}},o):o))}var b;(function(n){function r(o){let{children:t,onPress:a}=o;return e.React.createElement(I,{variant:"text-md/bold",onPress:a},t)}n.Bold=r;function i(o){let{children:t,onPress:a}=o;return e.React.createElement(A,{style:{textDecorationLine:"underline"},onPress:a},t)}n.Underline=i})(b||(b={}));function I(n){let{variant:r,lineClamp:i,color:o,align:t,style:a,onPress:y,getChildren:g,children:p,liveUpdate:l}=n;const[u,f]=e.React.useReducer(function(R){return~R},0),c=new Date().setMilliseconds(1e3);return l&&setTimeout(function(){return f()},c-Date.now()),e.React.createElement(A,{style:[r?P[r]:{},o?{color:H(d.semanticColors[o])}:{},t?{textAlign:t}:{},a??{}],numberOfLines:i,onPress:y},g?.()??p)}const{ScrollView:k,Text:E}=C.General,{FormSwitchRow:v,FormIcon:w}=C.Forms,{parseTimestamp:O}=T.findByProps("parseTimestamp","unparseTimestamp");function $(n){let{style:r}=n;const[i,o]=e.React.useReducer(function(l){return~l},0),t=new Date().setMilliseconds(1e3);setTimeout(function(){return o()},t-Date.now());const a=new Date,y=[[4],[19,20],[4,18,2],a.getHours()<12&&[a.getHours()],[a.getHours(),a.getMinutes()],[a.getHours(),a.getMinutes(),a.getSeconds()]].filter(function(l){return!!l}),g=[];let p=-1;for(const[l,u,f]of y){p++;const c=new Date;c.setHours(l,u??0,f||0);let R=[c.getHours().toString(),u!==void 0&&c.getMinutes().toString().padStart(2,"0"),f!==void 0&&c.getSeconds().toString().padStart(2,"0")].filter(function(U){return!!U}).join(":");l<12&&(R+=" AM");const M=O(Math.floor(c.getTime()/1e3).toString(),s.alwaysLong?"T":"t");g.push(s.reqBackticks?e.React.createElement(E,{style:r.code},R):R),g.push(" \u2014 "),g.push(e.React.createElement(E,{style:r.timestamp,onPress:function(){return x.showToast(M.full,m.getAssetIDByName("ic_information_24px"))}},M.formatted)),p!==y.length-1&&g.push(`
`)}return e.React.createElement(e.React.Fragment,null,...g)}function q(){s.reqBackticks??=!0,s.alwaysLong??=!1,L.useProxy(s);const n=e.stylesheet.createThemedStyleSheet({mainText:{fontFamily:e.constants.Fonts.DISPLAY_NORMAL,includeFontPadding:!1,fontSize:16,color:d.semanticColors.TEXT_NORMAL},boldText:{fontFamily:e.constants.Fonts.DISPLAY_BOLD,includeFontPadding:!1,color:d.semanticColors.TEXT_NORMAL},code:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD,includeFontPadding:!1,color:d.semanticColors.TEXT_NORMAL,backgroundColor:d.semanticColors.BACKGROUND_SECONDARY},timestamp:{fontFamily:e.constants.Fonts.DISPLAY_NORMAL,includeFontPadding:!1,color:d.semanticColors.TEXT_NORMAL,backgroundColor:d.semanticColors.BACKGROUND_MODIFIER_ACCENT}});return e.React.createElement(k,null,e.React.createElement(D,{title:"Info",icon:m.getAssetIDByName("ic_info_24px"),padding:!0},e.React.createElement(E,{style:n.mainText},"Send a message with a time code (in",e.React.createElement(E,{style:n.boldText}," HH:MM")," or",e.React.createElement(E,{style:n.boldText}," HH:MM:SS")," format) and automatically turn it into a timestamp",`

`,e.React.createElement($,{style:n}))),e.React.createElement(D,{title:"Settings",icon:m.getAssetIDByName("settings")},e.React.createElement(v,{label:"Require Backticks",subLabel:"Require time to be surrounded by backticks",leading:e.React.createElement(w,{source:m.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return s.reqBackticks=!s.reqBackticks},value:s.reqBackticks}),e.React.createElement(v,{label:"Always Long Time",subLabel:["Always display ",e.React.createElement(E,{style:n.boldText},"HH:MM:SS")," instead of ",e.React.createElement(E,{style:n.boldText},"HH:MM")],leading:e.React.createElement(w,{source:m.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return s.alwaysLong=!s.alwaysLong},value:s.alwaysLong})))}const Y=T.findByProps("sendMessage","receiveMessage"),s=_.storage;let N;var G={onLoad:function(){N=B.before("sendMessage",Y,function(n){const r=n[1];let i=r?.content;if(typeof i!="string"||typeof r!="object")return;const o=s.reqBackticks?"`":"\\s",t={otN:"[0-9]{1,2}",tN:"[0-9]{2}",abrv:"(?: ?(AM|PM))"},a=[`(${t.otN}:${t.tN}:${t.tN})${t.abrv}?`,`(${t.otN}:${t.tN})${t.abrv}?`,`(${t.otN})${t.abrv}`].map(function(y){return new RegExp(`${o}${y}${o}`,"gi")});for(const y of a)i=i.replace(y,function(g,p,l){let[u,f,c]=p.split(":").map(function(M){return parseInt(M)});if(u<0||u>24||typeof f=="number"&&(f<0||f>60)||typeof c=="number"&&(c<0||c>60))return g;l&&(l.toLowerCase()==="pm"&&u!==12?u+=12:l.toLowerCase()==="am"&&u===12&&(u=0));const R=new Date;return R.setHours(u,f??0,c??0,0),`<t:${Math.floor(R.getTime()/1e3)}:${s.alwaysLong?"T":"t"}>`});r.content=i})},onUnload:function(){return N?.()},settings:q};return h.default=G,h.vstorage=s,Object.defineProperty(h,"__esModule",{value:!0}),h})({},vendetta.metro,vendetta.metro.common,vendetta.storage,vendetta.ui.assets,vendetta.ui.components,vendetta.patcher,vendetta.plugin,vendetta.ui,vendetta.ui.toasts);
