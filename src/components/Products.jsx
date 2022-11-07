import { useState } from "react";
import "../App.css";

function Products() {
  const [data, setData] = useState(null);

  function allProducts() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  function ascOrder() {
    fetch("https://fakestoreapi.com/products?sort=asc")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  function descOrder() {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  function menClothing() {
    fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  function jewelery() {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  function electronics() {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  function womenClothing() {
    fetch("https://fakestoreapi.com/products/category/women%27s%20clothing")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>E-SHOP</h1>
      </header>
      <main className="main_container">
        <aside className="sidebar">
          <p>
            <b>Get all categories:</b>
          </p>
          <button onClick={allProducts}>All categories</button>
          <p>
            <b>Sort the results:</b>
          </p>
          <button onClick={ascOrder}>ASC</button>
          <button onClick={descOrder}>DESC</button>
          <p>
            <b>Get specific category:</b>
          </p>
          <button onClick={menClothing}>Men's Clothing</button>
          <button onClick={jewelery}>Jewelery</button>
          <button onClick={electronics}>Electronics</button>
          <button onClick={womenClothing}>Women's Clothing</button>
        </aside>
        <article className="article">
          {data && data.length > 0 ? (
            data.map((product) => {
              return (
                <section className="card_section" key={product.id}>
                  <img src={product.image} alt="" width="200" height="200" />
                  <p className="card_title">{product.title}</p>
                  <p className="card_category">Category: {product.category}</p>
                  <p className="card_price">Price: Ksh {product.price}</p>
                  <p className="card_rating">Rating: {product.rating.rate}</p>
                </section>
              );
            })
          ) : (
            <h2>No API Response!</h2>
          )}
        </article>
      </main>
    </div>
  );
}

export default Products;
