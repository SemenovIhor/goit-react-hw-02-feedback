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

  onLeaveFeedback = (options) => {
    this.setState(prevState => {
      return {
        [options]: prevState[options] + 1,
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
            onLeaveFeedback = {this.onLeaveFeedback}
            options={Object.keys(this.state)}
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


