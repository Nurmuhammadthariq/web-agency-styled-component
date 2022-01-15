import React from 'react';
import { GlobalStyle } from './globalStyles';

const Home = React.lazy(() => import('./Pages/Home'));
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));

function App() {
  return (
    <>
      <React.Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </React.Suspense>
    </>
  );
}

export default App;
