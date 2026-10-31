// Datum för bröllopet: lördag 14 augusti 2027, kl. 16:00 (vigsel i kapellet)
const WEDDING_DATE = new Date("2027-08-14T16:00:00+02:00");

/* Nedräkning */
function updateCountdown() {
    const now = new Date();
    let diff = Math.max(0, WEDDING_DATE - now);

    const days = Math.floor(diff / 86400000);
    diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000);
    diff -= hours * 3600000;
    const minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);

    const set = (key, value) => {
        const el = document.querySelector(`[data-countdown="${key}"]`);
        if (el) el.textContent = String(value).padStart(2, "0");
    };

    set("days", days);
    set("hours", hours);
    set("minutes", minutes);
    set("seconds", seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* Mobilmeny */
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Stäng menyn när en länk klickas (mobil)
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

/* Öppna Valleviken-panelen om sidan laddas med #valleviken-info i adressen */
const vallevikenDetails = document.getElementById("valleviken-info");

if (vallevikenDetails && window.location.hash === "#valleviken-info") {
    vallevikenDetails.open = true;
}
