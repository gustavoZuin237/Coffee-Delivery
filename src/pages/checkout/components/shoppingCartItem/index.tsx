import { useContext, useState } from 'react'

import { Minus, Plus, Trash } from 'phosphor-react'

import * as s from './styles'

import { CartContext, CartProductI } from '../../../../contexts/cartContext'

interface ShoppingCartItemI extends CartProductI {}

export function ShoppingCartItem(props: ShoppingCartItemI) {
  const [productQuantityDisplay, setProductQuantityDisplay] = useState(
    props.quantity,
  )

  const { handleQuantityChange } = useContext(CartContext)

  function handleProductQuantityChange(quantity: number) {
    setProductQuantityDisplay(quantity)
    handleQuantityChange(props.id, quantity)
  }

  return (
    <s.CardContainer>
      <img src={props.imgSrc} alt="" />
      <s.PurchaseInfoContainer>
        <s.TitleAndPriceContainer>
          <p>{props.title}</p>
          <b>
            R$
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(props.price)
              .replace('R$', '')}
          </b>
        </s.TitleAndPriceContainer>
        <s.ActionButtonsContainer>
          <s.AmountButtonsContainer>
            <s.AmountButtons
              onClick={() =>
                handleProductQuantityChange(productQuantityDisplay - 1)
              }
            >
              <Minus size={14} weight="bold" />
            </s.AmountButtons>

            <s.ProductAmountDisplay>
              {productQuantityDisplay}
            </s.ProductAmountDisplay>

            <s.AmountButtons
              onClick={() =>
                handleProductQuantityChange(productQuantityDisplay + 1)
              }
            >
              <Plus size={14} weight="bold" />
            </s.AmountButtons>
          </s.AmountButtonsContainer>

          <s.RemoveButton onClick={() => handleQuantityChange(props.id, 0)}>
            <Trash size={16} />
            <span>REMOVER</span>
          </s.RemoveButton>
        </s.ActionButtonsContainer>
      </s.PurchaseInfoContainer>
    </s.CardContainer>
  )
}
