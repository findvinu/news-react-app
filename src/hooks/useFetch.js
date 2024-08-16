import { useState, useEffect } from "react";
import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://newsapi.org/v2/everything?q=tesla&from=2024-07-16&sortBy=publishedAt&apiKey=8f980c9f4adf42a4bd1820978cf92ad4";

const useFetch = (page) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}&page=${page}&pageSize=5`);
        setData(prevData => [...prevData, ...response.data.articles]);
      } catch (err) {
        setError(err.message || "API is not available.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { data, loading, error };
};

export default useFetch;