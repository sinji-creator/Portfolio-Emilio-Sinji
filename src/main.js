import { contactConfig, courses, navigation, projects, roles, skillGroups } from "./data.js";

const asset = (path) => `./assets/images/${path.split("/").map(encodeURIComponent).join("/")}`;
const iconUrl = (slug, color) => slug.startsWith("https://") ? slug : `https://cdn.simpleicons.org/${slug}/${color}`;

// Navigation Render
const navMarkup = navigation.map(([label, id], index) =>
  `<a href="#${id}" class="nav-link${index === 0 ? " is-active" : ""}" data-section="${id}"><span>${label}</span><i>0${index + 1}</i></a>`
).join("");

document.querySelector("#desktop-nav").innerHTML = navMarkup;

document.querySelector("#mobile-nav-links").innerHTML = navigation.map(([label, id], index) =>
  `<a href="#${id}" class="mobile-nav-link" data-section="${id}"><span class="mobile-nav-index">0${index + 1}</span>${label}<span class="mobile-nav-arrow">↗</span></a>`
).join("");

// Skill Groups Render
document.querySelector("#skill-groups").innerHTML = skillGroups.map((group, index) => `
  <article class="skill-group reveal" style="--stagger:${index * 90}ms">
    <div class="skill-group-title">
      <span class="group-symbol" aria-hidden="true">
        <img src="https://api.iconify.design/${["lucide/chart-no-axes-column-increasing", "lucide/flask-conical", "lucide/brain-circuit"][index]}.svg?color=%2383DDF5" alt="" width="20" height="20" loading="lazy">
      </span>
      <h3>${group.title}</h3>
      <span class="group-count">${String(group.tools.length).padStart(2, "0")} TOOLS</span>
    </div>
    <div class="tool-list">
      ${group.tools.map(([name, slug, color]) => `
        <div class="tool-chip">
          <span class="tool-icon">
            <img src="${iconUrl(slug, color)}" alt="${name} logo" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
            <span hidden aria-hidden="true">${name.slice(0, 2)}</span>
          </span>
          <span>${name}</span>
        </div>
      `).join("")}
    </div>
  </article>
`).join("");

// Projects Render
document.querySelector("#project-list").innerHTML = projects.map((project, index) => `
  <article class="project-card reveal" style="--stagger:${index * 70}ms">
    <a class="project-visual" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Lihat proyek ${project.title}">
      <img src="${asset(project.image)}" alt="Tangkapan layar proyek ${project.title}" loading="lazy">
      <span class="project-number">${project.number} / 05</span>
      <span class="project-open" aria-hidden="true">↗</span>
    </a>
    <div class="project-info">
      <div class="project-meta">
        <span>${project.type}</span>
        <span>PROJECT ${project.number}</span>
      </div>
      <h3><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3>
      <p>${project.description}</p>
      <a class="text-link" href="${project.url}" target="_blank" rel="noopener noreferrer">KUNJUNGI PROYEK <span aria-hidden="true">↗</span></a>
    </div>
  </article>
`).join("");

// Courses Render
document.querySelector("#course-list").innerHTML = courses.map((course, index) => `
  <article class="course-card reveal" style="--stagger:${index * 90}ms">
    <div class="course-header">
      <div class="provider-logo">
        <img src="${asset(course.logo)}" alt="Logo ${course.provider}" loading="lazy">
      </div>
      <div class="course-title">
        <p class="eyebrow">${course.provider}</p>
        <h3>${course.title}</h3>
      </div>
      <span class="course-date">${course.date}</span>
    </div>
    <div class="course-groups">
      ${course.groups.map((group, gindex) => `
        <details class="certificate-group"${course.title.startsWith("IDCamp") ? "" : " open"}>
          <summary>
            <span>${group.title}</span>
            <span class="cert-count">${String(group.items.length).padStart(2, "0")} SERTIFIKAT <i aria-hidden="true">⌄</i></span>
          </summary>
          <div class="certificate-grid">
            ${group.items.map(item => `
              <a class="certificate" href="${item.url}" target="_blank" rel="noopener noreferrer" aria-label="Buka sertifikat: ${item.title}">
                <span class="certificate-image">
                  <img src="${item.thumbnail}" alt="Pratinjau sertifikat ${item.title}" loading="lazy" onerror="this.src='https://drive.google.com/thumbnail?id=${new URL(item.url).pathname.split('/')[3]}&sz=w1000'">
                  <span aria-hidden="true">↗</span>
                </span>
                <span class="certificate-title">${item.title}</span>
              </a>
            `).join("")}
          </div>
        </details>
      `).join("")}
    </div>
  </article>
`).join("");

// Social Links Render
const socials = [
  { key: "whatsapp", label: "WhatsApp", icon: "whatsapp", color: "25D366", make: value => `https://wa.me/${value.replace(/\D/g, "")}` },
  { key: "email", label: "Gmail", icon: "gmail", color: "EA4335", make: value => `mailto:${value}` },
  { key: "instagram", label: "Instagram", icon: "instagram", color: "E4405F", make: value => value.startsWith("http") ? value : `https://instagram.com/${value.replace(/^@/, "")}` },
  { key: "linkedin", label: "LinkedIn", icon: "https://api.iconify.design/logos/linkedin-icon.svg", color: "0A66C2", make: value => value.startsWith("http") ? value : `https://linkedin.com/in/${value}` },
  { key: "github", label: "GitHub", icon: "github", color: "83DDF5", make: value => value }
];

document.querySelector("#social-links").innerHTML = socials.map(social => {
  const value = contactConfig[social.key];
  return value
    ? `<a class="social-link" href="${social.make(value)}" ${social.key === "email" ? "" : "target='_blank' rel='noopener noreferrer'"} aria-label="${social.label}"><img src="${iconUrl(social.icon, social.color)}" alt="${social.label}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden aria-hidden="true">${social.label.slice(0, 1)}</span></a>`
    : `<span class="social-link is-unavailable" aria-label="${social.label} belum dikonfigurasi" title="${social.label} belum dikonfigurasi"><img src="${iconUrl(social.icon, social.color)}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden aria-hidden="true">${social.label.slice(0, 1)}</span><span class="sr-only">${social.label} — tautan belum tersedia</span></span>`;
}).join("");

// Mobile Menu Navigation
const toggle = document.querySelector("#menu-toggle");
const closeButton = document.querySelector("#menu-close");
const mobileMenu = document.querySelector("#mobile-menu");

function setMenuOpen(open) {
  document.body.classList.toggle("menu-open", open);
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  if (open) closeButton.focus();
  else toggle.focus();
}

toggle.addEventListener("click", () => setMenuOpen(!mobileMenu.classList.contains("is-open")));
closeButton.addEventListener("click", () => setMenuOpen(false));
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenuOpen(false)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) setMenuOpen(false);
});

// Scroll Reveal & Animations
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let previousScrollY = window.scrollY;
let scrollDirection = "down";
const revealElements = document.querySelectorAll(".reveal");

if (reduceMotion) {
  revealElements.forEach(element => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const element = entry.target;
      if (entry.isIntersecting) {
        element.dataset.revealSeen = "true";
        element.classList.add("is-visible");
        element.classList.remove("is-hidden-above", "is-hidden-below");
      } else {
        const wasVisible = element.dataset.revealSeen === "true";
        const hiddenAbove = wasVisible ? scrollDirection === "down" : entry.boundingClientRect.top < window.innerHeight * .45;
        element.classList.remove("is-visible");
        element.classList.toggle("is-hidden-above", hiddenAbove);
        element.classList.toggle("is-hidden-below", !hiddenAbove);
      }
    });
  }, { threshold: 0.13, rootMargin: "0px 0px -35px 0px" });

  revealElements.forEach(element => revealObserver.observe(element));
}

// Active Section Navigation Observer
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-section]").forEach(link => link.classList.toggle("is-active", link.dataset.section === entry.target.id));
    }
  });
}, { rootMargin: "-36% 0px -55% 0px" });

document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));

// Sticky Header & Scroll Handling
const header = document.querySelector("#site-header");
let scrollQueued = false;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY !== previousScrollY) {
    scrollDirection = currentScrollY > previousScrollY ? "down" : "up";
    previousScrollY = currentScrollY;
  }
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(() => {
    header.classList.toggle("is-scrolled", window.scrollY > 22);
    scrollQueued = false;
  });
}, { passive: true });

// Dynamic Roles Typewriter Effect
const roleNode = document.querySelector("#role-text");

if (roleNode && Array.isArray(roles) && roles.length > 0) {
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 90;   // Kecepatan ketik (ms per karakter)
  const deletingSpeed = 45; // Kecepatan hapus (ms per karakter)
  const pauseEnd = 2000;     // Jeda saat kata selesai diketik
  const pauseStart = 400;    // Jeda sebelum mulai ketik peran berikutnya

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
      roleNode.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      roleNode.textContent = currentRole.substring(0, charIndex);
    }

    let nextTimeout = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      nextTimeout = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextTimeout = pauseStart;
    }

    setTimeout(typeEffect, nextTimeout);
  }

  typeEffect();
}

// Starfield Canvas Animation
const starCanvas = document.querySelector("#starfield");
const starContext = starCanvas?.getContext("2d");

if (starCanvas && starContext) {
  let canvasWidth = 0;
  let canvasHeight = 0;
  let pixelRatio = 1;
  let stars = [];
  let frameId = 0;

  function drawStarfield(time = 0) {
    starContext.clearRect(0, 0, canvasWidth, canvasHeight);
    const linkDistance = Math.min(245, Math.max(155, canvasWidth * .17));
    const linkDistanceSquared = linkDistance * linkDistance;
    const pulses = stars.map(star => reduceMotion ? .55 : .5 + .5 * Math.sin(time * .001 * star.twinkleSpeed + star.phase));

    for (let index = 0; index < stars.length; index++) {
      const star = stars[index];
      if (!reduceMotion) {
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0) star.x = canvasWidth;
        else if (star.x > canvasWidth) star.x = 0;
        if (star.y < 0) star.y = canvasHeight;
        else if (star.y > canvasHeight) star.y = 0;
      }
      for (let otherIndex = index + 1; otherIndex < stars.length; otherIndex++) {
        const other = stars[otherIndex];
        const dx = star.x - other.x;
        const dy = star.y - other.y;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared > linkDistanceSquared) continue;
        const distance = Math.sqrt(distanceSquared);
        const pulse = (pulses[index] + pulses[otherIndex]) * .5;
        const opacity = (1 - distance / linkDistance) * (.035 + pulse * .145);
        starContext.beginPath();
        starContext.moveTo(star.x, star.y);
        starContext.lineTo(other.x, other.y);
        starContext.strokeStyle = `rgba(126,190,220,${opacity})`;
        starContext.lineWidth = .7;
        starContext.stroke();
      }
    }

    stars.forEach((star, index) => {
      const pulse = pulses[index];
      const opacity = star.brightness * (.2 + pulse * .76);
      starContext.beginPath();
      starContext.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starContext.fillStyle = `rgba(219,241,255,${opacity})`;
      starContext.fill();
      if (star.radius > 1.25 && pulse > .86) {
        const ray = star.radius * (2.5 + pulse * 2.5);
        starContext.beginPath();
        starContext.moveTo(star.x - ray, star.y);
        starContext.lineTo(star.x + ray, star.y);
        starContext.moveTo(star.x, star.y - ray);
        starContext.lineTo(star.x, star.y + ray);
        starContext.strokeStyle = `rgba(195,235,255,${opacity * .48})`;
        starContext.lineWidth = .55;
        starContext.stroke();
      }
    });

    if (!reduceMotion && !document.hidden) frameId = window.requestAnimationFrame(drawStarfield);
  }

  function resizeStarfield() {
    if (frameId) window.cancelAnimationFrame(frameId);
    frameId = 0;
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    starCanvas.width = Math.round(canvasWidth * pixelRatio);
    starCanvas.height = Math.round(canvasHeight * pixelRatio);
    starContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    const count = Math.max(28, Math.min(110, Math.round(canvasWidth * canvasHeight / 16000)));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: Math.random() < .12 ? 1.5 + Math.random() * .55 : .45 + Math.random() * .7,
      brightness: .62 + Math.random() * .38,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: .45 + Math.random() * 1.1,
      dx: (Math.random() - .5) * .035,
      dy: (Math.random() - .5) * .027
    }));
    drawStarfield(0);
  }

  window.addEventListener("resize", resizeStarfield, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    } else if (!document.hidden && !reduceMotion && !frameId) {
      drawStarfield(performance.now());
    }
  });
  resizeStarfield();
}

// Contact Form Handler
document.querySelector("#contact-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const subject = `Pesan dari ${values.get("name")}`;
  const body = `Halo Emilio,%0D%0A%0D%0A${encodeURIComponent(values.get("message"))}%0D%0A%0D%0ADari: ${encodeURIComponent(values.get("name"))}%0D%0AEmail: ${encodeURIComponent(values.get("email"))}`;
  const recipient = contactConfig.email.trim();
  const draft = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
  document.querySelector("#form-status").textContent = recipient
    ? "Aplikasi email Anda akan terbuka dengan draf pesan. Silakan tinjau dan kirim dari sana."
    : "Draf pesan akan dibuka; alamat penerima belum diatur. Tambahkan email Emilio pada contactConfig.email di src/data.js sebelum publikasi.";
  window.location.href = draft;
});

// Dynamic Footer Year
document.querySelector("#year").textContent = new Date().getFullYear();