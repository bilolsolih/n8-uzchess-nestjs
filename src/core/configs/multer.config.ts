// static filelar bilan ishlash
import {diskStorage} from "multer";
import {join} from "path";
import fs from 'fs';

interface Params {
    destination: string,
    extensions: string[]
}

export function multerStorageOptions({destination, extensions}: Params) {
    return diskStorage({
        filename: (req, file, callback) => {
            const extension = file.originalname.split(".").at(-1);

            if (!extension || !extensions.includes(extension))
                return callback(new Error("This extension is not allowed."), "");

            const fileName = `file_${Date.now()}.${extension}`;
            callback(null, fileName);
        },
        destination: (req, file, callback) => {
            const path = join(__dirname,'../../..', 'uploads', destination);

            if (!fs.existsSync(path))
                fs.mkdirSync(path, {recursive: true});

            callback(null, 'uploads/' + destination);
        }
    });
}


