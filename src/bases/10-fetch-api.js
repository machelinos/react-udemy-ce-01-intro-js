const apiKey = 'K2bFwNaKbTtfO37edtMPd4E4uwNmOBvK'

const fetchResp = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
)

fetchResp
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  })
  .catch(console.warn)
