// This script collects contact form info and sends it to Formspree (no backend needed).
// Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint.

document.addEventListener('DOMContentLoaded', function () {
    // =========================
    // Contact Form Submission
    // =========================
    const form = document.querySelector('.contact-form');
    if (form) {
        const msgDiv = document.createElement('div');
        msgDiv.id = 'form-message';
        form.appendChild(msgDiv);

        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const name = form.querySelector('[name="name"]').value.trim();
            const email = form.querySelector('[name="email"]').value.trim();
            const message = form.querySelector('[name="message"]').value.trim();

            // Send data to Formspree
            const response = await fetch('https://formspree.io/f/xzzgbekp', {
                method: 'POST',
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            });

            if (response.ok) {
                msgDiv.textContent = "Thank you for contacting us! We'll get back to you soon.";
                msgDiv.style.color = "green";
                form.reset();
            } else {
                msgDiv.textContent = "Sorry, there was an error. Please try again later.";
                msgDiv.style.color = "red";
            }
        });
    }

    // =========================
    // Loader Animation
    // =========================
    // Create loader element
    const loader = document.createElement('div');
    loader.id = 'site-loader';
    loader.style.position = 'fixed';
    loader.style.top = 0;
    loader.style.left = 0;
    loader.style.width = '100vw';
    loader.style.height = '100vh';
    loader.style.background = '#000';
    loader.style.display = 'flex';
    loader.style.justifyContent = 'center';
    loader.style.alignItems = 'center';
    loader.style.zIndex = 9999;
    loader.innerHTML = `
        <span id="draxx-loader-text" style="
            font-size:2.5rem;
            font-weight:900;
            letter-spacing:4px;
            background:linear-gradient(90deg,#00b4d8,#ff8800);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            background-clip:text;
            color:transparent;
            opacity:0;
            transform: scale(0.8);
            transition: opacity 0.6s, transform 0.6s;
        ">DRAXX</span>
    `;

    document.body.appendChild(loader);
    document.body.style.overflow = 'hidden';

    // Animate the DRAXX text after a short delay
    setTimeout(function () {
        const draxxText = document.getElementById('draxx-loader-text');
        if (draxxText) {
            draxxText.style.opacity = '1';
            draxxText.style.transform = 'scale(1.1)';
        }
    }, 100);

    // Hide loader after 1.5 seconds and restore scrolling
    setTimeout(function () {
        loader.style.display = 'none';
        document.body.style.overflow = '';
    }, 1500);
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 400);
    }
});

// =========================
// Hamburger Menu
// =========================
// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.navlinks-container');
if (navToggle && navContainer) {
    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('open');
        navContainer.classList.toggle('open');
    });
    // Optional: close menu when a link is clicked
    navContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navContainer.classList.remove('open');
        });
    });
}

// Show/hide image on button click
document.addEventListener('DOMContentLoaded', function() {
    const showBtn = document.getElementById('showImageBtn');
    const hideBtn = document.getElementById('hideImageBtn');
    const imgDiv = document.getElementById('mainImageContainer');
    if (showBtn && hideBtn && imgDiv) {
        showBtn.addEventListener('click', function() {
            imgDiv.style.display = 'block';
            showBtn.style.display = 'none';
        });
        hideBtn.addEventListener('click', function() {
            imgDiv.style.display = 'none';
            showBtn.style.display = 'inline-block';
        });
    }
});
