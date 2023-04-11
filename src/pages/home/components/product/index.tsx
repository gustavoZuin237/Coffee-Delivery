import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import * as s from './styles'

import { ProductI } from '../../../../interfaces/product'
import { CartContext } from '../../../../contexts/cartContext'

interface ProductProps extends ProductI {}

export function Product(props: ProductProps) {
  const [productQuantityDisplay, setProductQuantityDisplay] = useState(0)

  const { handleQuantityChange } = useContext(CartContext)

  const isProductSelected = productQuantityDisplay >= 1

  function changeProductQuantity(quantity: number) {
    if (quantity < 0) {
      return
    }
    setProductQuantityDisplay(quantity)
    handleQuantityChange(props.id, quantity)
  }

  return (
    <s.ProductContainer>
      <img src={props.imgSrc} alt="" />
      <s.TagsContainer>
        {props.tags.map((tag, index) => {
          return <s.Tags key={index}>{tag}</s.Tags>
        })}
      </s.TagsContainer>
      <s.ProductTitle>{props.title}</s.ProductTitle>
      <s.DescriptionText>{props.description}</s.DescriptionText>

      <s.CheckoutInfoContainer>
        <s.PriceDisplay>
          R$
          <s.PriceNumber>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(props.price)
              .replace('R$', '')}
          </s.PriceNumber>
        </s.PriceDisplay>
        <s.ProductAmountInputContainer>
          <s.SelectAmountButton
            onClick={() => changeProductQuantity(productQuantityDisplay - 1)}
          >
            <Minus size={14} weight="bold" />
          </s.SelectAmountButton>

          <s.ProductAmountDisplay>
            {productQuantityDisplay}
          </s.ProductAmountDisplay>

          <s.SelectAmountButton
            onClick={() => changeProductQuantity(productQuantityDisplay + 1)}
          >
            <Plus size={14} weight="bold" />
          </s.SelectAmountButton>
        </s.ProductAmountInputContainer>

        {!isProductSelected ? (
          <NavLink
            onClick={(e) => e.preventDefault()}
            to={'/checkout'}
            title="finalizar compra"
          >
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        ) : (
          <NavLink to={'/checkout'} title="finalizar compra">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        )}
      </s.CheckoutInfoContainer>
    </s.ProductContainer>
  )
}
