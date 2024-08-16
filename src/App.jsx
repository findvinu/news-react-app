import React, { useState, useEffect, useCallback } from "react";
import { Container, CircularProgress, Grid, Box } from "@mui/material";
import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./components/Layout/Layout";
import useFetch from "./hooks/useFetch";
import DateRangeFilter from "./components/DateRangePicker/DateRangePicker";
import dayjs from "dayjs";

function App() {
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const { data, loading, error } = useFetch(page);

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

  const filterData = (startDate, endDate) => {
    if (!startDate || !endDate) return;

    const start = dayjs(startDate).startOf("day");
    const end = dayjs(endDate).endOf("day");

    const result = data.filter((item) => {
      const itemDate = dayjs(item.publishedAt);
      return itemDate.isBetween(start, end, null, "[]");
    });

    setFilteredData(result);
  };

  if (loading && page === 1)
    return (
      <Box className="loading flex-center">
        <CircularProgress />
      </Box>
    );

  if (error) return <p>Error: {error}</p>;

  if (!filteredData.length && page === 1) return <p>No data available.</p>;

  return (
    <Layout>
      <Container className="news-container">
        <DateRangeFilter onFilter={filterData} />
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
