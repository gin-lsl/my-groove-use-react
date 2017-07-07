export default class DataSource {
  static getComments() {
    return fetch('http://localhost:3000')
  }
}