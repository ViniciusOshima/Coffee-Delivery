import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo-coffee-delivery.svg'

import {
  ButtomCartContainer,
  ButtonCart,
  HeaderContainer,
  LocationContainer,
  QuantinyCoffeesOnCart,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { quantityCoffees } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/coffee-delivery" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <p>Suzano, SP</p>
        </LocationContainer>

        <ButtomCartContainer>
          <NavLink to="/checkout" title="Checkout">
            <ButtonCart>
              <ShoppingCart size={22} weight="fill" />
            </ButtonCart>
          </NavLink>

          {quantityCoffees !== 0 && (
            <QuantinyCoffeesOnCart>{quantityCoffees}</QuantinyCoffeesOnCart>
          )}
        </ButtomCartContainer>
      </nav>
    </HeaderContainer>
  )
}
