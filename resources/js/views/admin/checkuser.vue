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
            <h1 class="h3 mb-0 font-weight-bold">{{ $t("Users") }}</h1>
            <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
                {{ businessDetails.name }}
            </h1>
        
        <div class="addbtn">

            <b-button v-b-modal.modal-prevent-closing variant="primary">
                Add User
                <span class="plus-icon">&#43;</span>
                <!-- <i class="bi bi-plus-lg"></i> -->
            </b-button>
        </div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        @ok="addUser"
      >
      <h3 class="text-center">Add User</h3>
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <!-- First name -->
          <b-form-group
            label="First Name"
            label-for="first_name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="first_name-input"
              v-model="first_name"
              :state="nameState"
              required
              placeholder="First name"
            ></b-form-input>
          </b-form-group>
          <!-- Last name -->
          <b-form-group
            label="Last Name"
            label-for="last_name-input"
            invalid-feedback="Name is required"
            :state="nameState"
          >
            <b-form-input
              id="last_name-input"
              v-model="last_name"
              :state="nameState"
              required
              placeholder="Last name"
            ></b-form-input>
          </b-form-group>
          <!-- Email -->
          <b-form-group
            label="Email"
            label-for="Email-input"
            invalid-feedback="Email is required"
            :state="nameState"
          >
            <b-form-input
              id="email-input"
              v-model="email"
              :state="nameState"
              required
              placeholder="Email"
            ></b-form-input>
          </b-form-group>
          <!-- password -->
          <b-form-group
            label="Password"
            label-for="password-input"
            invalid-feedback="password is required"
            :state="nameState"
          >
            <b-form-input
              id="password-input"
              v-model="password"
              :state="nameState"
              required
              placeholder="Password"
            ></b-form-input>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    
    </div>
  </template>



<script>
export default {
    name: "Users",
    data() {
        return {
            businessDetails: {},
            first_name: '',
            last_name: '',
            email:'',
            password:'',
            nameState: null,
            submittedNames: []
        };
    },
    created() {
        this.getBusinessDetails();
    },
    methods: {
        async addUser() {
      const result = await axios.post("http://localhost:8000/api/users", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Users" });
      }
      console.warn("result:", result);
    },
        async getBusinessDetails() {
            const { data } = await axios.get("/business-details");
            this.businessDetails = data;
        },
        checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      // handleOk(bvModalEvent) {
      //   // Prevent modal from closing
      //   bvModalEvent.preventDefault()
      //   // Trigger submit handler
      //   this.handleSubmit()
      // },
      // handleSubmit() {
      //   // Exit when the form isn't valid
      //   if (!this.checkFormValidity()) {
      //     return
      //   }
        // Push the name to submitted names
        //this.submittedNames.push(this.name)
        // Hide the modal manually
        // this.$nextTick(() => {
        //   this.$bvModal.hide('modal-prevent-closing')
        // })
      // }
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
.addbtn{
    float: right;
}
</style>
