var myImage = document.querySelector("img");
var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");
// initializtion code to display the user.
if (!localStorage.getItem("name")) {
    setUser();
}
else {  
    myHeading.innerHTML = "Mozilla is cool: " + localStorage.getItem("name");
}

// change the icon image when click on it.
myImage.onclick = function () {
    mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") 
        myImage.setAttribute("src", "images/firefox-icon-2.ico");
    else 
        myImage.setAttribute("src", "images/firefox-icon.png");
}
myButton.onclick = function () {
    setUser();
}

function setUser() {
    var userName = prompt("Please enter your name.");
    localStorage.setItem("name", name);
    myHeading.innerHTML = "Mozilla is cool: " + userName;
}