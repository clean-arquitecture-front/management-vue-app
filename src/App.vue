<template>
  <v-overlay :isOpen="isOpen">
    <component :is="modalComponent" />
  </v-overlay>
  <nav>
    <!--<router-link to="/customers">Clientes</router-link>
    <router-link to="/products">Productos</router-link>-->
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { VOverlay } from "management-components";

import useOverlay from "./composables/common/overlay.composable";
import useModal from "./composables/common/modal.composable";

export default defineComponent({
  components: {
    VOverlay,
  },
  setup() {
    const { isOpen } = useOverlay();
    const { modalComponent } = useModal();

    return {
      modalComponent,
      isOpen,
    };
  },
});
</script>

<style lang="scss">
@import "./assets/styles/styles";
</style>