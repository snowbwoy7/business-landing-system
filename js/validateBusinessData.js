function validateBusinessData(data) {
    if (!data || typeof data !== "object") {
        return {
            valid: false,
            errors: ["Business data must be an object."]
        };
    }

    const requiredSections = [
        "business",
        "contact",
        "hero",
        "offer",
        "services",
        "proof",
        "howItWorks",
        "conversion",
        "faq",
        "social",
        "settings"
    ];

    const errors = requiredSections
        .filter(section => !data[section])
        .map(section => `Missing required section: ${section}`);

    return {
        valid: errors.length === 0,
        errors
    };
}

export { validateBusinessData };