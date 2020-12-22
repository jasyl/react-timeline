import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({person, status, timeStamp}) => {
  
  return (
    <div className='timeline-event'>
      <div className='event-person'>{person}</div>
      <div className='event-status'>{status}</div>
      <div className='event-timestamp'><Timestamp time={timeStamp}/></div>
    </div>
  )
}

export default TimelineEvent;