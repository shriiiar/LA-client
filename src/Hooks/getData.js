import { useEffect, useState } from "react";

const useData = () => {
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(newData => setCar(newData))
    }, []);

    return [car, setCar];
}

export default useData