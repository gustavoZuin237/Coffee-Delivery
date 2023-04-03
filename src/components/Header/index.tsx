import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import {
  AddressContainer,
  CheckoutLink,
  HeaderContainer,
  NavigationOptionsContainer,
} from './styles'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <NavigationOptionsContainer>
        <AddressContainer>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </AddressContainer>

        <CheckoutLink
          to={'/checkout'}
          title="carrinho"
          className="CheckoutPageLink"
        >
          <ShoppingCart size={22} weight="fill" />
        </CheckoutLink>
      </NavigationOptionsContainer>
    </HeaderContainer>
  )
}
