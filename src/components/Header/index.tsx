import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import * as s from './styles'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/cartContext'

export function Header() {
  const { products, deliveryAddress } = useContext(CartContext)

  return (
    <s.HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <s.NavigationOptionsContainer>
        <s.AddressContainer>
          <MapPin size={22} weight="fill" />
          <s.AddressLink to={'/checkout'} title="endereço">
            <p>
              {deliveryAddress.CityName && deliveryAddress.State !== ''
                ? `${deliveryAddress.CityName}, ${deliveryAddress.State}`
                : `Informe o endereço`}
            </p>
          </s.AddressLink>
        </s.AddressContainer>

        <s.CheckoutLink to={'/checkout'} title="carrinho">
          <ShoppingCart size={22} weight="fill" />
          {products.length > 0 ? (
            <s.CartNotificationPopUp>{products.length}</s.CartNotificationPopUp>
          ) : null}
        </s.CheckoutLink>
      </s.NavigationOptionsContainer>
    </s.HeaderContainer>
  )
}
