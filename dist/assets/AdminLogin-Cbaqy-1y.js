import{r as i,d as b,a as v,e as E,y as r,j as e}from"./index-DKhINmh2.js";import{u as S,c as y,a as u,h as f}from"./handleClasses-BKQWtuAU.js";const w=()=>{const[a,t]=i.useState(!1),[p,{isSuccess:n,isError:o,error:d,isLoading:h}]=b(),x=v(),[g,{isSuccess:l,isError:c,error:N,isLoading:j}]=E(),s=S({initialValues:{userName:"",otp:""},validationSchema:y({userName:u().required(),otp:u()}),onSubmit:(m,{resetForm:k})=>{a?p(m):g(m)}});return i.useEffect(()=>{l&&(s.setFieldValue("otp",""),t(!0),r.success("please verify otp"))},[l]),i.useEffect(()=>{c&&r.error(N.message)},[c]),i.useEffect(()=>{n&&x("/admin")},[n]),i.useEffect(()=>{o&&(t(!1),r.error(d.data?d.data.message:"sosmething went wrong"))},[o]),j||h?e.jsx("p",{children:"Please Wait ...."}):e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-sm-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:"Login"}),e.jsxs("div",{className:"card-body",children:[a?e.jsxs("div",{children:[e.jsx("label",{for:"otp",className:"form-label",children:"Enter Otp"}),e.jsx("input",{type:"text",...s.getFieldProps("otp"),className:f(s,"otp"),id:"otp",placeholder:"Enter Your otp"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.otp})]}):e.jsxs("div",{children:[e.jsx("label",{for:"email",className:"form-label",children:"Enter Email Or Mobile Number"}),e.jsx("input",{type:"text",...s.getFieldProps("userName"),className:f(s,"userName"),id:"email",placeholder:"Enter Your Email Or Mobile Number"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.userName})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:a?"Verify OTP":"Login"})]})]})})})})})})};export{w as default};
