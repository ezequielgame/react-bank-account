interface HeaderProps {
  balance: number | null
  loan: number | null
}

function Header({ balance, loan }: HeaderProps) {
  return (
    <header>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance ?? 'X'}</p>
      <p>Loan: {loan ?? 'X'}</p>
    </header>
  )
}

export default Header
