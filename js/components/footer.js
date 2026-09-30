import { getCtaUrl } from "../cta.js";
function renderFooter(data) {
    const business = data.business || {};
    const contact = data.contact || {};
    const social = data.social || {};

    const socialLinks = Object.entries(social)
        .filter(([_, value]) => value)
        .map(([platform, value]) => `
            <a href="${value}" target="_blank" rel="noopener noreferrer">
                ${platform}
            </a>
        `)
        .join("");

    return `
        <footer class="site-footer">
            <div class="footer-inner">

                <div class="footer-business">
                    <h2>${business.name || "Your Business Name"}</h2>

                    ${business.tagline
                        ? `<p>${business.tagline}</p>`
                        : ""
                    }
                </div>

                <div class="footer-contact">
                    ${contact.phone
    ? `<a href="${getCtaUrl({
        type: "phone",
        value: contact.phone
    })}">${contact.phone}</a>`
    : ""
}
${contact.whatsapp
    ? `<a href="${getCtaUrl({
        type: "whatsapp",
        value: contact.whatsapp
    })}" target="_blank" rel="noopener noreferrer">WhatsApp</a>`
    : ""
}

${contact.email
    ? `<a href="${getCtaUrl({
        type: "email",
        value: contact.email
    })}">${contact.email}</a>`
    : ""
}
                    ${contact.address
                        ? `<span>${contact.address}</span>`
                        : ""
                    }
                </div>

                ${
                    socialLinks
                        ? `
                            <div class="footer-social">
                                ${socialLinks}
                            </div>
                          `
                        : ""
                }

            </div>

            <div class="footer-bottom">
                <p>
                    © ${new Date().getFullYear()}
                    ${business.name || "Your Business Name"}.
                    All rights reserved.
                </p>
            </div>
        </footer>
    `;
}

export { renderFooter };