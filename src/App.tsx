import React, { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { Separator } from '@/components/ui/separator';
import Loading from '@/components/Loading';
import ClientWrapper from '@/components/ClientWrapper';
import BodyAttributesWrapper from '@/components/BodyAttributesWrapper';
import { Preload } from './components/Preload';

// Lazy load layout components
const Navbar = lazy(() => import('@/components/layout/Navbar'));
const Footer = lazy(() => import('@/components/layout/Footer'));

// Lazy load page components with prefetch
const Home = lazy(() => import('@/app/page'));
const About = lazy(() => import('@/app/about/page'));
const Accessibility = lazy(() => import('@/app/accessibility/page'));
const AiAgents = lazy(() => import('@/app/ai-agents/page'));
const Blog = lazy(() => import('@/app/blog/page'));
const BookDemo = lazy(() => import('@/app/book-demo/page'));
const Careers = lazy(() => import('@/app/careers/page'));
const Club = lazy(() => import('@/app/club/page'));
const Contact = lazy(() => import('@/app/contact/page'));
const CookiePolicy = lazy(() => import('@/app/cookie-policy/page'));
const Services = lazy(() => import('@/app/services/page'));
const Portfolio = lazy(() => import('@/app/portfolio/page'));
const Faqs = lazy(() => import('@/app/faqs/page'));
const PrivacyPolicy = lazy(() => import('@/app/privacy-policy/page'));
const TermsOfService = lazy(() => import('@/app/terms-of-service/page'));

// Import blog post detail page directly
const BlogPost = lazy(() => import('@/app/blog/[slug]/page').then(module => ({ default: module.default })));

// Import service detail page directly
const ServiceDetail = lazy(() => import('@/app/services/[slug]/page').then(module => ({ default: module.default })));

// Import portfolio detail page directly
const PortfolioDetail = lazy(() => import('@/app/portfolio/[slug]/page').then(module => ({ default: module.default })));

// Lazy load utility components
const ScrollToTopComponent = lazy(() => import('@/components/ui/ScrollToTop'));

// Fallback component for loading layout elements
const LayoutLoadingFallback = () => <div className="h-16 bg-background" />;

// Simple error fallback
const ErrorFallbackComponent = () => <div className="h-16 bg-background" />;

// Wrapper for lazy loaded components
const SafeLazyComponent: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ children, fallback = <LayoutLoadingFallback /> }) => (
  <ErrorBoundary fallback={<ErrorFallbackComponent />}>
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

const App: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Preload />
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <ErrorBoundary>
        <div className="relative flex min-h-screen flex-col">
            <SafeLazyComponent>
            <Navbar />
            </SafeLazyComponent>

          <main className="flex-grow">
            <ErrorBoundary>
              <Routes>
                  <Route
                    path="/"
                    element={
                      <SafeLazyComponent>
                    <Home />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <SafeLazyComponent>
                    <About />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/accessibility"
                    element={
                      <SafeLazyComponent>
                    <Accessibility />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/ai-agents"
                    element={
                      <SafeLazyComponent>
                    <AiAgents />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/blog/*"
                    element={
                      <SafeLazyComponent>
                    <Blog />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/blog/:slug"
                    element={
                      <SafeLazyComponent>
                    <BlogPost />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/book-demo"
                    element={
                      <SafeLazyComponent>
                    <BookDemo />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/careers"
                    element={
                      <SafeLazyComponent>
                    <Careers />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/club"
                    element={
                      <SafeLazyComponent>
                    <Club />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/services/*"
                    element={
                      <SafeLazyComponent>
                    <Services />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/services/:slug"
                    element={
                      <SafeLazyComponent>
                    <ServiceDetail />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <SafeLazyComponent>
                    <Contact />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/cookie-policy"
                    element={
                      <SafeLazyComponent>
                    <CookiePolicy />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/portfolio/*"
                    element={
                      <SafeLazyComponent>
                    <Portfolio />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/portfolio/:slug"
                    element={
                      <SafeLazyComponent>
                    <PortfolioDetail />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/faqs"
                    element={
                      <SafeLazyComponent>
                    <Faqs />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/privacy-policy"
                    element={
                      <SafeLazyComponent>
                    <PrivacyPolicy />
                      </SafeLazyComponent>
                    }
                  />
                  <Route
                    path="/terms-of-service"
                    element={
                      <SafeLazyComponent>
                    <TermsOfService />
                      </SafeLazyComponent>
                    }
                  />
              </Routes>
            </ErrorBoundary>
          </main>

          <div className="container mx-auto max-w-screen-xl px-6">
            <Separator className="my-4 bg-black" />
          </div>

            <SafeLazyComponent>
            <Footer />
            </SafeLazyComponent>
        </div>

          <SafeLazyComponent fallback={null}>
            <ScrollToTopComponent />
          </SafeLazyComponent>

          <SafeLazyComponent fallback={null}>
        <ClientWrapper />
          </SafeLazyComponent>

        <BodyAttributesWrapper />
      </ErrorBoundary>
    </ThemeProvider>
    </>
  );
};

// Add a utility function for lazy loading images
export const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onLoad={(e) => {
        const img = e.currentTarget;
        img.style.opacity = '1';
      }}
      style={{
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
};

export default App;
