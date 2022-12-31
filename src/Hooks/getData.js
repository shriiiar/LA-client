import { useEffect, useState } from "react";

const GetData = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(newData => setGetData(newData))
    }, []);

    return [getData, setGetData];
}

export default GetData