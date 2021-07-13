/*
This file creates all the template files etc. that you need when starting a website

By: Chris Jarvis
*/
const dir = process.argv[2];
const fs = require('fs');
const util = require('util');

index = "const express = require('express');\r\nconst ejs = require('ejs');\r\nconst app = express();\r\n";
head = "header";
foot = "footer";


const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile)

async function makeDirs(folder) {
    if(!folder){
        console.log("Please enter a valid name.")
    }
    try {
        return await mkdir(`./${folder}`);
    } catch (err) {
        console.log(`Error creating directory: ${err}`)
    }
}
async function makeFiles(folder, file, content) {
    if(!folder){
        console.log("Please enter a valid name.")
    }
    try {
        return await writeFile(`./${folder}/${file}`, content);
    } catch (err) {
        console.log(`Error creating directory: ${err}`)
    }
}

makeDirs(`${dir}`)
.then(makeDirs(`${dir}/views`))
.then(makeDirs(`${dir}/views/partials`))
.then(makeDirs(`${dir}/public`))
.then(makeDirs(`${dir}/public/css`))
.then(makeDirs(`${dir}/public/js`))

makeFiles(`${dir}`, 'index.js', index)
.then(makeFiles(`${dir}/views/partials`, 'header.ejs', head))
.then(makeFiles(`${dir}/views/partials`, 'footer.ejs', foot))
.then(makeFiles(`${dir}/views/partials`, 'nav.ejs', 'none'))