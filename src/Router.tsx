import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/slogan'
import { Checkout } from './pages/Checkout/CheckoutRequest'
import { Success } from './pages/Success'
import { DefaultLayout } from './layouts/DefaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Success" element={<Success />} />
      </Route>
    </Routes>
  )
}
