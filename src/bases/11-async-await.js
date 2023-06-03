export const getImagen = async () => {
  const apiKey = 'K2bFwNaKbTtfO37edtMPd4E4uwNmOBvK'
  try {
    const fetchResp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
    )
    const { data } = await fetchResp.json()
    return data.images.original.url
  } catch (error) {
    return null
  }
}

/* const showImg = async () => {
  try {
    const imgUrl = await getImagen()
    if (imgUrl) {
      const img = document.createElement('img')
      img.src = imgUrl
      document.body.append(img)
    }
  } catch (error) {
    console.warn(error)
  }
} */

// showImg()
