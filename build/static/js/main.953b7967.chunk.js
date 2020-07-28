(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{127:function(e,n,t){e.exports=t(424)},131:function(e,n,t){},424:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),u=t(15),c=t.n(u),l=(t(131),t(70)),o=t(26),i=t(31),m=t.n(i),s="/api/persons",d=function(){return m.a.get(s).then((function(e){return e.data}))},f=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},g=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),r.a.createElement("br",null),"Number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add")))},E=function(e){return r.a.createElement("li",{key:e.person.id}," ",e.person.name," ",e.person.number,r.a.createElement("button",{value:e.person.id,onClick:e.handleDeleteRequest},"delete"))},p=function(e){return r.a.createElement(r.a.Fragment,null,e.persons.filter((function(n){return n.name.toLowerCase().includes(e.newSearch.toLowerCase())})).map((function(n,t){return r.a.createElement(E,{key:t,person:n,handleDeleteRequest:function(){return e.handleDeleteRequest(n.id)}})})))},w=function(e){return r.a.createElement(r.a.Fragment,null,"Search ",r.a.createElement("input",{value:e.newSearch,onChange:e.handleSearch}))},v=function(e){return null!=e.message?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message"},e.message)):null!=e.errorMessage?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error"},e.errorMessage)):r.a.createElement(r.a.Fragment,null)},N=(t(148),function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),m=i[0],s=i[1],E=Object(a.useState)(""),N=Object(o.a)(E,2),j=N[0],O=N[1],S=Object(a.useState)(""),y=Object(o.a)(S,2),C=y[0],k=y[1],D=Object(a.useState)(null),F=Object(o.a)(D,2),R=F[0],T=F[1],q=Object(a.useState)(null),M=Object(o.a)(q,2),A=M[0],I=M[1];Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:R,errorMessage:A}),r.a.createElement(w,{newSearch:C,handleSearch:function(e){k(e.target.value)}}),r.a.createElement(g,{addName:function(e){e.preventDefault(),console.log("Click");var n={name:m,number:j};t.some((function(e){return e.name===m}))?window.confirm("".concat(m," is already added, replace the old number with new one? "))&&function(e){var n=t.find((function(n){return n.id===e})),a=Object(l.a)(Object(l.a)({},n),{},{number:j});h(e,a).then((function(a){u(t.map((function(n){return n.id!==e?n:a}))),s(""),O(""),T("Number of ".concat(n.name," was updated")),setTimeout((function(){T(null)}),5e3)})).catch((function(e){I("".concat(n.name," was already removed from server, Update wasn't sucessful")),setTimeout((function(){I(null)}),5e3)}))}(t.find((function(e){return e.name===m})).id):f(n).then((function(e){console.log(e),u(t.concat(e)),s(""),O(""),T("".concat(e.name," with number ").concat(e.number," was added sucessfully")),setTimeout((function(){T(null)}),5e3)}))},newName:m,newNumber:j,handleNameChange:function(e){console.log(e.target.value),s(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,r.a.createElement(p,{newSearch:C,persons:t,handleDeleteRequest:function(e){window.confirm("Are you sure you want to delete entry ID: "+e)&&(console.log(t),b(e).then((function(){u(t.filter((function(n){return n.id!==e}))),s(""),O(""),T("Deletion was sucessfully"),setTimeout((function(){T(null)}),5e3)})).catch((function(n){I("Record with ".concat(e," was already removed from server ")),setTimeout((function(){I(null)}),5e3)})))}})))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.953b7967.chunk.js.map