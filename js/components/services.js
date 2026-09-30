function renderServices(services) {
    if (!services || !services.enabled) {
        return "";
    }

    if (!services.items || services.items.length === 0) {
        return "";
    }

    return `
        <section class="services" id="services">
            <div class="services-content">

                <div class="services-heading">
                    <p class="services-eyebrow">What We Do</p>
                    <h2>Our Services</h2>
                </div>

                <div class="services-grid">
                    ${services.items.map(service => `
                        <article class="service-card">
                            ${service.image
                                ? `
                                    <img
                                        src="${service.image}"
                                        alt="${service.title || ""}"
                                    >
                                  `
                                : ""
                            }

                            <h3>${service.title || ""}</h3>

                            ${service.description
                                ? `<p>${service.description}</p>`
                                : ""
                            }
                        </article>
                    `).join("")}
                </div>

            </div>
        </section>
    `;
}

export { renderServices };