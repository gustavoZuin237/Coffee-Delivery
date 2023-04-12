import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 23rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 1.5rem 0 3rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    max-height: 64px;
  }
`

export const PurchaseInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TitleAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  b {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const RemoveButton = styled.div`
  height: 2rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0 0.5rem;
  color: ${(props) => props.theme.purple};

  display: flex;
  align-items: center;
  gap: 0.43rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const RemoveButtonText = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const AmountButtonsContainer = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
`

export const ProductAmountDisplay = styled.p`
  color: ${(props) => props.theme['base-title']};
`

export const AmountButtons = styled.button`
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
