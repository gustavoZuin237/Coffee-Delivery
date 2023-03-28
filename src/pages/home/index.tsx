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
              <Icon yellowDark>
                <ShoppingCart size={16} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </IconBox>

            <IconBox>
              <Icon gray>
                <Package size={16} weight="fill" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </IconBox>

            <IconBox>
              <Icon yellow>
                <Timer size={16} weight="fill" />
              </Icon>
              <p>Entrega rápida e rastreada</p>
            </IconBox>

            <IconBox>
              <Icon>
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
          <Product />
          <Product />
          <Product />
          <Product />
        </MenuItemsContainer>
      </MenuContainer>
    </>
  )
}
