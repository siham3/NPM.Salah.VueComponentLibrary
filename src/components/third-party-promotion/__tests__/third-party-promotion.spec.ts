import { shallowMount, mount } from "@vue/test-utils";
import { expect, it, describe } from "vitest";
import ThirdPartyPromotion from "../third-party-promotion.vue";
import type { ThirdPartyPromotionProps } from "../types";

const defaultProps: ThirdPartyPromotionProps = {
	iconUrl: "/images/iconurl.svg",
	content: "My Content",
};

interface RenderOptions {
	props: ThirdPartyPromotionProps;
}

const buildRenderOptions = (
	props: ThirdPartyPromotionProps
): RenderOptions => ({ props });

describe("third-party-promotion default variant", () => {
	it("matches snapshot", () => {
		const wrapper = shallowMount(
			ThirdPartyPromotion,
			buildRenderOptions(defaultProps)
		);
		expect(wrapper.element).toMatchSnapshot();
	});

	it("emits button-click", async () => {
		const buttonText = "This is button text";
		const wrapper = mount(
			ThirdPartyPromotion,
			buildRenderOptions({ ...defaultProps, buttonText })
		);

		const button = wrapper.find("button");
		await button.trigger("click");

		expect(button.text()).toBe(buttonText);
		expect(wrapper.emitted()).toHaveProperty("buttonClick");
	});
});
