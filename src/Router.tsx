import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/slogan'
import { Checkout } from './pages/Checkout/CheckoutRequest'
import { Success } from './pages/Success/index.tsx'
import { DefaultLayout } from './layouts/DefaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
