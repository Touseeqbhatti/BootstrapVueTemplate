<!-- <template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 font-weight-bold">{{ $t("Users") }}</h1>
            <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
                {{ businessDetails.name }}
            </h1>
        </div>
    </div>
    
</template> -->
<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 font-weight-bold">{{ $t("Dashboard") }}</h1>
            <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
                {{ businessDetails.name }}
            </h1>
        </div>

        <div>
            <div class="row">
                
                <router-link class="nav-link" :to="{ name: 'Users' }">
                <i class="fas fa-fw fa-user-circle"></i>
                <span>{{ $t("Users") }}</span></router-link>
                <router-link class="nav-link" :to="{ name: 'Roles' }">
                <i class="fas fa-fw fa-cogs"></i>
                <span>{{ $t("Roles") }}</span></router-link>
                <router-link class="nav-link" :to="{ name: 'Permissions' }">
                <i class="fas fa-fw fa-key"></i>
                <span>{{ $t("Permissions") }}</span></router-link>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            businessDetails: {}
        };
    },
    created() {
        this.getBusinessDetails();
    },
    methods: {
        async getBusinessDetails() {
            const { data } = await axios.get("/business-details");
            this.businessDetails = data;
        },
        handleButtonClick(buttonNumber) {
            // Handle button click logic here
            console.log(`Button ${buttonNumber} clicked`);
        }
    }
};
</script>
<style>
@font-face {
    font-family: "Gandhara Urdu";
    src: url(/fonts/GandharaSulsRegular.ttf);
}

.urdu-text {
    font-family: "Gandhara Urdu", serif;
}

.button-container {
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-content: center;
    /* padding-left: 180px; */
    /* padding-right: 180px; */
    height: 60vh;
}
.btn {
    margin-bottom: 20px;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 8px;
}


</style>
