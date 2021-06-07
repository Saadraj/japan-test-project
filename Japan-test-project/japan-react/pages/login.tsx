import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LoginValidationSchema } from "../validation";

const Login = () => {
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState("");
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const submitLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await LoginValidationSchema.validate(state);
            const res = await axios.post(
                "http://163.47.115.230:30000/api/login",
                data
            );
            if (res?.data?.access_token) {
                localStorage.setItem("japan", res.data.access_token);
                router.push("/");
            }
        } catch (error) {
            setErrorMessage(error.message);
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
                <title>Login</title>
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
                                Login Your Account
                            </h2>
                            <hr />
                            <form onSubmit={submitLogin}>
                                {errorMessage && (
                                    <div
                                        className="alert alert-danger alert-dismissible fade show"
                                        role="alert"
                                    >
                                        <p className="pb-0 mb-0">
                                            {errorMessage}
                                        </p>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="alert"
                                            aria-label="Close"
                                            onClick={() => {
                                                setErrorMessage("");
                                            }}
                                        ></button>
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputPassword1"
                                        className="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        onChange={changeHandler}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </form>
                            <h6 className="h6 pt-4">
                                Don't Have an Account? Then GoTo{" "}
                                <Link href="/">
                                    <a className="danger">Home Page</a>
                                </Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
