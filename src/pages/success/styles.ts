import styled from 'styled-components'
import { iconPropsI } from '../home/styles'

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    margin-top: 6rem;
    max-height: 293px;
  }
`

export const SuccessfulOrder = styled.div``

export const FailedOrder = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.p`
  font-size: 1.125rem;
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.yellow};
  border-radius: 6px 36px;
`

export const PurchaseInfoContainer = styled.span`
  min-width: 22.125rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const BaseIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 100%;
  color: ${(props) => props.theme.white};
  background-color: ${(props: iconPropsI) =>
    props.iconBackgroundColor === 'yellowDark'
      ? props.theme['yellow-dark']
      : props.iconBackgroundColor === 'yellow'
      ? props.theme.yellow
      : props.theme.purple};
`
