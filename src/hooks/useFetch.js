import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_API_URL;

const useFetch = ({
  country = "us",
  apiKey = "8f980c9f4adf42a4bd1820978cf92ad4",
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?country=${country}&apiKey=${apiKey}`
        );
        console.log("Success:", response.data.articles);

        setData((prevData) => [...prevData, ...response.data.articles]);
      } catch (err) {
        setError(err.message || "API is not available.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country, apiKey]);

  return { data, loading, error };
};

export default useFetch;