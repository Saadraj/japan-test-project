import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../utils/Loading";

const modeltype = () => {
    const [state, setState] = useState([]);
    const router = useRouter();
    useEffect(() => {
        axios
            .get("http://163.47.115.230:30000/api/overview/modeltype", {
                headers: {
                    authorization: localStorage.getItem("japan"),
                },
            })
            .then((res) => {
                setState(res.data);
            })
            .catch((err) => {
                alert(err.message);
                router.push("/login");
            });
    }, []);

    const gotoModelData = (d) => {
        router.push(`/modeldata?brand=${d.BrandId}&model=${d.Name}`);
    };

    if (state.length === 0) return <Loading />;

    return (
        <div>
            <div className="container py-5">
                <div className="btn btn-primary">
                    <Link href="/devicemodel"><a className='text-white text-decoration-none'>
                        Add a new Device
                        </a>
                        </Link>
                </div>
                <div className="row">
                    {state.map((d) => (
                        <div className="col-3 card-item py-5" key={d.Id}>
                            <div
                                className="card py-4 px-2"
                                onClick={() => {
                                    gotoModelData(d);
                                }}
                                // data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop"
                                style={{ cursor: "pointer" }}
                            >
                                <h2 className="text-center display-6">
                                    {d.Id}. {d.Name}
                                </h2>
                                <p className="text-center">
                                    <strong>Description : </strong>
                                    <span>{d.Description || "N/A"}</span>
                                </p>
                                <p className="text-center">
                                    <strong>Comment : </strong>
                                    <span>{d.Comment || "N/A"}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default modeltype;
