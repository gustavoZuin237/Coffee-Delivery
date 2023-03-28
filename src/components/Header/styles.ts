import styled from 'styled-components'

export const HeaderContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 2rem;

  & span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  & .CheckoutPageLink {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 6px;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  padding: 0.5rem;

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
  }
`
