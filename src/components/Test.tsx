'use client';

import { useEffect, useState } from "react";

export const Test = () => {
    const [state, setState] = useState(false);
    useEffect(() => {
        setState(window.CSS.supports("container-type: scroll-state"))
    }, []);
    return (
        <h1>{state ? "Supported" : "Not Supported"}</h1>
    )
}