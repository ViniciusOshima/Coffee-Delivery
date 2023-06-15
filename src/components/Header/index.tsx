import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo-coffee-delivery.svg'

import { HeaderContainer } from './styles'
import { LocationContainer } from '../../layouts/DefaultLayout/styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <nav>
        <LocationContainer>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </LocationContainer>

        <NavLink to="/Checkout" title="Checkout">
          <ShoppingCart size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
