(this["webpackJsonpphone-book"]=this["webpackJsonpphone-book"]||[]).push([[0],{24:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(1),i=t(16),l=t.n(i),s=(t(33),t(34),t(24),t(35),t(36),t(37),t(4)),r=t(5),o=t(12),A=t.p+"static/media/cross.5c87db09.png",d=t.p+"static/media/checkmark.1f28dae5.png",u=t(2),b=t(6),m=t.n(b),j=t(10),g=function(e){return function(){var c=Object(j.a)(m.a.mark((function c(t,n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({type:"SETCONTACTS",payload:e});case 2:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},O=function(e){return function(){var c=Object(j.a)(m.a.mark((function c(t,n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({type:"SETADD",payload:e});case 2:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},h=function(){var e=Object(u.b)(),c=Object(u.c)((function(e){return e.contactsReducer})),t=Object(u.c)((function(e){return e.loginReducer})),a=Object(u.c)((function(e){return e.addReducer})),i=function(){e(O({name:null,number:null,email:null,display:null}))};return Object(n.jsxs)("header",{className:"p-4 bg-white row edit-header",children:[Object(n.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(n.jsx)(s.b,{to:"/contacts",children:Object(n.jsx)("img",{id:"cross",src:A,alt:""})})}),Object(n.jsx)("div",{className:"d-flex justify-content-center col-8",children:Object(n.jsx)("h2",{children:"Add contact"})}),Object(n.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(n.jsx)(s.b,{to:"/contacts",children:Object(n.jsx)("img",{id:"checkmark",src:d,alt:"",onClick:function(){var n=Object(o.a)(c),l=a;n[t.activeAccount].push(l),e(g(n)),i()}})})})]})},x=t.p+"static/media/name.26d0fa0a.png",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTA5VDE4OjM0OjQxKzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0wOVQxODozNTo0MyswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0wOVQxODozNTo0MyswMzozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmNDhjYjkzZi0wOTlhLTk0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",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFEGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTA5VDE4OjQwKzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0wOVQxODo0MDo1MiswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0wOVQxODo0MDo1MiswMzozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0M2I1MzdkYy00ZDFmLTE3NGYt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",w=function(){var e=Object(u.b)(),c=Object(u.c)((function(e){return e.addReducer})),t=function(t){"name"===t.target.id&&e(O({name:t.target.value,number:c.number,email:c.email,display:"block"})),"number"===t.target.id&&e(O({name:c.name,number:t.target.value,email:c.email,display:"block"})),"email"===t.target.id&&e(O({number:c.number,name:c.name,email:t.target.value,display:"block"}))};return Object(n.jsx)("main",{className:"container-fluid pt-5 edit-main",children:Object(n.jsxs)("form",{id:"edit-form",action:"",children:[Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{className:"col-2 d-flex justify-content-end icon-label",for:"name",children:Object(n.jsx)("img",{className:"icon",src:x,alt:""})}),Object(n.jsx)("label",{className:"col-2 text",for:"name",children:"Name"}),Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("input",{id:"name",className:"text",type:"text",onChange:t})})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{className:"col-2 d-flex justify-content-end icon-label",for:"mobile",children:Object(n.jsx)("img",{className:"icon",src:p,alt:""})}),Object(n.jsx)("label",{className:"col-2 text",for:"mobile",children:"Mobile"}),Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("input",{id:"number",className:"text",type:"text",onChange:t})})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{className:"col-2 d-flex justify-content-end icon-label",for:"home",children:Object(n.jsx)("img",{className:"icon",src:v,alt:""})}),Object(n.jsx)("label",{className:"col-2 text",for:"home",children:"Home"}),Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("input",{id:"email",className:"text",type:"text",onChange:t})})]}),Object(n.jsx)("hr",{})]})})},f=t.p+"static/media/left direction arrow.deb10a44.png",I=function(){return Object(n.jsx)("footer",{className:"fixed-bottom d-flex justify-content-center p-2 bg-white edit-footer",children:Object(n.jsx)(s.b,{to:"/contacts",children:Object(n.jsx)("img",{id:"arrow",src:f,alt:""})})})},N=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(h,{name:null,number:null,email:null}),Object(n.jsx)(w,{name:null,number:null,email:null}),Object(n.jsx)(I,{})]})},M=t.p+"static/media/edit.089e5b65.png",C=function(){var e=Object(u.c)((function(e){return e.contactReducer})),c=Object(u.c)((function(e){return e.contactsReducer}))[Object(u.c)((function(e){return e.loginReducer})).activeAccount][e.index],t=Object(u.b)();return Object(n.jsxs)("div",{children:[Object(n.jsx)("header",{className:function(){var c="contact-header";return c+=function(){switch(e.color){case 1:return" contact-header-blue";case 2:return" contact-header-carbon";case 3:return" contact-header-orange";case 4:return" contact-header-yaghuti";case 5:return" contact-header-green";case 6:return" contact-header-sabz";case 7:return" contact-header-violet";default:return" contact-header-green"}}()}(),children:Object(n.jsx)("h1",{children:c.name})}),Object(n.jsxs)("main",{className:"container-fluid pt-5 contact-main",children:[Object(n.jsxs)("div",{id:"contact-form",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2 d-flex justify-content-end",children:Object(n.jsx)("img",{id:"phone",src:p,alt:""})}),Object(n.jsxs)("div",{className:"column col-10",children:[Object(n.jsx)("div",{id:"number",children:c.number}),Object(n.jsx)("div",{id:"mobile",children:"Mobile"})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2 d-flex justify-content-end",children:Object(n.jsx)("img",{id:"mail",src:v,alt:""})}),Object(n.jsxs)("div",{className:"column col-10",children:[Object(n.jsx)("div",{id:"email",children:c.email}),Object(n.jsx)("div",{id:"home",children:"Home"})]})]}),Object(n.jsx)("hr",{})]}),Object(n.jsx)(s.b,{className:"d-block",to:"/edit",onClick:function(){var e;t((e={name:c.name,number:c.number,email:c.email},function(){var c=Object(j.a)(m.a.mark((function c(t,n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({type:"SETEDIT",payload:e});case 2:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()))},children:Object(n.jsx)("div",{id:"contact-add",className:"d-flex justify-content-center fixed-bottom",children:Object(n.jsxs)("div",{id:"contact-add-box",className:"d-flex flex-column align-items-center col-3 bg-white",children:[Object(n.jsx)("img",{className:"mt-1",src:M,alt:""}),Object(n.jsx)("div",{children:"Edit"})]})})})]}),Object(n.jsx)("footer",{className:"fixed-bottom d-flex justify-content-center p-2 bg-white contact-footer",children:Object(n.jsx)(s.b,{to:"/contacts",children:Object(n.jsx)("img",{id:"arrow",src:f,alt:""})})})]})},B=function(){return Object(n.jsx)("footer",{className:"fixed-bottom d-flex justify-content-center p-2 bg-white contacts-footer",children:Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)("img",{id:"arrow",src:f,alt:""})})})},D=function(){return Object(n.jsx)("header",{className:"fixed-top d-flex justify-content-center p-4 bg-white contacts-header",children:Object(n.jsx)("h2",{children:"Contacts"})})},R=t.p+"static/media/plus.1f7f5bba.png",y=function(){return Object(n.jsx)("div",{id:"contacts-add",className:"d-flex justify-content-center fixed-bottom",children:Object(n.jsxs)("div",{id:"contacts-add-box",className:"d-flex flex-column align-items-center col-3 bg-white",children:[Object(n.jsx)(s.b,{to:"/add",children:Object(n.jsx)("img",{src:R,alt:""})}),Object(n.jsx)("div",{children:"New contact"})]})})},T=function(){var e=Object(u.c)((function(e){return e.contactsReducer})),c=Object(u.b)();return Object(n.jsx)("form",{id:"search-box-form",className:"d-flex justify-content-center fixed-top form-inline",action:"",children:Object(n.jsx)("input",{id:"search-box",className:"mb-4 col-11 bg-light form-control ",type:"text",placeholder:"Search through contacts",onChange:function(t){for(var n=0;n<e.length;n++){var a=e[n].name;a.indexOf(t.target.value)>-1?(e[n].display="block",console.log(a+" "+t.target.value+" "+e[n].display)):e[n].display="none";var i=Object(o.a)(e);c(g(i))}}})})},Z=t.p+"static/media/contact blue.fedf79a1.png",z=t.p+"static/media/contact carbon.eadac697.png",G=t.p+"static/media/contact orange.9c46f970.png",L=t.p+"static/media/contact yaghuti.9da4c833.png",E=t.p+"static/media/contact green.9b52067c.png",k=t.p+"static/media/contact sabze sir.6bcbb157.png",S=t.p+"static/media/contact violet.dc4dfccc.png",Q=function(e){return function(){var c=Object(j.a)(m.a.mark((function c(t,n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({type:"SETNAVIGATION",payload:e});case 2:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},Y=function(e){var c,t=Object(u.b)(),a=e.name,i=e.number,l=e.email,r=e.index;return Object(n.jsx)("div",{className:"contact",onClick:function(){var e;t((e={name:a,number:i,email:l,color:c,index:r},function(){var c=Object(j.a)(m.a.mark((function c(t,n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({type:"SETCONTACT",payload:e});case 2:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}())),t(Q({pageToPage:"contactstocontact"}))},children:Object(n.jsxs)(s.b,{className:"d-block contact-row",to:"/contact",children:[Object(n.jsx)("img",{className:"icon",src:function(){switch(c=e.index%7+1){case 1:return Z;case 2:return z;case 3:return G;case 4:return L;case 5:return E;case 6:return k;case 7:return S;default:return}}(),alt:""}),Object(n.jsx)("span",{children:e.name}),Object(n.jsx)("hr",{})]})})},F=function(){var e=Object(u.c)((function(e){return e.contactsReducer})),c=Object(u.c)((function(e){return e.loginReducer}));return Object(n.jsx)("div",{id:"contacts",className:"ml-3",children:e[c.activeAccount].map((function(e,c){return"block"===e.display?Object(n.jsx)(Y,{index:c,name:e.name,number:e.number,email:e.email},c):null}))})},H=function(){return Object(n.jsxs)("main",{className:"container-fluid pt-5 contacts-main",children:[Object(n.jsx)(T,{}),Object(n.jsx)(F,{}),Object(n.jsx)(y,{}),Object(n.jsx)("div",{className:"p-3"})]})},P=function(){var e=Object(u.c)((function(e){return e.navigationReducer})),c=Object(u.b)();return Object(a.useEffect)((function(){c(Q({pageToPage:e.pageToPage,path:"/"}))})),Object(n.jsxs)("div",{children:[Object(n.jsx)(D,{}),Object(n.jsx)(H,{}),Object(n.jsx)(B,{})]})},U=function(){var e=Object(u.b)(),c=Object(u.c)((function(e){return e.contactsReducer})),t=Object(u.c)((function(e){return e.contactReducer})),a=Object(u.c)((function(e){return e.loginReducer})),i=c[a.activeAccount][t.index],l=Object(o.a)(c),r=i,b=function(e){"name"===e.target.id&&(r={name:e.target.value,number:i.number,email:i.email,display:"block"}),"mobile"===e.target.id&&(r={name:i.name,number:e.target.value,email:i.email,display:"block"}),"home"===e.target.id&&(r={name:i.name,number:i.number,email:e.target.value,display:"block"})},m=function(){e(g(l))};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("header",{className:"p-4 bg-white row edit-header",children:[Object(n.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(n.jsx)(s.b,{to:"/contact",children:Object(n.jsx)("img",{id:"cross",src:A,alt:"",onClick:m})})}),Object(n.jsx)("div",{className:"d-flex justify-content-center col-8",children:Object(n.jsx)("h2",{children:"Edit contact"})}),Object(n.jsx)("div",{className:"col-2 d-flex justify-content-center",children:Object(n.jsx)(s.b,{to:"/contact",children:Object(n.jsx)("img",{id:"checkmark",src:d,alt:"",onClick:function(){var n=Object(o.a)(c);n[a.activeAccount][t.index]=r,e(g(n))}})})})]}),Object(n.jsxs)("main",{className:"container-fluid pt-5 edit-main",children:[Object(n.jsxs)("form",{id:"edit-form",action:"",children:[Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{className:"col-2 d-flex justify-content-end icon-label",for:"name",children:Object(n.jsx)("img",{className:"icon",src:x,alt:""})}),Object(n.jsx)("label",{className:"col-2 text",for:"name",children:"Name"}),Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("input",{id:"name",className:"text",type:"text",placeholder:i.name,onChange:b})})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{className:"col-2 d-flex justify-content-end icon-label",for:"mobile",children:Object(n.jsx)("img",{className:"icon",src:p,alt:""})}),Object(n.jsx)("label",{className:"col-2 text",for:"mobile",children:"Mobile"}),Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("input",{id:"mobile",className:"text",type:"text",placeholder:i.number,onChange:b})})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group row",children:[Object(n.jsx)("label",{className:"col-2 d-flex justify-content-end icon-label",for:"home",children:Object(n.jsx)("img",{className:"icon",src:v,alt:""})}),Object(n.jsx)("label",{className:"col-2 text",for:"home",children:"Home"}),Object(n.jsx)("div",{className:"col-8",children:Object(n.jsx)("input",{id:"home",className:"text",type:"text",placeholder:i.email,onChange:b})})]}),Object(n.jsx)("hr",{})]}),Object(n.jsx)(s.b,{className:"d-block",to:"/contacts",onClick:function(){l[a.activeAccount].splice(t.index,1),e(g(l))},children:Object(n.jsx)("div",{id:"edit-delete",className:"d-flex justify-content-center fixed-bottom",children:Object(n.jsxs)("div",{id:"edit-delete-box",className:"d-flex flex-column align-items-center col-3 bg-white",children:[Object(n.jsx)("img",{className:"mt-1",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTE2VDIxOjA4OjU0KzAzOjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0xNlQyMToyMDo1NCswMzozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0xMS0xNlQyMToyMDo1NCswMzozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NmIwZGE2OS0yMDI2LWZl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",alt:""}),Object(n.jsx)("div",{children:"Delete"})]})})})]}),Object(n.jsx)("footer",{className:"fixed-bottom d-flex justify-content-center p-2 bg-white edit-footer",children:Object(n.jsx)(s.b,{to:"/contact",children:Object(n.jsx)("img",{id:"arrow",src:f,alt:"",onClick:m})})})]})},W=function(){return Object(n.jsx)("footer",{className:"fixed-bottom d-flex justify-content-center p-2 bg-white login-footer",children:Object(n.jsx)("img",{id:"arrow",src:f,alt:""})})},J=function(){return Object(n.jsx)("header",{className:"p-4 bg-white login-header",children:Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("h2",{children:"Login"})})})},V=function(e){return function(){var c=Object(j.a)(m.a.mark((function c(t,n){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t({type:"SETLOGIN",payload:e});case 2:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},X=function(){var e=Object(u.c)((function(e){return e.navigationReducer})),c=Object(u.b)(),t=Object(u.c)((function(e){return e.loginReducer}));return Object(n.jsxs)("div",{id:"button",className:"col-3 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button mr-5",onClick:function(){var n;n=t.accounts.findIndex((function(e){return e.username===t.loginInput.username&&e.password===t.loginInput.password})),c(V({activeAccount:n,loginInput:t.loginInput,accounts:t.accounts})),console.log(t.loginInput.username),console.log(t.loginInput.password),console.log(n),-1===n&&c(Q({path:"",pageToPage:e.pageToPage})),-1!==n&&c(Q({path:"/contacts",pageToPage:e.pageToPage}))},children:[Object(n.jsx)("div",{children:"Sign in"}),Object(n.jsx)(r.a,{to:e.path})]})},K=function(){var e=Object(u.c)((function(e){return e.loginReducer})),c=Object(u.c)((function(e){return e.contactsReducer})),t=Object(u.c)((function(e){return e.navigationReducer})),a=Object(u.b)(),i=e.activeAccount;return Object(n.jsxs)("div",{id:"button",className:"col-3 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button ml-5",onClick:function(){if(-1===(i=e.accounts.findIndex((function(c){return c.username===e.loginInput.username})))){c.push([]),a(g(c)),e.accounts.push({username:e.loginInput.username,password:e.loginInput.password});var n=e.accounts.length-1;a(V({loginInput:{password:null,username:null},accounts:e.accounts,activeAccount:n})),a(Q({path:"/contacts",pageToPage:t.pageToPage}))}-1!==i&&a(Q({path:"",pageToPage:t.pageToPage}))},children:[Object(n.jsx)("div",{children:"Sign up"}),Object(n.jsx)(r.a,{to:t.path})]})},q=function(e){var c=Object(u.c)((function(e){return e.loginReducer})),t=Object(u.b)(),a=c.activeAccount;return Object(n.jsx)("input",{id:e.id,className:"border border-dark m-3 p-2 w-100",type:e.type,placeholder:e.placeholder,onChange:function(n){"username"===e.id&&t(V({loginInput:{username:n.target.value,password:c.loginInput.password},accounts:c.accounts,activeAccount:a})),"password"===e.id&&t(V({loginInput:{username:c.loginInput.username,password:n.target.value},accounts:c.accounts,activeAccount:a}))}})},_=function(){return Object(n.jsx)("main",{className:"container-fluid pt-5 d-flex justify-content-center login-main",children:Object(n.jsxs)("form",{id:"login-form",className:"col-8",action:"",children:[Object(n.jsx)(q,{id:"username",placeholder:"username",type:"text"}),Object(n.jsx)(q,{id:"password",placeholder:"password",type:"password"}),Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsx)(X,{}),Object(n.jsx)(K,{})]})]})})},$=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(J,{}),Object(n.jsx)(_,{}),Object(n.jsx)(W,{})]})},ee=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)(r.d,{children:[Object(n.jsx)(r.b,{path:"/",component:$,exact:!0}),Object(n.jsx)(r.b,{path:"/contacts",component:P}),Object(n.jsx)(r.b,{path:"/contact",component:C}),Object(n.jsx)(r.b,{path:"/edit",component:U}),Object(n.jsx)(r.b,{path:"/add",component:N})]})})},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,i=c.getLCP,l=c.getTTFB;t(e),n(e),a(e),i(e),l(e)}))},te=t(11),ne=t(27),ae=Object(te.c)({contactsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[{name:"Ali",number:"09123939100",email:"Ali@gmail.com",display:"block"},{name:"Behnam",number:"09123939100",email:"Ali@gmail.com",display:"block"},{name:"Davood",number:"09123939100",email:"Ali@gmail.com",display:"block"},{name:"Ehsan",number:"09123939100",email:"Ali@gmail.com",display:"block"},{name:"Farhad",number:"09123939100",email:"Ali@gmail.com",display:"block"},{name:"Hamid",number:"09123939100",email:"Ali@gmail.com",display:"block"},{name:"Iman",number:"09123939100",email:"Ali@gmail.com",display:"block"}],[{name:"Ali",number:"09123939100",email:"Ali@gmail.com",display:"block"}]],c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SETCONTACTS":return c.payload;default:return e}},contactReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:null,number:null,email:null,color:null,index:null},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SETCONTACT":return c.payload;default:return e}},editReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:null,number:null,email:null,changeApproved:null},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SETEDIT":return c.payload;default:return e}},loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loginInput:{username:null,password:null},accounts:[{username:"ali",password:"123"},{username:"reza",password:"1234"}],activeAccount:-1},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SETLOGIN":return c.payload;default:return e}},navigationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pageToPage:"edittocontact",path:""},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SETNAVIGATION":return c.payload;default:return e}},addReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:null,number:null,email:null,display:"block"},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SETADD":return c.payload;default:return e}}}),ie=Object(te.e)(ae,Object(te.d)(Object(te.a)(ne.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));ie.subscribe((function(){return console.log(ie.getState())})),l.a.render(Object(n.jsx)(u.a,{store:ie,children:Object(n.jsx)(ee,{})}),document.getElementById("root")),ce()}},[[44,1,2]]]);
//# sourceMappingURL=main.23d1dcf2.chunk.js.map