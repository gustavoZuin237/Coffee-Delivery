import { useContext } from 'react'

import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { ShoppingCartItem } from './components/shoppingCartItem'

import { CartContext } from '../../contexts/cartContext'

import * as s from './styles'

export function Checkout() {
  const { products } = useContext(CartContext)

  const productPrice = products.map((product) => {
    return product.price * product.quantity
  })

  function findSum(arr: number[], size: number) {
    let sum = 0

    for (let i = 0; i < size; i++) {
      sum += arr[i]
    }

    return sum
  }

  const totalPrice = findSum(productPrice, products.length)

  const isCartEmpty = products.length === 0

  return (
    <s.CheckoutPageContainer>
      <s.PaymentAndAddressInfoContainer>
        <s.Subtitle>Complete seu pedido</s.Subtitle>

        <s.BodyContentContainer>
          <s.HeaderContainer iconColor="yellowDark">
            <MapPinLine size={22} />
            <s.HeaderTextContainer>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </s.HeaderTextContainer>
          </s.HeaderContainer>

          <s.AddressInputContainer>
            <s.CEPInput type="text" placeholder="CEP" />
            <s.StreetNameInput type="text" placeholder="Rua" />

            <s.NumberAndComplementInputContainer>
              <input type="text" placeholder="Número" />
              <s.ComplementInputContainer>
                <input type="text" placeholder="Complemento" />
                <s.OptionalIndicatorText>Opcional</s.OptionalIndicatorText>
              </s.ComplementInputContainer>
            </s.NumberAndComplementInputContainer>

            <s.CityAndStateInputContainer>
              <input type="text" placeholder="Bairro" />
              <s.CityInput type="text" placeholder="Cidade" />
              <s.StateInput type="text" placeholder="UF" />
            </s.CityAndStateInputContainer>
          </s.AddressInputContainer>
        </s.BodyContentContainer>

        <s.PaymentOptionsContainer>
          <s.HeaderContainer iconColor="purple">
            <CurrencyDollarSimple size={22} />
            <s.HeaderTextContainer>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </s.HeaderTextContainer>
          </s.HeaderContainer>
          <s.PaymentOptionsButtonsContainer>
            <s.PaymentOptionsButtons>
              <CreditCard size={16} />
              <s.PaymentOptionTitle>CARTÃO DE CRÉDITO</s.PaymentOptionTitle>
            </s.PaymentOptionsButtons>

            <s.PaymentOptionsButtons>
              <Bank size={16} />
              <s.PaymentOptionTitle>CARTÃO DE DÉBITO</s.PaymentOptionTitle>
            </s.PaymentOptionsButtons>

            <s.PaymentOptionsButtons>
              <Money size={16} />
              <s.PaymentOptionTitle>DINHEIRO</s.PaymentOptionTitle>
            </s.PaymentOptionsButtons>
          </s.PaymentOptionsButtonsContainer>
        </s.PaymentOptionsContainer>
      </s.PaymentAndAddressInfoContainer>

      <s.ShoppingCartContainer>
        <s.Subtitle>Cafés selecionados</s.Subtitle>
        <s.ShoppingCartItemList>
          {products.length > 0 ? (
            products.map((product) => (
              <ShoppingCartItem key={product.id} {...product} />
            ))
          ) : (
            <s.EmptyShoppingCartItemListDisplay>
              Não há itens selecionados <br /> Vá ao menu e escolha seu café!
            </s.EmptyShoppingCartItemListDisplay>
          )}
        </s.ShoppingCartItemList>

        <s.PriceSpanContainer>
          <s.PriceSpan>
            <p>Total de itens</p>
            <p>
              R$
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
                .format(totalPrice)
                .replace('R$', '')}
            </p>
          </s.PriceSpan>
          <s.PriceSpan>
            <p>Entrega</p>
            <p>R$3,50</p>
          </s.PriceSpan>
          <s.PriceSpan>
            <s.BoldText>Total</s.BoldText>
            <s.BoldText>
              R$
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
                .format(totalPrice + 3.5)
                .replace('R$', '')}
            </s.BoldText>
          </s.PriceSpan>
        </s.PriceSpanContainer>

        <s.ConfirmOrderButton disabled={isCartEmpty}>
          {isCartEmpty ? (
            <s.SuccessPageLink
              to={'/success'}
              onClick={(e) => e.preventDefault()}
              style={{ cursor: 'not-allowed' }}
            >
              CONFIRMAR PEDIDO
            </s.SuccessPageLink>
          ) : (
            <s.SuccessPageLink to={'/success'}>
              CONFIRMAR PEDIDO
            </s.SuccessPageLink>
          )}
        </s.ConfirmOrderButton>
      </s.ShoppingCartContainer>
    </s.CheckoutPageContainer>
  )
}
