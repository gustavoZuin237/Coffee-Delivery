import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import * as s from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'

export function Success() {
  const { deliveryAddress, paymentOption } = useContext(CartContext)

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
              Entrega em{' '}
              <b>
                {`${deliveryAddress.StreetName}`},{' '}
                {`${deliveryAddress.HouseNumber}`}
              </b>{' '}
              <br /> {`${deliveryAddress.Neighborhood}`} -
              {`${deliveryAddress.CityName}`}, {`${deliveryAddress.State}`}
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
              Pagamento na entrega <br /> <b>{paymentOption}</b>
            </div>
          </s.PurchaseInfoContainer>
        </s.DeliveryInfo>
      </s.SuccessfulOrder>

      <img src="/src/assets/delivery-bike.png" alt="" />
    </s.ContentContainer>
  )
}
