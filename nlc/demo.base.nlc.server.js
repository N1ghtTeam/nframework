/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";var a59f040b2_37a1_467c_9246_22a9d8bfad42_module;module.exports=e=>{let t=new Object,a=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,a){t.customTypeDatas.push({key:e,value:a})};var s=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));s.side="both",s.name="demo-base",s.__TYPE="NMODULE",s.baseModules=["demo-base2"],s.RunExternalMethod=function(e){e.call(s)},s.RunExternalMethod(function(){this.AddProperty("propb"),this.GetThisWithCallback(e=>{a59f040b2_37a1_467c_9246_22a9d8bfad42_module=e});let e={set stter(e){a59f040b2_37a1_467c_9246_22a9d8bfad42_module.Set("propb",e)}};e.stter=5});var o=require("fs"),n=JSCLPath;return s.client_js_code=o.readFileSync(n),"server"!=s.side&&s.Routing("/nlc/demo-base",(e,a)=>a.send(s.client_js_code)),a.push(s),t.nmodules=a,t.pages=[],t};