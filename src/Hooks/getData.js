import { useEffect, useState } from "react";

const GetData = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        fetch('https://boiling-oasis-47037.herokuapp.com/inventory')
            .then(res => res.json())
            .then(newData => setGetData(newData))
    }, []);

    return [getData, setGetData];
}

export default GetData