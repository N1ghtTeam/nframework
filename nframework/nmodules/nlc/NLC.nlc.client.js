/* NFRAMEWORK */(()=>{var n,e,t=[];manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["2c07ce45_24e4_464c_9e46_28d82382f0ec"]&&(window.NFramework.nmoduleManager.nlcElementRunned["2c07ce45_24e4_464c_9e46_28d82382f0ec"]=!0,n=new window.NFramework.NModule,e=(()=>{if(0==t.length)return"NLC";{let e="NLC";for(var n=t.length-1;0<=n;n--)e=t[n]+":"+e;return e}})(),n.name=e,n.shortName="NLC",n.__TYPE="NMODULE",n.baseModules=[],n.side="both",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddMethod("Execute",async(...e)=>{let n=async function(e){e=await this.GetThisWithCallback(e=>e.Get("Compile"))(e);return Function(e)()}.bind(this);return n(...e)}),this.AddMethod("TExecute",(...e)=>{return function(...e){return async function(n){return await async function(e){e=await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Compile"))(n,e);return Function(e)()}(...e)}}.call(this,...e)}),this.AddMethod("Compile",async(...e)=>{let n=async function(e){var n=window.origin+"/nlc-compile/";n+=encodeURIComponent(e);let t=await fetch(n);return(await t.json()).compiledCode}.bind(this);return n(...e)})}),window.NFramework.nmoduleManager.ImportModule(n))})();