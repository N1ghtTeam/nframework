/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";var a8380b307_7978_4992_8391_60188ee66015_module,a2ff9a455_ddc9_4f6a_9a9b_10a47112ca14_module;module.exports=e=>{let a=new Object,t=[];a.customTypeDatas=[],a.customTypeDatas.Add=function(e,t){a.customTypeDatas.push({key:e,value:t})};var o=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));o.name="demo",o.__TYPE="NMODULE",o.baseModules=[],o.side="both",o.RunExternalMethod=function(e){e.call(o)},o.RunExternalMethod(function(){this.AddProperty("prop"),this.AddProperty("prop2"),this.AddMethod("setup",(...e)=>{return function(){this.GetThisWithCallback(e=>{a8380b307_7978_4992_8391_60188ee66015_module=e});let e={set stter(e){a8380b307_7978_4992_8391_60188ee66015_module.Set("prop",e)}};e.stter=5,this.GetThisWithCallback(e=>{a2ff9a455_ddc9_4f6a_9a9b_10a47112ca14_module=e});let t={set stter(e){a2ff9a455_ddc9_4f6a_9a9b_10a47112ca14_module.Set("prop2",e)}};t.stter=10}.call(this,...e)})});var s=require("fs"),d=JSCLPath;return o.client_js_code=s.readFileSync(d),"server"!=o.side&&o.Routing("/nlc/demo",(e,t)=>t.send(o.client_js_code)),t.push(o),a.nmodules=t,a.pages=[],a};