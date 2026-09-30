function renderOffer(offer) {
    if (!offer || !offer.enabled) {
        return "";
    }

    return `
        <section class="offer">
            <div class="offer-content">

                ${offer.eyebrow
                    ? `<p class="offer-eyebrow">${offer.eyebrow}</p>`
                    : ""
                }

                ${offer.title
                    ? `<h2>${offer.title}</h2>`
                    : ""
                }

                ${offer.description
                    ? `<p class="offer-description">${offer.description}</p>`
                    : ""
                }

                ${
                    offer.highlights && offer.highlights.length
                        ? `
                            <ul class="offer-highlights">
                                ${offer.highlights.map(
                                    highlight => `<li>${highlight}</li>`
                                ).join("")}
                            </ul>
                          `
                        : ""
                }

            </div>

            ${
                offer.image
                    ? `
                        <div class="offer-media">
                            <img
                                src="${offer.image}"
                                alt="${offer.title || ""}"
                            >
                        </div>
                      `
                    : ""
            }
        </section>
    `;
}

export { renderOffer };