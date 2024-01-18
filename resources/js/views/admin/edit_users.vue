<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between ">
            <h1 class="h3 mb-0 font-weight-bold">{{ $t("Edit User") }}</h1>
            <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
                {{ businessDetails.name }}
            </h1>
        </div >
        <div class="d-flex justify-content-center  min-vh-200">
            <b-form @submit.prevent="handleSubmit">
      <b-form-group
        label="First Name"
        label-for="first-name-input"
        label-cols="4"
        label-align="right"
      >
        <b-form-input
          id="first-name-input"
          v-model="formData.first_name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Last Name"
        label-for="last-name-input"
        label-cols="4"
        label-align="right"
      >
        <b-form-input
          id="last-name-input"
          v-model="formData.last_name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="email-input"
        label-cols="4"
        label-align="right"
      >
        <b-form-input
          id="email-input"
          type="email"
          v-model="formData.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Password"
        label-for="password-input"
        label-cols="4"
        label-align="right"
      >
        <b-form-input
          id="password-input"
          type="password"
          v-model="formData.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="danger" class="float-right" @click="editUser">Submit</b-button>
    </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "edit_users",
    data() {
        return {
            businessDetails: {},
            formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
        };
    },
    created() {
        this.getBusinessDetails();
    },
    async mounted(){
        const result = await axios.get(
      "http://localhost:8000/api/users/" + this.$route.params.id
    );
    console.log(result);
        this.formData=result.data
    },
    methods: {
        async getBusinessDetails() {
            const { data } = await axios.get("/business-details");
            this.businessDetails = data;
        },
        handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData);
    },
    // edit user function
    async editUser() {
      try {
        const result = await axios.put(
          `http://localhost:8000/api/users/${this.$route.params.id}`,
          {
            first_name: this.formData.first_name,
            last_name: this.formData.last_name,
            email: this.formData.email,
            password: this.formData.password,
          }
        );

        if (result.status === 200) {
          this.$router.push({ name: "Users" });
        }

        console.log("Result:", result);
      } catch (error) {
        console.error("Error updating resource:", error);
      }
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

</style>
