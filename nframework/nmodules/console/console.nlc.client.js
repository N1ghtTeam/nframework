(()=>{
            var ScopeId = "D:\\NLCDemoWeb\\nframework/nmodules/console";
const JSSVPath = "D:\\NLCDemoWeb\\nframework/nmodules/console/console.nlc.server.js";
const JSCLPath = "D:\\NLCDemoWeb\\nframework/nmodules/console/console.nlc.client.js";

            var namespace=[];
            manager = window.NFramework.nmoduleManager;


                    
                    if(window.NFramework.nmoduleManager.nlcElementRunned['208715b9_8fca_4e75_9b11_e452efdc41c2']==null){
                        window.NFramework.nmoduleManager.nlcElementRunned['208715b9_8fca_4e75_9b11_e452efdc41c2']=true;
                        
            (()=>{
                

        var NModule=
            function() {
                return window.NFramework.NModule;
            }()

        ;

        var nmodule=new NModule();

        var This=nmodule;

        var nmoduleName = 

        ((()=>{
            
            if(namespace.length==0){
                return `console`;
            }
            else{
                let result=`console`;
                for(var i=namespace.length-1;i>=0;i--){
                    result = namespace[i]+':'+result;
                }
                return result;
            }

        })())

    ;

        nmodule.name=nmoduleName;

        nmodule.shortName=`console`;

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = [];

        nmodule.side = 'both';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    




        });
    

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                    }
                

                
        
        })()