/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["6c47ba20_331d_4c0c_84a5_c72fc8232eae"]&&(window.NFramework.nmoduleManager.nlcElementRunned["6c47ba20_331d_4c0c_84a5_c72fc8232eae"]=!0,(()=>{var e=new window.NFramework.NModule;e.side="both",e.name="NLC",e.__TYPE="NMODULE",e.RunExternalMethod=function(n){n.call(e)},e.RunExternalMethod(function(){this.AddMethod("Execute",async(...n)=>{let e=async function(n){n=await this.GetThisWithCallback(n=>n.Get("Compile"))(n);return Function(n)()}.bind(this);return e(...n)}),this.AddMethod("Compile",async(...n)=>{let e=async function(n){var e=window.origin+"/nlc-compile/";e+=encodeURIComponent(n);let a=await fetch(e);return(await a.json()).compiledCode}.bind(this);return e(...n)})}),window.NFramework.nmoduleManager.ImportModule(e)})());