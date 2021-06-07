<template>
    <div
        class="center-item"
        v-bind:style="{
            backgroundColor: 'GrayText',
        }"
    >
        <div>
            <div class="container-sm">
                <div
                    class="card"
                    v-bind:style="{
                        padding: '20px',
                        width: '30rem',
                    }"
                >
                    <h2 class="h2 text-center text-danger">
                        Login Your Account
                    </h2>
                    <hr />
                    <form @submit="submitLogin">
                        <div
                            class="alert alert-danger alert-dismissible fade show"
                            role="alert"
                            v-if="errorMessage"
                        >
                            <p class="pb-0 mb-0">
                                {{ errorMessage }}
                            </p>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                class="form-label"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                v-model="email"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                class="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                v-model="password"
                                required
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                    </form>
                    <h6 class="h6 pt-4">
                        Don't Have an Account? Then GoTo
                        <router-link to="/" class="danger"
                            >Home Page</router-link
                        >
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";

export default defineComponent({
    data() {
        return {
            email: "",
            password: "",
            errorMessage: "",
        };
    },
    methods: {
        async submitLogin(e) {
            e.preventDefault();
            try {
                const res = await axios.post(
                    "http://163.47.115.230:30000/api/login",
                    { email: this.email, password: this.password }
                );
                if (res?.data?.access_token) {
                    localStorage.setItem("japan", res.data.access_token);
                    window.location.href='/index'
                }
            } catch (error) {
                this.errorMessage = error.message;
            }
        },
    },
});
</script>

<style></style>
