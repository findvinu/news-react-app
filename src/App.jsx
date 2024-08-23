import React, { useState, useEffect, useCallback } from "react";
import { Container, CircularProgress, Grid, Box } from "@mui/material";
import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./components/Layout/Layout";
import useFetch from "./hooks/useFetch";
import DateRangeFilter from "./components/DateRangePicker/DateRangePicker";

function App() {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error } = useFetch({
    apiKey: "a7c3ff7320f98c1bbd200eb4237b0751",
  });

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return;
    setPage((prevPage) => prevPage + 1);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const filterData = () => {
    const filteredArticles = data.filter((article) => {
      const articleDate = new Date(article.publishedAt);
      const start = new Date(startDate);
      const end = new Date(endDate);
      console.log(start, end);
      return articleDate >= start && articleDate <= end;
    });

    setFilteredData(filteredArticles);
  };

  if (loading && page === 1)
    return (
      <Box className="loading flex-center">
        <CircularProgress />
      </Box>
    );

  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <Container className="news-container">
        <DateRangeFilter
          onFilter={filterData}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
          {filteredData.map((article, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={`${article.publishedAt}-${index}`}
            >
              <NewsCard
                title={article.title}
                description={article.description}
                image={article.urlToImage}
                date={article.publishedAt}
              />
            </Grid>
          ))}
        </Grid>
        {loading && <p>Loading more...</p>}
      </Container>
    </Layout>
  );
}

export default App;
