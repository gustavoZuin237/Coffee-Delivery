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
  const products = [
    {
      id: 1,
      title: 'Expresso Tradicional',
      tags: ['TRADICIONAL'],
      imgSrc: 'src/assets/products/Expresso Tradicional.png',
      description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
      id: 2,
      title: 'Expresso Americano',
      tags: ['TRADICIONAL'],
      imgSrc: 'src/assets/products/Americano.png',
      description: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
      id: 3,
      title: 'Expresso Cremoso',
      tags: ['TRADICIONAL'],
      imgSrc: 'src/assets/products/Expresso Cremoso.png',
      description: 'Café expresso tradicional com espuma cremosa',
    },
    {
      id: 4,
      title: 'Expresso Gelado',
      tags: ['TRADICIONAL', 'GELADO'],
      imgSrc: 'src/assets/products/Café Gelado.png',
      description: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
      id: 5,
      title: 'Café com Leite',
      tags: ['TRADICIONAL', 'COM LEITE'],
      imgSrc: 'src/assets/products/Café com Leite.png',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
    },
    {
      id: 6,
      title: 'Latte',
      tags: ['TRADICIONAL', 'COM LEITE'],
      imgSrc: 'src/assets/products/Latte.png',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
      id: 7,
      title: 'Capucciono',
      tags: ['TRADICIONAL', 'COM LEITE'],
      imgSrc: 'src/assets/products/Capuccino.png',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
      id: 8,
      title: 'Macchiato',
      tags: ['TRADICIONAL', 'COM LEITE'],
      imgSrc: 'src/assets/products/Macchiato.png',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
      id: 9,
      title: 'Moccacino',
      tags: ['TRADICIONAL', 'COM LEITE'],
      imgSrc: 'src/assets/products/Moccacino.png',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
      id: 10,
      title: 'Chocolate Quente',
      tags: ['ESPECIAL', 'COM LEITE'],
      imgSrc: 'src/assets/products/Chocolate Quente.png',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
      id: 11,
      title: 'Cubano',
      tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      imgSrc: 'src/assets/products/Cubano.png',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
      id: 12,
      title: 'Havaino',
      tags: ['ESPECIAL'],
      imgSrc: 'src/assets/products/Havaiano.png',
      description: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
      id: 13,
      title: 'Árabe',
      tags: ['ESPECIAL'],
      imgSrc: 'src/assets/products/Árabe.png',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
      id: 14,
      title: 'Irlândes',
      tags: ['ESPECIAL', 'ALCOÓLICO'],
      imgSrc: 'src/assets/products/Irlandês.png',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
  ]

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
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                tags={product.tags}
                imgSrc={product.imgSrc}
                description={product.description}
              />
            )
          })}
        </MenuItemsContainer>
      </MenuContainer>
    </>
  )
}
