import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList, Product } from "./styles";

import api from "../../services/api";

import { formatPrice } from "../../util/format";

function Home({ dispatch }) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const result = await api.get("/products");

    const data = result.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = product => {
    dispatch({
      type: "ADD_TO_CART",
      product,
    });
  };

  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.id}>
          <img src={product.image} alt={product.name} />
          <strong>{product.name}</strong>
          <span>{product.formattedPrice}</span>

          <button type='button' onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color='#FFF' /> {product.quantity}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </Product>
      ))}
    </ProductList>
  );
}

export default connect()(Home);
