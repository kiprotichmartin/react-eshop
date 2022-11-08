import React, { useRef } from "react";
import "../App.css";
import  "./Products";

function Modal({ open, onClose, array }) {
  const title = useRef(null);
  const description = useRef(null);
  const category = useRef(null);
  const price = useRef(null);
  const image = useRef(null);
  const rating = useRef(null);

  if (!open) {
    return null;
  }

  const handleSubmit = (event) => {
    // prevent page refresh
    event.preventDefault();

    const newProduct = {
      title: title.current.value,
      description: description.current.value,
      category: category.current.value,
      price: price.current.value,
      image: image.current.value,
      rating: rating.current.value
    }

    console.log(newProduct);

    array.push(newProduct);

    // console.log(array);

    // clear all input values in the form
    event.target.reset();
    onClose()

  }

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit} className="modal-container">
        <p className="close-btn" onClick={onClose}>
          X
        </p>
        <h3 className="modal-header">Add a product</h3>
        <label for="title">
          Title:
          <br />
          <input ref={title} type="text" name="title" />
        </label>
        <label for="descr">
          Desprition:
          <br />
          <input ref={description} type="text" name="descr" />
        </label>
        <select ref={category} name="category">
          <option value="men's clothing">Men's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <label for="price">
          Price(Ksh):
          <br />
          <input ref={price} type="text" name="price" />
        </label>
        <label for="image">
          Image:
          <br />
          <input ref={image} type="text" name="image" />
        </label>
        <label for="image">
          Rating:
          <br />
          <input ref={rating} type="number" name="rating" />
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default Modal;
