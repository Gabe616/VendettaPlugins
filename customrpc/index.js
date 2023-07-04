(function(D,ye,e,v,f,y,h,Y,c,he,me,g,K){"use strict";const{TextStyleSheet:Re}=f.findByProps("TextStyleSheet"),{View:b,Text:k}=h.General,{FormRow:Ee}=h.Forms;function ve(t){const i=f.findByProps("colors","meta"),a=f.findByStoreName("ThemeStore");return i.meta.resolveSemanticColor(a.theme,t)}function V(t){let{title:i,icon:a,children:s,padding:d}=t;const r=e.stylesheet.createThemedStyleSheet({mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:y.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:y.semanticColors.HEADER_SECONDARY},main:{backgroundColor:y.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(b,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(b,{style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},a&&e.React.createElement(b,{style:{marginRight:4}},e.React.createElement(Ee.Icon,{style:r.icon,source:a,size:"small"})),e.React.createElement(k,{style:r.mainText},i)),e.React.createElement(b,{style:r.main},d?e.React.createElement(b,{style:{paddingHorizontal:16,paddingVertical:16}},s):s))}function Ae(t){let{addPadding:i}=t;const a=e.stylesheet.createThemedStyleSheet({line:{width:"100%",marginHorizontal:i&&16,height:2,backgroundColor:y.semanticColors.BACKGROUND_ACCENT,marginTop:8,marginBottom:8}});return e.React.createElement(b,{style:a.line})}var H;(function(t){function i(s){let{children:d,onPress:r}=s;return e.React.createElement(E,{variant:"text-md/bold",onPress:r},d)}t.Bold=i;function a(s){let{children:d,onPress:r}=s;return e.React.createElement(k,{style:{textDecorationLine:"underline"},onPress:r},d)}t.Underline=a})(H||(H={}));function E(t){let{variant:i,lineClamp:a,color:s,align:d,style:r,onPress:o,getChildren:l,children:p,liveUpdate:X}=t;const[lt,nt]=e.React.useReducer(function(st){return~st},0),rt=new Date().setMilliseconds(1e3);return X&&setTimeout(function(){return nt()},rt-Date.now()),e.React.createElement(k,{style:[i?Re[i]:{},s?{color:ve(y.semanticColors[s])}:{},d?{textAlign:d}:{},r??{}],numberOfLines:a,onPress:o},l?.()??p)}function q(t){let{onPress:i,icon:a,style:s,destructive:d}=t;const r=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{marginRight:10,tintColor:y.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:y.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:y.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:i},e.React.createElement(e.ReactNative.Image,{style:[typeof s=="string"?s==="header"?r.headerStyleIcon:r.cardStyleIcon:s,d&&r.destructiveIcon].filter(function(o){return!!o}),source:a}))}function Se(t,i){if(t.storage.changelog??=i.length,t.storage.changelog!==i.length){const a=i[0],s=[];for(const d in a.changes){const r=a.changes[d];s.push(React.createElement(E,{color:r.startsWith("+ ")?"TEXT_POSITIVE":r.startsWith("- ")?"TEXT_DANGER":void 0},r)),d!==(a.changes.length-1).toString()&&s.push(`
`)}v.showConfirmationAlert({title:`${t.manifest.name} Changelog`,content:[React.createElement(E,{variant:"text-lg/semibold",align:"center"},`v1.${i.length-1}${a.label?` (${a.label})`:""}`),`
`,...s],confirmText:"Ok",confirmColor:"grey",onConfirm:function(){return t.storage.changelog=i.length}})}}var Ie={github:{url:"https://github.com/Gabe616/VendettaPlugins/"}};function be(t){const i=he.getDebugInfo(),a=new URLSearchParams;return a.append("title",`fix(${t}): PLACEHOLDER BUG`),a.append("body",`# Detailed Bug
<!-- enter detailed info about the bug here -->

# How to Reproduce
<!-- enter information on how to reproduce this bug -->

# System Information
Device: ${i.os.name==="iOS"?i.device.codename:`${i.device.brand} ${i.device.model}`}
Model: ${i.device.model}
Manufacturer: ${i.device.manufacturer}
Brand: ${i.device.brand}

OS: ${i.os.name}
Version: ${i.os.version}

Discord Branch: ${i.discord.branch}
Discord Version: ${i.discord.version}
Discord Build: ${i.discord.build}
Vendetta Version: ${i.vendetta.version}

React Version: ${i.react.version}
Hermes Bytecode: ${i.hermes.bytecodeVersion}
`),a.append("labels","bug"),`${Ie.github.url}issues/new?${a.toString()}`}const Q="https://discord.com/api/v9/",{getToken:M}=f.findByProps("getToken");async function Ce(){return await(await K.safeFetch(`${Q}applications?with_team_applications=true`,{headers:{authorization:M()}})).json()}async function Te(t){return await(await K.safeFetch(`${Q}oauth2/applications/${t}/assets`,{cache:"no-store",headers:{authorization:M()}})).json()}async function Ne(t){return await(await fetch(`${t}applications/0/external-assets`,{method:"POST",headers:{authorization:M(),"content-type":"application/json"},body:JSON.stringify({urls:[t]})})).json()}const Z=f.findByProps("isTablet"),{View:ee,Text:we,Image:De}=h.General,{TextStyleSheet:Pe}=f.findByProps("TextStyleSheet"),F=e.stylesheet.createThemedStyleSheet({card:{backgroundColor:y.semanticColors.BACKGROUND_SECONDARY,marginHorizontal:4,marginVertical:4,borderRadius:8,flex:1},cardHeader:{backgroundColor:y.semanticColors.BACKGROUND_TERTIARY,borderTopLeftRadius:8,borderTopRightRadius:8,paddingHorizontal:8,paddingVertical:8,width:"100%"},cardHeaderText:{...Pe["text-sm/semibold"],color:y.semanticColors.TEXT_NORMAL},cardImage:{width:"100%",flex:1,borderBottomLeftRadius:8,borderBottomRightRadius:8}}),Be=function(){const t=e.NavigationNative.useNavigation(),[i,a]=e.React.useState(""),[s,d]=e.React.useState();e.React.useEffect(function(){a("")}),s||Te(z).then(d);let r=!1;return s?e.React.createElement(e.ReactNative.FlatList,{ListEmptyComponent:e.React.createElement(h.Search,{style:{marginBottom:10},onChangeText:function(o){return a(o.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:s.filter(function(o){return o.name.toLowerCase().includes(i)}),numColumns:Z.isTablet?3:2,renderItem:function(o){const{item:l}=o;return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:function(){r||(r=!0,t.goBack(),U?.(l.id))},style:{width:`${Z.isTablet?1/.03:1/.02}%`,aspectRatio:1}},e.React.createElement(ee,{style:F.card},e.React.createElement(ee,{style:F.cardHeader},e.React.createElement(we,{style:F.cardHeaderText},l.name)),e.React.createElement(De,{source:{uri:`https://cdn.discordapp.com/app-assets/${z}/${l.id}.png?size=128`}})))}}):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}})};function xe(t){t.push("VendettaCustomPage",{render:Be,title:"Select Asset"})}const{View:te,Image:_e}=h.General,Le=function(){const t=e.NavigationNative.useNavigation(),[i,a]=e.React.useState(""),[s,d]=e.React.useState();e.React.useEffect(function(){a("")},[]),s||Ce().then(d);let r=!1;return s?e.React.createElement(e.ReactNative.FlatList,{ListHeaderComponent:e.React.createElement(h.Search,{style:{marginBottom:10},onChangeText:function(o){return a(o.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:s.filter(function(o){return o.name.toLowerCase().includes(i.toLowerCase())}),renderItem:function(o){const{item:l}=o;return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:function(){r||(r=!0,t.goBack(),J?.({id:l.id,name:l.name}))}},e.React.createElement(te,{style:{marginHorizontal:8,marginBottom:8,flexDirection:"row"}},e.React.createElement(_e,{source:{uri:l.icon?`https://cdn.discordapp.com/app-icons/${l.icon}/${l.icon}.png?size=64`:A.image},style:{borderRadius:8,resizeMode:"cover",aspectRatio:1}}),e.React.createElement(te,{style:{flexDirection:"column",marginLeft:8}},e.React.createElement(E,{variant:"text-md/semibold",color:"TEXT_NORMAL"},l.name),e.React.createElement(E,{variant:"text-sm/medium",color:"TEXT_MUTED",lineClamp:1},l.description))))}}):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}})};function $e(t){t.push("VendettaCustomPage",{render:Le,title:"Select Application"})}const{View:Oe,ScrollView:P}=h.General,{FormRow:u,FormRadioRow:ke}=h.Forms,{default:{render:C}}=f.find(function(t){return t.default?.render?.name==="ActionSheet"})??{default:{render:!1}},R=f.findByProps("openLazy","hideActionSheet"),{ActionSheetTitleHeader:B,ActionSheetCloseButton:x}=f.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton"),Ve=f.findByProps("DatePickerModes"),_=function(){return e.React.createElement(Oe,{style:{marginBottom:30}})};function T(t,i){C?R.openLazy(new Promise(function(a){return a({default:t})}),"ActionSheet",i):g.showToast("You cannot open ActionSheets on this version! Update to 163+",c.getAssetIDByName("Small"))}let U,z;function ae(t){let{appId:i,role:a,image:s,navigation:d,update:r}=t;return e.React.createElement(C,null,e.React.createElement(P,null,e.React.createElement(B,{title:`Edit ${a} Image`,trailing:e.React.createElement(x,{onPress:R.hideActionSheet})}),e.React.createElement(u,{label:"Use Custom Image",subLabel:"Make sure your image is in a square aspect ratio",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("ic_link")}),onPress:function(){v.showInputAlert({title:"Enter the link to your image link",placeholder:"can be a discord attachment CDN link",confirmText:"Done",confirmColor:"grey",cancelText:"Cancel",onConfirm:async function(o){const l=o.match(Y.constants.HTTP_REGEX_MULTI)?.[0];if(!l)return g.showToast("Invalid URL",c.getAssetIDByName("Small"));g.showToast("Proxying image...",c.getAssetIDByName("ic_clock"));try{let p=(await Ne(l))[0].external_asset_path;p.startsWith("https://media.discordapp.net/")&&(p=p.split("/").slice(3).join("/")),r(`mp:${p}`),g.showToast("Proxied image",c.getAssetIDByName("Check"))}catch(p){console.log(p),g.showToast("Failed to proxy image",c.getAssetIDByName("Small"))}}})}}),e.React.createElement(u,{label:"Select RPC Asset",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("ic_media_channel")}),trailing:e.React.createElement(u.Arrow,null),onPress:function(){if(!i)return v.showConfirmationAlert({title:"No App Set",content:"An app must be selected in order to use RPC assets",confirmText:"Ok",confirmColor:"grey",onConfirm:function(){}});z=i,U=function(o){U=void 0,r(o)},xe(d),R.hideActionSheet()}}),s&&e.React.createElement(u,{label:"Remove Image",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("trash")}),onPress:function(){r(void 0),R.hideActionSheet()}})),e.React.createElement(_,null))}let J;function He(t){let{appId:i,appName:a,navigation:s,update:d}=t;return e.React.createElement(C,null,e.React.createElement(P,null,e.React.createElement(B,{title:"Edit Application",trailing:e.React.createElement(x,{onPress:R.hideActionSheet})}),e.React.createElement(u,{label:"Application Name",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onPress:function(){return G({role:"Application Name",current:a,update:function(r){return d({id:i,name:r})}})}}),e.React.createElement(u,{label:"Select Application",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("ic_robot_24px")}),onPress:function(){J=function(r){J=void 0,d(r)},$e(s),R.hideActionSheet()}}),i&&e.React.createElement(u,{label:"Remove Application",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("trash")}),onPress:function(){d(void 0),R.hideActionSheet()}})),e.React.createElement(_,null))}function Me(t){let{type:i,update:a}=t;const[s,d]=e.React.useState(i);return e.React.createElement(C,null,e.React.createElement(P,null,e.React.createElement(B,{title:"Edit Activity Type",trailing:e.React.createElement(x,{onPress:function(){return R.hideActionSheet()}})}),...Object.values(I).filter(function(r){return typeof r=="number"}).map(function(r){return e.React.createElement(ke,{label:de[r],trailing:e.React.createElement(u.Arrow,null),selected:r===s,onPress:function(){a(r),d(r)}})})),e.React.createElement(_,null))}function Fe(t){let{start:i,end:a,update:s}=t;const d=function(r){let{role:o,onSubmit:l}=r;const p=new Date().setHours(0,0,0,0),X=new Date().setHours(23,59,59,999);R.openLazy(Promise.resolve(Ve),"DatePicker",{onSubmit:l,title:`Timestamp ${o} Time`,startDate:new Date,minimumDate:new Date(p),maximumDate:new Date(X),requireDateChanged:!1,mode:"time"})};return e.React.createElement(C,null,e.React.createElement(P,null,e.React.createElement(B,{title:"Edit Timestamp",trailing:e.React.createElement(x,{onPress:function(){return R.hideActionSheet()}})}),e.React.createElement(u,{label:"Edit Start Time",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onPress:function(){return d({role:"Start",onSubmit:function(r){return s({start:r._d.getTime(),end:a})}})}}),i&&e.React.createElement(u,{label:"Remove Start Time",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("trash")}),onPress:function(){s({start:void 0,end:a}),R.hideActionSheet()}}),e.React.createElement(u,{label:"Edit End Time",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onPress:function(){return d({role:"End",onSubmit:function(r){return s({start:i,end:r._d.getTime()})}})}}),a&&e.React.createElement(u,{label:"Remove End Time",leading:e.React.createElement(u.Icon,{source:c.getAssetIDByName("trash")}),onPress:function(){s({start:i,end:void 0}),R.hideActionSheet()}})),e.React.createElement(_,null))}const L=function(t){let{role:i,button:a,secondaryButton:s,run:d,secondaryRun:r}=t;if(pe())return d();v.showConfirmationAlert({title:"Unsaved Changes",content:["You have unsaved changes in ",e.React.createElement(H.Bold,null,n.activity.profile),`. Are you sure you want to ${i}?`],confirmText:a,confirmColor:"red",cancelText:"Cancel",onConfirm:d,secondaryConfirmText:s,onConfirmSecondary:function(){r?.(),d?.()}})},G=function(t){let{role:i,current:a,update:s}=t;return v.showInputAlert({title:`Enter New ${i} Text`,confirmText:"Done",confirmColor:"grey",cancelText:"Cancel",initialValue:a,placeholder:`really cool ${i.toLowerCase()}`,onConfirm:s})},Ue={"Vendetta Advertisement":{state:"Join Now",details:'"The best Discord client for mobile"',app:{name:"Vendetta"},timestamps:{},assets:{largeImg:"mp:external/t88vNcbCl2anXnBX4gmLVep17K_yqL4L2pvzwPMGtjs/%3Fsize%3D512/https/cdn.discordapp.com/icons/1015931589865246730/5b7f29e9c670fbcbf476b4d88fbd081f.png"},buttons:[{text:"Join Vendetta",url:"https://discord.gg/vendetta-mod"},{text:"Install Vendetta",url:"https://github.com/vendetta-mod/Vendetta#installing"}]}},{FormRow:ze}=h.Forms,{showSimpleActionSheet:Je}=f.findByProps("showSimpleActionSheet"),Ge=f.findByProps("openLazy","hideActionSheet");let ie;const je=function(){const t=e.NavigationNative.useNavigation(),[i,a]=e.React.useReducer(function(o){return~o},0),[s,d]=e.React.useState("");e.React.useEffect(function(){d("")},[]),ie=function(){return v.showInputAlert({title:"Enter new profile name",placeholder:"Super Awesome RPC",confirmText:"Done",confirmColor:"grey",cancelText:"Cancel",onConfirm:function(o){if(n.profiles[o])return g.showToast("A profile with that name already exists",c.getAssetIDByName("Small"));if(o.length<3)return g.showToast("Profile name must be atleast 2 chars long",c.getAssetIDByName("Small"));n.profiles[o]=JSON.parse(JSON.stringify(n.activity.editing)),n.activity.profile=o,a(),g.showToast("Created profile",c.getAssetIDByName("Check"))}})};let r=!1;return e.React.createElement(e.ReactNative.FlatList,{ListHeaderComponent:e.React.createElement(h.Search,{style:{marginBottom:10},onChangeText:function(o){return d(o.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:Object.keys(n.profiles).filter(function(o){return o.toLowerCase().includes(s)}),renderItem:function(o){let{item:l}=o;return e.React.createElement(ze,{label:l,onLongPress:function(){return Je({key:"CardOverflow",header:{title:l,onClose:function(){return Ge.hideActionSheet()}},options:[{label:"Rename Profile",icon:c.getAssetIDByName("ic_message_edit"),onPress:function(){return v.showInputAlert({title:"Enter new profile name",placeholder:"Super Awesome RPC 2.0",initialValue:l,confirmText:"Done",confirmColor:"grey",cancelText:"Cancel",onConfirm:function(p){if(n.profiles[p])return g.showToast("A profile with that name already exists",c.getAssetIDByName("Small"));if(p.length<3)return g.showToast("Profile name must be atleast 2 chars long",c.getAssetIDByName("Small"));n.profiles[p]=n.profiles[l],n.activity.profile===l&&(n.activity.profile=p),delete n.profiles[l],a(),g.showToast("Renamed profile",c.getAssetIDByName("Check"))}})}},{label:"Delete Profile",icon:c.getAssetIDByName("trash"),onPress:function(){return v.showConfirmationAlert({title:"Delete Profile",content:"Are you sure you want to delete this profile? This cannot be undone.",confirmText:"Delete",confirmColor:"red",cancelText:"Cancel",onConfirm:function(){n.activity.profile===l&&(delete n.activity.profile,n.activity.editing=$()),delete n.profiles[l],a(),w?.(),g.showToast("Deleted",c.getAssetIDByName("Check"))}})}}]})},onPress:function(){if(!r){if(n.activity.profile===l)return g.showToast(`${l} is already loaded`,c.getAssetIDByName("Small"));L({role:"discard your changes",button:"Discard",run:function(){n.activity.editing=JSON.parse(JSON.stringify(n.profiles[l])),n.activity.profile=l,r=!0,t.goBack(),w?.(),g.showToast("Loaded",c.getAssetIDByName("Check"))},secondaryButton:"Save profile",secondaryRun:function(){n.profiles[n.activity.profile]=JSON.parse(JSON.stringify(n.activity.editing))}})}}})}})};function We(t){t.push("VendettaCustomPage",{render:je,title:"Profiles",headerRight:function(){return e.React.createElement(q,{style:"header",icon:c.getAssetIDByName("ic_add_24px"),onPress:function(){return ie?.()}})}})}function ne(t){const i=Math.abs(Math.floor(t/1e3)),a=Math.floor(i/3600),s=Math.floor(i/60)%60,d=i%60;return`${a?`${a.toString().padStart(2,"0")}:`:""}${s.toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`}function re(t){return new Date().setHours(0,0,0,0)+t}const Xe=f.findByStoreName("UserStore"),{View:S,Image:se,Pressable:le}=h.General,Ye=f.findByName("UserActivityContainer"),N=e.stylesheet.createThemedStyleSheet({actTypeCont:{flexDirection:"row",marginBottom:12,justifyContent:"space-between"},card:{borderWidth:1,borderRadius:8,borderColor:y.semanticColors.BACKGROUND_MODIFIER_ACCENT},card2:{alignItems:"flex-start",flexDirection:"row"},images:{position:"relative",marginRight:10},smallImageBg:{borderColor:y.semanticColors.BACKGROUND_PRIMARY,backgroundColor:y.semanticColors.BACKGROUND_PRIMARY,borderWidth:1,borderRadius:18,position:"absolute",right:-4,bottom:-4}});function Ke(t){let{edit:i,act:a}=t;const[s,d]=e.React.useReducer(function(l){return~l},0),r=e.NavigationNative.useNavigation(),o=function(){d(),w?.()};return i?e.React.createElement(e.React.Fragment,null,e.React.createElement(S,{style:N.actTypeCont},e.React.createElement(E,{variant:"eyebrow",color:"TEXT_NORMAL",onPress:function(){return T(Me,{type:a.type??I.Playing,update:function(l){a.type=l,o()}})}},de[a.type??I.Playing]," ...")),e.React.createElement(S,{style:N.card},e.React.createElement(S,{style:{padding:16}},e.React.createElement(S,{style:N.card2},e.React.createElement(S,{style:N.images},e.React.createElement(le,{onPress:function(){return T(ae,{appId:a.app.id,role:"Big",image:a.assets.largeImg,navigation:r,update:function(l){a.assets.largeImg=l,o()}})}},e.React.createElement(se,{source:{uri:a.assets.largeImg?.startsWith("mp:")?`https://media.discordapp.net/${a.assets.largeImg.slice(3)}`:a.assets.largeImg?`https://cdn.discordapp.com/app-assets/${a.app.id}/${a.assets.largeImg}.png?size=56`:A.image},style:{borderRadius:3,width:56,height:56}})),e.React.createElement(S,{style:N.smallImageBg},e.React.createElement(le,{onPress:function(){return T(ae,{appId:a.app.id,role:"Small",image:a.assets.smallImg,navigation:r,update:function(l){a.assets.smallImg=l,o()}})}},e.React.createElement(se,{source:{uri:a.assets.smallImg?.startsWith("mp:")?`https://media.discordapp.net/${a.assets.smallImg.slice(3)}`:a.assets.smallImg?`https://cdn.discordapp.com/app-assets/${a.app.id}/${a.assets.smallImg}.png?size=56`:A.image},style:{borderRadius:14,width:28,height:28}})))),e.React.createElement(S,{style:{flex:1}},e.React.createElement(E,{variant:"text-md/semibold",color:"TEXT_NORMAL",onPress:function(){return T(He,{appId:a.app.id,appName:a.app.name,navigation:r,update:function(l){l?.id!==a.app.id&&(a.assets.smallImg.startsWith("mp:")||delete a.assets.smallImg,a.assets.largeImg.startsWith("mp:")||delete a.assets.largeImg),a.app.id=l?.id,a.app.name=l?.name,o()}})}},a.app.name??A.appName),e.React.createElement(E,{variant:"text-sm/normal",color:"TEXT_NORMAL",onPress:function(){return G({role:"Details",current:a.details,update:function(l){a.details=l,o()}})}},a.details??A.details),e.React.createElement(E,{variant:"text-sm/normal",color:"TEXT_NORMAL",onPress:function(){return G({role:"State",current:a.state,update:function(l){a.state=l,o()}})}},a.state??A.state),e.React.createElement(E,{variant:"text-sm/normal",color:"TEXT_NORMAL",onPress:function(){return T(Fe,{start:a.timestamps.start,end:a.timestamps.end,update:function(l){a.timestamps.start=l.start,a.timestamps.end=l.end,o()}})},liveUpdate:!0,getChildren:function(){return a.timestamps.end?`${ne(re(a.timestamps.end)-Date.now())} left`:a.timestamps.start?`${ne(Date.now()-re(a.timestamps.start))} passed`:A.timestamp}})))))):e.React.createElement(Ye,{user:Xe.getCurrentUser(),activity:ue(a)})}const{ScrollView:qe}=h.General,{FormSwitchRow:ce,FormIcon:oe,FormRow:m}=h.Forms,A={image:"https://discord.com/assets/cb1043c312ec65507573c06c37f6ee63.gif",appName:"Enter App Name...",details:"Enter Details...",state:"Enter State...",timestamp:"Enter Timestamp...",button1:"Edit Button 1...",button2:"Edit Button 2..."},de={0:"Playing",2:"Listening to",3:"Watching",5:"Competing in"};let w;function Qe(){const t=e.NavigationNative.useNavigation(),[i,a]=e.React.useReducer(function(s){return~s},0);return w=a,n.settings??={edit:!1,display:!1},n.activity??={editing:$()},n.profiles??=Ue,me.useProxy(n),W(),e.React.useEffect(function(){Se(Y.plugin,[{changes:["+ the entire plugin guhhh"]}]),t.setOptions({headerRight:function(){return e.React.createElement(q,{icon:c.getAssetIDByName("ic_message_report"),style:"header",onPress:function(){return e.url.openURL(be("customrpc"))}})}})},[]),e.React.createElement(qe,null,e.React.createElement(V,{title:"Preview",icon:c.getAssetIDByName("ic_eye"),padding:n.settings.edit},e.React.createElement(Ke,{edit:n.settings.edit,act:n.activity.editing})),e.React.createElement(V,{title:"Settings",icon:c.getAssetIDByName("ic_cog24px")},e.React.createElement(ce,{label:"Edit Mode",subLabel:"Be able to edit your activity",leading:e.React.createElement(oe,{source:c.getAssetIDByName("ic_badge_staff")}),onValueChange:function(){return n.settings.edit=!n.settings.edit},value:n.settings.edit}),e.React.createElement(ce,{label:"Display Activity",subLabel:"Show off your super awesome poggers activity to the world",leading:e.React.createElement(oe,{source:c.getAssetIDByName("ic_show_password")}),onValueChange:function(){return n.settings.display=!n.settings.display},value:n.settings.display})),e.React.createElement(V,{title:"Data",icon:c.getAssetIDByName("ic_feedback")},e.React.createElement(m,{label:"Copy as JSON",leading:e.React.createElement(m.Icon,{source:c.getAssetIDByName("copy")}),onPress:function(){e.clipboard.setString(JSON.stringify(n.activity.editing,void 0,3)),g.showToast("Copied",c.getAssetIDByName("Check"))}}),e.React.createElement(m,{label:"Load from Clipboard",leading:e.React.createElement(m.Icon,{source:c.getAssetIDByName("ic_download_24px")}),onPress:function(){return L({role:"overwrite the activity data",button:"Overwrite",run:async function(){let s;try{s=JSON.parse(await e.clipboard.getString())}catch{return g.showToast("Failed to parse JSON",c.getAssetIDByName("Small"))}if(!Ze(s))return g.showToast("Invalid activity data",c.getAssetIDByName("Small"));n.activity.editing=s,delete n.activity.profile,a(),g.showToast("Loaded",c.getAssetIDByName("Check"))}})}}),e.React.createElement(Ae,{addPadding:!0}),n.activity.profile&&e.React.createElement(m,{label:`Save Profile${pe()?"":" \u{1F534}"}`,leading:e.React.createElement(m.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onPress:function(){n.profiles[n.activity.profile]=JSON.parse(JSON.stringify(n.activity.editing)),g.showToast("Saved",c.getAssetIDByName("Check")),a()}}),n.activity.profile&&e.React.createElement(m,{label:"Revert Profile",leading:e.React.createElement(m.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onPress:function(){return L({role:"revert",button:"Revert",run:function(){n.activity.editing=JSON.parse(JSON.stringify(n.profiles[n.activity.profile])),g.showToast("Reverted",c.getAssetIDByName("Check")),a()}})}}),n.activity.profile&&e.React.createElement(m,{label:"Close Profile",leading:e.React.createElement(m.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onPress:function(){return L({role:"discard your changes",button:"Discard",run:function(){n.activity.editing=$(),delete n.activity.profile,g.showToast("Closed",c.getAssetIDByName("Check")),a()},secondaryButton:"Save profile",secondaryRun:function(){n.profiles[n.activity.profile]=JSON.parse(JSON.stringify(n.activity.editing))}})}}),e.React.createElement(m,{label:"Browse Profiles",leading:e.React.createElement(m.Icon,{source:c.getAssetIDByName("ic_message_edit")}),trailing:e.React.createElement(m.Arrow,null),onPress:function(){return We(t)}})))}var I;(function(t){t[t.Playing=0]="Playing",t[t.Listening=2]="Listening",t[t.Watching=3]="Watching",t[t.Competing=5]="Competing"})(I||(I={}));function Ze(t){if(Array.isArray(t)||typeof t!="object"||"state"in t&&typeof t.state!="string"||"details"in t&&typeof t.details!="string"||Array.isArray(t.timestamps)||typeof t.timestamps!="object"||"start"in t.timestamps&&typeof t.timestamps.start!="number"||"end"in t.timestamps&&typeof t.timestamps.end!="number"||Array.isArray(t.assets)||typeof t.assets!="object"||"largeImg"in t.assets&&typeof t.assets.largeImg=="string"&&Number.isNaN(Number(t.assets.largeImg))&&!t.assets.largeImg.startsWith("mp:")||"smallImg"in t.assets&&typeof t.assets.smallImg=="string"&&Number.isNaN(Number(t.assets.smallImg))&&!t.assets.smallImg.startsWith("mp:")||!Array.isArray(t.buttons))return!1;for(const i of t.buttons)if(!("text"in i&&typeof i.text!="string")||"url"in i&&typeof i.url!="string")return!1;return!("name"in t.app&&typeof t.app.name!="string"||"id"in t.app&&Number.isNaN(Number(t.app.id))||"type"in t&&!(t.type in I))}function $(){return{timestamps:{},assets:{},buttons:[],app:{}}}function ue(t){const i={name:t.app.name??A.appName,application_id:t.app.id??"0",type:t.type??I.Playing,flags:1,state:t.state,details:t.details,timestamps:t.timestamps,assets:{large_image:t.assets.largeImg,small_image:t.assets.smallImg}};return t.buttons[0]&&(i.metadata={button_urls:t.buttons.slice(0,2).map(function(a){return a.url})},i.buttons=t.buttons.slice(0,2).map(function(a){return a.text})),i}function j(t){e.FluxDispatcher.dispatch({type:"LOCAL_ACTIVITY_UPDATE",activity:t,socketId:"VendettaCustomRpcPlugin"})}function ge(){return n.profiles?.[n.activity?.profile]??n.activity?.editing??$()}function W(){const t=ge();n.settings?.display?j(ue(t)):j({})}function pe(){const t=ge();return JSON.stringify(t)===JSON.stringify(n.activity.editing)}let O={};function et(t,i,a,s){if(O[t])return;const d={default:s,timeout:-1};O[t]=d;const r=function(){const o=i(new Date);d.timeout=setTimeout(function(){a(),r()},o-Date.now())};r()}const fe={};function tt(t){for(const[i,a]of Object.entries(O))(t||!a.default)&&(clearTimeout(a.timeout),delete O[i]);for(const[i,a]of Object.entries(fe))(t||!a.default)&&(e.FluxDispatcher.unsubscribe(a.event,a.handler),delete fe[i])}function at(){et("auto_fix_timestamps",function(t){return t.setHours(24,0,0,0)},function(){w?.(),W()},!0)}const n=ye.storage;var it={onLoad:function(){W(),at()},onUnload:function(){j({}),tt(!0)},settings:Qe};return D.default=it,D.vstorage=n,Object.defineProperty(D,"__esModule",{value:!0}),D})({},vendetta.plugin,vendetta.metro.common,vendetta.ui.alerts,vendetta.metro,vendetta.ui,vendetta.ui.components,vendetta,vendetta.ui.assets,vendetta.debug,vendetta.storage,vendetta.ui.toasts,vendetta.utils);
