document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out to Home Exchange! We'll be in touch soon.");
  this.reset();
});
