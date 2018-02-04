function showModal (param) {
    if(param == true) {
        document.getElementById('modal-mask').style.display = 'block';
    } else {
        document.getElementById('modal-mask').style.display = 'none';
    }
}

setTimeout(function (){
    showModal(true);
}, 500);

document.getElementById('close').addEventListener('click', function () {
    showModal(false);
})

document.getElementById('button').addEventListener('click', function () {
    var inputedMail = document.getElementById('mail').value;
    var mailReg = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
    if (inputedMail.match(mailReg) == null) {
        alert('to nie mail');
    } else {
        showModal(false);
    }

})
