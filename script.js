let signup = document.querySelector(".sign-up");
let signin = document.querySelector(".sign-in");
let signupBox = document.querySelector(".signup-container");
let signinBox = document.querySelector(".signin-container");
let signupmobile = document.querySelector(".intro-group-btn");

let signupTosignin = document.querySelector(".signin"); // Alreay sign in/up text
let signinTosignup = document.querySelector(".signup");

let closeSignup = document.querySelector(".close-signup");
let closeSignin = document.querySelector(".close-signin");
let closeSignupMobile = document.querySelector(".close-mobile-su");
let closeSigninMobile = document.querySelector(".close-mobile-si");

let overlay = document.querySelector(".overlay");   // To make background dark

// signup events 
signup.addEventListener("click", function() {
    openSignupBox();
})
signupTosignin.addEventListener("click", function() {
    closeSignupBox();
    openSigninBox();
})
closeSignup.addEventListener("click", function() {
    closeSignupBox();
})

// signin events
signin.addEventListener("click", function() {
    openSigninBox();
})
signinTosignup.addEventListener("click", function() {
    closeSigninBox();
    openSignupBox();
})
closeSignin.addEventListener("click", function() {
    closeSigninBox();
})

// For mobile
signupmobile.addEventListener("click", function() {
    openSignupBox();
})
closeSignupMobile.addEventListener("click", function() {
    closeSignupBox();
})
closeSigninMobile.addEventListener("click", function() {
    closeSigninBox();
})

// All functuons
function openSignupBox() {
    signupBox.style.display = "block";
    overlay.style.display = "block";
    fixbackground();
}
function openSigninBox() {
    signinBox.style.display = "block";
    overlay.style.display = "block";
    fixbackground();
}
function closeSignupBox() {
    signupBox.style.display = "none";
    overlay.style.display = "none";
    removebackground();
}
function closeSigninBox() {
    signinBox.style.display = "none";
    overlay.style.display = "none";
    removebackground();
}

// To toggle the backgrounds position (fixed)
function fixbackground() {
    document.querySelector(".main").classList.add("feeze");
}
function removebackground() {
    document.querySelector(".main").classList.remove("feeze");
}

// Follow button (groups)
var n = document.querySelectorAll(".follow-btn").length;
for(let i=0; i<n ; i++) {
    let followBtn = document.querySelectorAll(".follow-btn")[i];
    followBtn.addEventListener("click", function() {
        followBtn.classList.toggle("follow-btn-color");
        if(followBtn.innerHTML == "Follow") {
            followBtn.innerHTML = "Followed";
        }else {
            followBtn.innerHTML = "Follow";
        }
    })
}