(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5479,5725,2533],{30982:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/s/[shareCode]",function(){return l(64512)}])},38367:function(e,a,l){"use strict";var n,i,r,t,s,o,u,d,g,c,m,h,_,p;l.r(a);let k=(m={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"handle",storageKey:null},_={alias:null,args:null,kind:"ScalarField",name:"canUserAccessBot",storageKey:null},p={kind:"TypeDiscriminator",abstractKey:"__isNode"},{fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"shareCode"}],kind:"Fragment",metadata:null,name:"ShareCodeSharePageV2Query",selections:[{alias:null,args:i=[{kind:"Variable",name:"shareCode",variableName:"shareCode"}],concreteType:"PoeChatShare",kind:"LinkedField",name:"chatShare",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ShareOrPostHeader_poeChatShare"},{args:null,kind:"FragmentSpread",name:"ShareMessageList_poeChatShare"},{args:null,kind:"FragmentSpread",name:"ShareCTAActionBar_poeChatShare"},{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"chatBot",plural:!1,selections:[r={alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},{args:null,kind:"FragmentSpread",name:"ContentCTAButton_bot"}],storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"twittercardProperties",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"opengraphProperties",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[o={alias:"enableContinueChatOnWeb",args:[{kind:"Literal",name:"gateName",value:"continue_chat_from_share_pages_on_web"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"continue_chat_from_share_pages_on_web")'},u={alias:"showContinueChatButtonOniOSMWeb",args:[{kind:"Literal",name:"gateName",value:"poe_show_continue_chat_button_on_ios_mweb"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_show_continue_chat_button_on_ios_mweb")'},{args:null,kind:"FragmentSpread",name:"ShareMessageList_viewer"}],storageKey:null}],type:"QueryRoot",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"ShareCodeSharePageV2Query",selections:[{alias:null,args:i,concreteType:"PoeChatShare",kind:"LinkedField",name:"chatShare",plural:!1,selections:[{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"chatBot",plural:!1,selections:[r,d={alias:null,args:null,kind:"ScalarField",name:"deletionState",storageKey:null},c={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"localName",storageKey:null}],type:"LocalBotImage",abstractKey:null},{kind:"InlineFragment",selections:[g={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"URLBotImage",abstractKey:null}],storageKey:null},m,{alias:null,args:null,kind:"ScalarField",name:"viewerIsCreator",storageKey:null},h,{alias:null,args:null,kind:"ScalarField",name:"nickname",storageKey:null},_,p],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shareCode",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"creationTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"membersCount",storageKey:null},{alias:null,args:null,concreteType:"PoeMessageShare",kind:"LinkedField",name:"messages",plural:!0,selections:[m,{alias:null,args:null,kind:"ScalarField",name:"didSkipContext",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"author",storageKey:null},{alias:null,args:null,concreteType:"Bot",kind:"LinkedField",name:"authorBot",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isApiBot",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"limitedAccessType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shouldHideLimitedAccessTag",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"translatedBotTags",storageKey:null},d,c,h,_,{alias:null,args:null,kind:"ScalarField",name:"botId",storageKey:null},m,p],storageKey:null},{alias:null,args:null,concreteType:"CommandInfo",kind:"LinkedField",name:"command",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"commandType",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,concreteType:"ShareMessageAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[m,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"isInline",storageKey:null},{alias:null,args:null,concreteType:"File",kind:"LinkedField",name:"file",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"mimeType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},m,{alias:null,args:null,kind:"ScalarField",name:"size",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"thumbnailUrl",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"attachmentId",storageKey:null},{kind:"InlineFragment",selections:[{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"isOptimistic",storageKey:null}]}],type:"MessageAttachment",abstractKey:null}],type:"Attachment",abstractKey:"__isAttachment"}],storageKey:null},p],storageKey:null},t,s,m,p],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[o,u,{alias:"allowImages",args:[{kind:"Literal",name:"gateName",value:"poe_allow_images"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_allow_images")'},{alias:"allowImagesForApiBots",args:[{kind:"Literal",name:"gateName",value:"poe_allow_images_for_api_bots"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_allow_images_for_api_bots")'},{alias:"enableImageViewer",args:[{kind:"Literal",name:"gateName",value:"poe_web_image_viewer"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_image_viewer")'},{alias:"enableMath",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_markdown_math"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_markdown_math")'},{alias:null,args:null,kind:"ScalarField",name:"promptBotImageDomainWhitelist",storageKey:null},{alias:"enableImageAttachmentsForBots",args:[{kind:"Literal",name:"gateName",value:"poe_enable_image_attachments_for_bots"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_enable_image_attachments_for_bots")'},{alias:"enableVideoAttachmentsForBots",args:[{kind:"Literal",name:"gateName",value:"poe_web_enable_video_player"}],kind:"ScalarField",name:"booleanGate",storageKey:'booleanGate(gateName:"poe_web_enable_video_player")'},m],storageKey:null}]},params:{id:"8d421cfcb8206e79fbf9bf10dd3b7a9a9127d1d2c7cb2a85be2705420aef2e20",metadata:{},name:"ShareCodeSharePageV2Query",operationKind:"query",text:null}});k.hash="c318345efb5a769edf8716442499b4d4",a.default=k},64512:function(e,a,l){"use strict";l.r(a);var n=l(85893);l(44311);var i=l(71770),r=l(42050),t=l(49271),s=l(21034),o=l(50515),u=l(39826),d=l(34316),g=l(73553),c=l(74929),m=l(20675),h=l(57138),_=l(64737),p=l(50530),k=l(37115),y=l(99297),S=l.n(y),F=l(22497);let b=(0,m.T)(e=>{let{viewer:a,chatShare:l}=e;if(null==l)throw new h.NotFound;let m=JSON.parse(l.opengraphProperties),p=JSON.parse(l.twittercardProperties),y=m["og:description"],b=(0,k.F)(),K=(0,c.au)(b)&&!a.showContinueChatButtonOniOSMWeb;return(0,n.jsxs)(s.M,{pageType:F.Z.share,children:[(0,n.jsx)(o.Z,{title:(0,_.p)(m["og:title"]),description:y,twittercardProperties:p,opengraphProperties:m,shouldIndexForExternalSearch:!1}),(0,n.jsx)(r.Z,{header:(0,n.jsx)(g.Z,{useChatTitle:!0,children:(0,n.jsx)(d.Z,{share:l})}),children:(0,n.jsxs)("div",{className:S().container,children:[(0,n.jsx)("div",{className:S().spacing}),(0,n.jsx)(u.Z,{share:l,viewer:a}),(0,n.jsx)("div",{className:S().flexGrow}),(0,n.jsx)("footer",{className:S().footer,children:a.enableContinueChatOnWeb?(0,n.jsx)(t.Z,{share:l,hideContinueChatButton:K}):(0,n.jsx)(i.Z,{bot:l.chatBot})})]})})]})},{query:l(38367),variables:e=>{let a=e.shareCode;if(!(0,p.H)(a))throw new h.NotFound;return{shareCode:a}},onServerResponse:e=>{var a;if(!e.data||!(null===(a=e.data)||void 0===a?void 0:a.chatShare))throw new h.NotFound}},{leftSidebarDefaultCollapsed:!0,shouldIncludeGoogleOneTapPrompt:!0});a.default=b},99297:function(e){e.exports={container:"SharePage_container__xfsVF",spacing:"SharePage_spacing__wzKKP",flexGrow:"SharePage_flexGrow__rggQs",footer:"SharePage_footer__7auhh"}}},function(e){e.O(0,[1265,1664,5675,6835,3974,8039,6793,9209,5566,1142,7840,3825,2870,9535,1189,9774,2888,179],function(){return e(e.s=30982)}),_N_E=e.O()}]);