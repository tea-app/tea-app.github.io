// Sample
// defineで作品の情報を定義し、ここでそれを読み取って要素を生成する例.
window.onload = () => {
  const products = __TEA_PRODUCTS__

  const injectEl = document.querySelector('.main')

  products.map(product => {
    const { name, src } = product

    const productEl = document.createElement('div')
    productEl.innerHTML = `<a href=${src}>${name}</a>`
    injectEl.appendChild(productEl)
  })
}