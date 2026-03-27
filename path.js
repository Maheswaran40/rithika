const path=require("path")
const fs=require("fs")
console.log(__dirname,"path");
console.log(__filename,"path");
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// fs.readFile("text.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//     const filepath=path.join(__dirname,"rithika","text.txt")
//     console.log(path.extname(filepath))
    
// })

// const filepath=path.join(__dirname,"rithika","text.txt")
//     console.log(path.extname(filepath))