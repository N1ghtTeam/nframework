/* NFRAMEWORK */manager=window.NFramework.nmoduleManager,null==window.NFramework.nmoduleManager.nlcElementRunned["1b513cf2_b6e4_4e4a_a508_cf20ae956e40"]&&(window.NFramework.nmoduleManager.nlcElementRunned["1b513cf2_b6e4_4e4a_a508_cf20ae956e40"]=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_main_ui=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses.UIComponent{constructor(){super(),this.UIClass=e,this.componentName="demo-main-ui"}async render(){return(async()=>{let e=[`
                
                `,await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Execute"))(`
                            <use html>

                            <region>
                            
                                return (
                                    <div>
                                        Hello World
                                    </div>                
                                );
        
                            </region>

                        `),`

                `,(()=>{var e,n;if(null!=window.NFramework.customTags.ui&&null!=window.NFramework.customTags.ui.demo_ui)return(n=document.createElement("demo-ui")).innerHTML+="\r\n\r\n                ",null!=n.render&&(n.render instanceof(async()=>{}).constructor?(async()=>{var e=await n.render();null!=e&&n.AppendChilds(e)})():null!=(e=n.render())&&n.AppendChilds(e)),n})(),`

            `];return e.elements=[await manager.Get("NLC").GetThisWithCallback(e=>e.Get("Execute"))(`
                            <use html>

                            <region>
                            
                                return (
                                    <div>
                                        Hello World
                                    </div>                
                                );
        
                            </region>

                        `),(()=>{var e,n;if(null!=window.NFramework.customTags.ui&&null!=window.NFramework.customTags.ui.demo_ui)return(n=document.createElement("demo-ui")).innerHTML+="\r\n\r\n                ",null!=n.render&&(n.render instanceof(async()=>{}).constructor?(async()=>{var e=await n.render();null!=e&&n.AppendChilds(e)})():null!=(e=n.render())&&n.AppendChilds(e)),n})()],e})()}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},r.mainUIComponentClass=n,r.mainUIComponentName="demo-main-ui",n},extends:"UIComponent",name:"demo-main-ui"})})()),null==window.NFramework.nmoduleManager.nlcElementRunned.b8c0fbc4_2722_4f63_b20f_a6c57a5558a0&&(window.NFramework.nmoduleManager.nlcElementRunned.b8c0fbc4_2722_4f63_b20f_a6c57a5558a0=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_ui=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses["demo-ui-base"]{constructor(){super(),this.UIClass=e,this.componentName="demo-ui"}render(){return e("demo-ui-base").render(this).add((()=>{let e=[`     
                    Hello
                `];return e.elements=[],e})())}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},n},extends:"demo-ui-base",name:"demo-ui"})})()),null==window.NFramework.nmoduleManager.nlcElementRunned.fdd20ba7_dd68_49af_ad38_34c36ee9c3f7&&(window.NFramework.nmoduleManager.nlcElementRunned.fdd20ba7_dd68_49af_ad38_34c36ee9c3f7=!0,null==window.NFramework.customTags.ui&&(window.NFramework.customTags.ui=new Object),window.NFramework.customTags.ui.demo_ui_base=!0,(()=>{var r=window.NFramework.uiManager;function e(e){return r.uiComponentClasses[e]}r.uiComponentClassCreators.push({classCreator:()=>{class n extends r.uiComponentClasses.UIComponent{constructor(){super(),this.UIClass=e,this.componentName="demo-ui-base"}render(){return(()=>{let e=[`        
                Hello World Base
            `];return e.elements=[],e})()}}return n.render=function(e){let o=[];return null!=n.prototype.render&&(o=n.prototype.render.call(e)),o.add=function(e){for(var n of e)o.push(n);return o},o.addBefore=function(e){let n=e;for(var r of o)n.push(r);return n},o},n},extends:"UIComponent",name:"demo-ui-base"})})());