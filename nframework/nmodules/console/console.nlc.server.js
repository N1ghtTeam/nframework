/* NFRAMEWORK */const JSCLPath="D:\\MyTechs\\nframework\\nframework/nmodules/console/console.nlc.client.js";module.exports=o=>{let t=new Object,e=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,n){t.customTypeDatas.push({key:e,value:n})};var s=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"));s.name="console",s.__TYPE="NMODULE",s.baseModules=[],s.side="both",s.RunExternalMethod=function(e){e.call(s)},s.RunExternalMethod(function(){if(o.NFramework.console.enable){const e=require("readline"),n=e.createInterface({input:process.stdin,output:process.stdout}),t=function(){const e=async function*(){for await(const e of n)yield e}();return async()=>(await e.next()).value}();this.AddMethod("log",(...e)=>{return function(...e){console.log(...e)}.call(this,...e)}),this.AddMethod("clear",(...e)=>{return function(){console.clear()}.call(this,...e)}),this.AddMethod("readLine",async(...e)=>{let n=async function(){return t()}.bind(this);return n(...e)})}});var n=require("fs"),c=JSCLPath;return s.client_js_code=n.readFileSync(c),"server"!=s.side&&s.Routing("/nlc/console",(e,n)=>n.send(s.client_js_code)),e.push(s),t.nmodules=e,t.pages=[],t};