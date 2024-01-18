<template>
  <div>
    <Nav />
    <div class="container">
      <!---- Navbar -->
      <!-- Outer Row -->
      <div class="row justify-content-center" v-if="verificationStatus">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div
            class="alert alert-dismissible fade show mt-5"
            v-bind:class="verificationAlertClasses"
            role="alert"
          >
            <div>{{ verificationMessage }}</div>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block login-box"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">
                        {{ $t("welcome_back") }}
                      </h1>
                    </div>
                    <form class="user" @submit.prevent="login">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user no-direction"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          :placeholder="$t('enter_email_address')"
                          v-model="email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user no-direction"
                          id="exampleInputPassword"
                          :placeholder="$t('password')"
                          v-model="password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck"
                            >{{ $t("remember_me") }}</label
                          >
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block text-nowrap"
                      >
                        {{ $t("login") }}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../../components/Nav";
import * as notify from "../../utils/notify.js";

export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
      verificationStatus: this.$route.query.verification_status ? true : false,
      verificationMessage: "",
      verificationAlertClasses: {
        "alert-success": false,
        "alert-danger": false,
      },
    };
  },
  created: function () {
    if (this.$route.query.verification_status === "success") {
      this.verificationMessage =
        "Your account has been verified. Please log in.";
      this.verificationAlertClasses["alert-success"] = true;
    } else if (this.$route.query.verification_status === "error") {
      this.verificationMessage = "Your account could not be verified.";
      this.verificationAlertClasses["alert-danger"] = true;
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });
        console.log(response.data.role_name);
        localStorage.setItem(
          "role_name",
          JSON.stringify(response.data.role_name)
        );
        localStorage.setItem(
          "permission_names",
          JSON.stringify(response.data.permission_names)
        );

        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");
        const user = await axios.get("user");
        this.$store.dispatch("user", user.data);

        this.$router.push("/dashboard");
      } catch (error) {
        notify.authError(error);
      }
    },
  },
};
</script>

<style>
.login-box {
  background-image: url("/images/login_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
