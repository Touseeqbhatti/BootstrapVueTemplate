<template>
    <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
    >
        <!-- Sidebar - Brand -->
        <router-link
            class="sidebar-brand d-flex align-items-center justify-content-center"
            :to="{ name: 'dashboard' }"
        >
            <div class="sidebar-brand-text mx-3">
                {{ business_details.name }}
            </div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Sidebar Item - Dashboard -->
        <li class="nav-item" :class="{ active: $route.name == 'dashboard' }">
            <router-link class="nav-link" :to="{ name: 'dashboard' }">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>{{ $t("dashboard") }}</span></router-link
            >
        </li>
        <hr class="sidebar-divider my-0" />
        <!-- User -->
        <li class="nav-item" :class="{ active: $route.name == 'Users' }">
            <router-link class="nav-link" :to="{ name: 'Users' }">
                <i class="fas fa-fw fa-user-circle"></i>
                <span>{{ $t("Users") }}</span></router-link
            >
        </li>
        <!-- Roles -->
        <li class="nav-item" :class="{ active: $route.name == 'Roles' }">
            <router-link class="nav-link" :to="{ name: 'Roles' }">
                <i class="fas fa-fw fa-cogs"></i>
                <span>{{ $t("Roles") }}</span></router-link
            >
        </li>
        <!-- Permissions -->
        <li class="nav-item" :class="{ active: $route.name == 'Permissions' }">
            <router-link class="nav-link" :to="{ name: 'Permissions' }">
                <i class="fas fa-fw fa-key"></i>
                <span>{{ $t("Permissions") }}</span></router-link
            >
        </li>

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button
                class="rounded-circle border-0 text-nowrap"
                id="sidebarToggle"
            ></button>
        </div>
    </ul>
    <!-- End of Sidebar -->
</template>

<script>
export default {
    name: "Sidebar",
    data() {
        return {
            business_details: {}
        };
    },
    created() {
        this.businessDetails();
    },
    methods: {
        async businessDetails() {
            const { data } = await axios.get("/business-details");
            this.business_details = data;
        }
    }
};
</script>
