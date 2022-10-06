import { keyframes } from "styled-components";

export const FadeOut = keyframes`
from {
  opacity: 1;
}
to{
  opacity: 0;
}
`;

export const FadeIn = keyframes`
from {
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const Spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
