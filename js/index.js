const form = document.getElementById("registroForm")
form.addEventListener("submit", function(event){
    event.preventDefault();
    let transactionFormData = new FormData(form);
    let clientesTableRef = new document.getElementById("clientesTable");
    let newRow = clientesTableRef.insertRow(-1);
})