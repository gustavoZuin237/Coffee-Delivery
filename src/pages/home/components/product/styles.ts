import styled from 'styled-components'

export const ProductContainer = styled.div`
  width: 16rem;
  margin-top: 3.375rem;
  padding-bottom: 1.25rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 120px;
    position: relative;
    bottom: 8%;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tags = styled.b`
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.625rem;
  font-weight: 700;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100vw;
`

export const ProductTitle = styled.h4`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const DescriptionText = styled.p`
  width: 13.5rem;
  padding-inline: 0.4rem;
  font-size: 0.85rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  margin-bottom: 2.28rem;
`

export const CheckoutInfoContainer = styled.div`
  display: flex;

  a {
    width: 2.375rem;
    height: 2.375rem;
    border: 0;
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const PriceDisplay = styled.span`
  margin-right: 1.4375rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
`

export const PriceNumber = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme['base-text']};
`

export const ProductAmountInputContainer = styled.div`
  height: 2.375rem;
  display: flex;
  align-items: center;
  width: 4.5rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  margin-right: 0.5rem;
`

export const SelectAmountButton = styled.button`
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.purple};

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ProductAmountDisplay = styled.p`
  text-align: center;
  width: 2.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};
`
