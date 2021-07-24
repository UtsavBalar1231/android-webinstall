export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#f54272",
    SUPPORTED_DEVICES: [
        {
            name: "POCO F3 / Redmi K40",
            model: "alioth",
        },
        {
            name: "Mi 11x",
            model: "aliothin",
        },
    ],
    RELEASE_VARIANTS: {
        minimal: {
            description: "Minimal version without Google apps or services.",
            suffix: "",
        },
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
        test: {
            description: "Experimental version for testing only.",
            suffix: "experimental",
        },
        beta: {
            description: "Beta version for testing only.",
            suffix: "beta",
        },
    },
    DONATION_LINKS: [
        {
            title: "Recurring donation",
            description:
                "Please consider making a recurring donation on Patreon for benefits such as early access to updates, exclusive behind-the-scenes development news, and priority support. This allows us to support the project sustainably in the future.",
            highlight: true,
            url: "https://patreon.com/utsavthecunt",
            icon: "patreon",
        },
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/utsavbalar",
            icon: "paypal",
        },
    ],
};
