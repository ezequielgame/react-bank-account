import { Dispatch } from 'react'

interface LoanButtonProps {
  loan: number | null
  amount: number
  dispatch: Dispatch<BankAction>
}

function LoanButton({ loan, amount, dispatch }: LoanButtonProps) {
  return (
    <button
      disabled={
        loan === null ||
        amount === 0 ||
        loan + amount < 0 ||
        (amount > 0 && !!loan)
      }
      onClick={() =>
        dispatch({
          type: amount > 0 ? 'requestLoan' : 'payLoan',
          payload: amount,
        })
      }
    >
      {amount > 0
        ? `Request Loan ${amount}`
        : `Pay Loan ${amount !== 0 ? `(${Math.abs(amount)})` : ''}`}
    </button>
  )
}

export default LoanButton
