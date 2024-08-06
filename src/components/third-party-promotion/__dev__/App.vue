<template>
  <div>
    <div class="group">
      <ThirdPartyPromotion />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ThirdPartyPromotion } from "../third-party-promotion.vue";
import type { ThirdPartyPromotionProps } from "../types";

export default defineComponent({
  name: "App",
  components: {
    ThirdPartyPromotion,
  },
  setup() {
    const promoProps: ThirdPartyPromotionProps = {
      iconUrl: "/images/EstateDashboard/Dashboard/Mylo_2x.png",
      content: "This is only a test.",
    };
    return { promoProps };
  },
});
</script>

<style lang="scss">
@use "@ado/sass-base/app-base";

.group {
  margin: 30px;
}
</style>
