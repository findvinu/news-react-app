import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_API_URL || "https://gnews.io/api/v4";

const useFetch = ({
  q = "technology",
  from = "2024-08-20",
  to = "2024-08-22",
  apiKey = "8f980c9f4adf42a4bd1820978cf92ad4",
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = {
          q,
          from,
          to,
          apikey: apiKey,
        };

        const response = await axios.get(`${BASE_URL}/everything`, {
          params,
        });

        console.log("Success:", response.data.articles);
        setData(response.data.articles);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "API is not available.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q, from, to, apiKey]);

  return { data, loading, error };
};

export default useFetch;
