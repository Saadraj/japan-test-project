import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Loading from "../utils/Loading";

export default function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        router.push("/modeltype");
        setLoading(false);
    }, []);

    if (loading) return <Loading />;
    return <h1></h1>;
}
