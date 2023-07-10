const showHideSideMenu = document.querySelector(".aside");
showHideSideMenu.addEventListener("click", () => {
  document.querySelector(".aside").classList.toggle("show-side-nav");
  if (document.querySelector(".nav-icon-menu")) {
    document.getElementById("nav-icon").classList.remove("nav-icon-menu");
    document.getElementById("nav-icon").classList.add("nav-icon-close");
  } else {    
    document.getElementById("nav-icon").classList.remove('nav-icon-close')
    document.getElementById("nav-icon").classList.add('nav-icon-menu')
  }
});


var defaultColor = "#302e4d";
const body = document.querySelector(".dark");
if (body) defaultColor = "#fff";

dayNight.addEventListener("click", () => {
	const body = document.querySelector(".dark");
	if (body) defaultColor = "#fff";
	else defaultColor = "#302e4d";
	init();
});

const randColor = () => {
	return (
		"#" +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, "0")
			.toUpperCase()
	);
};

const letterStyle = (char, indx) => {
	if (char === " ") return `<span class='space'></span>`;

	return `<span
			class="letter"
			onMouseOver="this.style.color='${randColor()}'"
			onMouseOut='this.style.color="${defaultColor}" '
			style="transition:all .1s ease-in-out;"
		>
			${char}
		</span>`;
};
const splictChar = (text) => {
	let temp = "";
	for (let i = 0; i < text.length; i++) {
		temp = temp + letterStyle(text[i], Math.floor(Math.random() * 5));
	}

	return temp;
};
const init = () => {
	document.getElementById("about-me-title").innerHTML = `<h2>${splictChar(
		"About Me"
	)}</h2>`;
	document.getElementById("services-title").innerHTML = `<h2>${splictChar(
		"Services"
	)}</h2>`;
	document.getElementById("portfolio-title").innerHTML = `<h2>${splictChar(
		"Portfolio"
	)}</h2>`;
	document.getElementById("contact-title").innerHTML = `<h2>${splictChar(
		"Contact"
	)}</h2>`;
	document.getElementById("gallery-title").innerHTML = `<h2>${splictChar(
		"Gallery"
	)}</h2>`;
};



const setInitialVal = () => {
	let pathName = window.location.href;
	const temp = pathName.split("#");
	if (temp.length >= 2 && temp[1] && temp[1] != "") {
		const navActive = document.getElementById(temp[1] + "-menu");
		navActive.classList.add("active");
	} else {
		const navActive = document.getElementById("home-menu");
		navActive.classList.add("active");
	}
};

window.onload = function () {
	setInitialVal();
	init();
};