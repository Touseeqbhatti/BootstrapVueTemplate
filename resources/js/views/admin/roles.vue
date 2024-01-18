<template>
    <div>
        <b-overlay :show="loading" rounded="sm">
            <div
                class="d-sm-flex align-items-center justify-content-between mb-4"
            >
                <h1 class="h3 mb-0 font-weight-bold">{{ $t("Roles") }}</h1>
                <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
                    {{ businessDetails.name }}
                </h1>

                <div class="addbtn">
                    <b-button v-b-modal.modal-prevent-closing variant="primary" v-if="$can('role_store')">
                        Add Role
                        <span class="plus-icon">&#43;</span>
                        <!-- <i class="bi bi-plus-lg"></i> -->
                    </b-button>
                </div>
                <b-modal id="modal-prevent-closing" ref="modal" @ok="addRole">
                    <template #modal-title>
                        <h3 class="text-center">Add Role</h3>
                    </template>
                    <form ref="form" @submit.stop.prevent="handleSubmit">
                        <!-- name -->
                        <b-form-group
                            label="Name"
                            label-for="name-input"
                            invalid-feedback="Name is required"
                            :state="nameState"
                        >
                            <b-form-input
                                id="name-input"
                                v-model="addRoleForm.name"
                                :state="nameState"
                                required
                                placeholder="Name"
                            ></b-form-input>
                        </b-form-group>
                        <!-- Description name -->
                        <b-form-group
                            label="Description"
                            label-for="Description-input"
                            invalid-feedback="Description is required"
                            :state="nameState"
                        >
                            <b-form-input
                                id="Description-input"
                                v-model="addRoleForm.description"
                                :state="nameState"
                                required
                                placeholder="Description"
                            ></b-form-input>
                        </b-form-group>
                        <!-- ...................DropDown................... -->
                        <b-form-group label="Permissions">
                            <v-select
                                multiple
                                v-model="addRoleForm.permissionIds"
                                :options="permissions"
                                :reduce="permission => permission.value" label="label"
                            />
                        </b-form-group>
                    </form>
                </b-modal>
                <!-- ......................................edit..................... -->
                <b-modal
                    id="modal-prevent-closing-1"
                    ref="modal"
                    @ok="editRole"
                >
                    <template #modal-title>
                        <h3 class="text-center">Edit Role</h3>
                    </template>
                    <form ref="form" @submit.stop.prevent="handleSubmit">
                        <!-- name -->
                        <b-form-group
                            label="Name"
                            label-for="name-input"
                            invalid-feedback="Name is required"
                            :state="nameState"
                        >
                            <b-form-input
                                id="name-input"
                                v-model="addEditForm.name"
                                :state="nameState"
                                required
                                placeholder="Name"
                            ></b-form-input>
                        </b-form-group>
                        <!-- Description name -->
                        <b-form-group
                            label="Description"
                            label-for="Description-input"
                            invalid-feedback="Description is required"
                            :state="nameState"
                        >
                            <b-form-input
                                id="Description-input"
                                v-model="addEditForm.description"
                                :state="nameState"
                                required
                                placeholder="Description"
                            ></b-form-input>
                        </b-form-group>
                    </form>
                </b-modal>
            </div>
            <!-- ...........................................................Table......................... -->
            <div>
                <b-table
                    striped
                    hover
                    :items="roles"
                    :fields="fields"
                    table-responsive
                >
                    <template #cell(actions)="data">
                        <!-- The content of your new column goes here -->
                        <!-- <b-button variant="warning">edit</b-button> -->
                        <!-- <router-link
                            :to="'/roles/edit/' + data.item.id"
                            class="btn btn-warning"
                            v-b-modal.modal-prevent-closing1
                            >edit</router-link
                        > -->
                        <b-button
                            variant="warning"
                            @click="edit(data.item)"
                            v-b-modal.modal-prevent-closing-1
                            v-if="$can('role_update')"
                            >Edit</b-button
                        >
                        <b-button
                            variant="danger"
                            @click="deleteRole(data.item.id)"
                            v-if="$can('role_destroy')"
                            >delete</b-button
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
    name: "Roles",
    data() {
        return {
            businessDetails: {},
            // add user
            addRoleForm: {
                name: "",
                description: "",
                permissionIds: []
            },
            addEditForm: {
                name: "",
                description: "",
                permissionIds: []
            },
            nameState: null,
            submittedNames: [],
            permissions: [],
            // overlay
            loading: false,
            roleid: "",

            // .............................Table..........
            fields: ["name", "description", "actions"],
            roles: []
        };
    },
    created() {
        this.getBusinessDetails();
    },
    async mounted() {
        this.getPermissions();
        this.getRole();
    },
    methods: {
        // add Role
        async addRole() {
            const result = await axios.post("http://localhost:8000/api/roles", {
                name: this.addRoleForm.name,
                description: this.addRoleForm.description,
                permission_ids: this.addRoleForm.permissionIds,
            });
            if (result.status == 200) {
                this.getRole();
            }
            console.warn("result:", result);
        },
        //Add Role to permissions
        async getPermissions() {
            let result = await axios.get(
                "http://localhost:8000/api/permissions"
            );
            this.permissions = result.data.map(permission => ({
                value: permission.id,
                label: permission.name
            }));
        },
        // show user function
        async getRole() {
            this.loading = true;
            let result = await axios.get("http://localhost:8000/api/roles");
            this.roles = result.data;
            // this.$router.push({ name: "Roles" });
            this.loading = false;
        },
        async edit(role) {
            (this.addEditForm.name = role.name),
                (this.addEditForm.description = role.description),
                (this.addEditForm.roleid = role.id);
        },
        // delete user function
        async deleteRole(id) {
            //   console.log(id)
            let result = await axios.delete(
                `http://localhost:8000/api/roles/${id}`
            );
            if (result.status == 200) {
                this.getRole();
            }
        },
        // edit user
        async editRole() {
            try {
                const result = await axios.put(
                    `http://localhost:8000/api/roles/${this.addEditForm.roleid}`,
                    {
                        name: this.addEditForm.name,
                        description: this.addEditForm.description
                    }
                );

                if (result.status === 200) {
                    this.getRole();
                }

                console.log("Result:", result);
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
