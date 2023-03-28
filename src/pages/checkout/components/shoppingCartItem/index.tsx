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

export function ShoppingCartItem() {
  return (
    <CardContainer>
      <img src="src/assets/products/expresso-tradicional.png" alt="" />
      <PurchaseInfoContainer>
        <TitleAndPriceContainer>
          <p>Expresso Tradicional</p>
          <b>R$9,90</b>
        </TitleAndPriceContainer>
        <ActionButtonsContainer>
          <AmountButtonsContainer>
            <AmountButtons>
              <Minus size={14} weight="bold" />
            </AmountButtons>

            <ProductAmountDisplay>1</ProductAmountDisplay>

            <AmountButtons>
              <Plus size={14} weight="bold" />
            </AmountButtons>
          </AmountButtonsContainer>

          <RemoveButton>
            <Trash size={16} />
            <span>REMOVER</span>
          </RemoveButton>
        </ActionButtonsContainer>
      </PurchaseInfoContainer>
    </CardContainer>
  )
}
