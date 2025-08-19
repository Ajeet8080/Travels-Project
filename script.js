// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show alert on "Book Now" click
document.querySelector('.btn-secondary').addEventListener('click', () => {
    alert("Thanks for choosing A.K Travels! We'll contact you soon ✈️");
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('formMessage');

    if (email.includes('@')) {
        message.textContent = "Thank you! We'll contact you shortly.";
        message.style.color = "green";
    } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // ✅ Destination data
    const destinations = [
        {
            name: "Paris",
            image: "https://cdn.pixabay.com/photo/2017/01/03/22/00/tower-1950742_1280.jpg"
        },
        {
            name: "London",
            image: "https://cdn.pixabay.com/photo/2016/12/11/23/26/london-1900570_1280.jpg"
        },
        {
            name: "New York",
            image: "https://cdn.pixabay.com/photo/2017/09/29/23/54/america-2800896_1280.jpg"
        }
    ];

    // ✅ Inject into the container
    const container = document.getElementById("destinationContainer");

    destinations.forEach(dest => {
        const card = document.createElement("div");
        card.className = "destination-card";
        card.style.backgroundImage = `url('${dest.image}')`;

        const title = document.createElement("h3");
        title.textContent = dest.name;

        card.appendChild(title);
        container.appendChild(card);
    });

    // Other JS (smooth scroll, form, etc.)...

});

// Wait for the DOM to fully load before running the JS
document.addEventListener("DOMContentLoaded", function () {

    // 🔁 Smooth Scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ✅ Form submission logic
    const form = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent real submission

        const email = emailInput.value.trim();

        // ✅ Basic email validation
        if (email.includes("@") && email.includes(".")) {
            message.textContent = "✅ Thank you! We'll contact you soon.";
            message.style.color = "green";
            form.reset();
        } else {
            message.textContent = "❌ Please enter a valid email address.";
            message.style.color = "red";
        }
    });

    // ✅ Book Now button logic
    const bookNowBtn = document.querySelector(".btn-secondary");
    bookNowBtn.addEventListener("click", function () {
        alert("🎉 Booking process started! We'll reach out to you shortly.");
    });
});

