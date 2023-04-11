import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
`

export const AddressLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 8.9rem;
  max-height: 2.375rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};
  text-decoration: none;
`

export const CheckoutLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
`

export const CartNotificationPopUp = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-dark']};

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;

  position: absolute;
  transform: translate(85%, -85%);
`

export const NavigationOptionsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;
`
