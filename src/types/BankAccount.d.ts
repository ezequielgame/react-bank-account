interface BankAccountState {
  isActive: boolean
  balance: number | null
  loan: number | null
}

interface BankAction {
  type: 'openAccount' | 'deposit' | 'withdraw' | 'requestLoan' | 'payLoan' | 'closeAccount'
  payload?: number
}
