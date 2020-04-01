import React from "react";
import { Link } from "react-router-dom";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Logo, Cart } from "./styles";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <Link to='/'>
        <Logo src={logo} alt='e-commerce' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color='#FFF' />
      </Cart>
    </Container>
  );
}
