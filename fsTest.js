// file system
const fs = require('fs');

// reading file
// fs.readFile('./tesdocs/blog1.txt', (err,data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// writing
// fs.writeFile('./tesdocs/blog1.txt', 'ganti uhuy', () => {
//     console.log('tes write file');
// });

// fs.writeFile('./tesdocs/blog2.txt', 'ganti uhuy', () => {
//     console.log('tes write file');
// });


// directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('dir created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// delete files
// if(fs.existsSync('./tesdocs/deleteme.txt')){
//     fs.unlink('./tesdocs/deleteme.txt',(err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted')
//     })
// }