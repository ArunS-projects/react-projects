import React, { useEffect, useState } from 'react';

// Higher-Order Component for Data Fetching

const withDataFetching = (url) => (WrappedComponent) => {

  return (props) => {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

      const fetchData = async () => {

        try {

          const response = await fetch(url);

          if (!response.ok) {

            throw new Error('Network response was not ok');

          }

          const result = await response.json();

          setData(result);

        } catch (error) {

          setError(error.message);

        } finally {

          setLoading(false);

        }

      };

      fetchData();

    }, [url]);

    return (

      <WrappedComponent data={data} loading={loading} error={error} {...props} />

    );

  };

};

export default withDataFetching;