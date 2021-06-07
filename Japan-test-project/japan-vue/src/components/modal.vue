<template>
    <div id='modal' class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title display-6" id="staticBackdropLabel">
                        {{ modalData.DisplayName }}
                    </h2>
                    <button type="button" @click="close" class="close btn">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p class="">
                        <strong>Name : </strong>
                        <span>{{ modalData.Name || "N/A" }}</span>
                    </p>
                    <p class="">
                        <strong>Brand : </strong>
                        <span>{{ modalData.Brand || "N/A" }}</span>
                    </p>
                    <p class="">
                        <strong>Brand : </strong>
                        <span>{{ modalData.Brand || "N/A" }}</span>
                    </p>
                    <p class="N/A">
                        <strong>Model : </strong>
                        <span>{{ modalData.Model || "N/A" }}</span>
                    </p>
                    <p class="N/A">
                        <strong>Group Id : </strong>
                        <span>{{ modalData.GroupId || "N/A" }}</span>
                    </p>
                    <p class="N/A">
                        <strong>Protocol Order : </strong>
                        <span>{{ modalData.ProtocolOrder || "N/A" }}</span>
                    </p>
                    <p class="N/A">
                        <strong>Status : </strong>
                        <span>{{ modalData.Status || "N/A" }}</span>
                    </p>
                    <p class="N/A">
                        <strong>Description : </strong>
                        <span>{{ modalData.Description || "N/A" }}</span>
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        @click="close"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { Modal } from "bootstrap";
export default defineComponent({
    name: "ModalData",
    props: ["modalData", "close"],
});
</script>
