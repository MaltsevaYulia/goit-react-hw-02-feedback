import React, { Component } from 'react';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
// import {Notification} from './Notification/Notification'

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

  render() {
    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.countFeedback} />
        </SectionTitle>
        
        <SectionTitle title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </SectionTitle>
      </div>
    );
  }
}


const a= {
    good: 0,
    neutral: 0,
    bad: 0,
};
  
console.log(Object.values(a));