import { Dispatch } from 'react'

interface BalanceButtonProps {
  balance: number | null
  amount: number
  dispatch: Dispatch<BankAction>
}

function BalanceButton({ amount, dispatch, balance }: BalanceButtonProps) {
  return (
    <button
      disabled={balance === null || balance + amount < 0}
      onClick={() => {
        dispatch({ type: amount < 0 ? 'withdraw' : 'deposit', payload: amount })
      }}
    >
      {amount < 0 ? 'Withdraw' : 'Deposit'} {Math.abs(amount)}
    </button>
  )
}

export default BalanceButton
