<template>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
