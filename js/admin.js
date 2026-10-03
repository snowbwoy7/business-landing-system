const businessForm = document.getElementById("business-form");
const contactForm = document.getElementById("contact-form");
const heroForm = document.getElementById("hero-form");
const offerForm = document.getElementById("offer-form");
const servicesForm = document.getElementById("services-form");
const proofForm = document.getElementById("proof-form");
const proofEnabled = document.getElementById("proof-enabled");

const testimonialQuote =
    document.getElementById("testimonial-quote");

const testimonialName =
    document.getElementById("testimonial-name");

const statistic1Value =
    document.getElementById("statistic-1-value");

const statistic1Label =
    document.getElementById("statistic-1-label");

const statistic2Value =
    document.getElementById("statistic-2-value");

const statistic2Label =
    document.getElementById("statistic-2-label");

const statistic3Value =
    document.getElementById("statistic-3-value");

const statistic3Label =
    document.getElementById("statistic-3-label");
const certification1Name =
    document.getElementById("certification-1-name");

const certification1Issuer =
    document.getElementById("certification-1-issuer");

const certification2Name =
    document.getElementById("certification-2-name");

const certification2Issuer =
    document.getElementById("certification-2-issuer");

const certification3Name =
    document.getElementById("certification-3-name");

const certification3Issuer =
    document.getElementById("certification-3-issuer");
    const portfolio1Title =
    document.getElementById("portfolio-1-title");

const portfolio1Description =
    document.getElementById("portfolio-1-description");

const portfolio1Image =
    document.getElementById("portfolio-1-image");

const portfolio2Title =
    document.getElementById("portfolio-2-title");

const portfolio2Description =
    document.getElementById("portfolio-2-description");

const portfolio2Image =
    document.getElementById("portfolio-2-image");

const portfolio3Title =
    document.getElementById("portfolio-3-title");

const portfolio3Description =
    document.getElementById("portfolio-3-description");

const portfolio3Image =
    document.getElementById("portfolio-3-image");
    const review1Text =
    document.getElementById("review-1-text");

const review1Name =
    document.getElementById("review-1-name");

const review2Text =
    document.getElementById("review-2-text");

const review2Name =
    document.getElementById("review-2-name");

const review3Text =
    document.getElementById("review-3-text");

const review3Name =
    document.getElementById("review-3-name");
    // BUSINESS INFORMATION

const businessName = document.getElementById("business-name");
const businessTagline = document.getElementById("business-tagline");
const businessDescription = document.getElementById("business-description");
const businessLogo = document.getElementById("business-logo");

// CONTACT INFORMATION

const contactWhatsapp = document.getElementById("contact-whatsapp");
const contactPhone = document.getElementById("contact-phone");
const contactEmail = document.getElementById("contact-email");
const contactAddress = document.getElementById("contact-address");
const contactHours = document.getElementById("contact-hours");

// HERO SECTION

const heroEyebrow = document.getElementById("hero-eyebrow");
const heroHeadline = document.getElementById("hero-headline");
const heroSubheadline = document.getElementById("hero-subheadline");
const heroImage = document.getElementById("hero-image");
const heroImageAlt = document.getElementById("hero-image-alt");

const heroPrimaryLabel = document.getElementById("hero-primary-label");
const heroPrimaryType = document.getElementById("hero-primary-type");
const heroPrimaryValue = document.getElementById("hero-primary-value");

const heroSecondaryLabel = document.getElementById("hero-secondary-label");
const heroSecondaryType = document.getElementById("hero-secondary-type");
const heroSecondaryValue = document.getElementById("hero-secondary-value");

// OFFER SECTION

const offerEnabled = document.getElementById("offer-enabled");
const offerEyebrow = document.getElementById("offer-eyebrow");
const offerTitle = document.getElementById("offer-title");
const offerDescription = document.getElementById("offer-description");
const offerImage = document.getElementById("offer-image");

const offerHighlight1 = document.getElementById("offer-highlight-1");
const offerHighlight2 = document.getElementById("offer-highlight-2");
const offerHighlight3 = document.getElementById("offer-highlight-3");

// SERVICES SECTION

const servicesEnabled =
document.getElementById("services-enabled");

const service1Title =
document.getElementById("service-1-title");

const service1Description =
document.getElementById("service-1-description");

const service1Image =
document.getElementById("service-1-image");

const service2Title =
document.getElementById("service-2-title");

const service2Description =
document.getElementById("service-2-description");

const service2Image =
document.getElementById("service-2-image");

const service3Title =
document.getElementById("service-3-title");

const service3Description =
document.getElementById("service-3-description");

const service3Image =
document.getElementById("service-3-image");

let businessData = null;

// LOAD BUSINESS DATA

async function loadBusinessData() {

try {

    const response =
        await fetch("/api/business");

    if (!response.ok) {

        throw new Error(
            "Failed to load business data."
        );
    }

    businessData =
        await response.json();


    // BUSINESS INFORMATION

    businessName.value =
        businessData.business?.name || "";

    businessTagline.value =
        businessData.business?.tagline || "";

    businessDescription.value =
        businessData.business?.description || "";

    businessLogo.value =
        businessData.business?.logo || "";


    // CONTACT INFORMATION

    contactWhatsapp.value =
        businessData.contact?.whatsapp || "";

    contactPhone.value =
        businessData.contact?.phone || "";

    contactEmail.value =
        businessData.contact?.email || "";

    contactAddress.value =
        businessData.contact?.address || "";

    contactHours.value =
        businessData.contact?.hours || "";


    // HERO SECTION

    heroEyebrow.value =
        businessData.hero?.eyebrow || "";

    heroHeadline.value =
        businessData.hero?.headline || "";

    heroSubheadline.value =
        businessData.hero?.subheadline || "";

    heroImage.value =
        businessData.hero?.image || "";

    heroImageAlt.value =
        businessData.hero?.imageAlt || "";


    // PRIMARY CTA

    heroPrimaryLabel.value =
        businessData.hero?.primaryCta?.label || "";

    heroPrimaryType.value =
        businessData.hero?.primaryCta?.type ||
        "whatsapp";

    heroPrimaryValue.value =
        businessData.hero?.primaryCta?.value || "";


    // SECONDARY CTA

    heroSecondaryLabel.value =
        businessData.hero?.secondaryCta?.label || "";

    heroSecondaryType.value =
        businessData.hero?.secondaryCta?.type ||
        "anchor";

    heroSecondaryValue.value =
        businessData.hero?.secondaryCta?.value || "";


    // OFFER SECTION

    offerEnabled.value =
        String(
            businessData.offer?.enabled ?? true
        );

    offerEyebrow.value =
        businessData.offer?.eyebrow || "";

    offerTitle.value =
        businessData.offer?.title || "";

    offerDescription.value =
        businessData.offer?.description || "";

    offerImage.value =
        businessData.offer?.image || "";

    offerHighlight1.value =
        businessData.offer?.highlights?.[0] || "";

    offerHighlight2.value =
        businessData.offer?.highlights?.[1] || "";

    offerHighlight3.value =
        businessData.offer?.highlights?.[2] || "";


    // SERVICES SECTION

    servicesEnabled.value =
        String(
            businessData.services?.enabled ?? true
        );


    const services =
        businessData.services?.items || [];


    service1Title.value =
        services[0]?.title || "";

    service1Description.value =
        services[0]?.description || "";

    service1Image.value =
        services[0]?.image || "";


    service2Title.value =
        services[1]?.title || "";

    service2Description.value =
        services[1]?.description || "";

    service2Image.value =
        services[1]?.image || "";


    service3Title.value =
        services[2]?.title || "";

    service3Description.value =
        services[2]?.description || "";

    service3Image.value =
        services[2]?.image || "";
// PROOF / TRUST SECTION

proofEnabled.value =
    String(
        businessData.proof?.enabled ?? true
    );

const testimonials =
    businessData.proof?.testimonials || [];

const statistics =
    businessData.proof?.statistics || [];


testimonialQuote.value =
    testimonials[0]?.quote || "";

testimonialName.value =
    testimonials[0]?.name || "";


statistic1Value.value =
    statistics[0]?.value || "";

statistic1Label.value =
    statistics[0]?.label || "";


statistic2Value.value =
    statistics[1]?.value || "";

statistic2Label.value =
    statistics[1]?.label || "";


statistic3Value.value =
    statistics[2]?.value || "";

statistic3Label.value =
    statistics[2]?.label || "";
// REVIEWS

const reviews =
    businessData.proof?.reviews || [];

review1Text.value =
    reviews[0]?.text || "";

review1Name.value =
    reviews[0]?.name || "";

review2Text.value =
    reviews[1]?.text || "";

review2Name.value =
    reviews[1]?.name || "";

review3Text.value =
    reviews[2]?.text || "";

review3Name.value =
    reviews[2]?.name || "";
// CERTIFICATIONS

const certifications =
    businessData.proof?.certifications || [];

certification1Name.value =
    certifications[0]?.name || "";

certification1Issuer.value =
    certifications[0]?.issuer || "";

certification2Name.value =
    certifications[1]?.name || "";

certification2Issuer.value =
    certifications[1]?.issuer || "";

certification3Name.value =
    certifications[2]?.name || "";

certification3Issuer.value =
    certifications[2]?.issuer || "";
// PORTFOLIO

const portfolio =
    businessData.proof?.portfolio || [];

portfolio1Title.value =
    portfolio[0]?.title || "";

portfolio1Description.value =
    portfolio[0]?.description || "";

portfolio1Image.value =
    portfolio[0]?.image || "";

portfolio2Title.value =
    portfolio[1]?.title || "";

portfolio2Description.value =
    portfolio[1]?.description || "";

portfolio2Image.value =
    portfolio[1]?.image || "";

portfolio3Title.value =
    portfolio[2]?.title || "";

portfolio3Description.value =
    portfolio[2]?.description || "";

portfolio3Image.value =
    portfolio[2]?.image || "";

} catch (error) {

    console.error(
        "Failed to load business data:",
        error
    );
}

}

// SAVE BUSINESS DATA

async function saveBusinessData() {

const response =
    await fetch("/api/business", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(
            businessData,
            null,
            2
        )

    });


if (!response.ok) {

    throw new Error(
        "Failed to save business data."
    );
}


return await response.json();

}

// BUSINESS INFORMATION SAVE

businessForm.addEventListener(
"submit",
async (event) => {

    event.preventDefault();

    try {

        businessData.business =
            businessData.business || {};

        businessData.business.name =
            businessName.value;

        businessData.business.tagline =
            businessTagline.value;

        businessData.business.description =
            businessDescription.value;

        businessData.business.logo =
            businessLogo.value;


        await saveBusinessData();


        alert(
            "Business information saved successfully."
        );


    } catch (error) {

        console.error(
            "Failed to save business information:",
            error
        );

        alert(
            "Failed to save business information."
        );
    }
}

);

// CONTACT INFORMATION SAVE

contactForm.addEventListener(
"submit",
async (event) => {

    event.preventDefault();

    try {

        businessData.contact =
            businessData.contact || {};

        businessData.contact.whatsapp =
            contactWhatsapp.value;

        businessData.contact.phone =
            contactPhone.value;

        businessData.contact.email =
            contactEmail.value;

        businessData.contact.address =
            contactAddress.value;

        businessData.contact.hours =
            contactHours.value;


        await saveBusinessData();


        alert(
            "Contact information saved successfully."
        );


    } catch (error) {

        console.error(
            "Failed to save contact information:",
            error
        );

        alert(
            "Failed to save contact information."
        );
    }
}

);

// HERO SECTION SAVE

heroForm.addEventListener(
"submit",
async (event) => {

    event.preventDefault();

    try {

        businessData.hero =
            businessData.hero || {};


        businessData.hero.eyebrow =
            heroEyebrow.value;

        businessData.hero.headline =
            heroHeadline.value;

        businessData.hero.subheadline =
            heroSubheadline.value;

        businessData.hero.image =
            heroImage.value;

        businessData.hero.imageAlt =
            heroImageAlt.value;


        businessData.hero.primaryCta =
            businessData.hero.primaryCta || {};

        businessData.hero.primaryCta.label =
            heroPrimaryLabel.value;

        businessData.hero.primaryCta.type =
            heroPrimaryType.value;

        businessData.hero.primaryCta.value =
            heroPrimaryValue.value;


        businessData.hero.secondaryCta =
            businessData.hero.secondaryCta || {};

        businessData.hero.secondaryCta.label =
            heroSecondaryLabel.value;

        businessData.hero.secondaryCta.type =
            heroSecondaryType.value;

        businessData.hero.secondaryCta.value =
            heroSecondaryValue.value;


        await saveBusinessData();


        alert(
            "Hero section saved successfully."
        );


    } catch (error) {

        console.error(
            "Failed to save hero section:",
            error
        );

        alert(
            "Failed to save hero section."
        );
    }
}

);

// OFFER SECTION SAVE

offerForm.addEventListener(
"submit",
async (event) => {

    event.preventDefault();

    try {

        businessData.offer =
            businessData.offer || {};


        businessData.offer.enabled =
            offerEnabled.value === "true";

        businessData.offer.eyebrow =
            offerEyebrow.value;

        businessData.offer.title =
            offerTitle.value;

        businessData.offer.description =
            offerDescription.value;

        businessData.offer.image =
            offerImage.value;


        businessData.offer.highlights = [

            offerHighlight1.value,

            offerHighlight2.value,

            offerHighlight3.value

        ];


        await saveBusinessData();


        alert(
            "Offer section saved successfully."
        );


    } catch (error) {

        console.error(
            "Failed to save offer section:",
            error
        );

        alert(
            "Failed to save offer section."
        );
    }
}

);

// SERVICES SECTION SAVE

servicesForm.addEventListener(
"submit",
async (event) => {

    event.preventDefault();

    try {

        businessData.services =
            businessData.services || {};


        businessData.services.enabled =
            servicesEnabled.value === "true";


        const existingItems =
            businessData.services.items || [];


        businessData.services.items = [

            {
                ...(existingItems[0] || {}),
                title: service1Title.value,
                description: service1Description.value,
                image: service1Image.value
            },

            {
                ...(existingItems[1] || {}),
                title: service2Title.value,
                description: service2Description.value,
                image: service2Image.value
            },

            {
                ...(existingItems[2] || {}),
                title: service3Title.value,
                description: service3Description.value,
                image: service3Image.value
            }

        ];


        await saveBusinessData();


        alert(
            "Services section saved successfully."
        );


    } catch (error) {

        console.error(
            "Failed to save services section:",
            error
        );

        alert(
            "Failed to save services section."
        );
    }
}

);

// PROOF / TRUST SAVE

proofForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        try {

            businessData.proof =
                businessData.proof || {};


            businessData.proof.enabled =
                proofEnabled.value === "true";


            businessData.proof.testimonials = [

                {
                    quote: testimonialQuote.value,
                    name: testimonialName.value
                }

            ];


            businessData.proof.statistics = [

                {
                    value: statistic1Value.value,
                    label: statistic1Label.value
                },

                {
                    value: statistic2Value.value,
                    label: statistic2Label.value
                },

                {
                    value: statistic3Value.value,
                    label: statistic3Label.value
                }

            ];
            businessData.proof.reviews = [

    {
        text: review1Text.value,
        name: review1Name.value
    },

    {
        text: review2Text.value,
        name: review2Name.value
    },

    {
        text: review3Text.value,
        name: review3Name.value
    }

];
businessData.proof.certifications = [

    {
        name: certification1Name.value,
        issuer: certification1Issuer.value
    },

    {
        name: certification2Name.value,
        issuer: certification2Issuer.value
    },

    {
        name: certification3Name.value,
        issuer: certification3Issuer.value
    }

];

// PORTFOLIO

businessData.proof.portfolio = [

    {
        title: portfolio1Title.value,
        description: portfolio1Description.value,
        image: portfolio1Image.value
    },

    {
        title: portfolio2Title.value,
        description: portfolio2Description.value,
        image: portfolio2Image.value
    },

    {
        title: portfolio3Title.value,
        description: portfolio3Description.value,
        image: portfolio3Image.value
    }

];

await saveBusinessData();


            alert(
                "Proof & Trust saved successfully."
            );


        } catch (error) {

            console.error(
                "Failed to save Proof & Trust:",
                error
            );

            alert(
                "Failed to save Proof & Trust."
            );
        }
    }
);
// INITIAL LOAD

loadBusinessData();