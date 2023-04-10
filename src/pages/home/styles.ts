import styled from 'styled-components'

export const DisplayContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  img {
    max-height: 280px;
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme['base-title']};
  margin-bottom: 1rem;
`

export const Paragraph = styled.p`
  width: 33rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 400;
  font-size: 1.25rem;
`

export const IconsBoxContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 0;
  padding-top: 4.125rem;
`

export const IconBox = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-weight: normal;
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export interface iconPropsI {
  iconBackgroundColor: string
  theme?: any
} // !!!

export const Icon = styled.div`
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
      : props.iconBackgroundColor === 'gray'
      ? props.theme['base-text']
      : props.iconBackgroundColor === 'yellow'
      ? props.theme.yellow
      : props.theme.purple};
`

export const MenuContainer = styled.div`
  margin-top: 8.75rem;
  padding-bottom: 5rem;
`

export const Subtitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.75rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const MenuItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0 2rem;
  justify-content: center;
`
