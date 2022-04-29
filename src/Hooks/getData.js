import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(newData => setData(newData))
    }, []);

    return [data, setData];
}

export default useData