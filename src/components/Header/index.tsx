import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo-coffee-delivery.svg'

import {
  ButtonCart,
  HeaderContainer,
  LocationContainer,
  QuantinyCoffeesOnCart,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { cart } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <p>Suzano, SP</p>
        </LocationContainer>

        <NavLink to="/checkout" title="Checkout">
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>

          {cart.length !== 0 && (
            <QuantinyCoffeesOnCart>{cart.length}</QuantinyCoffeesOnCart>
          )}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
