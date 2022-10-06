import { ElementType, ReactElement } from "react";

type ComposeContextsProps = {
  children: ReactElement | ReactElement[];
  contexts: ElementType[];
};

export const ComposeContexts = (props: ComposeContextsProps) => {
  const { children, contexts } = props;

  const sortedContexts = contexts.reverse();

  return (
    <>
      {sortedContexts.reduce(
        (accContexts, Context) => (
          <Context>{accContexts}</Context>
        ),
        children
      )}
    </>
  );
};
