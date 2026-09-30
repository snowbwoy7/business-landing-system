function renderHeader(data) {
    const business = data.business || {};

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

                <a href="#conversion" class="header-cta">
                    Get Started
                </a>

            </div>
        </header>
    `;
}

export { renderHeader };