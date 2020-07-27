(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{127:function(e,n,t){e.exports=t(424)},131:function(e,n,t){},424:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),u=t(15),c=t.n(u),o=(t(131),t(70)),l=t(26),i=t(31),m=t.n(i),s="/api/persons",d=function(){return m.a.get(s).then((function(e){return e.data}))},f=function(e){return m.a.post(s,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},E=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange}),r.a.createElement("br",null),"Number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add")))},g=function(e){return r.a.createElement("li",{key:e.person.id}," ",e.person.name," ",e.person.number,r.a.createElement("button",{value:e.person.id,onClick:e.handleDeleteRequest},"delete"))},p=function(e){return r.a.createElement(r.a.Fragment,null,e.persons.filter((function(n){return n.name.toLowerCase().includes(e.newSearch.toLowerCase())})).map((function(n,t){return r.a.createElement(g,{key:t,person:n,handleDeleteRequest:function(){return e.handleDeleteRequest(n.id)}})})))},w=function(e){return r.a.createElement(r.a.Fragment,null,"Search ",r.a.createElement("input",{value:e.newSearch,onChange:e.handleSearch}))},v=function(e){return null!=e.message?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message"},e.message)):null!=e.errorMessage?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"error"},e.errorMessage)):r.a.createElement(r.a.Fragment,null)},N=(t(148),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],s=i[1],g=Object(a.useState)(""),N=Object(l.a)(g,2),j=N[0],O=N[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),C=y[0],k=y[1],D=Object(a.useState)(null),F=Object(l.a)(D,2),R=F[0],q=F[1],M=Object(a.useState)(null),T=Object(l.a)(M,2),I=T[0],A=T[1];Object(a.useEffect)((function(){d().then((function(e){u(e)})),console.log(t)}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:R,errorMessage:I}),r.a.createElement(w,{newSearch:C,handleSearch:function(e){k(e.target.value)}}),r.a.createElement(E,{addName:function(e){e.preventDefault();var n={name:m,number:j};console.log(n);t.some((function(e){return e.name===m}))?window.confirm("".concat(m," is already added, replace the old number with new one? "))&&function(e){var n=t.find((function(n){return n.id===e})),a=Object(o.a)(Object(o.a)({},n),{},{number:j});h(e,a).then((function(a){u(t.map((function(n){return n.id!==e?n:a}))),s(""),O(""),q("Number of ".concat(n.name," was updated")),setTimeout((function(){q(null)}),5e3)})).catch((function(e){A("".concat(n.name," was already removed from server, Update wasn't sucessful")),setTimeout((function(){A(null)}),5e3)}))}(t.find((function(e){return e.name===m})).id):f(n).then((function(e){console.log("here:",e),console.log("FIREEEE 222"),u(t.concat(e)),s(""),O("")}))},newName:m,newNumber:j,handleNameChange:function(e){console.log(e.target.value),s(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,r.a.createElement(p,{newSearch:C,persons:t,handleDeleteRequest:function(e){window.confirm("Are you sure you want to delete entry ID: "+e)&&(console.log(t),b(e).then((function(){u(t.filter((function(n){return n.id!==e}))),s(""),O(""),q("Deletion was sucessfully"),setTimeout((function(){q(null)}),5e3)})).catch((function(n){A("Record with ".concat(e," was already removed from server ")),setTimeout((function(){A(null)}),5e3)})))}})))});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.5ddb3d73.chunk.js.map