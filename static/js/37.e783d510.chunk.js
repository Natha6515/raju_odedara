"use strict";(self.webpackChunkraju_odedara=self.webpackChunkraju_odedara||[]).push([[37],{6037:function(a,e,r){r.r(e),r.d(e,{default:function(){return q}});var t=r(1413),n=r(2791),s=r(9439),c=r(5987),o=r(1694),i=r.n(o),d=r(162),l=r(184),f=["as","bsPrefix","className"],u=["className"];var b=n.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,n=a.className,s=(0,c.Z)(a,f);r=(0,d.vE)(r,"col");var o=(0,d.pi)(),l=(0,d.zG)(),u=[],b=[];return o.forEach((function(a){var e,t,n,c=s[a];delete s[a],"object"===typeof c&&null!=c?(e=c.span,t=c.offset,n=c.order):e=c;var o=a!==l?"-".concat(a):"";e&&u.push(!0===e?"".concat(r).concat(o):"".concat(r).concat(o,"-").concat(e)),null!=n&&b.push("order".concat(o,"-").concat(n)),null!=t&&b.push("offset".concat(o,"-").concat(t))})),[(0,t.Z)((0,t.Z)({},s),{},{className:i().apply(void 0,[n].concat(u,b))}),{as:e,bsPrefix:r,spans:u}]}(a),n=(0,s.Z)(r,2),o=n[0],b=o.className,v=(0,c.Z)(o,u),x=n[1],m=x.as,p=void 0===m?"div":m,y=x.bsPrefix,g=x.spans;return(0,l.jsx)(p,(0,t.Z)((0,t.Z)({},v),{},{ref:e,className:i()(b,!g.length&&y)}))}));b.displayName="Col";var v=b,x=r(6543),m=r(7472),p=["bsPrefix","className","variant","as"],y=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,s=a.variant,o=a.as,f=void 0===o?"img":o,u=(0,c.Z)(a,p),b=(0,d.vE)(r,"card-img");return(0,l.jsx)(f,(0,t.Z)({ref:e,className:i()(s?"".concat(b,"-").concat(s):b,n)},u))}));y.displayName="CardImg";var g=y,Z=r(6040),h=["bsPrefix","className","as"],N=n.forwardRef((function(a,e){var r=a.bsPrefix,s=a.className,o=a.as,f=void 0===o?"div":o,u=(0,c.Z)(a,h),b=(0,d.vE)(r,"card-header"),v=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:b}}),[b]);return(0,l.jsx)(Z.Z.Provider,{value:v,children:(0,l.jsx)(f,(0,t.Z)((0,t.Z)({ref:e},u),{},{className:i()(s,b)}))})}));N.displayName="CardHeader";var j=N,P=["bsPrefix","className","bg","text","border","body","children","as"],C=(0,m.Z)("h5"),S=(0,m.Z)("h6"),k=(0,x.Z)("card-body"),T=(0,x.Z)("card-title",{Component:C}),w=(0,x.Z)("card-subtitle",{Component:S}),B=(0,x.Z)("card-link",{Component:"a"}),R=(0,x.Z)("card-text",{Component:"p"}),E=(0,x.Z)("card-footer"),z=(0,x.Z)("card-img-overlay"),F=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,s=a.bg,o=a.text,f=a.border,u=a.body,b=a.children,v=a.as,x=void 0===v?"div":v,m=(0,c.Z)(a,P),p=(0,d.vE)(r,"card");return(0,l.jsx)(x,(0,t.Z)((0,t.Z)({ref:e},m),{},{className:i()(n,p,s&&"bg-".concat(s),o&&"text-".concat(o),f&&"border-".concat(f)),children:u?(0,l.jsx)(k,{children:b}):b}))}));F.displayName="Card",F.defaultProps={body:!1};var I=Object.assign(F,{Img:g,Title:T,Subtitle:w,Body:k,Link:B,Text:R,Header:j,Footer:E,ImgOverlay:z}),V=r(5341),H=["as","bsPrefix","variant","size","active","className"],_=n.forwardRef((function(a,e){var r=a.as,n=a.bsPrefix,o=a.variant,f=a.size,u=a.active,b=a.className,v=(0,c.Z)(a,H),x=(0,d.vE)(n,"btn"),m=(0,V.FT)((0,t.Z)({tagName:r},v)),p=(0,s.Z)(m,2),y=p[0],g=p[1].tagName;return(0,l.jsx)(g,(0,t.Z)((0,t.Z)((0,t.Z)({},y),v),{},{ref:e,className:i()(b,x,u&&"active",o&&"".concat(x,"-").concat(o),f&&"".concat(x,"-").concat(f),v.href&&v.disabled&&"disabled")}))}));_.displayName="Button",_.defaultProps={variant:"primary",active:!1,disabled:!1};var D=_,L=["bsPrefix","bg","pill","text","className","as"],O=n.forwardRef((function(a,e){var r=a.bsPrefix,n=a.bg,s=a.pill,o=a.text,f=a.className,u=a.as,b=void 0===u?"span":u,v=(0,c.Z)(a,L),x=(0,d.vE)(r,"badge");return(0,l.jsx)(b,(0,t.Z)((0,t.Z)({ref:e},v),{},{className:i()(f,x,s&&"rounded-pill",o&&"text-".concat(o),n&&"bg-".concat(n))}))}));O.displayName="Badge",O.defaultProps={bg:"primary",pill:!1};var A=O,G=r(6444),M=r(6233),W={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},q=function(a){var e,r,s=(0,n.useContext)(G.Ni),c=a.project;return(0,l.jsx)(v,{children:(0,l.jsxs)(I,{style:(0,t.Z)((0,t.Z)({},W.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[(0,l.jsx)(I.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image}),(0,l.jsxs)(I.Body,{children:[(0,l.jsx)(I.Title,{style:W.cardTitleStyle,children:c.title}),(0,l.jsx)(I.Text,{style:W.cardTextStyle,children:(r=c.bodyText,(0,l.jsx)(M.D,{children:r}))})]}),(0,l.jsx)(I.Body,{children:null===c||void 0===c||null===(e=c.links)||void 0===e?void 0:e.map((function(a){return(0,l.jsx)(D,{style:W.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(a.href,"_blank")},children:a.text},a.href)}))}),c.tags&&(0,l.jsx)(I.Footer,{style:{backgroundColor:s.cardFooterBackground},children:c.tags.map((function(a){return(0,l.jsx)(A,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:W.badgeStyle,children:a},a)}))})]})})}}}]);
//# sourceMappingURL=37.e783d510.chunk.js.map