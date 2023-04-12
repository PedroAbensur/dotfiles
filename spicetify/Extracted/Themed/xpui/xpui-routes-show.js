"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5713],{84410:(e,t,a)=>{a.d(t,{V:()=>E,e:()=>D});var i=a(59496),s=a(90641),o=a(17204),n=a(58767),r=a(73355),l=a(26782),c=a(33308),d=a(72769),u=a(39704),g=a(70926),m=a(80772),p=a(27509),h=a(85345),x=a(17953),y=a(3630),b=a(23484),k=a(20863),j=a(44135),f=a(78061),v=a(4780),P=a(24860),C=a(77741),w=a(65905),S=a(59362),N=a(42073),I=a(4637);function D(e){return{uri:e.uri,name:e.name,trailer:e.trailer,showTypes:e.showTypes}}const A=e=>`activation-trigger-mme-${e}`,E=i.memo((function({index:e=-1,showMetadata:t,episode:a,usePlayContextItem:E,status:R,variant:U}){const F=(0,N.E)(),B=a.playedState.playPositionMilliseconds,O=a.uri,T=(0,i.useRef)(null),[L,M]=(0,i.useState)(a.playedState.state===w.sY.Completed),_=(0,p.O1)(),z=(0,x.g)(),G=(0,v.jh)(),W=(0,h.o)(),H=(0,s.I0)(),{UBIFragment:K,spec:X,logger:Z}=(0,C.fU)(o.createDesktopEpisodeBlockEventFactory,{data:{uri:O,reason:a.requestId||"",position:e}}),Y=(0,C.Wi)(X),{isActive:V,isPlaying:q,togglePlay:$}=E({uri:O}),[Q]=(0,P.z)(1e4,(e=>e?.item?.uri===O));(0,i.useEffect)((()=>{q&&(T.current=Q)}),[q,Q]),(0,i.useEffect)((()=>{!q&&T.current&&a.duration.milliseconds<=T.current&&M(!0)}),[q,a.duration.milliseconds]);const J=(0,i.useCallback)((e=>{e||(T.current=0),M(e)}),[]),ee=D(t),te=(0,y.s)({...a,coverArt:{sources:a.coverArt}},ee),ae=(0,i.useCallback)((()=>{if(a.episodeType===w.Wf.Episode&&F)g.y.set((()=>({triggerId:A(a.uri),triggerAction:null})));else if(z)te();else{let e;e=q?X.playButtonFactory().hitPause({itemToBePaused:O}):V?X.playButtonFactory().hitResume({itemToBeResumed:O}):X.playButtonFactory().hitPlay({itemToBePlayed:O});const t=Z.logInteraction(e);W({targetUri:O,intent:q?"pause":"play",type:"click"}),$({loggingParams:t})}}),[V,te,W,$,O,q,z,a,F,Z,X]),ie=(0,i.useCallback)((()=>{Z.logInteraction(X.hitUiNavigate({destination:O})),W({type:"click",targetUri:O,intent:"navigate"})}),[O,W,Z,X]),se=a.podcastSubscription?.isPaywalled??!1,oe=a.podcastSubscription?.isUserSubscribed??!1,ne=se&&!oe,re=se&&z,{badges:le}=(0,S.r)({contentRating:a.contentRating?.label,isPaywalled:se}),ce=(0,i.useCallback)((()=>H((0,r.RM)(t.uri))),[t.uri,H]),de=(0,i.useCallback)((e=>{let i=e;return(ne||re)&&(i=(0,I.jsx)(u.l,{enabled:!0,showUri:t.uri,children:i})),!a.playability.playable&&le.nineteen&&(i=(0,I.jsx)("div",{onClick:e=>{e.stopPropagation(),ce()},children:e})),i=(0,I.jsx)(l.D,{id:A(O),targetURI:(0,n.EC)(O),children:i}),i}),[O,ne,re,t.uri,le.nineteen,a.playability.playable,ce]);return(0,I.jsx)(K,{spec:X,children:(0,I.jsx)(f.ZP,{value:"row",index:e,children:(0,I.jsx)(b._,{onShow:()=>{Z.logInteraction(X.secondaryHitUiReveal())},menu:(0,I.jsx)(c.k,{uri:O,showUri:t.uri,sharingInfo:a.sharingInfo,isPlayed:L,onMarkAsPlayed:J}),children:(0,I.jsx)(d.X,{ref:Y,requestId:a.requestId,index:e,uri:O,size:G,images:a.coverArt||[],name:a.name,showName:t.name,description:a.description,isPlayable:a.playability.playable||ne,fullyPlayed:L,durationMs:a.duration.milliseconds,releaseDate:a.releaseDate?.isoString||"",resumePositionMs:T.current??B,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const i=`${a.name} • ${t.name}`;_(e,[O],i,t.uri)},handlePlaybackClick:ae,handleClick:ie,isCurrentlyPlaying:V,isPaywalled:se,isUserSubscribed:oe,isPlaying:q,position:q?Q:void 0,episodeSharingInfo:a.sharingInfo,onMarkAsPlayed:J,contentInformation:a.contentInformation,badges:(0,I.jsxs)(I.Fragment,{children:[le.explicit&&(0,I.jsx)(k.N,{}),le.paid&&(0,I.jsx)(m.g,{}),le.nineteen&&(0,I.jsx)(j.X,{size:16})]}),playButtonWrapper:de,onMoreButtonClick:()=>{Z.logInteraction(X.moreButtonFactory().hitUiReveal())},status:R,variant:U})})})})}))},52133:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ta});var i=a(59496),s=a(90641),o=a(92053),n=a(36794),r=a(79334),l=a(60378),c=a(62256),d=a(37277),u=a(84875),g=a.n(u),m=a(65748),p=a(43815),h=a(90342),x=a(75115),y=a(68234),b=a(85345),k=a(76017),j=a(78891),f=a(93362),v=a(20863),P=a(13081),C=a(41136);const w="_yl4tOZxcpoUt28k6B8I",S="lcJflizNrSwDM9yPNk6h",N="ret7iHkCxcJvsZU14oPY";var I=a(4637);const D=({rating:e,className:t,onClick:a})=>{if(!e)return null;const i=Boolean(e.rating?.rating);return(0,I.jsxs)("button",{className:g()(w,t),onClick:a,children:[(0,I.jsx)(m.D,{dir:"auto",variant:"mestoBold",children:e.averageRating?.showAverage?l.ag.formatNumber(e.averageRating.average,{maximumFractionDigits:1}):l.ag.get("web-player.audiobooks.noRating")}),i?(0,I.jsx)(P.u,{iconSize:16,className:g()(S)}):(0,I.jsx)(C.G,{iconSize:16,className:g()(S)}),e.averageRating?.showAverage&&(0,I.jsxs)(m.D,{variant:"mesto",className:g()(N),children:["(",l.ag.formatNumberCompact(Number(e.averageRating.totalRatings)),")"]})]})};var A=a(72735),E=a(77626),R=a(75623),U=a(19252);const F="SpVoh9vvBN0kIwzfCiBh",B="nsGHaEmn310z9W4RMbb8",O="PfYVlZzroXSurDmS_kxY",T="kCT99_BcJQtW47mEfVF6",L="gmDgEbPyRXNixmjYAT9f",M="XlZGcb86bItwlMPQ2jOf",_="VGTtqfOlX2jIbpff6mPP",z="aexqooSgfdW95poEaxjH",G="Fui2wGupk4F1Khigbrhj",W="jWcvSz47NFpbLjnkFT1O",H="Oo6MP8F01W5uGlnw8dag";var K=a(19713),X=a(44135),Z=a(28060),Y=a(59362),V=a(63667);let q;!function(e){e.SMALL="small",e.LARGE="large"}(q||(q={}));const $=({images:e,title:t,contentRating:a,duration:i,moreButton:s,onClick:o,onContextMenu:n,onTouchStart:r,onTouchEnd:l,isPlaying:c,isActive:d,size:u,className:p,label:h,isPlayable:x=!0})=>{const y=u===q.LARGE?"md":"sm",{badges:b}=(0,Y.r)({contentRating:a});return(0,I.jsxs)("div",{"data-testid":"trailer-component",className:g()(F,p,{[B]:d}),onContextMenu:n,onTouchStart:r,onTouchEnd:l,children:[(0,I.jsxs)("div",{className:T,children:[(0,I.jsxs)("div",{className:z,children:[(0,I.jsx)(E.O,{type:U.p.EPISODE,title:t,className:g()(_,{[H]:u===q.SMALL,[W]:u===q.LARGE}),size:R.m$.SIZE_56,images:e,shape:E.K.ROUNDED_CORNERS}),(0,I.jsx)("div",{className:G,children:(0,I.jsx)(V.f,{"data-testid":"trailer-play-button",version:K.ul.transparent,size:y,isPlaying:c,onClick:o,disabled:!x})})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)("div",{className:L,children:(0,I.jsx)(m.D,{dir:"auto",className:O,variant:"balladBold",children:t})}),(0,I.jsxs)("div",{className:M,children:[(0,I.jsx)(Z.V,{text:h}),b.explicit&&(0,I.jsx)(v.N,{}),b.nineteen&&(0,I.jsx)(X.X,{}),(0,I.jsx)(m.D,{dir:"auto",variant:"mesto",children:(0,I.jsx)(A.nL,{durationMs:i})})]})]})]}),s]})};var Q=a(4780),J=a(59693),ee=a(67551),te=a(19193),ae=a(77741),ie=a(75967);const se=({htmlDescription:e,narrators:t,spec:a})=>{const s=(0,b.o)(),o=(0,ae.$P)(),n=(0,i.useCallback)((e=>{s({intent:"expand-description",type:"click"});const t=a.seeMoreButtonFactory();o.logInteraction(e?t.hitUiReveal():t.hitUiHide())}),[o,s,a]);return(0,I.jsxs)(I.Fragment,{children:[t.length?(0,I.jsx)(m.D,{as:"p",variant:"ballad",children:l.ag.get("web-player.audiobooks.narratedByX",t.join(l.ag.getSeparator()))}):null,e&&(0,I.jsx)(ie.o,{maxLines:4,content:e,htmlContent:e,onExpanded:n})]})};var oe=a(43234),ne=a(60962),re=a(24252);const le=i.memo((function({uri:e,size:t=re.q.md,className:a,onClick:s}){const[o,n]=(0,ne.Z)(e),r=(0,b.o)(),l=(0,i.useCallback)((()=>{r({targetUri:e,intent:o?"unsave":"save",type:"click"}),n(!o)}),[r,e,o,n]);return(0,I.jsx)(re.o,{className:a,isFollowing:o,onFollow:l,onClick:s,uri:e,size:t})}));var ce=a(82526);const de="8px",ue="bUYG1AgkIOioFe_UYEO7";var ge=a(51023),me=a(27203),pe=a(7929),he=a(23534),xe=a(17657),ye=a(73549),be=a(35826),ke=a(17953),je=a(71743);const fe={button:"iZut9Dh2KEjNVhDUxzWw"};function ve({uri:e,price:t,size:a,spec:i,logger:s,onPlayback:o}){const n=(0,je.k)(),r=(0,ke.g)(),c=0===t?.finalPrice?.amount,d=c?i.getButtonFactory({uri:e}):i.buyButtonFactory({uri:e}),u=(0,xe.y1)((async()=>{if(s.logInteraction(d.hitShowPaywall({paywalledItem:e})),r)o();else{try{t?.finalPrice?await(0,be.Q)({show_uri:e,currency:t.finalPrice.currency,price:t.finalPrice.amount}):n(l.ag.get("error.generic"))}catch(e){n(l.ag.get("error.generic"))}o()}}),2e3,{leading:!0,trailing:!1});return(0,I.jsx)(ye.D,{buttonSize:a,className:fe.button,style:{flexShrink:0},onClick:u,children:c?l.ag.get("web-player.audiobooks.buyFree"):l.ag.get("web-player.audiobooks.buy")})}const Pe=({uri:e,isLocked:t,price:a,isPlaying:i,onPlayback:s,logger:o,spec:n,size:r="lg"})=>t?(0,I.jsx)(ve,{size:r,uri:e,price:a,logger:o,spec:n,onPlayback:s}):(0,I.jsx)(he.$,{size:r,isPlaying:i,uri:e,onClick:s});var Ce=a(55644),we=a(23949);const Se=i.memo((({price:e})=>e.finalPrice&&e.finalListPrice?0===e.finalPrice.amount&&0===e.finalListPrice.amount?(0,I.jsxs)("div",{className:ue,children:[(0,I.jsx)(m.D,{variant:"cello",semanticColor:"textBase",children:l.ag.get("audiobook.freePriceDescription")}),(0,I.jsx)(m.D,{variant:"mesto",children:l.ag.get("audiobook.freePriceExplanation")})]}):(0,I.jsxs)("div",{className:ue,children:[(0,I.jsx)(m.D,{variant:"canon",semanticColor:"textBase",children:e.finalPrice.formattedPrice}),e.finalPrice.amount<e.finalListPrice.amount&&(0,I.jsx)(m.D,{variant:"ballad",semanticColor:"textSubdued",children:l.ag.get("web-player.audiobooks.retailPrice",(0,I.jsx)("span",{style:{textDecoration:"line-through"},children:e.finalListPrice.formattedPrice}))})]}):null)),Ne=i.memo((function({backgroundColor:e,uri:t,name:a,isPlaying:s,togglePlay:o,isLocked:n,price:r,spec:c}){const[d,u]=(0,ne.Z)(t),g=!(0,we.k)(),m=n&&r,p=(0,b.o)(),h=(0,ae.$P)(),y=(0,i.useCallback)((()=>{p({targetUri:t,intent:d?"unsave":"save",type:"click"});const e=c.saveToLibraryButtonFactory();d?h.logInteraction(e.hitUnfollow({itemToBeUnfollowed:t})):h.logInteraction(e.hitFollow({itemToBeFollowed:t})),u(!d)}),[p,t,d,c,u,h]),k=(0,i.useCallback)(((e,a)=>{const i=c.downloadButtonFactory();a===pe.mc.ADD?h.logInteraction(i.hitDownload({itemToDownload:t})):a===pe.mc.REMOVE?h.logInteraction(i.hitRemoveDownload({itemToRemoveFromDownloads:t})):a===pe.mc.NO_PERMISSION&&h.logInteraction(i.hitUiReveal())}),[h,c,t]),j=(0,i.useCallback)((()=>{const e=c.contextButtonFactory().hitUiReveal();h.logInteraction(e)}),[h,c]);return(0,I.jsxs)(oe.o,{backgroundColor:e,style:{"--action-bar-padding-bottom":de},children:[(0,I.jsxs)(oe.F,{children:[(0,I.jsx)(Pe,{uri:t,isLocked:n,price:r,isPlaying:s,onPlayback:o,logger:h,spec:c}),(0,I.jsx)(Ce.r,{children:(0,I.jsx)(ge.H,{isAdded:d,onClick:y,disabled:g,size:ge.q.md,isAudiobook:!0})},"follow-button"),!n&&(0,I.jsx)(le,{uri:t,onClick:k}),(0,I.jsx)(me.yj,{menu:(0,I.jsx)(ce.X,{uri:t}),children:(0,I.jsx)(x.z,{label:l.ag.get("more.label.context",a),onClick:j})})]}),m&&(0,I.jsx)(Se,{price:r})]})}));var Ie=a(37611),De=a(26553),Ae=a(65476);const Ee=i.memo((function({coverArt:e,name:t,authorName:a,uri:i,backgroundColor:s,isPlaying:o,togglePlay:n,isLocked:r,price:c,logger:d,spec:u}){return(0,I.jsxs)(Ie.gF,{backgroundColor:s,children:[(0,I.jsxs)(De.W,{children:[(0,I.jsx)(Pe,{uri:i,isLocked:r,price:c,isPlaying:o,onPlayback:n,logger:d,spec:u,size:"md"}),(0,I.jsx)(Ae.i,{text:t,dragUri:i,dragLabel:t})]}),(0,I.jsx)(me._P,{menu:(0,I.jsx)(ce.X,{uri:i}),children:(0,I.jsx)(Ie.Oz,{images:e,name:t,shape:E.K.ROUNDED_CORNERS})}),(0,I.jsxs)(Ie.sP,{children:[(0,I.jsx)(m.D,{variant:"mestoBold",children:l.ag.get("web-player.audiobooks.audiobook")}),(0,I.jsx)(Ie.xd,{canEdit:!1,onClick:()=>{},children:t}),(0,I.jsx)(Ie.QS,{author:a})]})]})}));var Re=a(10118),Ue=a(49160);var Fe=a(76501);function Be(e){return!e.playability?.playable&&(e.playability?.reason===Fe.WY.PaymentRequired||e.playability?.reason===Fe.WY.Anonymous)}var Oe=a(80772),Te=a(92714),Le=a(23924),Me=a(57869),_e=a(89609),ze=a(49507);const Ge=i.memo((function({uri:e,bookUri:t,size:a=re.q.md,className:s,onClick:o=(()=>{}),isLocked:n=!0}){const[r,l]=(0,ne.Z)(t),c=(0,b.o)(),d=(0,i.useCallback)((()=>{c({targetUri:t,intent:"add-to-library",type:"click"}),l(!0)}),[c,t,l]);return(0,I.jsx)(re.o,{className:s,isFollowing:r,canDownload:!n,onFollow:d,uri:e,size:a,onClick:o})})),We=i.memo((function(e){return(0,I.jsx)(Ge,{...e})}));var He=a(39866);const Ke="b0Vng72SrQiFroJKXfk2",Xe="FfeP3XKSZcAdfviyk8fv",Ze="eWxDd0LanTnTlSl8SOHX",Ye="eAOkseqV13_CAmzuDJpa",Ve="fovofKIYdEIURgIYoKm2",qe="we_1b4qCQBaFPT12eUXp",$e="NXXFrQO7npgPCRuSKaAA",Qe="ekkhhuxKVGAzkEmuh9kE",Je="zd6xqobF255bxHFtCmXy",et=i.memo((function({name:e,duration:t,uri:a,bookUri:s,bookName:o,usePlayContextItem:n,isLocked:r,isPlayable:c,resumePositionMs:d,isFullyPlayed:u,isExplicit:p,is19PlusOnly:h,spec:k,index:j}){const f=(0,i.useRef)(d),{isPlaying:P,togglePlay:C,isActive:w}=n({uri:a}),S=(0,ae.$P)(),N=(0,Me.Y)((e=>{if(e?.item?.uri===a){const t=(0,_e.k)(e)??0;return f.current=t,t}return 0})),D=(0,Le._)(a),A=(0,i.useCallback)((e=>{e.stopPropagation(),e.preventDefault()}),[]),E=(0,b.o)(),R=(0,i.useCallback)((e=>{A(e);const t=k.chapterBlockFactory({position:j,uri:a}).playButtonFactory();if(r)E({type:"click",intent:"audiobook-gated-entry-point",itemIdSuffix:"target-chapter"}),S.logInteraction(t.hitShowPaywall({paywalledItem:a}));else{const e=(0,He.aK)({isPlaying:P,isActive:w,spec:t,logger:S,uri:a});C({loggingParams:e})}}),[j,w,r,P,S,E,k,A,C,a]),U=(0,i.useCallback)(((e,t)=>{A(e);const i=k.chapterBlockFactory({position:j,uri:a}).downloadButtonFactory();t===pe.mc.ADD?S.logInteraction(i.hitDownload({itemToDownload:a})):t===pe.mc.REMOVE?S.logInteraction(i.hitRemoveDownload({itemToRemoveFromDownloads:a})):t===pe.mc.NO_PERMISSION&&S.logInteraction(i.hitUiReveal())}),[j,S,k,A,a]),F=(0,i.useCallback)((()=>{const e=k.chapterBlockFactory({position:j,uri:a}).secondaryHitUiReveal();S.logInteraction(e)}),[j,S,k,a]),B=(0,i.useCallback)((e=>{A(e);const t=k.chapterBlockFactory({position:j,uri:a}).contextMenuFactory().hitUiReveal();S.logInteraction(t)}),[j,S,k,A,a]),O=!r,T=(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("hr",{className:Ze,"aria-hidden":!0}),(0,I.jsxs)("div",{className:Ke,onDoubleClick:e=>{E({targetUri:a,intent:"play",type:"double-click"}),R(e)},children:[(0,I.jsx)(m.D,{as:"h2",variant:"balladBold",className:g()($e,{[Xe]:w}),semanticColor:"textBase",children:e}),(0,I.jsxs)("div",{className:Qe,children:[(0,I.jsx)(V.f,{size:"sm",version:V.u.secondary,onClick:R,isPlaying:P,ariaPlayLabel:l.ag.get("tracklist.a11y.play",e,o),ariaPauseLabel:l.ag.get("tracklist.a11y.pause",e,o),locked:r,disabled:!c&&!r}),r?(0,I.jsx)(Oe.g,{}):null,p&&(0,I.jsx)(v.N,{fullText:!0}),h&&(0,I.jsx)(X.X,{size:16}),(0,I.jsx)("div",{className:Je,children:(0,I.jsx)(ze.E,{isPlaying:P,fullyPlayed:u,durationMs:t.milliseconds,resumePositionMs:f.current,position:P?N:void 0})})]}),O?(0,I.jsx)(me.yj,{menu:(0,I.jsx)(y.r,{uri:a,showUri:s,isLocked:r}),children:(0,I.jsx)(x.z,{className:Ve,size:re.q.sm,label:l.ag.get("more.label.context",e),onClick:B})}):null,(0,I.jsx)(We,{uri:a,bookUri:s,className:g()({[qe]:!(0,Te.y)(D)}),onClick:U,size:re.q.sm,isLocked:r})]})]});return O?(0,I.jsx)(me._P,{menu:(0,I.jsx)(y.r,{uri:a,showUri:s,isLocked:r}),onShow:F,children:(0,I.jsx)("div",{className:Ye,children:T})}):(0,I.jsx)("div",{className:Ye,children:T})})),tt=({bookUri:e,bookName:t,sampleUri:a,isFinishedUnlockingJourney:s,usePlayContextItem:o,spec:n})=>{const r=function(e,t){const a=(0,Ue.z)();return(0,i.useCallback)((async(i,s)=>a.getBookContents(e,{offset:i,limit:s,doRefreshSubscription:t})),[t,a,e])}(e,s),l=(0,i.useRef)(!1),c=(0,i.useRef)(0),[d,u]=(0,i.useState)([]),g=(0,i.useCallback)((e=>e?.uri===a),[a]),m=(0,i.useCallback)((e=>(e=>null!==e)(e)&&!g(e)),[g]),p=(0,i.useCallback)((()=>{r&&(l.current||null===c.current||(l.current=!0,r(c.current,50).then((e=>{l.current=!1,c.current=e.nextOffset,e.items.length>0&&u((t=>t.concat(e.items.filter(m))))}))))}),[r,m]);return(0,i.useEffect)((()=>{c.current=0,u([])}),[e]),(0,I.jsx)("ul",{children:(0,I.jsx)(Re.C,{onReachBottom:p,triggerOnInitialLoad:!0,children:d.map(((a,i)=>{const{name:s,duration:r,uri:l,playability:{playable:c},playedState:{playPositionMilliseconds:d,state:u},isExplicit:g,is19PlusOnly:m}=a;return(0,I.jsx)(et,{name:s,duration:r,uri:l,bookUri:e,bookName:t,usePlayContextItem:o,isLocked:Be(a),isPlayable:c,resumePositionMs:d,isFullyPlayed:u===Fe.sY.Completed,isExplicit:g,is19PlusOnly:m,spec:n,index:i},l)}))})})};var at=a(46819),it=a(37994),st=a(20123),ot=a(35804),nt=a(87940);const rt="QEd1L2SSRW1ol_sQQN6m",lt="ENuWK8u3C9kmadnqkErf",ct="i0gSVhns0PjhiUKm4OG1",dt="jKVb6K0dga3SfW1dp2Pg",ut="MOpV0_YizQER2NksxLju",gt="vrR8bh9DvivyDfUrh1vD",mt="_toO3CqMPAPTbny7Rh8R",pt="Iudw61HRePwOAJpbDRvA",ht="GWaz1n1SADn9enzKdi_Z",xt=i.memo((function({coverArt:e,toggleModal:t,uri:a,isBook:i}){const s=(0,ot.X)(e,{desiredSize:320}),{spec:o,logger:n}=(0,ae.fU)(it.createDesktopPodcastRatingEventFactory,{data:{identifier:i?r.Wg.RATINGS_AND_REVIEWS_RATINGS_AUDIOBOOK:r.Wg.RATINGS_AND_REVIEWS_RATINGS,uri:a}});return(0,I.jsx)(nt.Z,{contentLabel:"podcast-rating-modal",isOpen:!0,onRequestClose:t,children:(0,I.jsxs)("div",{className:rt,children:[(0,I.jsxs)("div",{className:ct,children:[(0,I.jsx)(m.D,{as:"h1",variant:"canon",className:mt,children:l.ag.get("web-player.audiobooks.rating.rateAudiobook")}),(0,I.jsxs)("button",{className:dt,onClick:()=>{const e=o.closeButtonFactory().hitUiNavigateBack();n.logInteraction(e),t()},children:[(0,I.jsx)(at.k,{role:"presentation"}),(0,I.jsx)("span",{className:"hidden-visually",children:l.ag.get("web-player.audiobooks.rating.closeModal")})]})]}),(0,I.jsxs)("div",{className:ut,children:[(0,I.jsx)(st.Ee,{loading:"eager",src:s?.url,className:lt}),(0,I.jsxs)("div",{className:gt,children:[(0,I.jsx)(m.D,{as:"p",variant:"cello",className:pt,children:l.ag.get("web-player.audiobooks.rating.wantToRate")}),(0,I.jsx)(m.D,{as:"p",className:ht,children:l.ag.get("web-player.audiobooks.rating.goToApp")}),(0,I.jsx)(ye.D,{colorSet:"invertedLight",onClick:()=>{const e=o.okButtonFactory().hitUiNavigateBack();n.logInteraction(e),t()},children:l.ag.get("web-player.audiobooks.rating.ok")})]})]})]})})})),yt="mmCZ5VczybT9VqKB5wFU",bt="At_ihDspJfh1yw3Cn2cq",kt="u3LLJx1KnMchfNCzi6k5",jt="Yqz1Nv6wj1n3HmXL_qji",ft="qRqn3JrWLPbGW9k2a63n",vt="HAah1_lK_dHgyyE71I8Z",Pt="eiC4nh70nb5UHZBYMgNA",Ct="eYtmwXEvi1UdCevg8WoK",wt="QOp2aYTYmZHZ6DFFHuYE",St="zOSFBl22aXH_Vak33myy",Nt=i.memo((function({metadata:e}){const{uri:t,coverArt:a,name:s,htmlDescriptionPlain:n,authorName:d,sample:u,narrators:P,rating:C,isExplicit:w,duration:S,copyrights:N,publishDate:E,price:R,isLocked:U}=e,{search:F}=(0,o.TH)(),B=!!new URLSearchParams(F).get("isUnlockingAudiobook"),O=!(!(0,J.D)(B)||B),T=(0,ke.g)(),L=(0,k.Z)(a[0]?.url),[M,_]=(0,i.useState)(!1),z=(0,b.o)(),{spec:G,logger:W}=(0,ae.fU)(p.createDesktopAudiobookEventFactory,{data:{uri:t,identifier:r.Wg.PODCAST_SHOW_AUDIOBOOK}}),{spec:H,logger:K}=(0,ae.fU)(p.createDesktopAudiobookEventFactory,{data:{uri:t,identifier:r.Wg.RATINGS_AND_REVIEWS_RATINGS_AUDIOBOOK}}),{spec:X,logger:Z}=(0,ae.fU)(h.createDesktopLockedAudiobookEventFactory,{data:{uri:t,identifier:r.Wg.PODCAST_SHOW_AUDIOBOOK}}),Y=(0,i.useMemo)((()=>G.actionBarFactory()),[G]),V=(0,i.useMemo)((()=>H.aboutSectionFactory()),[H]),ie=(0,i.useMemo)((()=>G.chapterListFactory()),[G]);(0,i.useEffect)((()=>{z({type:"view",intent:"audiobook"})}),[z]),(0,i.useEffect)((()=>{U&&Z.logImpression(X.impression())}),[X,Z,U]);const{isPlaying:oe,togglePlay:ne,usePlayContextItem:re,isActive:le,triggerPlay:ce}=(0,ee.n)({uri:t},{featureIdentifier:"audiobook"}),{togglePlay:de,isPlaying:ue,isActive:ge}=(0,ee.n)({uri:u?.uri??""},{featureIdentifier:"audiobook"}),me=oe&&!ue,pe=le&&!ge,he=(0,i.useCallback)((async()=>{const e=G.actionBarFactory().playButtonFactory();if(!U||T)if(T)ne();else{const a=(0,He.aK)({isPlaying:me,isActive:pe,spec:e,logger:W,uri:t});pe?ne({loggingParams:a}):ce({loggingParams:a})}else W.logInteraction(e.hitShowPaywall({paywalledItem:t}))}),[G,U,T,W,t,ne,me,pe,ce]),xe=(0,i.useCallback)((()=>{u?.uri&&(z({targetUri:u.uri,intent:ue?"play":"pause",type:"click"}),de())}),[ue,z,de,u?.uri]),ye=(0,i.useCallback)((()=>{const e=V.ratingButtonFactory().hitUiReveal();K.logInteraction(e),_((e=>!e))}),[V,K]),{ref:be,breakpoint:je}=(0,Q.Db)({[Q.Uo.MEDIUM]:600,[Q.Uo.LARGE]:1024});return(0,I.jsxs)("section",{ref:be,className:yt,children:[(0,I.jsx)(c.$,{children:(0,te.Od)({showOrAudiobookName:s,type:"Audiobook"})}),(0,I.jsx)(Ee,{name:s,authorName:d,uri:t,coverArt:a,backgroundColor:L,togglePlay:he,isPlaying:me,isLocked:U,price:R,logger:W,spec:G.actionBarFactory()}),(0,I.jsx)(Ne,{name:s,backgroundColor:L,uri:t,togglePlay:he,isPlaying:me,isLocked:U,isExplicit:w,duration:S,publishDate:E,price:R,spec:Y}),(0,I.jsxs)("div",{className:g()(bt,"contentSpacing",{[kt]:je===Q.Uo.LARGE}),children:[(0,I.jsxs)("div",{className:jt,children:[(0,I.jsx)("hr",{className:St,"aria-hidden":!0}),(0,I.jsxs)("div",{className:Ct,children:[w&&(0,I.jsx)(v.N,{fullText:!0}),(0,I.jsxs)("div",{children:[E&&(0,I.jsx)(m.D,{variant:"ballad",className:wt,children:l.ag.formatDate(E)}),(0,I.jsx)(m.D,{variant:"ballad",children:(0,I.jsx)(A.nL,{durationMs:S})})]})]}),(0,I.jsx)(se,{htmlDescription:n,narrators:P,spec:V})]}),(0,I.jsxs)("div",{className:ft,children:[u&&(0,I.jsx)($,{label:l.ag.get("audiobook.page.sample"),images:u.coverArt||[],title:u.name,duration:u.duration.milliseconds,moreButton:U?null:(0,I.jsx)(j.y,{menu:(0,I.jsx)(y.r,{uri:u.uri,showUri:t,isLocked:U}),children:(0,I.jsx)(x.z,{})}),onClick:xe,isPlaying:ue,isActive:ge,size:q.LARGE,contentRating:u.contentRating?.label,isPlayable:u.isPlayable}),(0,I.jsx)("div",{className:vt,children:(0,I.jsx)(D,{rating:C,onClick:ye})})]}),(0,I.jsxs)("div",{className:Pt,children:[(0,I.jsx)(tt,{bookUri:t,bookName:s,sampleUri:u?.uri,isFinishedUnlockingJourney:O,usePlayContextItem:re,spec:ie},`${t}-${U}`),(0,I.jsx)(f.k,{copyrights:N})]})]}),M&&(0,I.jsx)(xt,{toggleModal:()=>_(!1),coverArt:a,uri:t,isBook:!0})]})}));var It=a(90665),Dt=a(79096),At=a(72006),Et=a(65131),Rt=a(21346),Ut=a(14660);const Ft=({uri:e,name:t,backgroundColor:a,spec:s})=>{const o=(0,ae.$P)(),n=(0,b.o)(),r=!(0,we.k)(),[c,d]=(0,ne.Z)(e),u=(0,i.useCallback)((()=>{n({targetUri:e,intent:c?"unsave":"save",type:"click"});const t=s.followButtonFactory();o.logInteraction(c?t.hitUnfollow({itemToBeUnfollowed:e}):t.hitFollow({itemToBeFollowed:e})),d(!c)}),[n,e,c,s,o,d]),g=(0,i.useCallback)((()=>{o.logInteraction(s.contextButtonFactory().hitUiReveal())}),[o,s]);return(0,I.jsx)(oe.o,{backgroundColor:a,children:(0,I.jsxs)(oe.F,{children:[(0,I.jsx)(Ce.r,{children:(0,I.jsx)(Ut.e,{isFollowing:c,onClick:u,disabled:r})},"follow-button"),(0,I.jsx)(j.y,{menu:(0,I.jsx)(Rt.M,{uri:e}),onShow:g,children:(0,I.jsx)(x.z,{label:l.ag.get("more.label.context",t)})})]})})};var Bt=a(69062),Ot=a(78241);const Tt=(0,i.lazy)((()=>a.e(1148).then(a.bind(a,1148))));function Lt(e){return(0,Bt.W6)(Ot.$f)?(0,I.jsx)(i.Suspense,{fallback:!0,children:(0,I.jsx)(Tt,{...e})}):null}var Mt=a(33308),_t=a(74546),zt=a(3630),Gt=a(23484),Wt=a(13476),Ht=a(69003),Kt=a(84410),Xt=a(78061),Zt=a(17970);const Yt=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ShowFilterProvider")},sortState:[]}),Vt=i.memo((function({uri:e,children:t}){return(0,I.jsx)(Zt.r,{uri:e,defaultState:[],sortContext:Yt,localStorageKey:"showFilterParams-v2",children:t})}));var qt=a(94314);const $t={field:qt.ay.PUBLISH_DATE,order:qt.i5.DESC},Qt={field:qt.ay.PUBLISH_DATE,order:qt.i5.ASC},Jt={episodic:$t,sequential:Qt,recent:$t};function ea(){return new Map([[$t,{key:"newest-to-oldest",value:l.ag.get("shows.sort.newest-to-oldest")}],[Qt,{key:"oldest-to-newest",value:l.ag.get("shows.sort.oldest-to-newest")}]])}function ta(e){return Jt[e]}const aa=(0,i.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a ShowSortProvider")},sortState:ta("recent")}),ia=e=>{const t=ea();return Array.from(t.keys()).some((({field:t})=>t===e?.field))},sa=i.memo((function({uri:e,children:t,defaultSortParam:a}){return(0,I.jsx)(Zt.r,{uri:e,defaultState:a,sortContext:aa,localStorageKey:"showSortParam",validator:ia,children:t})})),oa="cJJXVm4gQW6AdfCQRhpX",na="hTRqaN61SDG95erQGMmx",ra={totalCount:0,nextOffset:0,items:[]},la=i.memo((function({showMetadata:e,usePlayContextItem:t}){const{sortState:a}=(0,i.useContext)(aa),{sortState:s}=(0,i.useContext)(Yt),o=(0,Ht.ZM)(e.uri,a,s),[n,r]=(0,i.useState)(ra),l=(0,i.useRef)(!1),c=(0,i.useRef)(0),d=(0,i.useCallback)(((e=!1)=>{if(!o)return;const t=c.current;null!==t&&(l.current||(l.current=!0,o(t,50).then((a=>{r((i=>{const s=e?[]:[...i.items];return s.splice(t,a.items.length,...a.items),c.current=a.nextOffset,{...a,items:s}})),l.current=!1}))))}),[o]);return(0,i.useEffect)((()=>{r(ra)}),[e.uri]),(0,i.useEffect)((()=>{c.current=0,d(!0)}),[d]),(0,I.jsx)(Xt.ZP,{value:"track-list",children:(0,I.jsx)(Re.C,{onReachBottom:d,triggerOnInitialLoad:!0,children:n.items.map(((a,i)=>a&&(0,I.jsxs)("div",{className:na,children:[(0,I.jsx)("hr",{className:oa,"aria-hidden":!0}),(0,I.jsx)(Kt.V,{index:i,episode:a,showMetadata:e,usePlayContextItem:t},`${a.uri}/${i}`)]},`${i}${a.uri}`)))})})}));var ca=a(22525);const da={field:qt.YG.ISPLAYED,operator:qt.NK.EQUALS,value:!1},ua={field:qt.YG.STARTEDPLAYING,operator:qt.NK.GREATER_THAN,value:0};const ga="all-episodes",ma=({onFilter:e})=>{const{sortState:t,setSortState:a}=(0,i.useContext)(Yt),s=new Map([[da,{key:"is-played",value:l.ag.get("shows.filter.unplayed")}],[ua,{key:"started-playing",value:l.ag.get("shows.filter.in-progress")}]]),o=Array.from(s.values());o.unshift({key:ga,value:l.ag.get("mwp.podcast.all.episodes")});const n=Array.from(s.keys()),r=(0,i.useCallback)((t=>{if(t===ga)a([]);else{const e=n.find((e=>s.get(e)?.key===t));e&&a([e])}e()}),[e,a,n,s]);if(!s.size||!n)return null;let c=o[0];const d=Array.from(s.entries()).filter((e=>t?.some((t=>t.field===e[0].field&&t.operator===e[0].operator))));return d.length>0&&(c=d[0][1]),(0,I.jsx)(ca.A,{options:o,onSelect:e=>r(e),selected:c,variant:"balladBold",semanticColor:"textBase",heading:l.ag.get("drop_down.filter_by")})},pa=({onSort:e})=>{const{sortState:t,setSortState:a}=(0,i.useContext)(aa),s=ea(),o=Array.from(s.values()),n=Array.from(s.keys()),r=(0,i.useCallback)((t=>{const i=n.find((e=>s.get(e)?.key===t));i&&a(i),e()}),[n,e,s,a]);if(!s.size||!t)return null;const c=Array.from(s.keys()).find((e=>e.field===t.field&&e.order===t.order));if(!c)return null;const d=s.get(c);return d?(0,I.jsx)(ca.A,{options:o,onSelect:e=>r(e),selected:d,heading:l.ag.get("drop_down.sort_by")}):null},ha="show-showPage-sectionWrapper",xa="TYB4Y2xQujO7cifhHush",ya="sSXKiPRvp2AHmwfHoCCS",ba="YJlizbhw6DBPHT9OYbdj",ka="klz_XuZpllvTMzpJF1gw",ja="TfjbWiK8hca4HHEBnonP",fa="kR0M2WSYVUj4cohADSFM",va="ghfuv80I8uW_ymG_jfx9",Pa="jtfSxoRam9rzTtdXIjzc",Ca="fejGrhq7pxGC99cUdyVw",wa="T0OjvsNXAJJGd23eBG2m",Sa="Ppm5YkDdE5ktTPwZC1Dw",Na=({spec:e})=>{const t=(0,ae.$P)(),{canSort:a,canFilter:s}=(0,Ht.zZ)().capabilities,o=(0,i.useCallback)((()=>{t.logInteraction(e.episodeListFactory().filterButtonFactory().hitFilter())}),[t,e]),n=(0,i.useCallback)((()=>{t.logInteraction(e.episodeListFactory().sortButtonFactory().hitSort())}),[t,e]);return(0,I.jsxs)("div",{className:fa,children:[s&&(0,I.jsx)("div",{className:Pa,children:(0,I.jsx)(ma,{onFilter:o})}),!s&&(0,I.jsx)(m.D,{as:"h3",variant:"canon",semanticColor:"textBase",className:Ca,children:l.ag.get("mwp.podcast.all.episodes")}),a&&(0,I.jsx)("div",{className:va,children:(0,I.jsx)(pa,{onSort:n})})]})},Ia=e=>{switch(e){case Fe.it.TRAILER:return l.ag.get("podcasts.next-episode.trailer");case Fe.it.UP_NEXT:return l.ag.get("podcasts.next-episode.up-next");case Fe.it.CONTINUE_LISTENING:return l.ag.get("podcasts.next-episode.continue-listening");case Fe.it.FIRST_PUBLISHED:return l.ag.get("podcasts.next-episode.first-published");case Fe.it.LATEST_PUBLISHED:return l.ag.get("podcasts.next-episode.latest-published");default:return}},Da=({breakpoint:e,metadata:t,showId:a,spec:s})=>{const{uri:o,trailer:n,topics:r,description:c,htmlDescription:d}=t,u=(0,ae.$P)(),p=(0,i.useMemo)((()=>s.episodeListFactory()),[s]),h=(0,Bt.W6)(Ot.Vz),y=(0,b.o)(),k=(0,Bt.W6)(Ot.Cz),v=(0,ke.g)(),{sortState:P}=(0,i.useContext)(aa),{sortState:C}=(0,i.useContext)(Yt),w=(0,Ht.zZ)(),{usePlayContextItem:S}=(0,ee.n)({uri:o,metadata:{[Wt.sb.SORTING_CRITERIA]:w.getPlayerSort(P),[Wt.sb.FILTERING_PREDICATE]:w.getPlayerFilter(C)}},{featureIdentifier:"show"}),{isActive:N,isPlaying:D,togglePlay:A}=S({uri:n?.uri||""}),E=(0,i.useCallback)((e=>{y({intent:"expand-description",type:"click"});const t=s.aboutSectionFactory().seeMoreButtonFactory(),a=e?t.hitUiReveal():t.hitUiHide();u.logInteraction(a)}),[u,y,s]),R=(0,i.useCallback)(((e,t)=>{const a=s.aboutSectionFactory().topicFactory(t).hitUiNavigate({destination:t.uri});u.logInteraction(a)}),[u,s]),U=n?{name:n.name,uri:n.uri,audio:{items:n.audio.items.map((e=>({url:e.url})))}}:null,F=(0,Kt.e)(t),B=(0,zt.s)(U,F),O=(0,i.useCallback)((()=>{n?.uri&&(v?B():(y({targetUri:n.uri,intent:D?"play":"pause",type:"click"}),A()))}),[B,v,D,y,A,n?.uri]),{ref:T,breakpoint:L}=(0,Q.Db)({[Q.Uo.MEDIUM]:0,[Q.Uo.LARGE]:600}),M=r.length>0,_=c||k&&d,z=_||M;return(0,I.jsxs)("div",{className:g()(xa,"contentSpacing",{[ya]:e===Q.Uo.LARGE}),children:[(0,I.jsxs)("div",{className:ba,children:[z&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(m.D,{as:"h3",variant:"canon",semanticColor:"textBase",className:Ca,children:l.ag.get("artist.about")}),_&&(0,I.jsx)(ie.o,{maxLines:4,content:(c||"").trim(),onExpanded:E,htmlContent:k&&d?d:void 0}),M&&(0,I.jsx)(_t.v,{topics:r,onClick:R})]}),(0,I.jsx)(Lt,{showId:a,uri:o}),n&&!h&&(0,I.jsx)(Gt._,{menu:(0,I.jsx)(Mt.k,{uri:n.uri,showUri:o,sharingInfo:n.sharingInfo}),children:(0,I.jsx)($,{label:l.ag.get("track-trailer"),className:wa,images:n.coverArt||[],title:n.name,duration:n.duration.milliseconds,moreButton:(0,I.jsx)(j.y,{menu:(0,I.jsx)(Mt.k,{uri:n.uri,sharingInfo:n.sharingInfo,showUri:o}),children:(0,I.jsx)(x.z,{})}),onClick:O,isPlaying:D,isActive:N,size:q.LARGE,contentRating:n.contentRating?.label})})]}),(0,I.jsx)(Q.ZU.Provider,{value:L,children:(0,I.jsxs)("div",{className:ja,"data-testid":"show-all-episode-list",ref:T,children:[h&&t.nextBestEpisode&&(0,I.jsx)(Kt.V,{showMetadata:t,episode:t.nextBestEpisode.data,usePlayContextItem:S,status:Ia(t.nextBestEpisode.type),variant:"next-best-episode"}),(0,I.jsx)(Na,{spec:s}),(0,I.jsx)(ae.Nh,{spec:p,children:(0,I.jsx)(la,{showMetadata:t,usePlayContextItem:S})})]})}),(0,I.jsx)(f.k,{copyrights:[]})]})},Aa=i.memo(Da);var Ea=a(61873);const Ra=({reason:e})=>{const t=(0,Bt.W6)(Ot.AL),a=function(e){switch(e){case"OTP":return l.ag.get("podcasts.subscriber-indicator.otp");case"SUBSCRIPTION":return l.ag.get("podcasts.subscriber-indicator.subscription");default:return""}}(e);return t&&a?(0,I.jsx)(m.D,{className:Sa,children:a}):null};const Ua=({metadata:e,backgroundColor:t})=>{const{uri:a,coverArt:i,name:s,podcastType:o,publisherName:n,gatedContentAccessReason:r}=e,{isXSOnly:c,isSMOnly:d}=(0,Ea.e)(),u=c||d;return(0,I.jsxs)(Ie.gF,{backgroundColor:t,children:[(0,I.jsx)(De.W,{children:(0,I.jsx)(Ae.i,{text:s,dragUri:a,dragLabel:s})}),(0,I.jsx)("div",{className:ka,children:(0,I.jsx)(Gt._,{menu:(0,I.jsx)(Rt.M,{uri:a}),children:(0,I.jsx)(Ie.Oe,{loading:"eager",name:s,images:i,placeholderType:"show",shape:Ie.Kc.ROUNDED_CORNERS})})}),(0,I.jsxs)(Ie.sP,{children:[(0,I.jsxs)(m.D,{variant:"mestoBold",children:["SHOW"===o?l.ag.get("type.show"):l.ag.get("type.podcast"),r&&(0,I.jsx)(Ra,{reason:r})]}),(0,I.jsx)(Gt._,{menu:(0,I.jsx)(Rt.M,{uri:a}),children:(0,I.jsx)(Ie.xd,{dragUri:a,dragLabel:s,children:(0,I.jsx)("span",{"data-testid":"show-title",children:s})})}),(0,I.jsx)(m.D,{variant:u?"cello":"canon",children:n})]})]})};var Fa=a(6545),Ba=a(49524);const Oa=({metadata:e,showId:t})=>{const{coverArt:a,name:r,uri:l}=e,{spec:d}=(0,ae.fU)(n.createDesktopPodcastEventFactory,{data:{uri:l}}),u=(0,i.useMemo)((()=>d.actionBarFactory()),[d]),g=(0,k.Z)(a[0]?.url||null),{ref:m,breakpoint:p}=(0,Q.Db)({[Q.Uo.MEDIUM]:600,[Q.Uo.LARGE]:1024}),h=(0,s.v9)(Fa.vT),x=(0,Et.l3)(h,t),y=(0,o.TH)(),b=(0,It.vI)(At.k.VideoPodcastShowTitleTag,y),j=x||b;return(0,I.jsxs)("section",{ref:m,className:ha,children:[(0,I.jsx)(c.$,{children:(0,te.Od)({showOrAudiobookName:r,type:"Podcast",isVideoPodcastShowTitleTagEnabled:j})}),(0,I.jsx)(Ua,{metadata:e,backgroundColor:g}),(0,I.jsx)(Ft,{uri:l,name:r,backgroundColor:g,spec:u}),(0,I.jsx)(Aa,{breakpoint:p,metadata:e,showId:t,spec:d})]})},Ta=(0,i.memo)((function(){const{showId:e=""}=(0,o.UO)(),t=`spotify:show:${e}`,{data:a,error:s}=(0,Dt.l)(t);return!a||s?(0,I.jsx)(d.h,{hasError:!!s,errorMessage:l.ag.get("error.not_found.title.page")}):(0,Fe.l6)(a)?(0,I.jsx)(i.Suspense,{fallback:null,children:(0,I.jsx)(Ba.C,{pageId:r.Wg.PODCAST_SHOW_AUDIOBOOK,uri:t,children:(0,I.jsx)(Nt,{metadata:a})})}):(0,I.jsx)(i.Suspense,{fallback:null,children:(0,I.jsx)(Ba.C,{pageId:r.Wg.PODCAST,uri:t,children:(0,I.jsx)(Vt,{uri:a.uri,children:(0,I.jsx)(sa,{uri:a.uri,defaultSortParam:ta(a.consumptionOrder),children:(0,I.jsx)(Oa,{showId:e,metadata:a})})})})})}))},61873:(e,t,a)=>{a.d(t,{e:()=>m});var i=a(80701);const s="(min-width: 0px)",o="(min-width: 0px) and (max-width: 767px)",n="(min-width: 768px)",r="(min-width: 768px) and (max-width: 1023px)",l="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",d="(min-width: 1280px)",u="(min-width: 1280px) and (max-width: 1919px)",g="(min-width: 1920px)",m=()=>({isXS:(0,i.a)(s),isXSOnly:(0,i.a)(o),isSM:(0,i.a)(n),isSMOnly:(0,i.a)(r),isMD:(0,i.a)(l),isMDOnly:(0,i.a)(c),isLG:(0,i.a)(d),isLGOnly:(0,i.a)(u),isXL:(0,i.a)(g)})},93362:(e,t,a)=>{a.d(t,{k:()=>n});var i=a(65748);const s="rTMkDBDp47Eo12ZEQv4U";var o=a(4637);const n=({copyrights:e,courtesyLine:t})=>{const a=(e||[]).map(((e,t)=>{const a=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let s;return s="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,(0,o.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:`${s} ${a}`},t)}));return t&&a.unshift((0,o.jsx)(i.D,{as:"p",variant:"finale",dir:"auto",children:t},a.length)),(0,o.jsx)("div",{className:s,children:a})}}}]);
//# sourceMappingURL=xpui-routes-show.js.map