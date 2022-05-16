import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Spline from '@splinetool/react-spline';

import '../styles/Home.css'

export function Home() {
  return (
  	<div className="home">
    	<Spline scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode" />
    	<div className="description one current">
    		<span className="paragraph">Jade is well known for its ornamental</span>
    		<span className="paragraph">use in Asian and Latin American art</span>
    	</div>
    	<div className="description two">
    		<span className="paragraph">The use of jade is for symbolic</span>
    		<span className="paragraph">and ideological ritual</span>
    		<span className="paragraph">was influenced by its rarity.</span>
    	</div>
    	<div className="description three">
    		<span className="paragraph">Jadeite's color commonly ranges</span>
    		<span className="paragraph">from white through pale apple green</span>
    		<span className="paragraph">to deep blue-green</span>
    	</div>
  	</div>
  );
}
