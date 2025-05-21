import '../src/index.css';
import '../src/App.css';
import '../src/styles/GlassButton.css';
import '../src/styles/GlassCard.css';
import '../src/styles/PlayCountPage.css';
import '../src/styles/NavigationBar.css';
import { ThemeProvider } from '../src/contexts/ThemeContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
