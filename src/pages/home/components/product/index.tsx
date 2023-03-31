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

interface ProductProps {
  id?: number
  title: string
  tags: string[]
  imgSrc: string
  description: string
}

export function Product(props: ProductProps) {
  const [productAmount, setProductAmount] = useState(0)

  function changeProductAmount(action: string) {
    if (action === 'decrease' && productAmount > 0) {
      setProductAmount(productAmount - 1)
    } else if (action === 'increase') {
      setProductAmount(productAmount + 1)
    }
  }

  return (
    <ProductContainer>
      <img src={props.imgSrc} alt="" />
      <TagsContainer>
        {props.tags.map((tag) => {
          return <Tags key={tag.length}>{tag}</Tags>
        })}
      </TagsContainer>
      <ProductTitle>{props.title}</ProductTitle>
      <DescriptionText>{props.description}</DescriptionText>

      <CheckoutInfoContainer>
        <PriceDisplay>
          R$ <PriceNumber>9,90</PriceNumber>
        </PriceDisplay>
        <ProductAmountInputContainer>
          <SelectAmountButton onClick={() => changeProductAmount('decrease')}>
            <Minus size={14} weight="bold" />
          </SelectAmountButton>

          <ProductAmountDisplay>{productAmount}</ProductAmountDisplay>

          <SelectAmountButton onClick={() => changeProductAmount('increase')}>
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
