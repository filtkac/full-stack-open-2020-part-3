(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=(t(20),t(4)),i=t(2),l=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.handleSubmit,t=e.newName,a=e.handleNameInputChange,u=e.newNumber,c=e.handleNumberInputChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.persons,t=e.searchedString,a=e.handleDelete;return r.a.createElement("div",null,n.filter((function(e){return""===t||e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return a(e.id,e.name)}},"delete"))})))},d=t(3),f=t.n(d),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},p=function(e){return f.a.post(h,e).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e){return f.a.put("".concat(h,"/").concat(e.id),e).then((function(e){return e.data}))},E=function(e){var n=e.message;if(void 0===n)return null;var t="success"===n.status?"green":"red",a={backgroundColor:"gainsboro",fontSize:20,color:t,padding:20,margin:15,borderColor:t,borderWidth:2,borderStyle:"solid",borderRadius:10};return r.a.createElement("div",{style:a},n.message)},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),d=Object(i.a)(c,2),f=d[0],h=d[1],w=Object(a.useState)(""),C=Object(i.a)(w,2),j=C[0],O=C[1],S=Object(a.useState)(""),k=Object(i.a)(S,2),N=k[0],y=k[1],I=Object(a.useState)(),D=Object(i.a)(I,2),J=D[0],L=D[1],x=function(){return setTimeout((function(){L()}),5e3)};return Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(E,{message:J}),r.a.createElement(l,{value:N,onChange:function(e){return y(e.target.value)}}),r.a.createElement("h2",null,"Add new"),r.a.createElement(s,{handleSubmit:function(e){e.preventDefault();var n={name:f,number:j};if(t.map((function(e){return e.name})).includes(f)){if(window.confirm("".concat(f," is already in the phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===f})),r=Object(o.a)(Object(o.a)({},a),{},{number:j});g(r).then((function(e){return u(t.map((function(n){return n.name===f?e:n})))})),L({message:"".concat(r.name,"'s number successfully updated."),status:"success"}),h(""),O(""),y(""),x()}}else h(""),O(""),y(""),p(n).then((function(e){return u(t.concat(e))})),L({message:"".concat(n.name," added."),status:"success"}),x()},newName:f,handleNameInputChange:function(e){return h(e.target.value)},newNumber:j,handleNumberInputChange:function(e){return O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:t,searchedString:N,handleDelete:function(e,n){window.confirm("Delete ".concat(n,"?"))&&v(e).then((function(n){return u(t.filter((function(n){return n.id!==e})))})).catch((function(a){u(t.filter((function(n){return n.id!==e}))),L({message:"Information of ".concat(n," has already been removed from the server."),status:"error"})}))}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.feaa0de9.chunk.js.map