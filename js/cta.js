function getCtaUrl(cta) {
    if (!cta || !cta.value) {
        return "#";
    }

    switch (cta.type) {
        case "whatsapp":
            return `https://wa.me/${cta.value}`;

        case "phone":
            return `tel:${cta.value}`;

        case "email":
            return `mailto:${cta.value}`;

        case "anchor":
            return cta.value;

        case "url":
        case "booking":
            return cta.value;

        default:
            return cta.value;
    }
}

export { getCtaUrl };