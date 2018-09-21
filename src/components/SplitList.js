import React from 'react';
import { formatTime } from '../helpers';

export default function SplitList({ splits, handleClick }) {
  const splitElements = splits.map(split => (
    <li key={split} data-time={split} onClick={event => handleClick(+event.target.dataset.time)}>
      {formatTime(split)}
    </li>
  ));

  return <ul>{splitElements}</ul>;
}
