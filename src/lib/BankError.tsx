export class BankError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BankError'
  }
}
