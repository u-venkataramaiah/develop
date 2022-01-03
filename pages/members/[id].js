import { useRouter } from "next/router";
import { Table } from "react-bootstrap";

const Members = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p> teams: {id} </p>;
};
