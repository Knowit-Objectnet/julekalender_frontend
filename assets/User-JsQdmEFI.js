import{d as le,ab as de,c as ce,ac as ue,u as e,S as D,ad as me,ae as pe,K as ge,N as C,af as $,H as g,I,V as U,ag as G,ah as xe,ai as ke,aj as he,ak as je,al as P,a7 as f,am as fe,an as W,ao as be,ap as ve,aq as ye,ar as H,a6 as Se,as as J,J as z,at as Ne,au as _e,av as we,L as O,aw as Ee,ax as Ce,a8 as Ue,a9 as j,aa as De}from"./index-B0CDuKzb.js";import{a as h,N as Ie,F as V,b as Le}from"./FormElement-BV00rZZ1.js";function Pe(s,r){if(s==null)return{};var a=le(de(s),function(t){return[t]});return r=ce(r),ue(s,a,function(t,o){return r(t,o[0])})}const R=({error:s})=>{if(!s)return null;const r=s.type=="required"?"Påkrevd":s.message;return e.jsx("div",{children:e.jsx("span",{className:"text-sm text-red-700",children:r})})},y="opt_in_marketing",F=D(`
  form-checkbox
  mr-4

  bg-transparent

  hover:!bg-purple-900
  hover:ring
  hover:ring-purple-500

  focus:!bg-purple-300

  checked:bg-purple-500

  rounded-md
  w-8
  h-8
`),q={shouldDirty:!0,shouldTouch:!0,shouldValidate:!0},X=({id:s,required:r=!1,className:a})=>{const{setValue:t,control:o}=me(),{field:{value:n}}=pe({control:o,name:y,rules:{validate:i=>ge(i)?"Påkrevd":!0}});return e.jsxs("div",{className:D(`
          flex
          gap-10
          group-[.error]:border-red-700
          group-[.error]:border-2
          group-[.error]:text-red-700
          group-[.error]:px-6
          group-[.error]:py-1
          group-[.error]:rounded-xl
        `,a),children:[e.jsxs("label",{children:[e.jsx("input",{"aria-hidden":"true",type:"checkbox",name:y,className:F,checked:n===!0,onChange:()=>t(y,!0,q)}),"Ja"]}),e.jsxs("label",{children:[e.jsx("input",{"aria-hidden":"true",type:"checkbox",name:y,className:F,checked:n===!1,onChange:()=>t(y,!1,q)}),"Nei"]}),e.jsx("input",{required:r,type:"checkbox",id:s,className:"hidden",checked:n===!0,onChange:()=>t(y,!n,q)})]})},k=({error:s,dirty:r,className:a,children:t})=>e.jsxs("div",{className:D("group",{error:s,dirty:r},a),children:[t,e.jsx(R,{error:s})]}),L=({...s})=>e.jsx(C,{primary:!0,formNoValidate:!0,type:"submit",...s}),qe=$(`
  Er du sikker på at du vil slette brukeren din? Du vil ikke lenger være med i premietrekningen. Dette kan ikke reverseres.
`),Q=ye("Samtykker du til at vi kan kontakte deg om jobbmuligheter etter konkurransen?"),Y=s=>`Vi ønsker å kunne kontakte deg om jobbmuligheter etter at konkurransen er over. Huk av for hvorvidt du ønsker å motta slik e-post.${s?" Du kan endre dette senere.":""}`,Ve=({user:s,submit:r,submitError:a,newForm:t=!1})=>{const o=I(),n=U(),{register:i,handleSubmit:d,watch:u,setValue:x,reset:c,setError:S,clearErrors:N,formState:{isSubmitting:_,isSubmitSuccessful:w,errors:p,isDirty:T,dirtyFields:b}}=n,B=g.useId(),A=g.useId();g.useEffect(()=>{t||(c({email:(s==null?void 0:s.email)??"",username:(s==null?void 0:s.username)??"",opt_in_marketing:s!=null&&s.has_answered_opt_in_marketing?s==null?void 0:s.opt_in_marketing:void 0}),N())},[t,s,c,N]),g.useEffect(()=>{G(a==null?void 0:a.errors,(l,m)=>S(m,{message:H(l,", ")}))},[a,S]);const{mutate:ee}=xe(),M=g.useRef(null),se=u("username"),E=u("avatar"),[te,K]=g.useState(),re=ke(async l=>{try{const m=await fetch(l);if(!m.ok){K({message:"Klarte ikke hente bilde",type:"value"});return}const v=he(je(l,"/"));if(!v)return;const oe=await m.blob(),ie=new File([oe],v,{type:m.headers.get("Content-Type")||"application/octet-stream"});x("avatar",ie,{shouldDirty:!0})}catch{K({message:"Klarte ikke hente bilde",type:"value"})}}),ae=l=>{P("UserForm onSubmit"),P({data:l}),r(t?l:Pe(l,(m,v)=>b[v]===!0))};P({errors:p});const ne=()=>{window.confirm(qe)&&ee(null,{onSuccess:()=>o("/")})};return e.jsx(f,{title:t?"Ny bruker":"Rediger bruker",containerClassName:D("gap-6 mx-8 sm:mx-32 group",fe(p)&&"errors"),onSubmit:d(ae),children:e.jsxs(W,{...n,children:[e.jsx(k,{error:p.email,dirty:b.email,children:e.jsx(h,{required:t,autoFocus:t,label:"E-post",note:"Innlogging og kontakt ved premiering.",type:"email",...i("email",{required:t})})}),t&&e.jsxs("div",{className:"grid grid-cols-[auto_auto_1fr] gap-4",children:[e.jsx("span",{children:"Jobber du i Knowit?"}),e.jsx(Ie,{iconClassName:"rotate-180 -left-2 -top-2",note:"Knowit-ansatte kan dessverre ikke delta i premietrekningen. Vennligst bruk din Knowit-adresse ved registrering. Takk<3"})]}),e.jsx(k,{error:p.password,dirty:b.password,children:e.jsx(h,{required:t,label:"Passord",note:t?void 0:"La være blank for å beholde passord",type:"password",...i("password",{required:t})})}),e.jsx(k,{error:p.password_confirmation,dirty:b.password_confirmation,children:e.jsx(h,{required:t,label:"Bekreft passord",type:"password",...i("password_confirmation",{required:t})})}),e.jsxs(k,{error:p.username,dirty:b.username,children:[e.jsx(h,{autoComplete:"nickname",label:"Brukernavn",note:$(`
              Du kan oppgi brukernavn dersom du vil delta i komentarfeltet og være synlig i ledertavlen.${t?"Du kan endre dette senere.":""}
            `),type:"text",...i("username")}),/^.+@.+\..+$/.test(se??"")&&e.jsx(R,{error:{type:"pattern",message:"Dette ser ut som en e-postadresse! Er du sikker på at du mente å sette dette som brukernavn (synlig for alle)?"}})]}),e.jsx(k,{error:p.avatar,dirty:b.avatar,children:e.jsxs(V,{htmlFor:B,label:"Profilbilde",children:[(E||(s==null?void 0:s.avatar))&&e.jsx(be,{avatar:E&&URL.createObjectURL(E)||(s==null?void 0:s.avatar)||"",className:"mb-6"}),e.jsx("input",{id:B,ref:M,className:"hidden",type:"file",accept:"image/*",onChange:l=>{var v;N("avatar");const m=(v=l.target.files)==null?void 0:v[0];if(m){if(m.size>2*1024*1024){S("avatar",{message:"for stort"});return}x("avatar",m,{shouldDirty:!0})}}}),e.jsx(C,{className:"font-normal max-w-full",content:E?e.jsx("span",{className:"truncate",children:E.name}):"Velg bilde (maks 2MB)",onClick:()=>{var l;return(l=M.current)==null?void 0:l.click()}})]})}),e.jsx(k,{error:te,children:e.jsx(Le,{type:"url",placeholder:"... eller oppgi URL",onChange:l=>re(l.target.value)})}),e.jsx(k,{error:p.opt_in_marketing,dirty:b.opt_in_marketing,children:e.jsx(V,{required:t,htmlFor:A,label:Q(),note:Y(t),noteDirection:"bottom",children:e.jsx(X,{required:!0,id:A,className:"float-left"})})}),e.jsxs("div",{className:"flex flex-col items-center gap-32",children:[!t&&T&&!_&&w&&!a&&e.jsx(ve,{wrapperClassName:"mx-auto w-32",message:"Lagret!"}),e.jsx(L,{disabled:!T||_,className:"",content:t?"Opprett bruker":"Lagre"}),!t&&e.jsx(C,{type:"button",onClick:ne,className:"text-red-700",content:"Slett bruker"})]})]})})},Z=g.memo(Ve),Re=()=>{const{data:s,isLoading:r}=Se(),{mutateAsync:a,error:t}=J();return r||!s||s.is_guest?null:e.jsx(Z,{user:s,submit:a,submitError:t})},Te=()=>{var x;const{search:s}=z(),r=(x=s.match(/email=(?<email>\S+)/))==null?void 0:x.groups,{register:a,handleSubmit:t,formState:{isSubmitSuccessful:o}}=U(),{mutate:n,error:i,isLoading:d}=Ne(),u=c=>{n(c)};return o&&!d&&!i?e.jsxs(f,{title:"Glemt passord",children:[e.jsx("p",{className:"text-center",children:"Tilbakestillingsinstrukser sendt."}),e.jsx("p",{className:"text-center",children:"Dersom det finnes en konto med e-postadressen du oppga vil du snarlig få en e-post med instrukser for å tilbakestille ditt passord."})]}):e.jsxs(f,{title:"Glemt passord",onSubmit:t(u),containerClassName:"gap-16",children:[e.jsx(h,{autoFocus:!0,label:"E-post",type:"email",defaultValue:decodeURIComponent((r==null?void 0:r.email)??""),className:"w-full",...a("email")}),e.jsx(L,{content:"Tilbakestill",className:"mx-auto"})]})},Be=()=>{var _;const{search:s}=z(),r=(_=s.match(/reset_password_token=(?<resetPasswordToken>\S+)/))==null?void 0:_.groups,{register:a,handleSubmit:t,setValue:o,setError:n,formState:{errors:i,dirtyFields:d,isSubmitSuccessful:u}}=U(),{mutate:x,error:c,isLoading:S}=_e();g.useEffect(()=>{G(c==null?void 0:c.errors,(w,p)=>n(p,{message:H(w,", ")}))},[c,n]),g.useEffect(()=>{o("reset_password_token",(r==null?void 0:r.resetPasswordToken)??"")},[o,r]);const N=w=>{x(w)};return u&&!S&&!c?e.jsx(f,{title:"Passord tilbakestilt",children:e.jsx("div",{className:"text-center",children:"Du kan nå logge inn med ditt nye passord."})}):e.jsxs(f,{title:"Tilbakestill passord",onSubmit:t(N),children:[e.jsx(k,{error:i.password,dirty:d.password,children:e.jsx(h,{label:"Passord",type:"password",...a("password",{required:!0})})}),e.jsx(k,{error:i.password_confirmation,dirty:d.password_confirmation,children:e.jsx(h,{label:"Bekreft passord",type:"password",...a("password_confirmation",{required:!0})})}),e.jsx(C,{type:"submit",className:"block mx-auto",content:"Tilbakestill passord"})]})},Ae=()=>{const s=I(),{register:r,handleSubmit:a,getValues:t}=U(),{mutate:o,error:n}=we(),i=d=>{o(d,{onSuccess:()=>s("/")})};return e.jsxs(f,{title:"Logg inn",containerClassName:"gap-24",onSubmit:a(i),children:[e.jsxs("div",{className:"w-full max-w-200 mx-auto flex flex-col items-center gap-6",children:[e.jsx(h,{autoFocus:!0,label:"E-post",type:"email",...r("email",{required:!0})}),e.jsx(h,{label:"Passord",type:"password",...r("password",{required:!0})}),n&&e.jsx("div",{children:e.jsx("em",{className:"text-red-700",children:n.error})}),e.jsx(L,{icon:"sign-in",content:"Logg inn"})]}),e.jsxs("div",{className:"flex flex-wrap gap-6 md:gap-12 justify-center",children:[e.jsx(O,{to:"/users/sign_up",name:"edit",content:"Ny bruker?"}),e.jsx(O,{to:"/users/lost_password",name:"mail",content:"Glemt passord?",onClick:d=>{d.preventDefault();const u=t("email")||"";s(`/users/lost_password?email=${u}`)}})]})]})},Me=()=>{const s=I(),{mutateAsync:r,error:a}=Ee(),t=o=>{r(o,{onSuccess:()=>s("/users/welcome")})};return e.jsx(Z,{submit:t,submitError:a,newForm:!0})},Ke=()=>{const{mutateAsync:s}=J(),r=I(),a=U(),{handleSubmit:t,formState:{isSubmitting:o,isDirty:n,errors:i}}=a,d=({opt_in_marketing:x})=>{s({opt_in_marketing:x},{onSuccess:()=>r("/"),onError:c=>console.error(c)})},u=g.useId();return e.jsx(f,{title:"Velkommen tilbake!",onSubmit:t(d),containerClassName:"gap-16 text-justify",children:e.jsxs(W,{...a,children:[e.jsx("p",{children:"Så gøy at du blir med i kodekalenderen vår i år igjen! Det er like moro å arrangere hvert år (tross noen sene kvelder for å dra det i land) og snart er vi i gang! Du vil motta en e-post når vi legger ut den første luken i tilfelle du glemmer at det er blitt desember allerede."}),e.jsx("p",{className:"mb-20",children:"Vi gleder oss til å se hva slags gøyale løsninger dere kommer på i år. Ses i kommentarfeltet! 🧝‍♂🧝‍♀️️🧝🎄"}),e.jsx("p",{children:Y(!0)}),e.jsx(V,{htmlFor:u,label:Q(),className:"text-center col-span-3",inputWrapperClassName:"mx-auto",children:e.jsx(X,{required:!0,id:u})}),e.jsx(R,{error:i.opt_in_marketing}),e.jsx(L,{disabled:!n||o,className:"mx-auto",content:"Lagre"})]})})},Oe=()=>e.jsxs(f,{title:"Velkommen!",containerClassName:"text-center",children:[e.jsx("p",{children:"Så gøy at du blir med i kodekalenderen vår! Det er like moro å arrangere hvert år (tross noen sene kvelder for å dra det i land) og snart er vi i gang! Du vil motta en e-post når vi legger ut den første luken i tilfelle du glemmer at det er blitt desember allerede."}),e.jsx("p",{children:"Vi gleder oss til å se hva slags gøyale løsninger dere kommer på i år. Ses i kommentarfeltet! 🧝‍♂🧝‍♀️️🧝🎄"}),e.jsx(Ce,{to:"/",className:"mx-auto",children:e.jsx(C,{primary:!0,content:"Tilbake til forsiden"})})]}),Ge=()=>e.jsxs(Ue,{children:[e.jsx(j,{path:"edit",element:e.jsx(Re,{})}),e.jsx(j,{path:"sign_in",element:e.jsx(Ae,{})}),e.jsx(j,{path:"sign_up",element:e.jsx(Me,{})}),e.jsx(j,{path:"lost_password",element:e.jsx(Te,{})}),e.jsx(j,{path:"password/edit",element:e.jsx(Be,{})}),e.jsx(j,{path:"welcome",element:e.jsx(Oe,{})}),e.jsx(j,{path:"welcome_back",element:e.jsx(Ke,{})}),e.jsx(j,{element:e.jsx(De,{to:"doors"})})]});export{Ge as default};
