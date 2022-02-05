import Controls from "./components/Controls";
import Display from "./components/Display";
import { useState, useEffect } from "react";


function App() {

  const [sessionTime, setSessionTime] = useState(25*60);
  const [breakTime, setBreakTime] = useState(5*60);
  const [timerOn, setTimerOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionTime);
  const [timerState, setTimerState] = useState('Session');

  useEffect(() => {
    /* Decrements time each second */
    if (timerOn) {
      if (timeLeft > 0) {
        var timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
      }
    } else {
      clearTimeout(timer);
    }

    /* Switch between session and break */
    if (timeLeft === 0) {
      playSound('beep');
      if (timerState === 'Session') {
          setTimerState('Break');
          setTimeLeft(breakTime);
      } else {
        setTimerState('Session');
        setTimeLeft(sessionTime);
      }
    }

    return () => clearTimeout(timer);
  });

  /* Updates timeLeft with session time*/
  useEffect(() => {
    setTimeLeft(sessionTime);
  }, [sessionTime]);

  /* Reset Function */
  const resetTimers = () => {
    setTimerOn(false);  
    setBreakTime(5*60);
    setSessionTime(25*60);
    setTimerState('Session');
    setTimeLeft(sessionTime);
    stopSound('beep');
  }

  const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    
    if (min < 10)
      min ='0' + min;
    if (sec < 10)
      sec ='0' + sec;

    return `${min}:${sec}`
  }

  /* Sound Functions */
  const playSound = (id) => {
    const sound = document.getElementById(id);
    sound.currentTime = 0;
    sound.play();
  };

  const stopSound = (id) => {
    const sound = document.getElementById(id);
    sound.pause();
    sound.currentTime = 0;
  };
  
  return (
    <div className="App font-Orbitron text-2xl">
      
      <h1 className="font-semibold italic text-center text-5xl sm:text-6xl">25 + 5 Clock</h1>

      <div className="flex flex-col sm:grid sm:grid-cols-2 justify-items-center">
        <Controls 
          text='Break Length'
          partialId='break'
          time={ breakTime }
          setTime={ setBreakTime }
          timerOn={ timerOn }
        />
        <Controls 
          text='Session Length'
          partialId='session'
          time={ sessionTime }
          setTime={ setSessionTime }
          timerOn={ timerOn }
        />
        <Display
          text= { timerState }
          timeLeft={ formatTime(timeLeft) }
          timerOn={ timerOn } 
          setTimerOn={ setTimerOn }
          resetTimers= { resetTimers }
        />

        <footer className="text-right italic text-gray-600 text-sm sm:col-span-2 sm:justify-self-end mt-2 pr-7 sm:p-0">
          by gonz4 Web Designs
        </footer>
      </div>

    </div>
  );
}

export default App;
