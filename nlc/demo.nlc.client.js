/* NFRAMEWORK */(()=>{var e,n,a,r=[];manager=window.NFramework.nmoduleManager,r.push("demo-namespace"),null==window.NFramework.nmoduleManager.nlcElementRunned["9c2a2204_187b_42f0_9ad6_6b4c924df0a3"]&&(window.NFramework.nmoduleManager.nlcElementRunned["9c2a2204_187b_42f0_9ad6_6b4c924df0a3"]=!0,manager.customTypeDatas[(()=>{if(0==r.length)return"gobj";{let e="gobj";for(var n=r.length-1;0<=n;n--)e=r[n]+":"+e;return e}})()]=5),null==window.NFramework.nmoduleManager.nlcElementRunned.b5e20028_45c0_4f6c_9c8d_112ca43e8760&&(window.NFramework.nmoduleManager.nlcElementRunned.b5e20028_45c0_4f6c_9c8d_112ca43e8760=!0,e=window.NFramework.NModule,n=new e,a=(()=>{if(0==r.length)return"demo";{let e="demo";for(var n=r.length-1;0<=n;n--)e=r[n]+":"+e;return e}})(),n.name=a,n.shortName="demo",n.__TYPE="NMODULE",n.baseModules=[(a=(()=>{try{return demo-base}catch{return"demo-base"}})())instanceof e?a.name:a],n.side="both",n.RunExternalMethod=function(e){e.call(n)},n.RunExternalMethod(function(){this.AddMethod("setup",(...e)=>{return function(){var e,n;document.body.appendChild(((n=document.createElement("div")).setAttribute("NUI_id","894d7af7_e17f_44cd_b578_5a3cf0f4b0ae"),n.callInside=function(){n.innerHTML+=`

                            `;try{n.appendChild(manager.Get("demo-namespace:gobj"))}catch{n.innerHTML+=manager.Get("demo-namespace:gobj")}n.innerHTML+=`
                                                    
                        `},n.callInside.call(n),null!=n.render&&(n.render instanceof(async()=>{}).constructor?(async()=>{var e=await n.render();null!=e&&n.AppendChilds(e)})():null!=(e=n.render())&&n.AppendChilds(e)),n))}.call(this,...e)})}),window.NFramework.nmoduleManager.ImportModule(n)),r.splice(r.length-1,1)})();