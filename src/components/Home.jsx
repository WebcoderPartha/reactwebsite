import React, { Component, Fragment } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


export default class Home extends Component {
  render() {
    return (

        <Fragment>
            <h2>Ok</h2>
            <CountUp
  start={0}
  end={30000}
  duration={0.75}
 

>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>
        </Fragment>
    )
  }
}
