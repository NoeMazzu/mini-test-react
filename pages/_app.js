import Link from "next/link";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <Link href="/">Contact</Link>
        <Link href="/cards">Cartes</Link>
        <Link href="/clickCounterPage">Compteur</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
