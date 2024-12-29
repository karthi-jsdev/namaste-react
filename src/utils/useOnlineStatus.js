import { useEffect, useState } from "react";

const useOnlineStatus = (() => {
    const [onLineStatus, setOnLineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnLineStatus(false);
        })
        window.addEventListener("onlline", () => {
            setOnLineStatus(true);
        })
    }, [])
    return onLineStatus;
})
export default useOnlineStatus;