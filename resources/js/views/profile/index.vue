<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">
                        {{ $t("profile") }}
                    </h6>
                </div>
            </div>
            <form @submit.prevent="submit">
                <div class="card-body form-row">
                    <div class="col-12 mb-3">
                        <label class="form-label">{{ $t("name") }}</label>
                        <input
                            class="form-control"
                            type="text"
                            name="first_name"
                            v-model="form.first_name"
                        />
                        <has-error
                                :form="form"
                                field="first_name"
                            />
                    </div>
                    <div class="col-12 mb-3">
                        <label class="form-label">{{ $t("email") }}</label>
                        <input
                            class="form-control"
                            type="text"
                            name="contact"
                            v-model="form.email"
                        />
                        <has-error
                                :form="form"
                                field="email"
                            />
                    </div>
                    <div class="col-12 mb-3">
                        <label class="form-label">{{ $t("password") }}</label>
                        <input
                            class="form-control"
                            type="password"
                            name="contact"
                            v-model="form.password"
                        />
                        <has-error
                                :form="form"
                                field="password"
                            />
                    </div>
                </div>
                <div class="mb-2 ml-3">
                    <button type="submit" class="btn btn-sm btn-primary text-nowrap">
                        {{ $t("submit") }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
import { mapGetters } from "vuex";

export default {
    name: "Profile",
    data() {
        return {
            mode: false,
            items: [],
            form: new Form({
                first_name: "",
                email: "",
                password: "",
                id: null
            }),
            showSpiner: false
        };
    },
    created() {},
    computed: {
        ...mapGetters(["locale"])
    },
    mounted() {
        this.getData();
    },
    methods: {
        async submit() {
            try {
                const { data } = await this.form.post("/update-user");
                if (data.status) {
                    this.$toastr.s("Success", data.message);
                    this.getData();
                }
            } catch (error) {
                this.showSpiner = false;
                this.$toastr.e("Error", error);
            }
        },
        async getData() {
            const { data } = await axios.get("/user");
            this.form = new Form({
                first_name: data.first_name,
                email: data.email,
                password: data.password,
                id: data.id
            });
            this.form.lng = this.locale;
        }
    }
};
</script>
