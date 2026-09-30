import { getCtaUrl } from "../cta.js";

function renderHeader(data) {
    const business = data.business || {};

    const headerCta = data.conversion?.primary || {
        label: "Get Started",
        type: "anchor",
        value: "#conversion"
    };

    const headerCtaUrl = getCtaUrl(headerCta);

    return `
        <header class="site-header">
            <div class="header-inner">

                <a href="#" class="brand">
                    ${business.logo
                        ? `
                            <img
                                src="${business.logo}"
                                alt="${business.name || "Business"}"
                            >
                          `
                        : ""
                    }

                    <span>${business.name || "Your Business Name"}</span>
                </a>

                <nav class="main-nav" aria-label="Main navigation">
                    <a href="#services">Services</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#faq">FAQ</a>
                </nav>

                <a href="${headerCtaUrl}" class="header-cta">
                    ${headerCta.label}
                </a>

            </div>
        </header>
    `;
}

export { renderHeader };