import React, { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[`${feedback}`] + 1 };
    });
  };

  countTotalFeedback() {
    const total = Object.values(this.state).reduce((el, acc) => (acc += el), 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positivePercentage = (this.state.good * 100) / total;
    return Math.round(positivePercentage);
  }

  render() {
    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={{ good: 'good', neutral: 'neutral', bad: 'bad' }}
            onLeaveFeedback={this.countFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {Object.values(this.state).every(el => el === 0) ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}
