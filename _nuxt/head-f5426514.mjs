import{n as c,w as f,k as g,p as u,s as h}from"./entry-e0289820.mjs";const H=(n,p=g())=>{const m=c(n);f(()=>c(n),(t=m)=>{if(!p.path||!t)return;const e=Object.assign({},(t==null?void 0:t.head)||{});e.title=e.title||(t==null?void 0:t.title),e.meta=e.meta||[];const r=(e==null?void 0:e.description)||(t==null?void 0:t.description);r&&e.meta.filter(s=>s.name==="description").length===0&&e.meta.push({name:"description",content:r});const i=(e==null?void 0:e.image)||(t==null?void 0:t.image);if(i&&e.meta.filter(s=>s.property==="og:image").length===0&&(typeof i=="string"&&e.meta.push({property:"og:image",content:e.image}),typeof i=="object")){const s=["src","secure_url","type","width","height","alt"];for(const o of s)o==="src"&&i.src?e.meta.push({property:"og:image",content:i[o]}):i[o]&&e.meta.push({property:`og:${o}`,content:i[o]})}u(()=>h(e))},{immediate:!0})};export{H as u};
