import { Container, Loader } from "./styles";

type LoadingProps = { centralize?: boolean };

export const Loading = (props: LoadingProps) => {
  const { centralize } = props;

  if (centralize) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return <Loader />;
};
