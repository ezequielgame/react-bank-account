import BalanceButton from '@/components/BalanceButton'
import CloseButton from '@/components/CloseButton'
import Header from '@/components/Header'
import LoanButton from '@/components/LoanButton'
import OpenButton from '@/components/OpenButton'
import { BankError } from '@/lib/BankError'
import { useReducer } from 'react'

const initialState: BankAccountState = {
  isActive: false,
  balance: null,
  loan: null,
}

const reducer = (
  state: BankAccountState,
  action: BankAction
): BankAccountState => {
  if (state.isActive === false && action.type !== 'openAccount') {
    return state
  }
  switch (action.type) {
    case 'openAccount':
      return { ...state, balance: 500, loan: 0, isActive: true }
    case 'deposit':
      return {
        ...state,
        balance: state.balance! + action.payload!,
      }
    case 'withdraw':
      if (state.balance! - action.payload! < 0) {
        return state
      }
      return {
        ...state,
        balance: state.balance! + action.payload!,
      }
    case 'requestLoan': {
      if (state.loan) return state
      return {
        ...state,
        loan: action.payload!,
        balance: state.balance! + action.payload!,
      }
    }
    case 'payLoan':
      return {
        ...state,
        loan: action.payload! > state.loan! ? 0 : state.loan! + action.payload!,
        balance: state.balance! + action.payload!,
      }
    case 'closeAccount':
      if (state.balance !== 0 || state.loan !== 0) return state
      return initialState
    default:
      throw new BankError('Invalid action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { balance, loan, isActive } = state

  return (
    <div>
      <Header balance={balance} loan={loan} />
      {isActive === false && <OpenButton dispatch={dispatch} />}
      <BalanceButton balance={balance} amount={150} dispatch={dispatch} />
      <BalanceButton balance={balance} amount={-50} dispatch={dispatch} />
      <LoanButton loan={loan} amount={500} dispatch={dispatch} />
      <LoanButton loan={loan} amount={-loan!} dispatch={dispatch} />
      {isActive && (
        <CloseButton balance={balance} loan={loan} dispatch={dispatch} />
      )}
    </div>
  )
}

export default App
