import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductList, Product } from "./styles";

import api from "../../services/api";

import { formatPrice } from "../../util/format";

// const products = [
//   {
//     id: "1",
//     name: "Tenis muito legal",
//     img:
//       "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
//     price: 129.9,
//     quantity: 3,
//   },
//   {
//     id: "2",
//     name: "Tenis muito legal",
//     img:
//       "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
//     price: 129.9,
//     quantity: 3,
//   },
//   {
//     id: "3",
//     name: "Tenis muito legal",
//     img:
//       "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
//     price: 129.9,
//     quantity: 3,
//   },
//   {
//     id: "4",
//     name: "Tenis muito legal",
//     img:
//       "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
//     price: 129.9,
//     quantity: 3,
//   },
//   {
//     id: "5",
//     name: "Tenis muito legal",
//     img:
//       "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
//     price: 129.9,
//     quantity: 3,
//   },
//   {
//     id: "6",
//     name: "Tenis muito legal",
//     img:
//       "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
//     price: 129.9,
//     quantity: 3,
//   },
// ];

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const result = await api.get("/products");

    const data = result.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => fetchData(), []);

  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.id}>
          <img src={product.image} alt={product.name} />
          <strong>{product.name}</strong>
          <span>{product.formattedPrice}</span>

          <button type='button'>
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
