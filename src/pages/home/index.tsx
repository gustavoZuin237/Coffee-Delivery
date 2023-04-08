import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { Product } from './components/product'

import {
  DisplayContainer,
  Title,
  Paragraph,
  IconsBoxContainer,
  IconBox,
  Icon,
  MenuContainer,
  Subtitle,
  MenuItemsContainer,
} from './styles'
import { products } from '../../products'

export function Home() {
  return (
    <>
      <DisplayContainer>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Paragraph>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Paragraph>
          <IconsBoxContainer>
            <IconBox>
              <Icon iconBackgroundColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </IconBox>

            <IconBox>
              <Icon iconBackgroundColor="gray">
                <Package size={16} weight="fill" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </IconBox>

            <IconBox>
              <Icon iconBackgroundColor="yellow">
                <Timer size={16} weight="fill" />
              </Icon>
              <p>Entrega rápida e rastreada</p>
            </IconBox>

            <IconBox>
              <Icon iconBackgroundColor="purple">
                <Coffee size={16} weight="fill" />
              </Icon>
              <p>O café chega fresquinho até você</p>
            </IconBox>
          </IconsBoxContainer>
        </div>

        <img src="/src/assets/Coffee-cup.png" alt="" />
      </DisplayContainer>

      <MenuContainer>
        <Subtitle>Nossos cafés</Subtitle>

        <MenuItemsContainer>
          {products.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </MenuItemsContainer>
      </MenuContainer>
    </>
  )
}
