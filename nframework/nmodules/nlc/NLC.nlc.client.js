/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["30c5e2ce_4dd0_4d36_923d_dcbbe39b9620"]&&(window.NFramework.nmoduleManager.nlcElementRunned["30c5e2ce_4dd0_4d36_923d_dcbbe39b9620"]=!0,(()=>{var n=new window.NFramework.NModule;n.name="NLC",n.__TYPE="NMODULE",n.baseModules=[],n.side="both",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddMethod("Execute",async(...e)=>{let n=async function(e){e=await this.GetThisWithCallback(e=>e.Get("Compile"))(e);return Function(e)()}.bind(this);return n(...e)}),this.AddMethod("TExecute",(...e)=>{return function(...e){return async function(n){return await async function(e){e=await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Compile"))(n,e);return Function(e)()}(...e)}}.call(this,...e)}),this.AddMethod("Compile",async(...e)=>{let n=async function(e){var n=window.origin+"/nlc-compile/";n+=encodeURIComponent(e);let t=await fetch(n);return(await t.json()).compiledCode}.bind(this);return n(...e)})}),window.NFramework.nmoduleManager.ImportModule(n)})());