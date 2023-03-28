import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  ContentContainer,
  Title,
  Subtitle,
  DeliveryInfo,
  PurchaseInfoContainer,
  BaseIcon,
} from './styles'

export function Success() {
  return (
    <ContentContainer>
      <div>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>

        <DeliveryInfo>
          <PurchaseInfoContainer>
            <BaseIcon>
              <MapPin size={16} weight="fill" />
            </BaseIcon>
            <div>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br /> Farrapos
              - Porto Alegre, RS
            </div>
          </PurchaseInfoContainer>
          <PurchaseInfoContainer>
            <BaseIcon yellow>
              <Timer size={16} weight="fill" />
            </BaseIcon>
            <div>
              Previsão de entrega <br /> <b>20 min - 30 min</b>
            </div>
          </PurchaseInfoContainer>
          <PurchaseInfoContainer>
            <BaseIcon yellowDark>
              <CurrencyDollar size={16} />
            </BaseIcon>
            <div>
              Pagamento na entrega <br /> <b>Cartão de Crédito</b>
            </div>
          </PurchaseInfoContainer>
        </DeliveryInfo>
      </div>

      <img src="/src/assets/delivery-bike.png" alt="" />
    </ContentContainer>
  )
}
