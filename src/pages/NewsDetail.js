import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const params = useParams();
  return <>Ini News Detail {params.id}</>;
};

export default NewsDetail;
