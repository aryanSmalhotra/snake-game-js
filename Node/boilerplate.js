const fs = require('fs');
const foldername = process.argv[2] || 'Project'
try{
    fs.mkdirSync(foldername);
    fs.writeFileSync(`${foldername}/index.html`)
    fs.writeFileSync(`${foldername}/app.js`)
    fs.writeFileSync(`${foldername}/style.css`)

} catch(e){
    console.log("something went wrong")
    console.log(e)
}