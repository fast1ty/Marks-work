function searchDomain() {
    const fullDomain = document.getElementById("domainName").value + document.getElementById("domainExtension").value;
    if (fullDomain) {
        document.getElementById("domainResult").innerText = fullDomain;
        document.getElementById("result").classList.remove("hidden");
    }
}

function proceedOrder() {
    document.getElementById("orderDetails").innerText = `Tellimus: ${document.getElementById("domainResult").innerText}`;
    document.getElementById("orderSummary").classList.remove("hidden");
}

function goToContactPage() {
    window.location.replace("contact.html");
}

function goToPaymentPage() {
    window.location.replace("payment.html");
}

function confirmPayment() {
    const notification = document.getElementById("payment-success");
    notification.style.display = "block";
    setTimeout(() => {
        notification.style.display = "none";
        window.location.replace("success.html");
    }, 3000);
}