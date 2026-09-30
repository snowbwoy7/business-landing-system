import { getCtaUrl } from "../cta.js";

function renderConversion(conversion) {
    if (!conversion || !conversion.primary) {
        return "";
    }

    const primaryUrl = getCtaUrl(conversion.primary);

    return `
        <section class="conversion" id="conversion">
            <div class="conversion-content">

                ${conversion.eyebrow
                    ? `<p class="conversion-eyebrow">
                        ${conversion.eyebrow}
                       </p>`
                    : ""
                }

                ${conversion.title
                    ? `<h2>${conversion.title}</h2>`
                    : ""
                }

                ${conversion.description
                    ? `<p class="conversion-description">
                        ${conversion.description}
                       </p>`
                    : ""
                }

                <div class="conversion-actions">
                    <a
                        href="${primaryUrl}"
                        class="cta cta-primary"
                    >
                        ${conversion.primary.label}
                    </a>

                    ${
                        conversion.secondary && conversion.secondary.length
                            ? conversion.secondary.map(cta => `
                                <a
                                    href="${getCtaUrl(cta)}"
                                    class="cta cta-secondary"
                                >
                                    ${cta.label}
                                </a>
                            `).join("")
                            : ""
                    }
                </div>

            </div>
        </section>
    `;
}

export { renderConversion };