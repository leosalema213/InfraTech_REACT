import { useEffect, useState } from "react";



export default function StartTime(hourInMinutes: number) {

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(hourInMinutes * 60)

  const minutes = Math.floor(totalTimeInSeconds / 60)
  const seconds = Math.floor(totalTimeInSeconds % 60)

  useEffect(() => {
    setTimeout(() => {
      setTotalTimeInSeconds(totalTimeInSeconds - 1)
    }, 1000)

  }, [totalTimeInSeconds])

  return [
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ];
}

