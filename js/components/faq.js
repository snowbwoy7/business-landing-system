function renderFaq(faq) {
    if (!faq || !faq.enabled) {
        return "";
    }

    if (!faq.items || faq.items.length === 0) {
        return "";
    }

    return `
        <section class="faq" id="faq">
            <div class="faq-content">

                <div class="faq-heading">
                    <p class="faq-eyebrow">Questions</p>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div class="faq-list">
                    ${faq.items.map(item => `
                        <details class="faq-item">
                            <summary>${item.question || ""}</summary>
                            <p>${item.answer || ""}</p>
                        </details>
                    `).join("")}
                </div>

            </div>
        </section>
    `;
}

export { renderFaq };