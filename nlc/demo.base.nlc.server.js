/* NFRAMEWORK */(()=>{var l=[];module.exports=e=>{let r=new Object,n=[];r.customTypeDatas=[],r.customTypeDatas.Add=function(e,n){r.customTypeDatas.push({key:e,value:n})};var t=new(require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule")),o=(()=>{if(0==l.length)return"demo-base";{let e="demo-base";for(var n=l.length-1;0<=n;n--)e=l[n]+":"+e;return e}})();t.name=o,t.shortName="demo-base",t.__TYPE="NMODULE",t.baseModules=[],t.side="both",t.RunExternalMethod=function(e){e.call(t)},t.RunExternalMethod(function(){});var s=require("fs");t.client_js_code=s.readFileSync("D:\\MyTechs\\nframework/nlc/demo.base.nlc.client.js");var a="";for(let e=0;e<o.length;e++)":"==o[e]?a+="--":a+=o[e];return"server"!=t.side&&t.Routing("/nlc/"+a,(e,n)=>n.send(t.client_js_code)),n.push(t),r.nmodules=n,r.pages=[],r}})();