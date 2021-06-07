<template>
    <div>
        <div v-if="models.length === 0">
            <Loading />
        </div>
        <div v-else class="container">
            <div class="row">
                <div
                    v-for="d in models"
                    class="col-3 card-item py-5"
                    :key="d.Id"
                    @click="setModal(d)"
                >
                    <div class="card py-4 px-2">
                        <h2 class="display-6">{{ d.DisplayName }}</h2>
                        <p class="">
                            <strong>Brand : </strong>
                            <span>{{ d.Brand || "N/A" }}</span>
                        </p>
                        <p class="N/A">
                            <strong>Model : </strong>
                            <span>{{ d.Model || "N/A" }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showModal">
            <ModalData
                :modalData="modal"
                :showModal="showModal"
                :close="hideModal"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import Loading from "../components/utils/Loading.vue";
import ModalData from "../components/modal.vue";
import { Modal } from "bootstrap";

export default defineComponent({
    name: "ModelData",
    data() {
        return {
            models: [],
            modal: null,
            showModal: false,
        };
    },
    components: {
        Loading,
        ModalData,
    },
    methods: {
        setModal(v) {
            try {
                this.modal = v;
                this.showModal = true;
                const d = document.querySelector("#modal");
                const bsModal = new Modal(d, {
                    backdrop: "static",
                    keyboard: false,
                });
                bsModal.show();
            } catch (error) {
                console.log(error.message);
            }
        },
        hideModal() {
            try {
                this.modal = null;
                this.showModal = false;
                const d = document.querySelector("#modal");
                const bsModal = Modal.getInstance(d);
                bsModal.hide();
            } catch (error) {
                console.log(error.message);
            }
        },
    },
    created() {
        const url = `http://163.47.115.230:30000/api/overview/modeldata/${location.search
            .replace("?", "")
            .replace("&", "/")
            .replace("brand=", "")
            .replace("model=", "")}`;
        axios
            .get(url, {
                headers: {
                    authorization: localStorage.getItem("japan"),
                },
            })
            .then((res) => {
                res?.data?.map((d) => {
                    if (d.DataType === "M") {
                        this.models.push(d);
                    }
                });
            })
            .catch((err) => {
                alert(err.message);
            });
    },
});
</script>

<style></style>
