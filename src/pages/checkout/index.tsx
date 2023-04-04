import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartItem } from './components/shoppingCartItem'
import {
  AddressInputContainer,
  BodyContentContainer,
  BoldText,
  CEPInput,
  CheckoutPageContainer,
  CityAndStateInputContainer,
  CityInput,
  ComplementInputContainer,
  HeaderContainer,
  HeaderTextContainer,
  NumberAndComplementInputContainer,
  OptionalIndicatorText,
  PaymentAndAddressInfoContainer,
  PaymentOptionsButtons,
  PaymentOptionsButtonsContainer,
  PaymentOptionsContainer,
  PaymentOptionTitle,
  PriceSpan,
  PriceSpanContainer,
  ShoppingCartContainer,
  ShoppingCartItemList,
  StateInput,
  StreetNameInput,
  Subtitle,
} from './styles'

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <PaymentAndAddressInfoContainer>
        <Subtitle>Complete seu pedido</Subtitle>

        <BodyContentContainer>
          <HeaderContainer iconColor="yellowDark">
            <MapPinLine size={22} />
            <HeaderTextContainer>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </HeaderTextContainer>
          </HeaderContainer>

          <AddressInputContainer>
            <CEPInput type="text" placeholder="CEP" />
            <StreetNameInput type="text" placeholder="Rua" />

            <NumberAndComplementInputContainer>
              <input type="text" placeholder="Número" />
              <ComplementInputContainer>
                <input type="text" placeholder="Complemento" />
                <OptionalIndicatorText>Opcional</OptionalIndicatorText>
              </ComplementInputContainer>
            </NumberAndComplementInputContainer>

            <CityAndStateInputContainer>
              <input type="text" placeholder="Bairro" />
              <CityInput type="text" placeholder="Cidade" />
              <StateInput type="text" placeholder="UF" />
            </CityAndStateInputContainer>
          </AddressInputContainer>
        </BodyContentContainer>

        <PaymentOptionsContainer>
          <HeaderContainer iconColor="purple">
            <CurrencyDollarSimple size={22} />
            <HeaderTextContainer>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </HeaderTextContainer>
          </HeaderContainer>
          <PaymentOptionsButtonsContainer>
            <PaymentOptionsButtons>
              <CreditCard size={16} />
              <PaymentOptionTitle>CARTÃO DE CRÉDITO</PaymentOptionTitle>
            </PaymentOptionsButtons>

            <PaymentOptionsButtons>
              <Bank size={16} />
              <PaymentOptionTitle>CARTÃO DE DÉBITO</PaymentOptionTitle>
            </PaymentOptionsButtons>

            <PaymentOptionsButtons>
              <Money size={16} />
              <PaymentOptionTitle>DINHEIRO</PaymentOptionTitle>
            </PaymentOptionsButtons>
          </PaymentOptionsButtonsContainer>
        </PaymentOptionsContainer>
      </PaymentAndAddressInfoContainer>

      <ShoppingCartContainer>
        <Subtitle>Cafés selecionados</Subtitle>
        <ShoppingCartItemList>
          <ShoppingCartItem />
          <ShoppingCartItem />
          <ShoppingCartItem />
        </ShoppingCartItemList>

        <PriceSpanContainer>
          <PriceSpan>
            <p>Total de itens</p>
            <p>R$29,70</p>
          </PriceSpan>
          <PriceSpan>
            <p>Entrega</p>
            <p>R$3,50</p>
          </PriceSpan>
          <PriceSpan>
            <BoldText>Total</BoldText>
            <BoldText>R$33,20</BoldText>
          </PriceSpan>
        </PriceSpanContainer>

        <NavLink to={'/success'}>CONFIRMAR PEDIDO</NavLink>
      </ShoppingCartContainer>
    </CheckoutPageContainer>
  )
}
