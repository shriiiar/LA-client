import { useEffect, useState } from "react";

const GetData = () => {
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch('https://boiling-oasis-47037.herokuapp.com/inventory')
            .then(res => res.json())
            .then(newData => setCar(newData))
    }, []);

    return [car, setCar];
}

export default GetData