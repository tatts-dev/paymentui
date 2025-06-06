document.getElementById("cardNumber").addEventListener("input", formatCardNumber);

function formatCardNumber() {
    const input = document.getElementById("cardNumber");
    let value = input.value.replace(/\D/g, "").substring(0, 16);
    input.value = value.replace(/(.{4})/g, "$1 ").trim();
}

document.getElementById("payForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Payment processed successfully (UI only)!");
});

