<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';
import { mapGetters } from "vuex";
import "../css/mode.css"

export default {
  async created() {
    /* const response = await axios.get("user");
    this.$store.dispatch('user', response.data); */
  },
  computed: {
        ...mapGetters(["locale"])
    },
    mounted(){
        if(this.locale == 'en'){
            document.documentElement.setAttribute("lang", "english");
        }
        if (this.locale == 'ur') {
            document.documentElement.setAttribute("lang", "urdu");
        }
    }
};
</script>

<style>
.toast-error{
    background-color: #B22323 !important;
}
</style>
