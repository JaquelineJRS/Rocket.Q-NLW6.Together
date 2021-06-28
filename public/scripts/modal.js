export default function Modal(){

    const modalwrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active para a modal
        modalwrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active para a modal
        modalwrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}