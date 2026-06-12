import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { AuthLayout } from '@/components/layout/AuthLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { Home } from '@/pages/Home'
import { Products } from '@/pages/Products'
import { ProductDetail } from '@/pages/ProductDetail'
import { Pricing } from '@/pages/Pricing'
import { CustomServices } from '@/pages/CustomServices'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { Dashboard } from '@/pages/Dashboard'

/** App root — defines all page routes */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="custom-services" element={<CustomServices />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Legacy redirects */}
          <Route path="services" element={<Navigate to="/custom-services" replace />} />
          <Route path="case-studies" element={<Navigate to="/products" replace />} />
          <Route path="case-studies/:slug" element={<Navigate to="/products" replace />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
