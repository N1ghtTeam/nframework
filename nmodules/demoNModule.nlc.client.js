
                
                    

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='client';

        nmodule.name='demoClientModule';
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    
    
        
        nmodule.AddMethod('Setup',(...args)=>{
                var f=async function(){
                
                await this.AsyncSet('syncProp',{
                    'a':5,
                    'b':6,
                    'c':{
                        'a':1,
                        'b':2
                    }
                });

                
                var prop=await this.AsyncGet('syncProp');
            }

        
                f.call(nmodule);
            }
    
        );
    
    

        
        nmodule.AddMethod('Start',(...args)=>{
            var f=
    

            function(){



            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    
    
    

    {
        nmodule.AddServerMethod('LogSyncProp',(clientSocket,...args)=>{
            var f=
    
        function() {
            console.log(this.Get('syncProp'));
        }
    
        
    f.call(nmodule,...args); 

}
    
    );
}
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
                
                