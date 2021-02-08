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