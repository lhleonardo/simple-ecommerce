import React from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

import { Container, TableProducts, Total } from "./styles";
function Cart({ products, dispatch }) {
  const handleRemoveProduct = async product => {
    const choice = await swal("Deseja realmente remover o produto?", {
      buttons: ["Não", "Sim, remova"],
    });

    if (choice) {
      dispatch({
        type: "REMOVE_FROM_CART",
        productId: product.id,
      });
    }
  };

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
                <img src={product.image} alt={product.name} />
              </td>
              <td>
                <strong>{product.name}</strong>
                <strong>{product.formattedPrice}</strong>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdRemoveCircleOutline size={20} color='#5960c1' />
                  </button>
                  <input type='number' readOnly value={product.amount} />
                  <button type='button'>
                    <MdAddCircleOutline size={20} color='#5960c1' />
                  </button>
                </div>
              </td>
              <td>
                <span>teste</span>
              </td>
              <td>
                <button
                  type='button'
                  onClick={() => handleRemoveProduct(product)}
                >
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
          <strong>{1}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart,
});

export default connect(mapStateToProps)(Cart);
