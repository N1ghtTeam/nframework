<<<<<<< Updated upstream
var JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/console/console.nlc.client.js";module.exports=(manager)=>{
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
            const JSCLPath = "D:\\MyTechs\\nframework\\nframework/nmodules/console/console.nlc.client.js";
const JSSVPath = "D:\\MyTechs\\nframework\\nframework/nmodules/console/console.nlc.server.js";
var scopeId = "D:\\MyTechs\\nframework\\nframework/nmodules/console";


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

        nmodule.name='console';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

        

            if(manager.NFramework.console.enable){

                const readline = require('readline');

                const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

                const ReadLine = (function () {
                    const getLineGen = (async function* () {
                        for await (const line of rl) {
                            yield line;
                        }
                    })();
                    return async () => ((await getLineGen.next()).value);
                })();

                
        this.AddMethod('log',(...args)=>{
            var f=
    
                    function(...args) {
                        console.log(...args);
                    }
                
        
    return f.call(this,...args); 

}
    
    );
    
    

                
        this.AddMethod('clear',(...args)=>{
            var f=
    
                    function() {
                        console.clear();
                    }
                
        
    return f.call(this,...args); 

}
    
    );
    
    

                
        this.AddMethod('readLine',async (...args)=>{
                var f=async function() {
                        return await ReadLine();
                    }
                
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

            }

        

    




        });
    
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/console',(req,res)=>{
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
