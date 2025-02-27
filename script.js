document.addEventListener("DOMContentLoaded", () => {
    // Index Page Logic
    const submitIndex = document.getElementById("submitIndex");
    const indexForm = document.getElementById("indexForm");

    // Enable "Next" button when form is valid
    indexForm.addEventListener("input", () => submitIndex.disabled = !indexForm.checkValidity());

    // Handle form submission on index page
    indexForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (indexForm.checkValidity()) {
            window.location.href = "contact.html";  // Redirect to contact page
        }
    });

    // Contact Page Logic
    const submitContact = document.getElementById("submitContact");
    const contactForm = document.getElementById("contactForm");

    // Enable "Next" button when form is valid
    contactForm.addEventListener("input", () => submitContact.disabled = !contactForm.checkValidity());

    // Handle form submission on contact page
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (contactForm.checkValidity()) {
            window.location.href = "payment.html";  // Redirect to payment page
        }
    });

    // Payment Page Logic
    const submitPayment = document.getElementById("submitPayment");
    const paymentForm = document.getElementById("paymentForm");

    // Enable "Complete Payment" button when form is valid
    paymentForm.addEventListener("input", () => submitPayment.disabled = !paymentForm.checkValidity());

    // Handle form submission on payment page
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (paymentForm.checkValidity()) {
            alert("Payment Successful!");  // Show success message
            window.location.href = "success.html";  // Redirect to success page
        }
    });
});
