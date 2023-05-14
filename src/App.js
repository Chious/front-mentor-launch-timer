import './App.css';

import { useEffect, useState } from 'react';

import { ReactComponent as Facebook } from "./images/icon-facebook.svg"
import { ReactComponent as Instagram } from "./images/icon-instagram.svg"
import { ReactComponent as Printerest } from "./images/icon-pinterest.svg"
import hill from "./images/pattern-hills.svg"
import star from "./images/bg-stars.svg"

function App() {

  var targetDay = new Date("2023/08/18")
  var [duration, setDuration] = useState(Math.floor((targetDay - new Date()) / 1000))

  var [Day, setDay] = useState();
  var [Hour, setHour] = useState();
  var [Minute, setMinute] = useState();
  var [Second, setSecond] = useState();

  useEffect(() => {
    var CalcTime = function () {

      var Days = Math.floor(duration / 86400)
      duration -= Days * 86400

      var Hours = Math.floor(duration / 3600)
      duration -= Hours * 3600

      var Minutes = Math.floor(duration / 60)
      duration -= Minutes * 60

      var Seconds = Math.floor(duration)

      setDay(Days)
      setHour(Hours)
      setMinute(Minutes)
      setSecond(Seconds)
    }


    setTimeout(() => {
      setDuration(Math.floor((targetDay - new Date()) / 1000))
      CalcTime()
    }, "1000")

  }, [duration])

  return (
    <>

      <div className='main'>
        <img src={star} alt="" style={{ width: "100%", position: "absolute", bottom: 0, zIndex: "-1" }} ></img>
        <img src={hill} alt="" style={{ width: 1600, height: 200, position: "absolute", bottom: 0 }}></img>

        <h2>WE'RE LAUNCHING SOON</h2>
        <div className='timer'>
          <div className='time' >
            <p style={{ color: "hsl(345, 95%, 68%)" }}>{Day}</p>
            <h3>DAYS</h3>
          </div>
          <div className='time'>
            <p style={{ color: "hsl(345, 95%, 68%)" }}>{Hour}</p>
            <h3>HOURS</h3>
          </div>
          <div className='time'>
            <p style={{ color: "hsl(345, 95%, 68%)" }}>{Minute}</p>
            <h3>MINUTES</h3>
          </div>
          <div className='time'>
            <p style={{ color: "hsl(345, 95%, 68%)" }}>{Second}</p>
            <h3>SECONDS</h3>
          </div>
        </div>

        <div className='subscribe' style={{ display: "absolute", flexDirection: "row", position: "fixed", bottom: "50px" }}>
          <Facebook className='icon' style={{ marginRight: 10 }} />
          <Instagram className='icon' style={{ marginRight: 10 }} />
          <Printerest className='icon' style={{ marginRight: 10 }} />
        </div>

      </div>
    </>
  );
}

export default App;
