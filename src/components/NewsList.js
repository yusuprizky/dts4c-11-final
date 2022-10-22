import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../features/newsSlice";

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const NewsList = () => {
  const dispatch = useDispatch();
  const { entities, category } = useSelector((state) => state.news);
  // console.log(entities);

  useEffect(() => {
    dispatch(getNews(""));
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" sx={{ fontFamily: "Roboto", margin: "1rem 0" }}>
        {category}
      </Typography>
      {entities.articles?.map((data, i) => {
        return (
          <Card key={i} sx={{ marginBottom: 5 }}>
            <CardMedia component="img" alt="" height="140" image={data.urlToImage} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={data.url} target="_blank" size="small">
                Read More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default NewsList;
