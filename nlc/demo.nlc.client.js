/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["8bada1a1_532c_44ee_93b1_1a929e001576"]&&(window.NFramework.nmoduleManager.nlcElementRunned["8bada1a1_532c_44ee_93b1_1a929e001576"]=!0,(()=>{var n=new window.NFramework.NModule;n.side="both",n.name="demo",n.__TYPE="NMODULE",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddProperty("prop"),this.AddMethod("CreateEC",(...e)=>{return function(...e){let t=this;return function(n){return function(e){return new n}.call(t,...e)}}.call(this,...e)}),this.AddMethod("setup",async(...e)=>{let n=async function(){var e=new class{constructor(){}};console.log(this.GetThisWithCallback(e=>e.Get("CreateEC"))(e)(class{constructor(){}}))}.bind(this);return n(...e)})}),window.NFramework.nmoduleManager.ImportModule(n)})());