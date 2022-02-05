import Button from "./Button";

const Display = ({ text, timeLeft, timerOn, setTimerOn, resetTimers }) => {
  
  return ( 
    <div className="text-center col-span-2 p-5">
      <h3 
        id="timer-label"
        className="text-4xl"
      >
        { text }
      </h3>
      
      <div
        id="time-left"
        className="text-6xl my-6"
      >
        { timeLeft }
      </div>
      
      <div className="flex justify-center">
        <Button 
          id="start_stop"
          className="mx-5 sm:mx-8"
          text="Play/Pause"
          onClick={ () => { setTimerOn(!timerOn) } }
        />
        <Button
          id="reset"
          className="mx-5 sm:mx-8"
          text="Restart"
          onClick={ resetTimers }
        />
      </div>

      <audio 
        src="https://github.com/gonzalo-fuente/25_plus_5_Clock/raw/master/src/audio/alarm.mp3" 
        id="beep"
        
      >
      </audio>
    </div>
   );
}
 
export default Display;