import { useContext, useState } from 'react'

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
  const [cepInput, setCepInput] = useState('')
  const [streetNameInput, setStreetNameInput] = useState('')
  const [houseNumberInput, setHouseNumberInput] = useState('')
  const [complementInput, setComplementInput] = useState('')
  const [neighborhoodInput, setNeighborhoodInput] = useState('')
  const [cityNameInput, setCityNameInput] = useState('')
  const [stateNameInput, setStateNameInput] = useState('')

  const { products, setDeliveryAddress, paymentOption, setPaymentOption } =
    useContext(CartContext)

  const productPrice = products.map((product) => {
    return product.price * product.quantity
  })

  const totalPrice = determineTotalPrice(productPrice, products.length)

  const isCartEmpty = products.length === 0
  let addressNotDefined = false
  const isPaymentOptionSelected = paymentOption.length === 0

  function determineTotalPrice(values: number[], amount: number) {
    let sum = 0

    for (let i = 0; i < amount; i++) {
      sum += values[i]
    }

    return sum
  }

  function handleDeliveryInputsChange(
    setFunction: (value: string) => void,
    value: string,
  ) {
    setFunction(value)

    setDeliveryAddress({
      CEP: cepInput,
      StreetName: streetNameInput,
      HouseNumber: houseNumberInput,
      Complement: complementInput,
      Neighborhood: neighborhoodInput,
      CityName: cityNameInput,
      State: stateNameInput,
    })

    addressNotDefined = true
  }

  function handlePaymentOptionsChange(buttonOption: string) {
    setPaymentOption(buttonOption)
  }

  const blockButton =
    isCartEmpty || addressNotDefined || isPaymentOptionSelected

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

          <form>
            <s.AddressInputContainer>
              <s.CEPInput
                onChange={(e) =>
                  handleDeliveryInputsChange(setCepInput, e.target.value)
                }
                type="text"
                placeholder="CEP"
                required
              />
              <s.StreetNameInput
                onChange={(e) =>
                  handleDeliveryInputsChange(setStreetNameInput, e.target.value)
                }
                type="text"
                placeholder="Rua"
                required
              />

              <s.NumberAndComplementInputContainer>
                <input
                  onChange={(e) =>
                    handleDeliveryInputsChange(
                      setHouseNumberInput,
                      e.target.value,
                    )
                  }
                  type="text"
                  placeholder="Número"
                  required
                />
                <s.ComplementInputContainer>
                  <input
                    onChange={(e) =>
                      handleDeliveryInputsChange(
                        setComplementInput,
                        e.target.value,
                      )
                    }
                    type="text"
                    placeholder="Complemento"
                    required
                  />
                  <s.OptionalIndicatorText>Opcional</s.OptionalIndicatorText>
                </s.ComplementInputContainer>
              </s.NumberAndComplementInputContainer>

              <s.CityAndStateInputContainer>
                <input
                  onChange={(e) =>
                    handleDeliveryInputsChange(
                      setNeighborhoodInput,
                      e.target.value,
                    )
                  }
                  type="text"
                  placeholder="Bairro"
                  required
                />
                <s.CityInput
                  onChange={(e) =>
                    handleDeliveryInputsChange(setCityNameInput, e.target.value)
                  }
                  type="text"
                  placeholder="Cidade"
                  required
                />
                <s.StateInput
                  onChange={(e) =>
                    handleDeliveryInputsChange(
                      setStateNameInput,
                      e.target.value,
                    )
                  }
                  type="text"
                  placeholder="UF"
                  required
                />
              </s.CityAndStateInputContainer>
            </s.AddressInputContainer>
          </form>
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
            {paymentOption === 'Cartão de Crédito' ? (
              <s.SelectedPaymentOptionsButton
                onClick={() => handlePaymentOptionsChange('Cartão de Crédito')}
              >
                <CreditCard size={16} />
                <s.PaymentOptionTitle>CARTÃO DE CRÉDITO</s.PaymentOptionTitle>
              </s.SelectedPaymentOptionsButton>
            ) : (
              <s.PaymentOptionsButton
                onClick={() => handlePaymentOptionsChange('Cartão de Crédito')}
              >
                <CreditCard size={16} />
                <s.PaymentOptionTitle>CARTÃO DE CRÉDITO</s.PaymentOptionTitle>
              </s.PaymentOptionsButton>
            )}

            {paymentOption === 'Cartão de Débito' ? (
              <s.SelectedPaymentOptionsButton
                onClick={() => handlePaymentOptionsChange('Cartão de Débito')}
              >
                <Bank size={16} />
                <s.PaymentOptionTitle>CARTÃO DE DÉBITO</s.PaymentOptionTitle>
              </s.SelectedPaymentOptionsButton>
            ) : (
              <s.PaymentOptionsButton
                onClick={() => handlePaymentOptionsChange('Cartão de Débito')}
              >
                <Bank size={16} />
                <s.PaymentOptionTitle>CARTÃO DE DÉBITO</s.PaymentOptionTitle>
              </s.PaymentOptionsButton>
            )}
            {paymentOption === 'Dinheiro' ? (
              <s.SelectedPaymentOptionsButton
                onClick={() => handlePaymentOptionsChange('Dinheiro')}
              >
                <Money size={16} />
                <s.PaymentOptionTitle>DINHEIRO</s.PaymentOptionTitle>
              </s.SelectedPaymentOptionsButton>
            ) : (
              <s.PaymentOptionsButton
                onClick={() => handlePaymentOptionsChange('Dinheiro')}
              >
                <Money size={16} />
                <s.PaymentOptionTitle>DINHEIRO</s.PaymentOptionTitle>
              </s.PaymentOptionsButton>
            )}
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

        <s.ConfirmOrderButton disabled={blockButton}>
          {blockButton ? (
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
