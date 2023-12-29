import { getAbsoluteEl } from "../../util/dom";

function floatinglabel(id, color) {
	const input = document.getElementById(id);
	input.addEventListener("focus", function (e) {
		if (e.target) {
			let el = getAbsoluteEl(e.target, "label");
			el.classList.add("label-focused");
			el.style.color = color;
		}
	});
	input.addEventListener("focusout", function (e) {
		if (e.target && e.target.value === "") {
			let el = getAbsoluteEl(e.target, "label");
			el.classList.remove("label-focused");
			el.style.color = "var(--grey)";
		}
	});
}

export default floatinglabel;
