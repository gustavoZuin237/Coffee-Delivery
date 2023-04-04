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
} from './styles'

export function Product() {
  return (
    <ProductContainer>
      <img src="src\assets\products\Americano.png" alt="" />
      <TagsContainer>tags</TagsContainer>
      <ProductTitle>title</ProductTitle>
      <DescriptionText>desc</DescriptionText>

      <CheckoutInfoContainer>
        <PriceDisplay>
          R$ <PriceNumber>9,90</PriceNumber>
        </PriceDisplay>
        <ProductAmountInputContainer>
          <SelectAmountButton>
            <Minus size={14} weight="bold" />
          </SelectAmountButton>

          <ProductAmountDisplay>0</ProductAmountDisplay>

          <SelectAmountButton>
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
