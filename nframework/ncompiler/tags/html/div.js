var htmlImport=require('./import');

var tag=require('./htmlTag');

tag.htmlTagName='div';

tag.isAutoClose=false;

const { v4: uuidv4 } = require('uuid');

module.exports=tag;