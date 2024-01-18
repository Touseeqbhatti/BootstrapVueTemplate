<template>
    <div
        class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
    >
        <!-- Sidebar Toggle (Topbar) -->
        <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3 text-nowrap"
        >
            <i class="fa fa-bars"></i>
        </button>

        <ul
            class="navbar-nav"
            :class="{ 'ml-auto': locale == 'en', 'mr-auto': locale == 'ur' }"
        >
            <li class="mt-3">
                <router-link class="nav-link" :to="{ name: 'dashboard' }">
                    <i class="fas fa-fw fa-home"></i
                ></router-link>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow" v-if="user">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span
                        class=" d-none d-lg-inline text-gray-600 small"
                        :class="{
                            'mr-2': locale == 'en',
                            'ml-2': locale == 'ur'
                        }"
                        >{{ $t(user.first_name) }}</span
                    >
                    <img class="img-profile" src="/images/fav.png" />
                </a>
                <!-- Dropdown - User Information -->
                <div
                    class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                >
                    <a
                        class="dropdown-item"
                        href="javascript:void(0)"
                        @click="$router.push({ name: 'profile' })"
                    >
                        <i
                            class="fas fa-user fa-sm fa-fw  text-gray-400"
                            :class="{
                                'mr-2': locale == 'en',
                                'ml-2': locale == 'ur'
                            }"
                        ></i>
                        {{ $t("profile") }}
                    </a>
                    <div class="dropdown-divider"></div>
                    <a
                        class="dropdown-item"
                        href="javascript:void(0)"
                        @click="logout"
                        data-toggle="modal"
                        data-target="#logoutModal"
                    >
                        <i
                            class="fas fa-sign-out-alt fa-sm fa-fw  text-gray-400"
                            :class="{
                                'mr-2': locale == 'en',
                                'ml-2': locale == 'ur'
                            }"
                        ></i>
                        {{ $t("logout") }}
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Topbar",
    computed: {
        ...mapGetters(["user", "locale"])
    },
    methods: {
        logout() {
            this.$bvModal
                .msgBoxConfirm(this.$t("logout_confirmation_text"), {
                    title: this.$t("confirmation"),
                    size: "md",
                    buttonSize: "sm",
                    okVariant: "danger",
                    cancelVariant: "success",
                    okTitle: this.$t("yes"),
                    cancelTitle: this.$t("no"),
                    footerClass: "p-2",
                    hideHeaderClose: true,
                    centered: true,
                    noCloseOnBackdrop: true
                })
                .then(async confirmation => {
                    if (confirmation) {
                        localStorage.removeItem("token");
                        this.$store.dispatch("user", null);
                        this.$router.push("/login");
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>
