import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../features/newsSlice";

import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";

const HotTopic = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.news);
  // console.log(entities);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <>
      {entities.articles?.map((data, i) => {
        return (
          <Container>
            <Card sx={{ maxWidth: 345 }} key={i}>
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
                <Button href={data.url} size="small">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Container>
        );
      })}
    </>
  );
};

export default HotTopic;
