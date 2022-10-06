import { Loading } from "components/Loading";
import { Container } from "./styles";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  const {} = props;

  return (
    <Container>
      <Loading centralize />
    </Container>
  );
};
