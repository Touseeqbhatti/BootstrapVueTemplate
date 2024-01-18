<template>
  <div>
    <b-overlay :show="loading" rounded="sm">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 font-weight-bold">{{ $t("Users") }}</h1>
        <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
          {{ businessDetails.name }}
        </h1>

        <div class="addbtn">
          <b-button
            v-b-modal.modal-prevent-closing
            variant="primary"
             v-if="$can('user_store')"
          >
            Add User
            <span class="plus-icon">&#43;</span>
            <!-- <i class="bi bi-plus-lg"></i> -->
          </b-button>
        </div>
        <b-modal id="modal-prevent-closing" ref="modal" @ok="addUser">
          <template #modal-title>
            <h3 class="text-center">Add User</h3>
          </template>
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
                v-model="addUserForm.first_name"
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
                v-model="addUserForm.last_name"
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
                v-model="addUserForm.email"
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
                v-model="addUserForm.password"
                :state="nameState"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>
            <!-- ...................DropDown................... -->
            <b-form-group label="Role">
              <b-form-select
                v-model="addUserForm.roleId"
                :options="roles"
                size="sm"
              ></b-form-select>
            </b-form-group>
          </form>
        </b-modal>
        <!-- .............................edit...................... -->
        <b-modal id="modal-prevent-closing-1" ref="modal" @ok="editUser"  > 
          <h3 class="text-center">Edit User</h3>
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
                v-model="editUserForm.first_name"
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
                v-model="editUserForm.last_name"
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
                disabled
                id="email-input"
                v-model="editUserForm.email"
                :state="nameState"
                required
                placeholder="Email"
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
      <!-- ...........................................................Table......................... -->
      <div>
        
        <b-table striped hover :items="users" :fields="fields" table-responsive>
          <template #cell(role)="data">
            <span v-if="data.item.roles.length > 0">
              {{ data.item.roles[0].name }}
            </span>
          </template>
          <template #cell(actions)="data">
            <b-button
              variant="warning"
              @click="edit(data.item)"
              v-b-modal.modal-prevent-closing-1
               v-if="$can('user_update')"
              >Edit</b-button
            >
            
            <b-button variant="danger" @click="deleteUser(data.item.id)"
             v-if="$can('user_destroy')"
              >Delete</b-button
            >
          </template>
        </b-table>
      </div>
      <!-- ...........................................................Table......................... -->

      <!-- overlay -->
    </b-overlay>
    
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      addUserForm: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        roleId: null,
      },
      editUserForm: {
        first_name: null,
        last_name: null,
        email: null,
        roleId: null,
      },
      //dropdown
      roles: [],
      businessDetails: {},
      nameState: null,
      submittedNames: [],
      // overlay
      loading: false,
      userId: null,

      // .............................Table..........
      fields: ["first_name", "last_name", "email", "role", "actions"],
      users: [],
    };
  },
  created() {
    this.getBusinessDetails();
  },
  mounted() {
    this.getRoles();
    this.getUser();
  },
  methods: {
    // add user
    async addUser() {
      const result = await axios.post("http://localhost:8000/api/users", {
        first_name: this.addUserForm.first_name,
        last_name: this.addUserForm.last_name,
        email: this.addUserForm.email,
        password: this.addUserForm.password,
        role_id: this.addUserForm.roleId,
      });
      if (result.status == 200) {
        this.getUser();
        (this.addUserForm.first_name = ""),
          (this.addUserForm.last_name = ""),
          (this.addUserForm.password = ""),
          (this.addUserForm.email = "");
        this.addUserForm.roleId = "";
      }
    },
    //Add Role Function for dropdown
    async getRoles() {
      let result = await axios.get("http://localhost:8000/api/roles");
      this.roles = result.data.map((role) => ({
        value: role.id,
        text: role.name,
      }));
    },
    // show user function
    async getUser() {
      this.loading = true;
      let result = await axios.get("http://localhost:8000/api/users");
      this.users = result.data;
      this.loading = false;
    },
    async edit(user) {
      (this.editUserForm.first_name = user.first_name),
        (this.editUserForm.last_name = user.last_name),
        (this.editUserForm.email = user.email),
        (this.editUserForm.password = user.password),
        (this.editUserForm.userId = user.id);
    },
    // delete user function
    async deleteUser(id) {
      let result = await axios.delete(`http://localhost:8000/api/users/${id}`);
      if (result.status == 200) {
        this.getUser();
      }
    },
    // edit user
    async editUser() {
      try {
        const result = await axios.put(
          `http://localhost:8000/api/users/${this.editUserForm.userId}`,
          {
            first_name: this.editUserForm.first_name,
            last_name: this.editUserForm.last_name,
          }
        );

        if (result.status === 200) {
          this.getUser();
        }
      } catch (error) {
        console.error("Error updating resource:", error);
      }
    },
    async getBusinessDetails() {
      const { data } = await axios.get("/business-details");
      this.businessDetails = data;
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    
  },
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
.addbtn {
  float: right;
}
</style>
