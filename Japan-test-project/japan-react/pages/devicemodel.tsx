import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const DeviceModel = () => {
    const [errorMessage, setErrorMessage] = useState({
        success: false,
        message: "",
    });
    const [state, setState] = useState({
        BrandId: "",
        Name: "",
        TypeId: "",
        Comment: "",
    });

    const submitModel = async (e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: "POST",
                url: "http://163.47.115.230:30000/api/devicemodel",
                data: { ...state, TypeId: +state.TypeId },
                headers: {
                    authorization: localStorage.getItem("japan"),
                },
            });
            if (res.statusText === "Created") {
                setErrorMessage({
                    success: true,
                    message: "New Device is Created",
                });
            }
        } catch (error) {
            setErrorMessage({
                success: false,
                message: error.message,
            });
        }
    };

    const changeHandler = (e) => {
        setState((p) => ({
            ...p,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Head>
                <title>add new device model</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="center-item"
                style={{
                    backgroundColor: "GrayText",
                }}
            >
                <div>
                    <div className="container-sm">
                        <div
                            className="card"
                            style={{
                                padding: "20px",
                                width: "30rem",
                            }}
                        >
                            <h2 className="h2 text-center text-danger">
                                Add a new Device Model
                            </h2>
                            <hr />
                            <form onSubmit={submitModel}>
                                {errorMessage.message && (
                                    <div
                                        className={`alert alert-dismissible fade show alert-${
                                            errorMessage.success
                                                ? "success"
                                                : "danger"
                                        }`}
                                        role="alert"
                                    >
                                        <p className="pb-0 mb-0">
                                            {errorMessage.message}
                                        </p>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            onClick={() => {
                                                setErrorMessage({
                                                    success: false,
                                                    message: "",
                                                });
                                            }}
                                        ></button>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label
                                        htmlFor="BrandId"
                                        className="form-label"
                                    >
                                        BrandId
                                    </label>
                                    <input
                                        name="BrandId"
                                        className="form-control"
                                        id="BrandId"
                                        aria-describedby="emailHelp"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputName"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        name="Name"
                                        className="form-control"
                                        id="exampleInputName"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputTypeId"
                                        className="form-label"
                                    >
                                        TypeId
                                    </label>
                                    <input
                                        name="TypeId"
                                        type="number"
                                        className="form-control"
                                        id="exampleInputTypeId"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputComment"
                                        className="form-label"
                                    >
                                        Comment
                                    </label>
                                    <input
                                        name="Comment"
                                        className="form-control"
                                        id="exampleInputComment"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                                <span>
                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                    >
                                        Add
                                    </button>
                                </span>
                                <span className="mx-2">
                                    <button
                                        type="reset"
                                        className="btn btn-warning"
                                        onClick={() => {
                                            setErrorMessage({
                                                success: false,
                                                message: "",
                                            });
                                        }}
                                    >
                                        Reset
                                    </button>
                                </span>
                            </form>
                            <h6 className="h6 pt-4">
                                back to model type
                                <Link href="/">
                                    <a className="danger"> page</a>
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeviceModel;
