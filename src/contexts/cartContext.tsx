import { ReactNode, createContext, useState } from 'react'
import { products } from '../products'

export interface CartProductI {
  id: number
  title: string
  imgSrc: string
  price: number
  quantity: number
}

export interface DeliveryAddressI {
  CEP: string
  StreetName: string
  HouseNumber: string
  Complement?: string
  Neighborhood: string
  CityName: string
  State: string
}

interface CartContextI {
  products: CartProductI[]
  handleQuantityChange: (id: number, quantity: number) => void
  deliveryAddress: DeliveryAddressI
  setDeliveryAddress: (newAddress: DeliveryAddressI) => void
  paymentOption: string
  setPaymentOption: (newPaymentOption: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextI)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts]: [CartProductI[], any] = useState([]) // ! Fix the typing

  const [deliveryAddress, setDeliveryAddress] = useState({} as DeliveryAddressI)

  const [paymentOption, setPaymentOption] = useState('')

  function handleQuantityChange(id: number, quantity: number) {
    const exists: boolean = cartProducts.map((p) => p.id).indexOf(id) !== -1

    if (quantity === 0 && exists) {
      const newCartProducts: CartProductI[] = cartProducts.filter(
        (product) => product.id !== id,
      )

      setCartProducts(newCartProducts)
    } else if (!exists && quantity > 0) {
      const productIndex = products.map((p) => p.id).indexOf(id)

      const newCartProducts: CartProductI[] = [
        ...cartProducts,
        {
          id: products[productIndex].id,
          title: products[productIndex].title,
          imgSrc: products[productIndex].imgSrc,
          price: products[productIndex].price,
          quantity,
        },
      ]

      setCartProducts(newCartProducts)
    } else if (exists && quantity > 0) {
      const newCartProducts = cartProducts.map((p) => {
        if (p.id === id) {
          p.quantity = quantity
        }

        return p
      })

      setCartProducts([...newCartProducts])
    }
  }

  return (
    <CartContext.Provider
      value={{
        products: cartProducts,
        handleQuantityChange,
        deliveryAddress,
        setDeliveryAddress,
        paymentOption,
        setPaymentOption,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
