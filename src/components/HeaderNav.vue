<script>
import { ref } from "vue";
export default {
  name: "HeaderNav",
  setup() {
    const links = ref([
      { name: "Home", path: "/" },
      { name: "NewRouter", path: "/new-router" },
      { name: "NotFound", path: "/not-found2" },
    ]);

    return {
      links,
    };
  },
};
</script>
<template>
  <nav>
    <router-link
      class="button is-white is-small"
      tag="button"
      v-for="li in links"
      :key="li.path"
      :to="li.path"
      >{{ li.name }}</router-link
    >
  </nav>
</template>