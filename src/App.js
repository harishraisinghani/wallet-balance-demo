import { WalletBalance } from '@harishraisinghani/wallet-balance-component'

function App() {
  return(
    <div className="WalletBalance">
      <WalletBalance apikey={process.env.REACT_APP_COVALENT_API_KEY} />
    </div>
  )
}

export default App;
