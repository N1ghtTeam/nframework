const JSCLPath="D:\\MyTechs\\nframework/nlc/demo.page.nlc.client.js";module.exports=e=>{let t=new Object;let s=[];t.customTypeDatas=[],t.customTypeDatas.Add=function(e,s){t.customTypeDatas.push({key:e,value:s})};let a=require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../page/page"),o=new a;return o.customTypeDatas=[],o.useAllGlobalObjects=!1,o.name="demoPage",o.__TYPE="PAGE",o.modules=[],o.Setup=function(){this.src="demo.ejs",this.useAllGlobalObjects=!0,this.modules.push("dom"),this.modules.push("demo")},o.Setup.call(o),o.manager=e,o.AfterSetup(),s.push(o),t.nmodules=[],t.pages=s,t};