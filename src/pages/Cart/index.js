import React from "react";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { Container, TableProducts, Total } from "./styles";
import { formatPrice } from "../../util/format";

const products = [
  {
    id: "1",
    name: "Tenis muito legal",
    img:
      "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
    price: 129.9,
    quantity: 3,
  },
  {
    id: "2",
    name: "Tenis muito legal",
    img:
      "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
    price: 129.9,
    quantity: 3,
  },
  {
    id: "3",
    name: "Tenis muito legal",
    img:
      "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
    price: 129.9,
    quantity: 3,
  },
  {
    id: "4",
    name: "Tenis muito legal",
    img:
      "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
    price: 129.9,
    quantity: 3,
  },
  {
    id: "5",
    name: "Tenis muito legal",
    img:
      "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
    price: 129.9,
    quantity: 3,
  },
  {
    id: "6",
    name: "Tenis muito legal",
    img:
      "https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg",
    price: 129.9,
    quantity: 3,
  },
];

const totalPrice = formatPrice(
  products.reduce(
    (result, current) => (result += current.price * current.quantity)
  )
);

export default function Cart() {
  return (
    <Container>
      <TableProducts>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.img} alt={product.name} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <strong>R$ {product.price}</strong>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdRemoveCircleOutline size={20} color='#5960c1' />
                  </button>
                  <input type='number' readOnly value={product.quantity} />
                  <button type='button'>
                    <MdAddCircleOutline size={20} color='#5960c1' />
                  </button>
                </div>
              </td>
              <td>
                <span>{(product.price * product.quantity).toFixed(2)}</span>
              </td>
              <td>
                <button type='button'>
                  <MdDelete size={20} color='#5960c1' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableProducts>

      <footer>
        <button type='button'>Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{totalPrice}</strong>
        </Total>
      </footer>
    </Container>
  );
}
