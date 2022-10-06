import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.header`
  padding: 1rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CounterContainer = styled.section`
  display: flex;
  gap: 2.5rem;
`;

export const CounterCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ControlCounterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

export const ReportsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ReportContainer = styled.li`
  & > ul {
    font-weight: 700;
    & > li {
      font-weight: 400;
      margin-top: 0.5rem;
      padding: 0.5rem;
    }
  }
`;
