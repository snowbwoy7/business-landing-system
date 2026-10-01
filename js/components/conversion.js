import { getCtaUrl } from "../cta.js";

function renderConversion(conversion) {
if (!conversion || !conversion.primary) {
return "";
}

const primaryUrl = getCtaUrl(conversion.primary);

let html = "";

html += '<section class="conversion" id="conversion">';
html += '<div class="conversion-content">';

if (conversion.eyebrow) {
    html += '<p class="conversion-eyebrow">';
    html += conversion.eyebrow;
    html += '</p>';
}

if (conversion.title) {
    html += '<h2>';
    html += conversion.title;
    html += '</h2>';
}

if (conversion.description) {
    html += '<p class="conversion-description">';
    html += conversion.description;
    html += '</p>';
}

html += '<div class="conversion-actions">';

html += '<a ';
html += 'href="' + primaryUrl + '" ';
html += 'class="cta cta-primary">';
html += conversion.primary.label || "";
html += '</a>';

if (conversion.secondary && conversion.secondary.length) {
    conversion.secondary.forEach(cta => {
        html += '<a ';
        html += 'href="' + getCtaUrl(cta) + '" ';
        html += 'class="cta cta-secondary">';
        html += cta.label || "";
        html += '</a>';
    });
}

html += '</div>';
html += '</div>';
html += '</section>';

return html;

}

export { renderConversion };
