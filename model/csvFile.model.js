export default class CsvFileModel {
  constructor(originalFileName, filePath, filename, _id) {
    this.id = _id;
    this.originalFileName = originalFileName;
    this.filePath = filePath;
    this.filename = filename;
  }
}
