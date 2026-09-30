import { renderHero } from "./components/hero.js";
import { renderOffer } from "./components/offer.js";
import { renderServices } from "./components/services.js";
import { renderProof } from "./components/proof.js";
import { renderHowItWorks } from "./components/howItWorks.js";
import { renderConversion } from "./components/conversion.js";
import { renderFaq } from "./components/faq.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
const app = document.getElementById("app");

async function loadBusinessData() {
    try {
        const response = await fetch("data/business.json?v=2");
        const data = await response.json();

        document.title = data.business?.name || "Business Landing System";

        const description = document.querySelector(
            'meta[name="description"]'
        );

        if (description) {
            description.setAttribute(
                "content",
                data.business?.description || "Professional business landing page."
            );
        }

        renderPage(data);
    } catch (error) {
        console.error("Failed to load business data:", error);
    }
}
function renderPage(data) {
    app.innerHTML = `
        ${renderHeader(data)}
        ${renderHero(data.hero)}
        ${renderOffer(data.offer)}
        ${renderServices(data.services)}
        ${renderProof(data.proof)}
        ${renderHowItWorks(data.howItWorks)}
        ${renderConversion(data.conversion)}
        ${renderFaq(data.faq)}
        ${renderFooter(data)}
    `;
}

loadBusinessData();