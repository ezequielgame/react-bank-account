import { Dispatch } from 'react'

interface CloseButtonProps {
  balance: number | null
  loan: number | null
  dispatch: Dispatch<BankAction>
}

function CloseButton({ dispatch, balance, loan }: CloseButtonProps) {
  return (
    <button
      onClick={() => dispatch({ type: 'closeAccount' })}
      disabled={balance !== 0 || loan !== 0}
    >
      Close Account
    </button>
  )
}

export default CloseButton
