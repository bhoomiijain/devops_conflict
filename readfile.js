const fs=require('fs');

const readStream=fs.createReadStream('input.txt','utf8');

//listen to data event
readStream.on('data',function(chunk){
    console.log("Received chunk:",chunk);
});

readStream.on('end',function(){
    console.log("Finishedd reading file.");
});

