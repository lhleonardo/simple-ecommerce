import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Logo, Cart } from "./styles";

import logo from "../../assets/images/logo.svg";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='e-commerce' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color='#FFF' />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
