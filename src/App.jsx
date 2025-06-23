import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home';
import Library from './pages/Library/Library';
import Layout from './Layout';
import Header from './components/Header/Header';
import { WatchLaterProvider } from './components/WatchLaterContext/WatchLaterContext';
import WatchLaterPage from './components/WatchLaterPage/WatchLaterPage';

export default function App() {
  const location = useLocation();

  return (
    <WatchLaterProvider> {/* Wrap your app in the provider */}
      <Header /> {/* Outside AnimatePresence so it doesn't animate */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/watch-later" element={<WatchLaterPage />} /> {/* new route */}
          </Route>
        </Routes>
      </AnimatePresence>
    </WatchLaterProvider>
  );
}
