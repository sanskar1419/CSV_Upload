import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/csvUploadedFile");
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const maxSize = 15 * 1024 * 1024;
export const uploadFile = multer({
  storage: storageConfig,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "text/csv") {
      cb(null, true);
    } else {
      cb(null, false);
      cb(new Error("Only .csv file format are allowed"));
    }
  },
  limits: { fileSize: maxSize },
});
