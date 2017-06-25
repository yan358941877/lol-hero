import Immutable from 'immutable'

function fetch(path) {
  return $.ajax({
    type: 'GET',
    url: path,
    dataType: 'json'
  })
}

function responseHandler(response) {
  return Immutable.fromJS(response)
}
export default function get(path) {
  return async (heroID) => {
    let url = null
    if (typeof path === 'function') {
      url = path(heroID)
    } else {
      url = path
    }
    // if (storage) {
    //   if (storage.getItem(heroID)) {
    //     const cacheObj = JSON.parse(storage.getItem(heroID))
    //     return responseHandler(cacheObj)
    //   }
    // }

    const response = await fetch(url)
    // if (response) {
    //   storage.setItem('heroID', JSON.stringify(response))
    // }
    return responseHandler(response)
  }
}
