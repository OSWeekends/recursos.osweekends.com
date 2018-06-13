import axios from 'axios'

export default {
  getUrl (url) {
    return axios.get('https://api.microlink.io?url=' + url + '&filter=title,description,image,lang&video=false')
  },
  getScreenshot (url) {
    return axios.get('https://api.microlink.io/?url=' + url + '&screenshot&filter=screenshot')
  }
}
