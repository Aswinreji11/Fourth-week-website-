// const http = require('http')
// const fs = require('fs');
// const path = require('path');
// const server = http.createServer( ( req , res ) => {
//     console.log(req.url,req.method)

//     //set header content type

//     res.setHeader('Content-Type','text/html')

//     res.write('<p>hello world<p>'); // instead of this we can send cleaner html full page 
//                                     //by passing the whole html file

//     res.end();
    
// })



// const server = http.createServer( ( req , res ) => {
//     console.log(req.url,req.method)

//     //set header content type

//     res.setHeader('Content-Type','text/html')

//     //sent an html file

//     fs.readFile('./viewsStudy/index.html',(err,data)=>{
//         if(err){
//             console.log(err)
//             res.end()  //if there is an error it keep the req hanging that why we use an res.end in here
//         }else{
//             // res.write(data); // if we sending only one data we can just pass through end() method also
//             // res.end();
//                                 //if we write multilple things we need res.write one after other
//             res.end(data)
//         }
//     })
// })




    
// const server = http.createServer( ( req , res ) => {
//     console.log(req.url,req.method)

//     //set header content type

//     res.setHeader('Content-Type','text/html')

    
// let path ='./viewsStudy/';
// switch(req.url){
//     case '/':
        
//         path +='index.html'
//         res.statusCode = 200;
//         break;

//         case '/about':
//             path += 'about.html'
//             res.statusCode = 200;
//             break;
        
//         case '/about-me':
//             res.statusCode = 301
//             res.setHeader('Location','/about')
//             break;
    

//           default :
//           path += '404.html'
//           res.statusCode = 404;
//             break;
//        }

//     //sent an html file

//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err)
//             res.end()  //if there is an error it keep the req hanging that why we use an res.end in here
//         }else{
//             // res.write(data); // if we sending only one data we can just pass through end() method also
//             // res.end();
//                                 //if we write multilple things we need res.write one after other
//             res.end(data)
//         }
//     })
// })





// server.listen(3000,'localhost',()=>{
//     console.log('listening for request on port 3000')
// })


