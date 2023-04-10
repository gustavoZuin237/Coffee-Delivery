import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import * as s from './styles'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/cartContext'

export function Header() {
  const { products } = useContext(CartContext)

  return (
    <s.HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <s.NavigationOptionsContainer>
        <s.AddressContainer>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </s.AddressContainer>

        <s.CheckoutLink
          to={'/checkout'}
          title="carrinho"
          className="CheckoutPageLink"
        >
          <ShoppingCart size={22} weight="fill" />
          {products.length > 0 ? (
            <s.CartNotificationPopUp>{products.length}</s.CartNotificationPopUp>
          ) : null}
        </s.CheckoutLink>
      </s.NavigationOptionsContainer>
    </s.HeaderContainer>
  )
}
