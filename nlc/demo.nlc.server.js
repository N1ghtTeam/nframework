/* NFRAMEWORK */(()=>{var u=[];module.exports=e=>{let t=new Object,n=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,n){t.customTypeDatas.push({key:e,value:n})};var r=require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule"),o=new r,s=(()=>{if(0==u.length)return"demo";{let e="demo";for(var n=u.length-1;0<=n;n--)e=u[n]+":"+e;return e}})();o.name=s,o.shortName="demo",o.__TYPE="NMODULE",o.baseModules=[(a=(()=>{try{return demo-base}catch{return"demo-base"}})())instanceof r?a.name:a],o.side="both",o.RunExternalMethod=function(e){e.call(o)},o.RunExternalMethod(function(){this.AddMethod("setup",(...e)=>{return function(){}.call(this,...e)})});var a=require("fs");return o.client_js_code=a.readFileSync("D:\\MyTechs\\nframework/nlc/demo.nlc.client.js"),"server"!=o.side&&o.Routing("/nlc/"+s,(e,n)=>n.send(o.client_js_code)),n.push(o),t.nmodules=n,t.pages=[],t}})();