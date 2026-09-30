import { getCtaUrl } from "../cta.js";

function renderHero(hero) {
    const primaryCtaUrl = getCtaUrl(hero.primaryCta);
    const secondaryCtaUrl = getCtaUrl(hero.secondaryCta);

const heroImage = hero.image
    ? `
        <div class="hero-media">
            <img
                src="${hero.image}"
                alt="${hero.imageAlt || ""}"
            >
        </div>
      `
    : "";

    return `
        <section class="hero">
            <div class="hero-content">
                <p class="hero-eyebrow">${hero.eyebrow}</p>

                <h1>${hero.headline}</h1>

                <p class="hero-subheadline">
                    ${hero.subheadline}
                </p>

                <div class="hero-actions">
                    <a
                        href="${primaryCtaUrl}"
                        class="cta cta-primary"
                    >
                        ${hero.primaryCta.label}
                    </a>

                    <a
                        href="${secondaryCtaUrl}"
                        class="cta cta-secondary"
                    >
                        ${hero.secondaryCta.label}
                    </a>
                </div>
            </div>
        ${heroImage}
            </section>
    `;
}

export { renderHero };