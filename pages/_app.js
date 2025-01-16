import "@/styles/globals.css";
import { WagmiProvider } from 'wagmi'
import { config } from '../web3/config'

export default function App({ Component, pageProps }) {
  return (<WagmiProvider config={config}><Component {...pageProps} /></WagmiProvider>)
}
