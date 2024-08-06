<template>
  <div class="third-party-promotion">
    third party promotion
  </div>
</template>

<script setup lang="ts">
import type { ThirdPartyPromotionProps } from "./types";

export interface Props {
  iconUrl: string;
  content: string;
  buttonText?: string;
}
</script>

<style lang="scss" scoped>

</style>
