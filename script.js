const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("year");

// Toggle mobile navigation.
if (navToggle && navLinks) {
	navToggle.addEventListener("click", () => {
		const isOpen = navLinks.classList.toggle("is-open");
		navToggle.setAttribute("aria-expanded", String(isOpen));
	});

	navItems.forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.classList.remove("is-open");
			navToggle.setAttribute("aria-expanded", "false");
		});
	});
}

// Add sticky header style once page is scrolled.
window.addEventListener("scroll", () => {
	if (window.scrollY > 10) {
		header?.classList.add("scrolled");
	} else {
		header?.classList.remove("scrolled");
	}
});

// Highlight the active section in nav.
const sectionObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}

			const id = entry.target.id;
			navItems.forEach((link) => {
				const isMatch = link.getAttribute("href") === `#${id}`;
				link.classList.toggle("active", isMatch);
			});
		});
	},
	{
		rootMargin: "-40% 0px -55% 0px",
		threshold: 0.01,
	}
);

document.querySelectorAll("main section[id]").forEach((section) => {
	sectionObserver.observe(section);
});

// Reveal content blocks as they enter the viewport.
const revealObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

if (yearNode) {
	yearNode.textContent = String(new Date().getFullYear());
}
