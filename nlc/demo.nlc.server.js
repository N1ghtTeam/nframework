/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.nlc.client.js";module.exports=e=>{let t=new Object,n=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,n){t.customTypeDatas.push({key:e,value:n})};var s=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));s.name="demo",s.__TYPE="NMODULE",s.baseModules=["demo-base"],s.side="server",s.RunExternalMethod=function(e){e.call(s)},s.RunExternalMethod(function(){this.AddMethod("setup",(...e)=>{return function(){}.call(this,...e)})});var o=require("fs"),r=JSCLPath;return s.client_js_code=o.readFileSync(r),"server"!=s.side&&s.Routing("/nlc/demo",(e,n)=>n.send(s.client_js_code)),n.push(s),t.nmodules=n,t.pages=[],t};