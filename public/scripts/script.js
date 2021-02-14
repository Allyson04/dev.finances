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

const transaction = [
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
    incomes() {
        //sum of all incomes
    },
    expenses() {
        //sum of all expenses
    },
    total() {
        //all incomes less all expenses
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

//First you indicate the array of objects 'transactions', and forEach object, you do a anonymous function sending each object as data 'transaction' for functions, and then call what is inside DOM and addTransaction with 'transaction' as parameter previously
transaction.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})