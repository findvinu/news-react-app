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
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              country: "us",
              apiKey: "8f980c9f4adf42a4bd1820978cf92ad4",
            },
            headers: {
              "User-Agent": "Mozilla/5.0",
              Accept: "application/json",
            },
          }
        );
        console.log(response.data);
        setData((prevData) => [...prevData, ...response.data.articles]);
      } catch (err) {
        setError(err.message || "API is not available.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
