import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/src/styles/index.css'
import store from '../redux/strore';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import ScrollProgress from '@/src/components/common/motion/scroll-progress';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -14, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    AOS.init();
  }, [])

  return(
        <Provider store={store}>
            {!reduceMotion && <ScrollProgress />}
            {reduceMotion ? (
              <Component {...pageProps} />
            ) : (
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={router.asPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
            )}
            <ToastContainer />
        </Provider>
  )

}
