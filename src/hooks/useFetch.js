import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const useFetch = ({
  page,
  query = "tesla",
  fromDate = "2024-7-17",
  sortBy = "publishedAt",
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${API_KEY}&page=${page}&pageSize=5`
        );
        setData((prevData) => [...prevData, ...response.data.articles]);
      } catch (err) {
        setError(err.message || "API is not available.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, query, fromDate, sortBy]);

  return { data, loading, error };
};

export default useFetch;