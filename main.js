function updateQtyValue(product, price, isIncreasing) {
	if (isIncreasing) {
		document.getElementById(product + "-qty").value =
			parseFloat(document.getElementById(product + "-qty").value) + 1;
	} else if (document.getElementById(product + "-qty").value > 0) {
		document.getElementById(product + "-qty").value =
			parseFloat(document.getElementById(product + "-qty").value) - 1;
	}
	document.getElementById(product + "-total").innerText =
		price * parseFloat(document.getElementById(product + "-qty").value);
	calculateTotal();
}

function productNumber(product) {
	let productNumber = parseFloat(
		document.getElementById(product + "-qty").value
	);
	return productNumber;
}

function calculateTotal() {
	let phoneTotal = productNumber("phone") * 1219;
	let caseTotal = productNumber("case") * 59;
	let subtotal = phoneTotal + caseTotal;
	document.getElementById("sub-total").innerText = subtotal;
	document.getElementById("tax-amount").innerText = subtotal / 10;
	document.getElementById("total-amount").innerText =
		subtotal + subtotal / 10;
}

document.getElementById("phone-plus").addEventListener("click", function () {
	updateQtyValue("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
	updateQtyValue("phone", 1219, false);
});
document.getElementById("case-plus").addEventListener("click", function () {
	updateQtyValue("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
	updateQtyValue("case", 59, false);
});
