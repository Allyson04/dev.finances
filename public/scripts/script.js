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