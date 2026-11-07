const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const fields = [
      ["Name", "name"],
      ["Email", "email"],
      ["Company or website", "company"],
      ["Service", "service"],
      ["Estimated budget", "budget"],
      ["Timeline", "timeline"],
      ["More about the project", "message"],
    ];
    const body = fields
      .map(([label, key]) => `${label}: ${formData.get(key) || "Not provided"}`)
      .join("\n");
    const subject = encodeURIComponent(`New consultancy enquiry from ${formData.get("name")}`);
    const message = document.querySelector("#form-note");
    message.textContent = "Opening a pre-filled Gmail draft addressed to jamaxe15026@gmail.com. Review and send your note in Gmail.";
    const gmailDraft = new URL("https://mail.google.com/mail/");
    gmailDraft.search = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "jamaxe15026@gmail.com",
      su: decodeURIComponent(subject),
      body,
    }).toString();
    window.open(gmailDraft.toString(), "_blank", "noopener,noreferrer");
  });
}
