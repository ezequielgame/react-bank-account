# React Bank Account

The following project is a simple bank account implemented using React and the useReducer hook. It is part of the course "The Ultimate React Course 2024: React, Next.js, Redux & More" by Jonas Schmedtmann on Udemy. As all of the projects I chose to do it using Vite and TypeScript.

## INSTRUCTIONS / CONSIDERATIONS:
Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

- [X] Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount.

- [X] All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

- [X] When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

- [X] Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

- [X] When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

- [X] Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state

## To Do
- [ ] Add some CSS to make it look better
- [ ] Add inputs to the form to allow the user to input the amount to deposit, withdraw, request loan or pay loan
- [ ] Handle errors when the user tries to do an operation that is not allowed and show a message to the user