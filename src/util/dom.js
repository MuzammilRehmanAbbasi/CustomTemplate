function getAbsoluteEl(id, target) {
	let el = id;
	if (typeof id === "string") {
		el = document.getElementById(id);
	}
	el = el.parentElement.children;

	for (const child of el) {
		if (child.tagName === target.toUpperCase()) {
			el = child;
			break;
		}
	}

	return el;
}

function startRipple(id, color) {
	const target = document.getElementById(id);
	const span = getAbsoluteEl(target, "span");

	span.addEventListener("click", function (e) {
		const clickEvent = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: e.clientX,
			clientY: e.clientY,
		});

		target.dispatchEvent(clickEvent);
	});

	target.addEventListener("click", function (e) {
		let tmpX = e.offsetX - e.offsetX * 2;
		let tmpY = e.offsetY - e.offsetY * 2;

		tmpX = tmpX < 0 ? tmpX * -1 : tmpX;
		tmpY = tmpY < 0 ? tmpY * -1 : tmpY;

		const span = getAbsoluteEl(e.target, "span");
		const newSpan = document.createElement("span");

		newSpan.style.backgroundColor = color;

		newSpan.className = "ripple ripple-animation";
		span.append(newSpan);

		const inputStyle = getComputedStyle(e.target);

		setHeightWidth(span, inputStyle.width, inputStyle.height);

		const spWidth = getSize(span.style.width);
		const spHeight = getSize(span.style.height);

		const bigSize =
			spWidth > spHeight ? span.style.width : span.style.height;

		setHeightWidth(newSpan, bigSize, bigSize);

		newSpan.style.left = tmpX - getSize(bigSize) / 2 + 1 + "px";
		newSpan.style.top = tmpY - getSize(bigSize) / 2 + 1 + "px";

		newSpan.classList.add("ripple-animation");

		setTimeout(() => {
			newSpan.remove();
		}, 1000);
	});
}

function getSize(size) {
	return parseFloat(size.split("p")[0]);
}

function setHeightWidth(el, sizeX, sizeY) {
	el.style.width = sizeX;
	el.style.height = sizeY;
}
export { getAbsoluteEl, startRipple };
