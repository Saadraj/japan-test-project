<template>
    <div>
        <div v-if="modelTypeData.length === 0">
            <Loading />
        </div>
        <div v-else class="container py-5">
            <div class="btn btn-primary">
                <router-link
                    to="/devicemodel"
                    class="text-white text-decoration-none"
                >
                    Add a new Device
                </router-link>
            </div>
            <div class="row">
                <div
                    v-for="d in modelTypeData"
                    class="col-3 card-item py-5"
                    :key="d.Id"
                    @click="gotoModelData(d)"
                >
                    <div class="card py-4 px-2">
                        <h2 class="text-center display-6">
                            {{ d.Id }}. {{ d.Name }}
                        </h2>
                        <p class="text-center">
                            <strong>Description : </strong>
                            <span>{{ d.Description || "N/A" }}</span>
                        </p>
                        <p class="text-center">
                            <strong>Comment : </strong>
                            <span>{{ d.Comment || "N/A" }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import axios from "axios";
import Loading from "../components/utils/Loading.vue";
export default defineComponent({
    name: "ModelType",
    data() {
        return {
            modelTypeData: [],
        };
    },
    components: {
        Loading,
    },
    methods:{
        gotoModelData (d) {
        location.href=`/modeldata?brand=${d.BrandId}&model=${d.Name}`
    }
    },
    created() {
        axios
            .get("http://163.47.115.230:30000/api/overview/modeltype", {
                headers: {
                    authorization: localStorage.getItem("japan"),
                },
            })
            .then((res) => {
                this.modelTypeData = res.data;
            })
            .catch((err) => {
                alert(err.message);
                window.location.href = "/login";
            });
    },
});
</script>
