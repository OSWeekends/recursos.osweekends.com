import axios from 'axios'

export default {
  getUrl (url) {
    return axios.get('https://api.microlink.io/?url=' + url + '&screenshot&device_scale_factor=0.8&type=jpeg&quality=50&filter=title,description,screenshot')
  }
}
