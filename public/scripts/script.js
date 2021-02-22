Modal = {
    open(){
        //open Modal
        //add class active to modal
        document.querySelector(".modal-overlay").classList.add("active")
        
    },
    close(){
      //close modal
      //remove class active from modal
      document.querySelector(".modal-overlay").classList.remove("active")
    }
}

const transactions = [
    {
        id: 1,
        description: "Luz",
        amount: -50000,
        date: "23/01/2001"
    },
    {
        id: 2,
        description: "Website",
        amount: 500000,
        date: "24/01/2001"
    },
    {
        id: 3,
        description: "Internet",
        amount: -50000,
        date: "06/02/2001"
    }
]
const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)

        console.log(Transaction.all)
    },

    incomes() {
        let income = 0;
        //catch all transactions
        Transaction.all.forEach(transaction => {
            if (transaction.amount > 0) {
            // use only transactions higher than zero
                income += transaction.amount
            }

        })

        // return value
        return income
    },

    expenses() {
        let expense = 0;

        Transaction.all.forEach(transaction => {

            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })

        return expense
        //sum of all expenses
    },
    total() {

        //all incomes less all expenses
        return Transaction.incomes() + Transaction.expenses();
        
    }

}

const DOM = {
    transactionsContainer: document.querySelector("#data-table tbody"),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr")
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <tr>
              <td class="description">${transaction.description}</td>
              <td class="${CSSclass}">${amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remover transação">
              </td>
            </tr>
        `

        return html
    },

    updateBalance() {
        document.getElementById("incomeDisplay").innerHTML = Utils.formatCurrency(Transaction.incomes())
        document.getElementById("expenseDisplay").innerHTML = Utils.formatCurrency(Transaction.expenses())
        document.getElementById("totalDisplay").innerHTML = Utils.formatCurrency(Transaction.total())
    }
}


const Utils = {
    formatCurrency(value) {

        // creating a const to be a negative or positive signal for numbers
        const signal = Number(value) < 0 ? "- " : ""

        //creating an variable, converting it to string and replacing all characters that is not and number to empty
        value = String(value).replace(/\D/g, "")

        //converting value to Number and dividing it by 100
        value = Number(value) / 100

        //converting value to BRL currency
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        //returning value to  DOM.innerHTMLtransaction()
        return signal + value
    }
}

Transaction.add({
    id: 39,
    description: 'alo',
    amount: 200,
    date: '23/01/2001'
})

//First you indicate the array of objects 'transactions', and forEach object, you do a anonymous function sending each object as data 'transaction' for functions, and then call what is inside DOM and addTransaction with 'transaction' as parameter previously
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})

//first we get the "DOM" array, the activate function "updateBalance"
DOM.updateBalance()

