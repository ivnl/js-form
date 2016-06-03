console.log("js loaded");

document.getElementById('myThing').onclick = function() {
    alert(document.getElementById('myThing').innerText);
};

function validateForm() {
    var user = document.getElementById('username').value;
    var password = document.getElementById("password").value;

    if (password != "12345678") alert("bad pass");
    else if (!hasNumber(user)) alert("bad user");
    else alert("all good");
    return false;


}

function hasNumber(myString) {
    return (
        /\d/.test(myString));
}

