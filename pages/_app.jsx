import '../src/index.css';
import '../src/App.css';
import { ThemeProvider } from '../src/contexts/ThemeContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
