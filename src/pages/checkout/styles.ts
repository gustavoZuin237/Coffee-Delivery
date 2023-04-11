import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CheckoutPageContainer = styled.div`
  display: flex;
  padding-bottom: 3rem;
`

export const PaymentAndAddressInfoContainer = styled.div``

export const Subtitle = styled.h2`
  padding-bottom: 1rem;
  background-color: white;
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
`

export const BodyContentContainer = styled.div`
  width: 40rem;
  padding: 2.5rem;
  margin-right: 2rem;
  background-color: ${(props) => props.theme['base-card']};
`

interface HeaderIconColorProp {
  iconColor: string
  theme?: any
} // !!!

export const HeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${(props: HeaderIconColorProp) =>
    props.iconColor === 'yellowDark'
      ? props.theme['yellow-dark']
      : props.theme.purple};
`

export const HeaderTextContainer = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  h4 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  input {
    padding: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
  }

  input:focus {
    border: 0;
    outline: 0;
  }
`

export const CEPInput = styled.input`
  width: 12.5rem;
`

export const StreetNameInput = styled.input`
  width: 100%;
`

export const NumberAndComplementInputContainer = styled.div`
  display: flex;
  gap: 0.875rem;
`

export const ComplementInputContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.875rem;
  background-color: ${(props) => props.theme['base-input']};

  input {
    border-right: 0;
  }
`

export const OptionalIndicatorText = styled.b`
  color: ${(props) => props.theme['base-label']};
  font-weight: 400;
  font-size: 0.875rem;
  font-style: italic;
`

export const CityAndStateInputContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 0.75rem;
`

export const CityInput = styled.input`
  width: 17.25rem;
`

export const StateInput = styled.input`
  width: 3.75rem;
`

export const PaymentOptionsContainer = styled.div`
  width: 40rem;
  padding: 2.5rem;
  margin-right: 2rem;
  margin-top: 0.75rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const PaymentOptionsButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface PaymentOptionsButtonsI {
  isSelected: boolean
  theme?: any // ! fix this
}

export const PaymentOptionsButtons = styled.button`
  width: 11.125rem;
  height: 3.18rem;
  color: ${(props) => props.theme.purple};
  border: 0;
  border-radius: 6px;
  padding: 1rem;

  background-color: ${(props: PaymentOptionsButtonsI) =>
    props.isSelected
      ? props.theme['purple-light']
      : props.theme['base-button']};
  border-color: ${(props: PaymentOptionsButtonsI) =>
    props.isSelected ? props.theme.purple : 0};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const PaymentOptionTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
`

export const ShoppingCartContainer = styled.div`
  min-width: 28rem;
  height: 31.125rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['base-card']};
`

export const ConfirmOrderButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  padding: 0.75rem 0.5rem;
  margin-inline: 2.5rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const SuccessPageLink = styled(NavLink)`
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  text-decoration: none;
`

export const ShoppingCartItemList = styled.div`
  height: 10rem;
  padding: 1rem 2.5rem 0;
  overflow: auto;
  overflow-x: hidden;
`

export const EmptyShoppingCartItemListDisplay = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
`

export const PriceSpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
`

export const PriceSpan = styled.span`
  display: flex;
  justify-content: space-between;
  padding-inline: 2.5rem;

  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
`

export const BoldText = styled.b`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
`
