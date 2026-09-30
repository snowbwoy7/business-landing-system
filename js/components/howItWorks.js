function renderHowItWorks(howItWorks) {
    if (!howItWorks || !howItWorks.enabled) {
        return "";
    }

    if (!howItWorks.steps || howItWorks.steps.length === 0) {
        return "";
    }

    return `
        <section class="how-it-works" id="how-it-works">
            <div class="how-it-works-content">

                ${howItWorks.title
                    ? `<h2>${howItWorks.title}</h2>`
                    : ""
                }

                ${howItWorks.description
                    ? `<p class="how-it-works-description">
                        ${howItWorks.description}
                       </p>`
                    : ""
                }

                <div class="steps">
                    ${howItWorks.steps.map((step, index) => `
                        <article class="step">
                            <span class="step-number">
                                ${index + 1}
                            </span>

                            <div>
                                <h3>${step.title || ""}</h3>

                                ${step.description
                                    ? `<p>${step.description}</p>`
                                    : ""
                                }
                            </div>
                        </article>
                    `).join("")}
                </div>

            </div>
        </section>
    `;
}

export { renderHowItWorks };