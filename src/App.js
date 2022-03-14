import React from "react";
import Home from './components/Home';
import { DAppProvider, Mainnet } from '@usedapp/core'
const config = {
  readOnlyChain: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

const App = () => {
  return (
  <DAppProvider config={config}>
    <Home/>
  </DAppProvider>
  );
};

export default App;
