const http = require("http");
const fs = require("fs");
const requests  = require("requests");
const homeFile = fs.readFileSync("index.html","utf-8");
console.log(homeFile);
const replaceVal = (tempVal,orgVal) =>{
  let temperature = tempVal.replace()
}

const server = http.createServer((req,res)=>{
    if (req.url=="/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=faf86ec4d32f3ee268303a77ff870027')
.on('data', (chunk)=> {
    const objData = JSON.parse(chunk);
    const arrayData = [objData];

    const realTimeData= arrayData.map((val)=>replaceVal(homeFile,val)).join("");
    console.log(realTimeData);
    res.write(realTimeData);
    res.write(homeFile);

  console.log(arrayData[0].main.temp);

})
 }}).on('end', (err)=> {
  if (err) return console.log('connection closed due to errors', err);
  res.end();
 
  console.log('end');
});
//     }
// })
        // res.write("Hello Safa wonderful")
        // res.end()
server.listen(80,"127.0.0.1");