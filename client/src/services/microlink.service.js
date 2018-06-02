import axios from 'axios'

export default {
  getUrl (url) {
    return axios.get('https://api.microlink.io?url=' + url + '&filter=title,description,image,lang')
  }
}
