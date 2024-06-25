import { useState, useEffect} from 'react'

export default function ProgressBar({ tiMer }){
  
  const [remainingTime, setRemainingTime] = useState(tiMer);

  useEffect(()=>{
    const interval =setInterval(()=>{
      //console.log('Interval')
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    //stop setinterval loop
    return ()=>{
      clearInterval(interval)
    }
  }, []);
  
  return
    <progress value={ remainingTime } max={tiMer} />;
}