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
        amount: 50000,
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
        const html = `
            <tr>
              <td class="description">${transaction.description}</td>
              <td class="expense">${transaction.amount}</td>
              <td class="date">${transaction.date}</td>
              <td>
                <img src="./assets/minus.svg" alt="Remover transação">
              </td>
            </tr>
        `

        return html
    }
}

transactions.forEach(function(transaction)) {
    DOM.addTransaction(transaction)
}