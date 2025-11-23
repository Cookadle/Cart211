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
        document.getElementById("key").innerHTML = "Matched ✅ Redirecting...";
          sessionStorage.setItem("captchaPassed", "true");
        // Redirect to the next page
       setTimeout(() => {
            window.location.href = "home.html"; // <-- change if your page has another name
        }, 1000);
    } else {
        document.getElementById("key").innerHTML = "Not Matched ❌";
        generate(); // will refresh CAPTCHA
    }
}