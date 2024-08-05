import { Dispatch } from 'react'

interface OpenButtonProps {
  dispatch: Dispatch<BankAction>
}

function OpenButton({ dispatch }: OpenButtonProps) {
  return (
    <button onClick={() => dispatch({ type: 'openAccount' })}>
      Open Account
    </button>
  )
}

export default OpenButton
