import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import theme from '../theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;