import React from 'react';
import { formatTime } from '../helpers';

export default function SplitList({ splits, highlighted, handleClick }) {
  if (!splits.length) return null;
  // Map over array of split values, building list elements
  const splitElements = splits.map(split => (
    <li
      key={split}
      data-time={split}
      onClick={event => handleClick(+event.target.dataset.time)}
      className={split === highlighted ? 'highlight' : ''}
    >
      {formatTime(split)}
    </li>
  ));

  return (
    <div>
      <h2 className="subtitle">Splits</h2>
      <ul className="split-list">{splitElements}</ul>
    </div>
  );
}
