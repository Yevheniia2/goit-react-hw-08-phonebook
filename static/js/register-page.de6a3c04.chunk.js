"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[316],{3913:function(n,r,e){e.r(r),e.d(r,{default:function(){return j}});var a,o,t,p,i=e(9439),x=e(2791),s=e(4420),l=e(7863),d=e(1107),u=e(2564),b=e(5984),c=e(8026),g=e(613),h=e(168),f=e(6444),m=f.ZP.form(a||(a=(0,h.Z)(["\n    display: block;\n    background-color: rgba(255,255,255,0.2);\n    padding: 1.5em;\n    border-radius: 20px;\n    border-left: 1px solid $white;\n    border-top: 1px solid $white;\n    backdrop-filter: blur(10px);\n    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.5);\n    text-align: center;\n    position: relative;\n    transition: all 0.2s ease-in-out;\n    margin-top: 16px;\n    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,\n    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n"]))),w=f.ZP.label(o||(o=(0,h.Z)(["\n    display: block;\n    justify-content: center;\n    flex-direction: column;\n"]))),v=f.ZP.input(t||(t=(0,h.Z)(["\n    background-color: transparent;\n    width: 200px;\n    padding: 1em;\n    margin-bottom: 10px;\n    border: none;\n    border-left: 1px solid $white;\n    border-top: 1px solid $white;\n    border-radius: 5000px;\n    backdrop-filter: blur(5px);\n    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);\n    color: #fff;\n    font-family: Montserrat, sans-serif;\n    font-weight: 500;\n    transition: all 0.2s ease-in-out;\n    text-align: center;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);\n    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,\n    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n    \n    &:hover {\n        background-color: rgba(255,255,255,0.1);\n        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);\n    }\n\n    &:focus {\n        background-color: rgba(255,255,255,0.1);\n        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);\n    }\n"]))),k=f.ZP.button(p||(p=(0,h.Z)(["\n    background-color: transparent;\n    padding: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    border: none;\n    border-left: 1px solid $white;\n    border-top: 1px solid $white;\n    border-radius: 5000px;\n    backdrop-filter: blur(5px);\n    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);\n    color: #fff;\n    font-family: Montserrat, sans-serif;\n    font-weight: 400;\n    transition: all 0.2s ease-in-out;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);\n    width: 100px;\n    height: 35px;\n    font-size: 14px;\n    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,\n    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n        \n    &:hover {\n        background-color: rgba(255,255,255,0.1);\n        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);\n        cursor: pointer;\n    }\n\n    &:focus {\n        background-color: rgba(255,255,255,0.1);\n        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);\n    }\n        \n    &:active {\n        background-color: rgba(255,255,255,0.2);\n    }\n"]))),y=e(3329);function j(){var n=(0,s.I0)(),r=(0,s.v9)(l.Kv),e=(0,x.useState)(""),a=(0,i.Z)(e,2),o=a[0],t=a[1],p=(0,x.useState)(""),h=(0,i.Z)(p,2),f=h[0],j=h[1],Z=(0,x.useState)(""),_=(0,i.Z)(Z,2),C=_[0],S=_[1],P=function(n){var r=n.target,e=r.name,a=r.value;switch(e){case"name":return t(a);case"email":return j(a);case"password":return S(a)}};return(0,y.jsxs)(m,{onSubmit:function(r){r.preventDefault();var e=r.currentTarget,a=e.name.value,o=e.email.value,p=e.password.value,i={name:a,email:o,password:p,id:(0,b.x0)()};return a.trim()&&o.trim()&&p.trim()?p.length<8?u.Am.info("The password should be least at 8 characters long, it must contain uppercase and lowercase letters and numbers!"):(n((0,d.z2)(i)),t(""),j(""),void S("")):u.Am.error("Please fill out all required fields!")},autoComplete:"off",children:[(0,y.jsxs)(w,{children:[(0,y.jsx)(c.UV,{children:"Enter your name"}),(0,y.jsx)(v,{label:"Name",variant:"outlined",type:"text",name:"name",value:o,onChange:P})]}),(0,y.jsxs)(w,{children:[(0,y.jsx)(c.UV,{children:"Enter your email"}),(0,y.jsx)(v,{label:"Email",variant:"outlined",type:"email",name:"email",value:f,onChange:P})]}),(0,y.jsxs)(w,{children:[(0,y.jsx)(c.UV,{children:"Enter your password"}),(0,y.jsx)(v,{label:"Password",variant:"outlined",color:"primary",type:"password",name:"password",value:C,onChange:P})]}),!r&&(0,y.jsx)(k,{variant:"contained",type:"submit",children:"Sign up"}),r&&(0,y.jsx)(g.a,{})]})}},5984:function(n,r,e){e.d(r,{x0:function(){return a}});var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,r){return n+=(r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=register-page.de6a3c04.chunk.js.map