import React, { Component } from "react";
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  }
  countNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  }
  countBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  }

  countTotalFeedback = () => {
    const {good, bad, neutral} = this.state
    return good+bad+neutral
  }
  countPositiveFeedbackPercentage = () => {
    const {good, bad, neutral} = this.state
    return Math.round(good/(good+bad+neutral)*100)
  }

  render () {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            countGoodFeedback = {this.countGoodFeedback}
            countNeutralFeedback = {this.countNeutralFeedback}
            countBadFeedback = {this.countBadFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
              <p>There is no feedback</p>
          ) : (
              <Statistics
                good = {this.state.good}
                neutral = {this.state.neutral}
                bad = {this.state.bad}
                total = {total}
                positivePercentage = {positivePercentage}          
              />
          )}
        </Section>  
      </>
    );
  }
}


