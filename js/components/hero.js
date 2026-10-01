import { getCtaUrl } from "../cta.js";

function renderHero(hero) {
    const primaryCta = hero?.primaryCta;
    const secondaryCta = hero?.secondaryCta;

    const primaryCtaUrl = primaryCta
        ? getCtaUrl(primaryCta)
        : "";

    const secondaryCtaUrl = secondaryCta
        ? getCtaUrl(secondaryCta)
        : "";

    const heroImage = hero?.image
        ? `
            <div class="hero-media">
                <img
                    src="${hero.image}"
                    alt="${hero.imageAlt || ""}"
                >
            </div>
          `
        : "";

    const primaryCtaHtml = primaryCta
        ? `
            <a
                href="${primaryCtaUrl}"
                class="cta cta-primary"
            >
                ${primaryCta.label || ""}
            </a>
          `
        : "";

    const secondaryCtaHtml = secondaryCta
        ? `
            <a
                href="${secondaryCtaUrl}"
                class="cta cta-secondary"
            >
                ${secondaryCta.label || ""}
            </a>
          `
        : "";

    return `
        <section class="hero">
            <div class="hero-content">

                <p class="hero-eyebrow">
                    ${hero?.eyebrow || ""}
                </p>

                <h1>
                    ${hero?.headline || ""}
                </h1>

                <p class="hero-subheadline">
                    ${hero?.subheadline || ""}
                </p>

                <div class="hero-actions">
                    ${primaryCtaHtml}
                    ${secondaryCtaHtml}
                </div>

            </div>

            ${heroImage}

        </section>
    `;
}

export { renderHero };