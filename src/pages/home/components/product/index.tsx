import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

import {
  ProductContainer,
  ProductTitle,
  DescriptionText,
  CheckoutInfoContainer,
  PriceDisplay,
  PriceNumber,
  SelectAmountButton,
  ProductAmountDisplay,
  ProductAmountInputContainer,
  TagsContainer,
  Tags,
} from './styles'
import { ProductI } from '../../../../interfaces/product'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/cartContext'

interface ProductProps extends ProductI {}

export function Product(props: ProductProps) {
  const [productQuantityDisplay, setProductQuantityDisplay] = useState(0)

  const { handleQuantityChange } = useContext(CartContext)

  function changeProductQuantity(quantity: number) {
    if (quantity < 0) {
      return
    }
    setProductQuantityDisplay(quantity)
    handleQuantityChange(props.id, quantity)
  }

  return (
    <ProductContainer>
      <img src="src\assets\products\Americano.png" alt="" />
      <TagsContainer>
        {props.tags.map((tag, index) => {
          return <Tags key={index}>{tag}</Tags>
        })}
      </TagsContainer>
      <ProductTitle>{props.title}</ProductTitle>
      <DescriptionText>{props.description}</DescriptionText>

      <CheckoutInfoContainer>
        <PriceDisplay>
          R$
          <PriceNumber>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(props.price)
              .replace('R$', '')}
          </PriceNumber>
        </PriceDisplay>
        <ProductAmountInputContainer>
          <SelectAmountButton
            onClick={() => changeProductQuantity(productQuantityDisplay - 1)}
          >
            <Minus size={14} weight="bold" />
          </SelectAmountButton>

          <ProductAmountDisplay>{productQuantityDisplay}</ProductAmountDisplay>

          <SelectAmountButton
            onClick={() => changeProductQuantity(productQuantityDisplay + 1)}
          >
            <Plus size={14} weight="bold" />
          </SelectAmountButton>
        </ProductAmountInputContainer>

        <NavLink to={'/checkout'} title="finalizar compra">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </CheckoutInfoContainer>
    </ProductContainer>
  )
}
