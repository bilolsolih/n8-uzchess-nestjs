// static filelar bilan ishlash
import {diskStorage} from "multer";

export const multerStorageOptions = diskStorage({
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    }
});