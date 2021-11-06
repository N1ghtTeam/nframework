const Tag = require('../tag/tag');

let tag = new Tag();

tag.isAutoClose = false;

tag.isJSTag = true;

tag.oneTime = true;

let parsed__dirname = '';

for (let i = 0; i < __dirname.length; i++) {
    if (__dirname[i] == '\\') {
        parsed__dirname += '\\\\';
    } else {
        parsed__dirname += __dirname[i];
    }
}

let nmodulePath = parsed__dirname + '/../../nmodule/nmodule';

tag.Compile = function(element, childsCode, code) {
    let contents = tag.GetContent(element, childsCode, code);

    let inputs = tag.GetInputs(element, childsCode, code);

    let newInputs = [];

    for(let input of inputs){
        if(input[0]==','){
            newInputs.push(',');
            newInputs.push(input.substring(1,input.length));
        }
        else
        if(input[input.length-1]==','){
            newInputs.push(input.substring(0,input.length-1));
            newInputs.push(',');
        }
        else{
            newInputs.push(input);
        }
    }

    inputs = newInputs;

    //get extendedModule
    let extendedModulesStr='';

    let extendedModules=[];

    let isNeedGetExtendedModuleName=false;

    for(let i=0;i<inputs.length;i++){
        if(isNeedGetExtendedModuleName){

            extendedModules.push(inputs[i]);

            i++;

            if(inputs[i]!=','){
                break;
            }

        }
        if(inputs[i]=='extends'){
            isNeedGetExtendedModuleName=true;
        }
    }

    for(let i=0;i<extendedModules.length;i++){
        extendedModulesStr+=`'${extendedModules[i]}'`;
        if(i<extendedModules.length-1){
            extendedModulesStr+=',';
        }
    }
    extendedModulesStr = `[${extendedModulesStr}]`;



    let moduleName = inputs[0];

    let nmoduleImportCode = `
        function() {
            return require("${nmodulePath}");
        }()

    `;

    if (!element.forSV) {
        nmoduleImportCode = `
            function() {
                return window.NFramework.NModule;
            }()

        `;
    }

    let side = 'both';

    if (!element.forSV) {

    }

    let compiledCode = `

        var NModule=${nmoduleImportCode};

        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='${side}';

        nmodule.name='${moduleName}';

        nmodule.__TYPE='NMODULE';

        nmodule.baseModules = ${extendedModulesStr};

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    `;

    for (let i = 0; i < contents.length; i++) {
        compiledCode += contents[i].code;
    }

    compiledCode += `
        });
    `;

    if (element.forSV) {
        compiledCode += `

        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        if(nmodule.side!='server'){
            nmodule.Routing('/nlc/${moduleName}', (req, res) => res.send(nmodule.client_js_code));
        }

        `;
    } else {
        compiledCode += `

            var nmoduleManager = window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        `;
    }

    if (element.forSV) {
        compiledCode += `

            nmodules.push(nmodule);

        `;
    }



    if (!element.forSV) {
        compiledCode = `
            (()=>{
                ${compiledCode}
            })();
        `;
    }

    return compiledCode;
}


module.exports = tag;
