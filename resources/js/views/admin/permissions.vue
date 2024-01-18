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
        <b-overlay :show="loading" rounded="sm">
            <div
                class="d-sm-flex align-items-center justify-content-between mb-4"
            >
                <h1 class="h3 mb-0 font-weight-bold">
                    {{ $t("Permissions") }}
                </h1>
                <h1 class="h3 mb-0 ml-2 font-weight-bold urdu-text">
                    {{ businessDetails.name }}
                </h1>

                <div class="addbtn">
                    <b-button v-b-modal.modal-prevent-closing variant="primary"
                    v-if="$can('permission_store')">
                        Add Permission
                        <span class="plus-icon">&#43;</span>
                        <!-- <i class="bi bi-plus-lg"></i> -->
                    </b-button>
                </div>
                <b-modal
                    id="modal-prevent-closing"
                    ref="modal"
                    @ok="addPermission"
                >
                <template #modal-title>
                        <h3 class="text-center">Add Permission</h3>
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
                                v-model="addPermissionForm.name"
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
                                v-model="addPermissionForm.description"
                                :state="nameState"
                                required
                                placeholder="Description"
                            ></b-form-input>
                        </b-form-group>
                    </form>
                </b-modal>
                <!-- ............................edit....................... -->
                <b-modal
                    id="modal-prevent-closing-1"
                    ref="modal"
                    @ok="editPermission"
                >
                <template #modal-title>
                        <h3 class="text-center">Edit Permission</h3>
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
                    :items="permissions"
                    :fields="fields"
                    table-responsive
                >
                    <template #cell(actions)="data">
                        <!-- The content of your new column goes here -->
                        <!-- <b-button variant="warning">edit</b-button> -->
                        <!-- <router-link :to="'/users/edit/' + data.item.id" class="btn btn-warning"
            >edit</router-link
          > -->
                        <b-button
                            variant="warning"
                            @click="edit(data.item)"
                            v-b-modal.modal-prevent-closing-1
                            v-if="$can('permission_update')"
                            >Edit</b-button
                        >
                        <b-button
                            variant="danger"
                            @click="deletePermission(data.item.id)"
                            v-if="$can('permission_destroy')"
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
    name: "Permissions",
    data() {
        return {
            businessDetails: {},
            // add user
            addPermissionForm: {
                name: "",
                description: ""
            },
            addEditForm: {
                name: "",
                description: ""
            },
            nameState: null,
            submittedNames: [],
            // overlay
            loading: false,
            PermissionId: "",

            // .............................Table..........
            fields: ["name", "description", "actions"],
            permissions: []
        };
    },
    created() {
        this.getBusinessDetails();
    },
    mounted() {
        this.getPermission();
    },
    methods: {
        // add user
        async addPermission() {
            const result = await axios.post(
                "http://localhost:8000/api/permissions",
                {
                    name: this.addPermissionForm.name,
                    description: this.addPermissionForm.description
                }
            );
            if (result.status == 200) {
                this.getPermission();
            }
            console.warn("result:", result);
        },
        // show user function
        async getPermission() {
            this.loading = true;
            let result = await axios.get(
                "http://localhost:8000/api/permissions"
            );
            this.permissions = result.data;
            // this.$router.push({ name: "Roles" });
            this.loading = false;
        },
        async edit(permission) {
            (this.addEditForm.name = permission.name),
                (this.addEditForm.description = permission.description),
                (this.addEditForm.PermissionId = permission.id);
        },
        // delete user function
        async deletePermission(id) {
            //   console.log(id)
            let result = await axios.delete(
                `http://localhost:8000/api/permissions/${id}`
            );
            if (result.status == 200) {
                this.getPermission();
            }
        },
        // edit user
        async editPermission() {
            try {
                const result = await axios.put(
                    `http://localhost:8000/api/permissions/${this.addEditForm.PermissionId}`,
                    {
                        name: this.addEditForm.name,
                        description: this.addEditForm.description
                    }
                );

                if (result.status === 200) {
                    this.getPermission();
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
