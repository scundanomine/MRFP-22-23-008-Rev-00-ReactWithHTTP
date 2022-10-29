import React from 'react'
import { useParams } from 'react-router-dom';
import AboutItem from './AboutItem'


function RouteParam(props) {
    const param=useParams()
  return (
    <div>
        <AboutItem uid={param.id}></AboutItem>
    </div>
  )
}

export default RouteParam;
