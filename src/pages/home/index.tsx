import { Button } from "components/Button";
import { usePunchCard } from "contexts/PunchCard/hooks/usePunchCard";
import { usePunchCardControls } from "contexts/PunchCard/hooks/usePunchCardControls";
import { usePunchCardLogs } from "contexts/PunchCard/hooks/usePunchCardLogs";
import {
  Container,
  ControlCounterContainer,
  CounterCard,
  CounterContainer,
  Header,
  Main,
  ReportContainer,
  ReportsContainer,
} from "./styles";

type HomePageProps = {};

export const HomePage = (props: HomePageProps) => {
  const {} = props;

  const { totalWorkingDay, workdayWorked, remainingWorkday } = usePunchCard();
  const {
    startWorkday,
    finishWorkday,
    pauseWorkday,
    resumeWorkday,
    isRunning,
    isPaused,
  } = usePunchCardControls();

  const { loading, punchCard } = usePunchCardLogs();

  return (
    <Container>
      <Header>
        <h1>Controle de horas</h1>
      </Header>

      <Main>
        <CounterContainer>
          <CounterCard>
            <h2>Jornada de trabalho</h2>
            <span>{`${totalWorkingDay.hours}:${totalWorkingDay.minutes}:${totalWorkingDay.seconds}`}</span>
          </CounterCard>
          <CounterCard>
            <h2>Tempo trabalhado</h2>
            <span>{`${workdayWorked.hours}:${workdayWorked.minutes}:${workdayWorked.seconds}`}</span>
          </CounterCard>
          <CounterCard>
            <h2>Tempo para o fim da jornada</h2>
            <span>{`${remainingWorkday.hours}:${remainingWorkday.minutes}:${remainingWorkday.seconds}`}</span>
          </CounterCard>
        </CounterContainer>

        <ControlCounterContainer>
          {isRunning && (
            <Button onClick={isPaused ? resumeWorkday : pauseWorkday}>
              {isPaused ? "Play" : "Pause"}
            </Button>
          )}
          <Button onClick={isRunning ? finishWorkday : startWorkday}>
            {isRunning ? "Finalizar" : "Iniciar"}
          </Button>
        </ControlCounterContainer>

        <ReportsContainer>
          <h2>Relatório de horas</h2>

          <ul>
            {!loading &&
              punchCard.map((item) => {
                return (
                  <ReportContainer key={item.id}>
                    <ul>
                      Dia: {item.id}
                      {item.logs.map((log) => (
                        <li
                          key={log.datetime}
                        >{`${log.action} - ${log.datetime}`}</li>
                      ))}
                    </ul>
                  </ReportContainer>
                );
              })}
          </ul>
        </ReportsContainer>
      </Main>
    </Container>
  );
};
