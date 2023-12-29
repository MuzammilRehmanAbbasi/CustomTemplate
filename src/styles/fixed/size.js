const size = {
	sm: "30%",
	md: "50%",
	lg: "70%",
	xl: "90%",
};

if (window.screen.width <= 425) {
	size.sm = "90%";
}

export { size };
