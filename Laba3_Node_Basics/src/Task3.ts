import fs from "fs";
import path, {ParsedPath} from "path";
import https from "https";
import {IncomingMessage} from "http";

const filePath: string = process.argv[2];

const getHTMLpages = (filePath: string) => {
    fs.readFile(filePath, {encoding: "utf-8"}, (err, data) => {
        if (err) throw err;
        const parsedFilePath: ParsedPath = path.parse(filePath);
        const folderPath: string = path.join(parsedFilePath.dir, parsedFilePath.name);
        fs.mkdir(folderPath, {recursive: true}, (err) => {
            if (err) throw err;
            const urls: string[] = JSON.parse(data);
            for (const url of urls) {
                const onGetRequest = (res: IncomingMessage) => writeToFile(res, url, folderPath);
                https.get(url, onGetRequest);
            }
        });

    });
};

const writeToFile = (res: IncomingMessage, url: string, folderPath: string) => {
    const fileName: string = `${url.replace(/[^\w\s]/gi, '')}.txt`;
    const htmlFilePath: string = path.join(folderPath, fileName);
    const fileStream = fs.createWriteStream(htmlFilePath);
    res.on('data', chunk => {
        fileStream.write(chunk, (err) => {
            if (err) throw err;
        });
    });
    res.on("error", (err) => {
        if (err) throw err;
    });
};


getHTMLpages(filePath);
