import ThirdPartyPromotion from "../third-party-promotion.vue";
import type { ThirdPartyPromotionProps } from "../types";
import { action } from "@storybook/addon-actions";
import type { Story } from "@storybook/vue3";

export default {
	title: "third-party-promotion",
	component: ThirdPartyPromotion,
};

const Template: Story<ThirdPartyPromotionProps> = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { ThirdPartyPromotion },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template:
		'<third-party-promotion />',
});

export const Default = Template.bind({});
Default.args = {
	iconUrl: "/images/EstateDashboard/Dashboard/Mylo_2x.png",
	content:
		"With Testing Script Setup, save on insurance while finding great coverage. Discover the right policy for your property and shop multiple carriers in one place.",
};
