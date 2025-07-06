import React,{useEffect, useState} from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    }, [url]);

    return { data, loading };
}

function CustomHookUseFetch(props) {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

    return (
        <div>
            {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
        </div>
    );
}

export default CustomHookUseFetch;