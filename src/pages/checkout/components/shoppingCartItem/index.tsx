import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ActionButtonsContainer,
  AmountButtons,
  AmountButtonsContainer,
  CardContainer,
  ProductAmountDisplay,
  PurchaseInfoContainer,
  RemoveButton,
  TitleAndPriceContainer,
} from './styles'
import { CartContext, CartProductI } from '../../../../contexts/cartContext'
import { useContext, useState } from 'react'

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
    <CardContainer>
      <img src={props.imgSrc} alt="" />
      <PurchaseInfoContainer>
        <TitleAndPriceContainer>
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
        </TitleAndPriceContainer>
        <ActionButtonsContainer>
          <AmountButtonsContainer>
            <AmountButtons
              onClick={() =>
                handleProductQuantityChange(productQuantityDisplay - 1)
              }
            >
              <Minus size={14} weight="bold" />
            </AmountButtons>

            <ProductAmountDisplay>
              {productQuantityDisplay}
            </ProductAmountDisplay>

            <AmountButtons
              onClick={() =>
                handleProductQuantityChange(productQuantityDisplay + 1)
              }
            >
              <Plus size={14} weight="bold" />
            </AmountButtons>
          </AmountButtonsContainer>

          <RemoveButton onClick={() => handleQuantityChange(props.id, 0)}>
            <Trash size={16} />
            <span>REMOVER</span>
          </RemoveButton>
        </ActionButtonsContainer>
      </PurchaseInfoContainer>
    </CardContainer>
  )
}
