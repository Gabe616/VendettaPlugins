(function(r,F,E,S,T,N,B,s,o,h,f,y,m,$){"use strict";const{TextStyleSheet:V}=h.findByProps("TextStyleSheet"),{View:g,Text:x}=m.General,{FormRow:G}=m.Forms;function D(e){const t=h.findByProps("colors","meta"),n=h.findByStoreName("ThemeStore");return t.meta.resolveSemanticColor(n.theme,e)}function v(e){let{title:t,icon:n,children:a,padding:d}=e;const i=f.stylesheet.createThemedStyleSheet({mainText:{fontFamily:f.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:D(y.semanticColors.HEADER_SECONDARY)},main:{backgroundColor:D(y.semanticColors.BACKGROUND_TERTIARY),borderRadius:16,overflow:"hidden",flex:1}});return React.createElement(g,{style:{marginHorizontal:16,marginTop:16}},React.createElement(g,{style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},n&&React.createElement(g,{style:{marginRight:4}},React.createElement(G.Icon,{source:n,size:"small"})),React.createElement(x,{style:i.mainText},t)),React.createElement(g,{style:i.main},d?React.createElement(g,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}function H(){const e=f.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:D(y.semanticColors.BACKGROUND_ACCENT),marginTop:16,marginBottom:16}});return React.createElement(g,{style:e.line})}var A;(function(e){function t(n){let{children:a}=n;return React.createElement(x,{style:V["text-md/bold"]},a)}e.Bold=t})(A||(A={}));const{View:J,Text:P}=m.General,{TextStyleSheet:z}=h.findByProps("TextStyleSheet"),O=f.stylesheet.createThemedStyleSheet({count:{...z["text-lg/bold"],color:y.semanticColors.TEXT_NORMAL,textAlign:"center"},subtitle:{...z["text-md/medium"],color:y.semanticColors.TEXT_MUTED,textAlign:"center"}});function M(e){let{subtitle:t,count:n,contents:a}=e;return React.createElement(J,{style:{alignItems:"center",justifyContent:"center",marginHorizontal:16}},React.createElement(P,{style:O.count},n),React.createElement(P,{style:O.subtitle},t))}const R="https://vd-cloudsync.nexpid.workers.dev/",k={clientId:"1120793656878714913",redirectURL:`${R}api/oauth2-response`};async function K(e){const t=await fetch(`${R}api/oauth2-response?code=${encodeURIComponent(e)}&vendetta=true`);if(t.status===200)return await t.text();throw(await t.json())?.message}async function X(){if(!c.authorization)return;const e=await fetch(`${R}api/get-data`,{headers:{authorization:c.authorization}});if(e.status===200)return await e.json();throw(await e.json())?.message}async function _(e){if(!c.authorization)return;const t=await fetch(`${R}api/sync-data`,{method:"POST",headers:{authorization:c.authorization,"content-type":"application/json"},body:JSON.stringify(e)});if(t.status===200)return await t.json();throw(await t.json())?.message}async function Y(){if(!c.authorization)return;const e=await fetch(`${R}api/delete-data`,{method:"DELETE",headers:{authorization:c.authorization}});if(e.status===200)return await e.json();throw(await e.json())?.message}const{pushModal:W,popModal:q}=h.findByProps("pushModal","popModal"),Q=h.findByName("OAuth2AuthorizeModal");function Z(){W({key:"oauth2-authorize",modal:{key:"oauth2-authorize",modal:Q,animation:"slide-up",shouldPersistUnderModals:!1,props:{clientId:k.clientId,redirectUri:k.redirectURL,scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function(e){let{location:t}=e;try{const n=new URL(t).searchParams.get("code"),a=await K(n);c.authorization=a,I(),s.showToast("Successfully authenticated",o.getAssetIDByName("Check"))}catch(n){s.showToast(n?.message??n?.toString()??"An error occured during authentication",o.getAssetIDByName("Small"))}},dismissOAuthModal:function(){return q("oauth2-authorize")}},closable:!0}})}const ee=window.nativeModuleProxy.BundleUpdaterManager;async function U(){const e={themes:[],plugins:[]};for(const t of Object.values(T.plugins.plugins)){const n=await E.createMMKVBackend(t.id).get();e.plugins.push({id:t.id,enabled:t.enabled,options:n})}for(const t of Object.values(T.themes.themes))e.themes.push({id:t.id,enabled:t.selected});return e}async function te(e){if(!l.save)return;let t=!1;const n=l.save.sync.plugins.filter(function(i){return!Object.keys(T.plugins.plugins).includes(i.id)});n.length>0&&await b(e,"Install Plugins",["Would you like to install ",React.createElement(A.Bold,null,n.length.toString()),` new plugin${n.length!==1?"s":""}?`],async function(){t=!0;for(const i of n)E.createMMKVBackend(i.id).set(i.options),await N.installPlugin(i.id,i.enabled);s.showToast("Synced plugins",o.getAssetIDByName("Check"))});let a;const d=l.save.sync.themes.filter(function(i){return!Object.keys(T.themes.themes).includes(i.id)});d.length>0&&await b(e,"Install Themes",["Would you like to install ",React.createElement(A.Bold,null,d.length.toString()),` new theme${d.length!==1?"s":""}?`],async function(){t=!0;for(const i of d)i.enabled&&(a=i.id),await B.installTheme(i.id);s.showToast("Synced themes",o.getAssetIDByName("Check"))}),a&&await b(e,"Reload Required","A reload is required to apply the theme. Would you like to reload?",async function(){await B.fetchTheme(a,!0),ee.reload()}),t||s.showToast("Already synced",o.getAssetIDByName("ic_sync_24px"))}const ne=h.findByProps("isTablet"),{Text:ae}=m.General,{FormRow:oe}=m.Forms,{TextStyleSheet:L}=h.findByProps("TextStyleSheet"),j=f.stylesheet.createThemedStyleSheet({text:{...L["text-md/medium"],color:y.semanticColors.TEXT_NORMAL},button:{...L["text-md/medium"],color:y.semanticColors.TEXT_NORMAL,borderRadius:8}});function ce(){const[e,t]=React.useState({});return c.authorization?React.createElement(React.Fragment,null,...[{text:"Sync Data",onPress:async function(n){n(!0);try{l.save=await _(await U()),p(),s.showToast("Successfully synced data",o.getAssetIDByName("Check"))}catch(a){s.showToast(`Failed to sync data: ${a}`,o.getAssetIDByName("Small"))}n(!1)}},{text:"Load Data",onPress:async function(n){n(!0),await te(!0),n(!1)}}].map(function(n,a,d){const i=a!==0?8:0;return React.createElement(m.Button,{text:n.text,color:"green",size:"small",onPress:function(){return!e[a]&&n.onPress(function(de){t({...e,[a]:!!de})})},trailing:React.createElement(oe.Icon,{source:o.getAssetIDByName("Check")}),loading:e[a],style:{...j.button,...ne.isTablet?{flex:`0.${d.length}`,marginLeft:i}:{marginTop:i}}})})):React.createElement(ae,{style:{...j.text,textAlign:"center"}},"Authenticate first to manage your data")}const{ScrollView:ie,View:re}=m.General,{FormRow:u,FormSwitchRow:le}=m.Forms;function se(){const[,e]=React.useReducer(function(t){return~t},0);return E.useProxy(c),r.cacheUpd.push(e),React.useEffect(function(){return function(){r.cacheUpd=r.cacheUpd.filter(function(t){return t!==e})}},[]),React.createElement(ie,null,React.createElement(v,{title:"Current Data",icon:o.getAssetIDByName("ic_contact_sync"),padding:!0},React.createElement(re,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:8}},React.createElement(M,{count:l.save?.sync?.plugins?.length??"-",subtitle:"plugins",contents:2}),React.createElement(M,{count:l.save?.sync?.themes?.length??"-",subtitle:"themes",contents:2}))),React.createElement(v,{title:"Automation",icon:o.getAssetIDByName("ic_robot_24px")},React.createElement(le,{label:"Auto Sync",subLabel:"Automatically sync data to cloud",leading:React.createElement(u.Icon,{source:o.getAssetIDByName("ic_contact_sync")}),onValueChange:function(){return c.autoSync=!c.autoSync},value:c.autoSync})),React.createElement(v,{title:"Authentication",icon:o.getAssetIDByName("lock")},c.authorization?React.createElement(React.Fragment,null,React.createElement(u,{label:"Log out",subLabel:"Logs you out of CloudSync",leading:React.createElement(u.Icon,{source:o.getAssetIDByName("ic_logout_24px")}),onPress:function(){delete c.authorization,delete l.save,p(),s.showToast("Successfully logged out",o.getAssetIDByName("ic_logout_24px"))}}),React.createElement(u,{label:"Delete data",subLabel:"Deletes your data and logs you out of CloudSync",leading:React.createElement(u.Icon,{source:o.getAssetIDByName("trash")}),onPress:async function(){await Y(),delete c.authorization,delete l.save,p(),s.showToast("Successfully deleted data",o.getAssetIDByName("trash"))}})):React.createElement(u,{label:"Authenticate",leading:React.createElement(u.Icon,{source:o.getAssetIDByName("copy")}),trailing:u.Arrow,onPress:Z})),React.createElement(v,{title:"Data Management",icon:o.getAssetIDByName("ic_cog_24px"),padding:!0},React.createElement(ce,null),c.authorization&&React.createElement(React.Fragment,null,React.createElement(H,null),React.createElement(u,{label:"Copy Data as JSON",leading:React.createElement(u.Icon,{source:o.getAssetIDByName("copy")}),onPress:function(){f.clipboard.setString(JSON.stringify(l.save??{},void 0,3)),s.showToast("Copied",o.getAssetIDByName("Check"))}}))))}const c=F.storage,l={};r.cacheUpd=[];function p(){r.cacheUpd.forEach(function(e){return e()})}async function I(){try{l.save=await X()}catch{}p()}c.autoSync??=!1;let w=[];const C=async function(){if(!c.autoSync)return;const e=await U();JSON.stringify(l.save)!==JSON.stringify(e)&&(l.save=await _(e),p())};async function b(e,t,n,a){return console.log("ran promptOrRun with: ",e,t,n),e?new Promise(function(d){$.showConfirmationAlert({title:t,content:n,confirmText:"Yes",cancelText:"No",confirmColor:"green",isDismissable:!1,onConfirm:function(){return a?.().then(d)}})}):await a?.()}var ue={onLoad:function(){c.authorization&&I(),["installPlugin","startPlugin","stopPlugin","removePlugin"].forEach(function(e){return w.push(S.after(e,N,function(){return C()}))}),["installTheme","selectTheme","removeTheme"].forEach(function(e){return w.push(S.after(e,B,function(){return C()}))}),w.push(S.after("createMMKVBackend",E,function(e,t){w.push(S.after("set",t,function(){return C()}))}))},onUnload:function(){return w.forEach(function(e){return e()})},settings:se};return r.cache=l,r.cacheUpdated=p,r.default=ue,r.fillCache=I,r.promptOrRun=b,r.vstorage=c,Object.defineProperty(r,"__esModule",{value:!0}),r})({},vendetta.plugin,vendetta.storage,vendetta.patcher,vendetta,vendetta.plugins,vendetta.themes,vendetta.ui.toasts,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.components,vendetta.ui.alerts);