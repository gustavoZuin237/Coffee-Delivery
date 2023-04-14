import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { productsList } from '../../productsList'

import { Product } from './components/product'

import * as s from './styles'

export function Home() {
  return (
    <>
      <s.DisplayContainer>
        <div>
          <s.Title>Encontre o café perfeito para qualquer hora do dia</s.Title>
          <s.Paragraph>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </s.Paragraph>
          <s.IconsBoxContainer>
            <s.IconBox>
              <s.Icon iconBackgroundColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </s.Icon>
              <p>Compra simples e segura</p>
            </s.IconBox>

            <s.IconBox>
              <s.Icon iconBackgroundColor="gray">
                <Package size={16} weight="fill" />
              </s.Icon>
              <p>Embalagem mantém o café intacto</p>
            </s.IconBox>

            <s.IconBox>
              <s.Icon iconBackgroundColor="yellow">
                <Timer size={16} weight="fill" />
              </s.Icon>
              <p>Entrega rápida e rastreada</p>
            </s.IconBox>

            <s.IconBox>
              <s.Icon iconBackgroundColor="purple">
                <Coffee size={16} weight="fill" />
              </s.Icon>
              <p>O café chega fresquinho até você</p>
            </s.IconBox>
          </s.IconsBoxContainer>
        </div>

        <img src="/src/assets/Coffee-cup.png" alt="" />
      </s.DisplayContainer>

      <s.MenuContainer>
        <s.Subtitle>Nossos cafés</s.Subtitle>

        <s.MenuItemsContainer>
          {productsList.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </s.MenuItemsContainer>
      </s.MenuContainer>
    </>
  )
}
