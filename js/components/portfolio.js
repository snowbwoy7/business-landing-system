export function renderPortfolio(portfolio = []) {

    const items = Array.isArray(portfolio)
        ? portfolio.filter(item =>
            item &&
            (item.title || item.description || item.image)
        )
        : [];

    if (items.length === 0) {
        return "";
    }

    return `
        <section id="portfolio" class="portfolio-section">

            

                <div class="section-heading">
                    <p class="section-eyebrow">Our Work</p>
                    <h2>Portfolio</h2>
                    <p>
                        Explore some of our recent work and projects.
                    </p>
                </div>

                <div class="portfolio-grid">

                    ${items.map(item => `
                        <article class="portfolio-card">

                            ${item.image
                                ? `
                                    <div class="portfolio-image">
                                        <img
                                            src="${item.image}"
                                            alt="${item.title || "Portfolio project"}"
                                            loading="lazy"
                                        >
                                    </div>
                                `
                                : ""
                            }

                            <div class="portfolio-content">

                                ${item.title
                                    ? `<h3>${item.title}</h3>`
                                    : ""
                                }

                                ${item.description
                                    ? `<p>${item.description}</p>`
                                    : ""
                                }

                            </div>

                        </article>
                    `).join("")}

                </div>

        

        </section>
    `;
}