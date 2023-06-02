import { promises as fs } from "fs";

let path = process.argv.slice(2)[0];

fs.readFile(path, "utf-8")
.then(data => fetch(JSON.parse(data)[2]))
.then( response => response.text())
.then(html => console.log(html))
.catch(err => console.log(err.message));

