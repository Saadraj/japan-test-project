import axios from "axios";
import { Modal } from "bootstrap/dist/js/bootstrap.esm";
import { useRouter } from "next/router";
import React, { memo, useEffect, useRef, useState } from "react";
import ModelData from "../component/modal";
import Loading from "../utils/Loading";

const modeldata = () => {
    const router = useRouter();
    const [state, setState] = useState([]);
    const [modal, setModal] = useState(null);

    const modalRef = useRef();

    const showModal = () => {
        try {
            const modalEle = modalRef.current;
            const bsModal = new Modal(modalEle, {
                backdrop: "static",
                keyboard: false,
            });
            bsModal.show();
        } catch (error) {}
    };

    const hideModal = () => {
        try {
            const modalEle = modalRef.current;
            const bsModal = Modal.getInstance(modalEle);
            bsModal.hide();
        } catch (error) {}
    };

    useEffect(() => {
        axios
            .get(
                `http://163.47.115.230:30000/api/overview/modeldata/${router.query.brand}/${router.query.model}`,
                {
                    headers: {
                        authorization: localStorage.getItem("japan"),
                    },
                }
            )
            .then((res) => {
                res?.data?.map((d) => {
                    if (d.DataType === "M") {
                        setState((p) => [...p, { ...d }]);
                    }
                });
            })
            .catch((err) => {
                alert(err.message);
            });
    }, []);

    const gotoModelData = (d) => {
        setModal(d);
        showModal();
    };

    if (state.length === 0) return <Loading />;

    return (
        <div>
            <div className="container">
                <div className="row">
                    {state.map((d) => (
                        <div className="col-3 card-item py-5" key={d.Id}>
                            <div
                                className="card py-4 px-2"
                                onClick={() => {
                                    gotoModelData(d);
                                }}
                            >
                                <h2 className="display-6">{d.DisplayName}</h2>
                                <p className="">
                                    <strong>Brand : </strong>
                                    <span>{d.Brand || "N/A"}</span>
                                </p>
                                <p className="N/A">
                                    <strong>Model : </strong>
                                    <span>{d.Model || "N/A"}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {modal && (
                <ModelData
                    data={modal}
                    modalRef={modalRef}
                    hideModal={hideModal}
                />
            )}
        </div>
    );
};

export default memo(modeldata);
