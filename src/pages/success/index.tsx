import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import * as s from './styles'

export function Success() {
  return (
    <s.ContentContainer>
      <s.SuccessfulOrder>
        <s.Title>Uhu! Pedido confirmado</s.Title>
        <s.Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </s.Subtitle>

        <s.DeliveryInfo>
          <s.PurchaseInfoContainer>
            <s.BaseIcon iconBackgroundColor="purple">
              <MapPin size={16} weight="fill" />
            </s.BaseIcon>
            <div>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> <br /> Farrapos
              - Porto Alegre, RS
            </div>
          </s.PurchaseInfoContainer>
          <s.PurchaseInfoContainer>
            <s.BaseIcon iconBackgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </s.BaseIcon>
            <div>
              Previsão de entrega <br /> <b>20 min - 30 min</b>
            </div>
          </s.PurchaseInfoContainer>
          <s.PurchaseInfoContainer>
            <s.BaseIcon iconBackgroundColor="yellowDark">
              <CurrencyDollar size={16} />
            </s.BaseIcon>
            <div>
              Pagamento na entrega <br /> <b>Cartão de Crédito</b>
            </div>
          </s.PurchaseInfoContainer>
        </s.DeliveryInfo>
      </s.SuccessfulOrder>

      <img src="/src/assets/delivery-bike.png" alt="" />
    </s.ContentContainer>
  )
}
