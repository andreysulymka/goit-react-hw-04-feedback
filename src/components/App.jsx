import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackButton } from "./FeedbackButtons/FeedBackButtons";
import { StatisticsResults } from "./StatisticsResult/StatisticsResult";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

  const handleClick = (key) => {
    switch (key) {
      case 'good':
        setGood((prevGood) => prevGood + 1);
        break;
      case 'neutral':
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;
      case 'bad':
        setBad((prevBad) => prevBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {   
    return (good + neutral + bad);
  }
  
  const countPositiveFeedbackPercentage = () => {
        return Math.round((good / (good + neutral + bad)) * 100);
  }
  
  const total = countTotalFeedback();
  return (
    <Container>
    <Section name="feedback" title="Please, leave feedback">
          <FeedbackButton
      options={['good', 'neutral', 'bad']} onHandle={handleClick}></FeedbackButton>
    </Section>
        <Section name="statistics" title="Statistics">
          {total === 0 ? (<Notification/>) :
          (<StatisticsResults good={good} neutral={neutral} bad={bad}
          total = {countTotalFeedback()} positivePercentage= {countPositiveFeedbackPercentage()}></StatisticsResults>)}
        </Section>
        </Container>
      )
}

