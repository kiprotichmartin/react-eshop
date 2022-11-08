import React, { useRef } from "react";
import "../App.css";
import "./Products";

function Modal({ open, onClose, array }) {
  const title = useRef(null);
  const description = useRef(null);
  const category = useRef(null);
  const price = useRef(null);
  const image = useRef(null);
  const rate = useRef(null);

  if (!open) {
    return null;
  }

  const handleSubmit = (event) => {
    // prevent page refresh
    event.preventDefault();

    const newProduct = {
      id: array.length+1,
      title: title.current.value,
      description: description.current.value,
      category: category.current.value,
      price: price.current.value,
      image: image.current.value,
      rating: { rate: rate.current.value },
    };

    console.log(newProduct);

    array.push(newProduct);

    // console.log(array);

    // clear all input values in the form
    event.target.reset();
    onClose();
  };

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit} className="modal-container">
        <h3 className="modal-header">Add a product</h3>

        <label for="title">Title:</label>
        <input ref={title} type="text" name="title" />

        <label for="descr">Desprition:</label>
        <input ref={description} type="text" name="descr" />

        <label for="category">Category:</label>
        <select ref={category} name="category">
          <option value="men's clothing">Men's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <label for="price">Price(Ksh):</label>
        <input ref={price} type="text" name="price" />

        <label for="image">Image:</label>
        <input ref={image} type="text" name="image" />

        <label for="image">Rating:</label>
        <input ref={rate} type="number" name="rating" />
        <div className="action-buttons">
          <button className="submit-btn" type="submit">
            SUBMIT
          </button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
