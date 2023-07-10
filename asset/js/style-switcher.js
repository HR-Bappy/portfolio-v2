const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    console.log(color)
  alternateStyles.forEach((style) => {
		if (color === style.getAttribute("title")) {
			style.removeAttribute("disabled");
		} else {
			style.setAttribute("disabled", "true");
		}
	});
}


const dayNight = document.querySelector(".daynight");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        console.log("yes")
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

// 2:50line 26
 