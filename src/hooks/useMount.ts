import { useEffect } from "react";

const useMount = (callback: Function): void => {
    useEffect(() => {
        callback();
    }, []);
};
export default useMount;
