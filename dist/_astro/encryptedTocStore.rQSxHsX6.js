let r=[];const t=new Set,s={get(){return r},set(e){r=e,t.forEach(c=>c(e))},clear(){r=[],t.forEach(e=>e([]))},subscribe(e){return t.add(e),e(r),()=>t.delete(e)}};export{s as e};
