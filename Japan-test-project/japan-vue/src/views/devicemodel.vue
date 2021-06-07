<template>
    <div class="center-item">
        <div>
            <div class="container-sm">
                <div
                    class="card"
                    :style="{
                        padding: '20px',
                        width: '30rem',
                    }"
                >
                    <h2 class="h2 text-center text-danger">
                        Add a new Device Model
                    </h2>
                    <hr />
                    <form @submit="submitModel">
                        <div
                        v-if="message.msg"
                            class="alert alert-dismissible fade show"
                            :class="
                                message.success
                                    ? 'alert-success'
                                    : 'alert-danger'
                            "
                            role="alert"
                        >
                            <p class="pb-0 mb-0">
                                {{ message.msg }}
                            </p>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="BrandId" class="form-label">
                                BrandId
                            </label>
                            <input
                                name="BrandId"
                                class="form-control"
                                id="BrandId"
                                aria-describedby="emailHelp"
                                v-model="BrandId"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="exampleInputName"
                                class="form-label"
                            >
                                Name
                            </label>
                            <input
                                name="Name"
                                class="form-control"
                                id="exampleInputName"
                                v-model="Name"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="exampleInputTypeId"
                                class="form-label"
                            >
                                TypeId
                            </label>
                            <input
                                name="TypeId"
                                type="number"
                                class="form-control"
                                id="exampleInputTypeId"
                                v-model="TypeId"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label
                                htmlFor="exampleInputComment"
                                class="form-label"
                            >
                                Comment
                            </label>
                            <input
                                name="Comment"
                                class="form-control"
                                id="exampleInputComment"
                                v-model="Comment"
                                required
                            />
                        </div>
                        <span>
                            <button type="submit" class="btn btn-success">
                                Add
                            </button>
                        </span>
                        <span class="mx-2">
                            <button type="reset" class="btn btn-warning">
                                Reset
                            </button>
                        </span>
                    </form>
                    <h6 class="h6 pt-4">
                        back to model type
                        <router-link to="/" class="danger">
                            <a class="danger"> page</a>
                        </router-link>
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
    name: "deviceModel",
    data() {
        return {
            BrandId: "",
            Name: "",
            TypeId: "",
            Comment: "",
            message: {
                success: false,
                msg: "",
            },
        };
    },
    methods: {
        async submitModel(e) {
            e.preventDefault();
            try {
                const res = await axios({
                    method: "POST",
                    url: "http://163.47.115.230:30000/api/devicemodel",
                    data: {
                        BrandId: this.$data.BrandId,
                        Name: this.$data.Name,
                        TypeId: +this.$data.TypeId,
                        Comment: this.$data.Comment,
                    },
                    headers: {
                        authorization: localStorage.getItem("japan"),
                    },
                });
                if (res.statusText === "Created") {
                    this.$data.message = {
                        success: true,
                        msg: "New Device is Created",
                    };
                }
            } catch (error) {
                this.$data.message = {
                    success: false,
                    msg: error.message,
                };
            }
        },
    },
});
</script>

<style></style>
