let res = {}
export default {
  form (resource) {
    res = resource
  },
  getResource () {
    return res
  }
}
