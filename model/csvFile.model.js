export default class CsvFileModel {
  constructor(fileName, filePath, file, _id) {
    this.id = _id;
    this.fileName = fileName;
    this.filePath = filePath;
    this.file = file;
  }
}
