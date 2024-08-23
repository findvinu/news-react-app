import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_API_URL || "https://gnews.io/api/v4";

const useFetch = ({
  category = "general",
  lang = "en",
  country = "us",
  max = 10,
  apiKey = "a7c3ff7320f98c1bbd200eb4237b0751",
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
          params: {
            category,
            lang,
            country,
            max,
            apikey: apiKey,
          },
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
  }, [category, lang, country, max, apiKey]);

  return { data, loading, error };
};

export default useFetch;
