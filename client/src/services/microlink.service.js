import axios from 'axios'

export default {
  getUrl (url) {
    return axios.get('https://api.microlink.io?url=' + url + '&filter=title,description,image,lang')
  },
  getScreenshot (url) {
    return axios.get('https://api.microlink.io/?url=' + url + '&screenshot&filter=screenshot')
  }
}
