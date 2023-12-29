function changePadding(id, el) {
	let mult =
		parseInt(
			getComputedStyle(document.getElementById(id)).padding.split("px")[0]
		) / 10;

	el.style.top = `${8 * mult}px`;
	// el.style.left = `${10 * mult}px`;
}

export { changePadding };
