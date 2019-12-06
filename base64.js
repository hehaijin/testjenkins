const fs= require('fs');

let fileBuffer = "data:application/pdf;base64,JVBERi0xLjQKJSDi48/..........."
let base64file = fileBuffer.split(';base64,').pop();
fs.writeFileSync('download.pdf',base64file,{encoding:'base64'},function(err){
	console.log('callback');
    if(err === null){
        console.log("file created");
        return;
    }
    else{
        console.log(err);
        return;
    }
})