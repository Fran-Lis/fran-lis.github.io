function sendMail(){
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_zdobsyc", "template_ckc4dij", params).then(alert("Messaggio inviato con successo"))
}