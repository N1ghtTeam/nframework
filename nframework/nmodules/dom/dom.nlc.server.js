<<<<<<< Updated upstream
var JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.client.js";module.exports=(manager)=>{
            var exports=new Object();
                var nmodules=[];
                var pages=[];
                exports.customTypeDatas=[];
                exports.customTypeDatas.Add=function(key,value){
                    exports.customTypeDatas.push({
                        'key':key,
                        'value':value
                    });
                }
=======
(()=>{
            const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/dom/dom.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework\\nframework/nmodules/dom";


            var IS_THIS_PUBLIC = true;

            try{
                scopeId = scopeId;
            }
            catch{
                scopeId = 'global';
            }

            
module.exports = (manager) => {
    let exports     = new Object();
    let nmodules    = [];
    let pages       = [];
    exports.customTypeDatas=[];
    exports.customTypeDatas.Add=function(key,value){
        exports.customTypeDatas.push({
            'key':key,
            'value':value
        });
    }
>>>>>>> Stashed changes

                

                    

        var NModule=
        function(){

            return require("D:\\MyTechs\\nframework\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='dom';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    


        });
    
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/dom',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        

                

<<<<<<< Updated upstream
                exports.nmodules=nmodules;
                exports.pages=pages;
                return exports;
            }
            
=======
    exports.nmodules=nmodules;
    exports.pages=pages;
    return exports;
}
            
            IS_THIS_PUBLIC=false;
            
        
        })()
>>>>>>> Stashed changes
