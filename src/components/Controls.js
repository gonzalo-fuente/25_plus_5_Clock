import Button from "./Button"

const Controls = ({ text, partialId, time, setTime, timerOn }) => {
  
  const incrementTime = () => {
    if (!timerOn) {
      if (time < 60 * 60)
        setTime(time + 60)
    }
  }

  const decrementTime = () => {
    if (!timerOn) {
      if (time > 60)
        setTime(time - 60)
    }  
  }
  
  return ( 
    <div className="text-center p-5">
      <h3 id={ partialId + '-label' }>{ text }</h3>
      <div className="flex justify-center items-center mt-2">
        <Button 
          id= { partialId + '-decrement' }
          text="-"
          onClick={ decrementTime }
        />

        <div 
          id= { partialId + '-length' }
          className="text-4xl mx-5"
        >
          { time / 60 }
        </div>
        
        <Button 
          id= { partialId + '-increment' }
          text="+"
          onClick={ incrementTime }
        /> 
      </div>
    </div>
   );
}
 
export default Controls;