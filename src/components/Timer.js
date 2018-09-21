import React from 'react';
import SplitList from './SplitList';
import { formatTime } from '../helpers';

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      running: false,
      start: null,
      time: null,
      highlighted: null,
      splits: []
    };
  }

  handleButtonClick = () => {
    // If the timer is running, the button serves to record a split
    if (this.state.running) {
      this.setState({
        splits: [...this.state.splits, this.state.time]
      });
    } else {
      // Otherwise, set timer to run and set / update start time
      this.setState({
        running: true,
        start: this.state.start ? Date.now() - this.state.start : Date.now(),
        highlighted: null
      });
      this.timer = setInterval(() => {
        this.setState({
          time: Date.now() - this.state.start
        });
      }, 1);
    }
  };

  handleSplitClick = targetTime => {
    // Clear the running timer;
    // update timer value to reflect split which was clicked and remove splits after it
    clearInterval(this.timer);
    this.setState({
      running: false,
      time: targetTime,
      start: targetTime,
      highlighted: targetTime,
      splits: this.state.splits.filter(split => split <= targetTime)
    });
  };

  render() {
    const buttonColor = this.state.running ? 'secondary' : 'primary';

    return (
      <div className="timer">
        <div className="display">
          {this.state.time ? formatTime(this.state.time) : '00:00:00.0'}
        </div>
        <button className={`button btn-${buttonColor}`} onClick={this.handleButtonClick}>
          {this.state.running ? 'split' : this.state.time ? 'continue' : 'start'}
        </button>
        <SplitList
          splits={this.state.splits}
          highlighted={this.state.highlighted}
          handleClick={this.handleSplitClick}
        />
      </div>
    );
  }
}
