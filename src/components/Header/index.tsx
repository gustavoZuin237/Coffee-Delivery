import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { AddressContainer, HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <span>
        <AddressContainer>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </AddressContainer>

        <NavLink to={'/checkout'} title="carrinho" className="CheckoutPageLink">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </span>
    </HeaderContainer>
  )
}
