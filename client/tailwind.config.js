export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")[
						"[data-theme=light]"
					],
					// Custom colors
					primary: "#4F496F",
					"primary-focus": "#3B3B5B",
					"primary-content": "#ffffff",
					secondary: "#ADB7D6",
					"secondary-focus": "#8C9CB2",
					"secondary-content": "#4F496F",
					accent: "#51517B",
					"accent-focus": "#3B3B5B",
					"accent-content": "#ffffff",
					neutral: "#2a2e37",
					"neutral-focus": "#16181d",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#d1d5db",
					"base-content": "#1f2937",
					info: "#2094f3",
					"info-content": "#ffffff",
					success: "#3adb76",
					"success-content": "#ffffff",
					warning: "#ffae00",
					"warning-content": "#ffffff",
					error: "#dc2626",
					"error-content": "#ffffff",

					"--rounded-btn": "0.8rem",
					"--animation-btn": ".15s",
					"--btn-text-case": "uppercase",
					"--btn-focus-scale": "1.1",
					"--border-btn": "1px",
				},
			},
			"dark",
		],
		darkTheme: "light",
		base: true,
		styled: true,
		utils: true,
		rtl: false,
		prefix: "",
		logs: false,
	},
};
