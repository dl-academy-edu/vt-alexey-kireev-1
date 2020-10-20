var html = document.querySelector("html");
var popupbuttonclose = document.querySelector("#popup-close-button");
var popupbuttonopen = document.querySelector("#popup-open-button");

popupbuttonopen.addEventListener("click", function() {
html.classList.add("popup-open");
});

popupbuttonclose.addEventListener("click", function() {
    html.classList.remove("popup-open");
    });
    
    