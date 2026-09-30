function renderProof(proof) {
    if (!proof || !proof.enabled) {
        return "";
    }

    return `
        <section class="proof">
            <div class="proof-content">
                <div class="proof-heading">
                    <p class="proof-eyebrow">Why Choose Us</p>
                    <h2>Trusted by Our Customers</h2>
                </div>

                ${
                    proof.statistics && proof.statistics.length
                        ? `
                            <div class="proof-statistics">
                                ${proof.statistics.map(stat => `
                                    <div class="proof-stat">
                                        <strong>${stat.value || ""}</strong>
                                        <span>${stat.label || ""}</span>
                                    </div>
                                `).join("")}
                            </div>
                          `
                        : ""
                }

                ${
                    proof.testimonials && proof.testimonials.length
                        ? `
                            <div class="proof-testimonials">
                                ${proof.testimonials.map(testimonial => `
                                    <article class="testimonial">
                                        <p>${testimonial.quote || ""}</p>
                                        <strong>${testimonial.name || ""}</strong>
                                    </article>
                                `).join("")}
                            </div>
                          `
                        : ""
                }
            </div>
        </section>
    `;
}

export { renderProof };