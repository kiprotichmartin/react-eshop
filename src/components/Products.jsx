import { useEffect, useState } from "react";
import "../App.css";
import Modal from "./Modal";

function Products() {
  const [data, setData] = useState(null);
  const [productsArray, setProductsArray] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  function allProducts() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setProductsArray(json);
      });
  }

  useEffect(allProducts, []);

  async function allProducts2() {
    await setData(productsArray);
    console.log(data);
  }

  async function ascOrder(data) {
    let newArr = data.sort((a, b) => {
      return a.id - b.id;
    });
    await setData(newArr);
    console.log(newArr);
  }

  async function descOrder(data) {
    let newArr = data.sort((a, b) => {
      return b.id - a.id;
    });
    await setData(newArr);
    console.log(newArr);
  }

  function menClothing() {
    // allProducts2();
    let newArr = productsArray.filter(
      (item) => item.category === "men's clothing"
    );
    setData(newArr);
    console.log(newArr);
    // ascOrder(newArr);
    // descOrder(newArr);
  }

  function jewelery() {
    // allProducts2();
    let newArr = productsArray.filter((item) => item.category === "jewelery");
    setData(newArr);
    console.log(newArr);
    // const asc = document.getElementById('asc');
    // const desc = document.getElementById('desc');
    // asc.addEventListener("click", ascOrder(newArr))
    // desc.addEventListener("click", descOrder(newArr));
    // ascOrder(newArr);
    // descOrder(newArr);
  }

  function electronics() {
    // allProducts2();
    let newArr = productsArray.filter(
      (item) => item.category === "electronics"
    );
    setData(newArr);
    console.log(newArr);
    // ascOrder(newArr);
    // descOrder(newArr);
  }

  function womenClothing() {
    // allProducts2();
    let newArr = productsArray.filter(
      (item) => item.category === "women's clothing"
    );
    setData(newArr);
    console.log(newArr);
    // ascOrder(newArr);
    // descOrder(newArr);
  }

  function deleteItem(id) {
    let newArr = productsArray.filter((item) => item.id !== id);
    // console.log(newArr);
    setProductsArray(newArr);
    setData(newArr);
  }

  return (
    <div className="App">
      <Modal
        array={data}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      <header className="App-header">
        <h1>E-SHOP</h1>
      </header>

      <main className="main_container">
        <aside className="sidebar">
          <p>
            <b>Get all categories:</b>
          </p>
          {/* <button onClick={allProducts}>Fetch All categories</button> */}
          <button onClick={allProducts2}>All categories</button>
          <p>
            <b>Sort the results:</b>
          </p>
          <p>
            <b>Get specific category:</b>
          </p>
          <button onClick={menClothing}>Men's Clothing</button>
          <button onClick={jewelery}>Jewelery</button>
          <button onClick={electronics}>Electronics</button>
          <button onClick={womenClothing}>Women's Clothing</button>
        </aside>

        <article className="article">
          <nav className="nav-bar">
            <button className="add-btn" onClick={() => setOpenModal(true)}>
              Add Product
            </button>
            <div className="sort-buttons">
              <button id="asc" onClick={() => ascOrder(data)}>
                ASC
              </button>
              <button id="desc" onClick={() => descOrder(data)}>
                DESC
              </button>
            </div>
          </nav>
          <div className="list">
            {data && data.length > 0 ? (
              data.map((product) => {
                return (
                  <section className="card_section" key={product.id}>
                    <div className="card_left">
                      <img className="card_img" src={product.image} alt="" />
                    </div>
                    <div className="card_right">
                      <p className="card_title">{product.title}</p>
                      <p className="card_description">{product.description}</p>
                      <p className="card_category">
                        Category: {product.category}
                      </p>
                      <p className="card_price">Price: Ksh {product.price}</p>
                      <p className="card_rating">
                        Rating: {product.rating.rate}
                      </p>
                      <button
                        className="delete_btn"
                        onClick={() => deleteItem(product.id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </section>
                );
              })
            ) : (
              <h2>No API Response!</h2>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}

export default Products;
