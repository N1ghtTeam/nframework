/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js";var a33d16fd9_8ef5_4a53_bb7c_f02476c89ceb_module;module.exports=e=>{let s=new Object,t=[];s.customTypeDatas=[],s.customTypeDatas.Add=function(e,t){s.customTypeDatas.push({key:e,value:t})};var a=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));a.name="demo-base",a.__TYPE="NMODULE",a.baseModules=[],a.side="server",a.RunExternalMethod=function(e){e.call(a)},a.RunExternalMethod(function(){this.AddProperty("propb"),this.GetThisWithCallback(e=>{a33d16fd9_8ef5_4a53_bb7c_f02476c89ceb_module=e});let e={set stter(e){a33d16fd9_8ef5_4a53_bb7c_f02476c89ceb_module.Set("propb",e)}};e.stter=5});var c=require("fs"),n=JSCLPath;return a.client_js_code=c.readFileSync(n),"server"!=a.side&&a.Routing("/nlc/demo-base",(e,t)=>t.send(a.client_js_code)),t.push(a),s.nmodules=t,s.pages=[],s};