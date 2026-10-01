import { renderHero } from "./components/hero.js";
import { renderOffer } from "./components/offer.js";
import { renderServices } from "./components/services.js";
import { renderProof } from "./components/proof.js";
import { renderHowItWorks } from "./components/howItWorks.js";
import { renderConversion } from "./components/conversion.js";
import { renderFaq } from "./components/faq.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { validateBusinessData } from "./validateBusinessData.js";

const app = document.getElementById("app");

async function loadBusinessData() {
try {
const response = await fetch("data/business.json?v=2");

    if (!response.ok) {
        throw new Error(
            `Failed to load business data: HTTP ${response.status}`
        );
    }

    const data = await response.json();

    const validation = validateBusinessData(data);

    if (!validation.valid) {
        console.error(
            "Invalid business data:",
            validation.errors
        );
        return;
    }

    document.title =
        data.business?.name || "Business Landing System";

    const description = document.querySelector(
        'meta[name="description"]'
    );

    if (description) {
        description.setAttribute(
            "content",
            data.business?.description ||
                "Professional business landing page."
        );
    }

    renderPage(data);

} catch (error) {
    console.error(
        "Failed to load business data:",
        error
    );
}

}

function renderPage(data) {
const sections = data.settings?.sections || {};

app.innerHTML = `
    ${renderHeader(data)}

    ${sections.hero !== false
        ? renderHero(data.hero)
        : ""
    }

    ${sections.offer !== false
        ? renderOffer(data.offer)
        : ""
    }

    ${sections.services !== false
        ? renderServices(data.services)
        : ""
    }

    ${sections.proof !== false
        ? renderProof(data.proof)
        : ""
    }

    ${sections.howItWorks !== false
        ? renderHowItWorks(data.howItWorks)
        : ""
    }

    ${sections.conversion !== false
        ? renderConversion(data.conversion)
        : ""
    }

    ${sections.faq !== false
        ? renderFaq(data.faq)
        : ""
    }

    ${renderFooter(data)}
`;

}

loadBusinessData();