const mount = (el) => {
  let products = `
    <div>post1</div>
    <br />
    <div>post2</div>  
  `;

  el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
}

export { mount };