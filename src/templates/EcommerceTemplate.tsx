import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Milk, Phone, Mail, MapPin } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para tienda de productos lácteos
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`py-4 bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40 ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Milk className="h-6 w-6 text-primary" />
              </div>
              <div>
                <BrandLogoLeft />
                <p className="text-xs text-muted-foreground -mt-1">Productos Lácteos</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link 
                to="/" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/productos" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Productos
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Cart */}
          {showCart && (
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative hover:bg-primary/10 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Button>
          )}
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-slate-900 text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary/20 p-2 rounded-lg">
                <Milk className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Lácteos Premium</h3>
                <p className="text-sm text-white/70">Productos Naturales</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Somos una empresa familiar dedicada a ofrecer los mejores productos lácteos, 
              elaborados con ingredientes 100% naturales y procesos artesanales que garantizan 
              la máxima calidad y frescura.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@lacteospremium.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-white/70 hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/productos" 
                className="block text-white/70 hover:text-primary transition-colors"
              >
                Productos
              </Link>
              <Link 
                to="/sobre-nosotros" 
                className="block text-white/70 hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className="block text-white/70 hover:text-primary transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Categorías</h3>
            <div className="space-y-2">
              <a href="#" className="block text-white/70 hover:text-primary transition-colors">
                Leches y Bebidas
              </a>
              <a href="#" className="block text-white/70 hover:text-primary transition-colors">
                Quesos Artesanales
              </a>
              <a href="#" className="block text-white/70 hover:text-primary transition-colors">
                Yogures y Postres
              </a>
              <a href="#" className="block text-white/70 hover:text-primary transition-colors">
                Mantequillas y Cremas
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <SocialLinks />
            </div>
            <p className="text-white/70 text-sm">
              &copy; 2024 Lácteos Premium. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}