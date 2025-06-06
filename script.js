document.getElementById('payForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardNumber = document.getElementById('cardNumber').value;
    const cardName = document.getElementById('cardName').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber)) {
        alert("Invalid card number format. Use XXXX-XXXX-XXXX-XXXX");
        return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("Invalid CVV");
        return;
    }

    // Mock success message
    document.getElementById('message').innerText = "Payment Successful!";
});
