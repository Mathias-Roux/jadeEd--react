import * as React from 'react'

import Spline from '@splinetool/react-spline';

import '../styles/Home.css'

export function Home() {
  return (
  	<section className="home">
    	<Spline scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode" />
    	<div className="description one current">
    		<p className="paragraph">Jade is well known for its ornamental</p>
    		<p className="paragraph">use in Asian and Latin American art</p>
    	</div>
    	<div className="description two">
    		<p className="paragraph">The use of jade is for symbolic</p>
    		<p className="paragraph">and ideological ritual</p>
    		<p className="paragraph">was influenced by its rarity.</p>
    	</div>
    	<div className="description three">
    		<p className="paragraph">Jadeite's color commonly ranges</p>
    		<p className="paragraph">from white through pale apple green</p>
    		<p className="paragraph">to deep blue-green</p>
    	</div>
  	</section>
  );
}
