import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Spline from '@splinetool/react-spline';


export function Home() {
  return (
  	<div className="home">
  		<h1>Here is the Home section</h1>
    	<Spline scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode" />
  	</div>
  );
}
