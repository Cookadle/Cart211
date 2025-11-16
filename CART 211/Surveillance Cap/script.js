let captcha;

function generate() {
    captcha = document.getElementById("image");
    let uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++) {
        uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
    }

    captcha.innerHTML = uniquechar;
    document.getElementById("user-input").value = "";
}

function printmsg() {
    const user_input = document.getElementById("user-input").value;

    if (user_input === captcha.innerHTML) {
        document.getElementById("key").innerHTML = "Matched ✅";
        generate();
    } else {
        document.getElementById("key").innerHTML = "Not Matched ❌";
        generate();
    }
}
