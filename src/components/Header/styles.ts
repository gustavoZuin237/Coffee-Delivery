import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;
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

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
