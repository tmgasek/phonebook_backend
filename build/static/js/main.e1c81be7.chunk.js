(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(15),a=t.n(r),u=t(6),o=t(3),i=t(4),s=t.n(i),d="https://murmuring-refuge-85517.herokuapp.com/api/persons",l={getAll:function(){return s.a.get(d).then((function(e){return e.data}))},create:function(e){return s.a.post(d,e).then((function(e){return e.data}))},remove:function(e){s.a.delete("".concat(d,"/").concat(e))},update:function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))}},b=t(0),j=function(e){var n=e.message,t=e.className;return null===n?null:Object(b.jsx)("div",{className:t,children:n})},f=function(e){return Object(b.jsxs)("div",{children:["search names:"," ",Object(b.jsx)("input",{value:e.newFilter,onChange:e.handleFilterChange})]})},h=function(e){return Object(b.jsxs)("form",{onSubmit:e.addPerson,children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(b.jsxs)("div",{children:["number:"," ",Object(b.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var n=e.person,t=e.deletePerson;return Object(b.jsxs)("li",{children:[n.name," ",n.number,Object(b.jsx)("button",{onClick:t,children:"delete"})]})},O=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),s=i[0],d=i[1],O=Object(c.useState)(""),v=Object(o.a)(O,2),p=v[0],x=v[1],g=Object(c.useState)(""),w=Object(o.a)(g,2),C=w[0],N=w[1],k=Object(c.useState)(null),y=Object(o.a)(k,2),S=y[0],P=y[1],F=Object(c.useState)(""),A=Object(o.a)(F,2),E=A[0],J=A[1];Object(c.useEffect)((function(){l.getAll().then((function(e){r(e)}))}),[]);var L=function(e){setTimeout((function(){P(null)}),e)},B=function(){d(""),x("")},D=function(){return t.find((function(e){return e.name===s}))},I=function(e){return window.alert(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{newFilter:C,handleFilterChange:function(e){N(e.target.value)}}),Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(j,{message:S,className:E}),Object(b.jsx)(h,{addPerson:function(e){e.preventDefault();var n={name:s,number:p};if(D()){if(window.confirm("".concat(n.name," already exists in phonebook. do you want to update ").concat(n.name,"'s number?"))){var c=D().id,a=Object(u.a)(Object(u.a)({},n),{},{number:p});return l.update(c,a).then((function(e){r(t.map((function(n){return n.id!==c?n:e})))})).catch((function(e){P("".concat(a.name," was already removed from the server")),J("error"),L(3e3),r(t.filter((function(e){return e.id!==c})))})),void B()}return I("".concat(s," already exists in phonebook.")),void B()}l.create(n).then((function(e){r(t.concat(e)),B(),P("".concat(e.name," has been added.")),J("success"),L(3e3)}))},newName:s,handleNameChange:function(e){d(e.target.value)},newNumber:p,handleNumberChange:function(e){x(e.target.value)}}),Object(b.jsx)("br",{}),(C?t.filter((function(e){return e.name.toLowerCase().includes(C.toLowerCase())})):t).map((function(e,n){return Object(b.jsx)(m,{person:e,deletePerson:function(){return n=e.id,l.remove(n),r(t.filter((function(e){return e.id!==n}))),P("entry removed"),void J("success");var n}},n)}))]})};t(39);a.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e1c81be7.chunk.js.map