(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{458:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return M});n(42),n(484),n(31),n(79),n(567),n(478);var a=n(0),r=n.n(a),i=n(1),c=n.n(i),l=n(21),s=n(569),o=n.n(s),u=n(570),m=n.n(u),d=n(70),p=n.n(d),g=n(14),E=n(78),f=n(509),y=n.n(f),x=n(153),h=n(471),v=n.n(h),b=n(538),w=n.n(b),j=n(535),k=n.n(j),O=n(536),P=n.n(O),T=n(541),B=n.n(T),D=n(491),F=n.n(D),q=n(542),C=n.n(q),I=n(532),J=n.n(I),N=n(57),S=n.n(N),A=function(e){var t=e.classes,n=e.i18nPlugin,a=e.specs,i=n.t;return a.map(function(e,n){var a=e.node,c=a.context,s=a.path,o=c.spec,u=c.variation,m=c.simcBuildTimestamp,d=new Date(1e3*m);return r.a.createElement(F.a,{item:!0,key:n,xs:12},n>0&&r.a.createElement(v.a,null),r.a.createElement(J.a,{button:!0,component:l.Link,to:s,className:t.name},r.a.createElement(S.a,null,Object(E.d)(i,o,u),r.a.createElement("span",null,r.a.createElement(x.DateFormat,{value:d,format:{month:"short",day:"2-digit"}})))))})},H=function(e){var t=e.classes,n=e.groupedEdgesByTier,a=e.i18nPlugin.t;return Object.keys(n).map(function(i,c){var l=n[i].sort(function(e,t){return e.node.context.spec>t.node.context.spec});return r.a.createElement(F.a,{item:!0,key:c,xs:12,sm:6},r.a.createElement(k.a,{defaultExpanded:!0,elevation:2},r.a.createElement(v.a,null),r.a.createElement(P.a,{expandIcon:r.a.createElement(w.a,null)},r.a.createElement("h3",{style:{margin:0}},a(i))),r.a.createElement(B.a,{className:t.type},r.a.createElement(F.a,{container:!0,direction:"column"},r.a.createElement(C.a,{component:"nav",disablePadding:!0},r.a.createElement(A,Object.assign({},e,{specs:l})))))))})},L=function(e){var t=e.data,n=e.i18nPlugin,a=t.allSitePage.group,i=n.t,c=a[0].edges[0].node.context.wowClass,l=p()(i(c));return r.a.createElement("div",null,r.a.createElement(y.a,{title:l+" | "+t.site.siteMetadata.title}),r.a.createElement("h1",null,l),r.a.createElement("p",null,r.a.createElement(x.Trans,{id:"Here you can retrieve all the simulations we run. You will find more details about what they represents in their respective pages. They are updated on a daily basis."})),r.a.createElement(F.a,{container:!0,spacing:16},a.sort(function(e,t){return e.edges[0].node.context.simulationFeaturedOrder-t.edges[0].node.context.simulationFeaturedOrder}).map(function(t,n){var a=t.edges[0].node.context.simulationCategory;return r.a.createElement(F.a,{item:!0,key:n,xs:12,lg:6},r.a.createElement("h2",{style:{textAlign:"center"}},o()(i(a))),r.a.createElement(F.a,{container:!0,spacing:8,alignItems:"flex-start",justify:"center"},r.a.createElement(H,Object.assign({},e,{groupedEdgesByTier:m()(t.edges,function(e){return e.node.context.tier})}))))})))};L.propTypes={classes:c.a.object,data:c.a.object.isRequired,i18nPlugin:c.a.object},t.default=Object(g.withStyles)(function(e){return{type:{flexDirection:"column"},name:{padding:e.spacing.unit,"& p":{width:"100%","& span":{float:"right"}}}}})(L);var M="1998429464"}}]);