import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ProductContainer,
  Tags,
  ProductTitle,
  DescriptionText,
  CheckoutInfoContainer,
  PriceDisplay,
  PriceNumber,
  SelectAmountButton,
  ProductAmountDisplay,
  ProductAmountInputContainer,
  TagsContainer,
} from './styles'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Product() {
  const [productAmount, setProductAmount] = useState(1)

  return (
    <ProductContainer>
      <img src="src/assets/products/Expresso Tradicional.png" alt="" />
      <TagsContainer>
        <Tags>tags</Tags>
      </TagsContainer>
      <ProductTitle>productTitle</ProductTitle>
      <DescriptionText>description</DescriptionText>

      <CheckoutInfoContainer>
        <PriceDisplay>
          R$ <PriceNumber>9,90</PriceNumber>
        </PriceDisplay>
        <ProductAmountInputContainer>
          <SelectAmountButton
            onClick={() =>
              productAmount > 0
                ? setProductAmount(productAmount - 1)
                : setProductAmount(productAmount)
            }
          >
            <Minus size={14} weight="bold" />
          </SelectAmountButton>

          <ProductAmountDisplay>{productAmount}</ProductAmountDisplay>

          <SelectAmountButton
            onClick={() => setProductAmount(productAmount + 1)}
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
