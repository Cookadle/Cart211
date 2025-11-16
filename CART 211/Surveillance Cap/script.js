let captcha;
function generate() {
    document.getElementById("user-input").value = ""; // <-- this is the broken line

    captcha = document.getElementById("image");
    let uniquechar = "";

    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }

    captcha.innerHTML = uniquechar;
}

function printmsg() {
    const user_input = document.getElementById("user-input").value;

    if (user_input == captcha.innerHTML) {
        document.getElementById("key").innerHTML = "Matched";
        generate();
    } else {
        document.getElementById("key").innerHTML = "Not Matched";
        generate();
    }
}
