import React from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';


function App() {
  // console.log(timelineData);
  // const testData = [{ 
  //   person: 'Adele Goldberg',
  //   status: 'In Smalltalk, everything happens somewhere else.',
  //   timeStamp: '2018-05-18T22:12:03Z'
  // }]
  // Customize the code below
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person + '\'s Social Media Feed'}</h1>
      </header>
      <main className="App-main">
        <Timeline events={timelineData.events}/>
      </main>
    </div>
  );
}

export default App;
