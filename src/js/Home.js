import * as React from 'react'
import { gsap } from "gsap";

import Spline from '@splinetool/react-spline';

import '../styles/Home.css'



export function Home() {

  return (
  	<section className="home">
    	<Spline scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode" />
    	<div className="description one">
    		<p className="paragraph">Jade is well known for its ornamental</p>
    		<p className="paragraph">use in Asian and Latin American art</p>
    	</div>
  	</section>
  );
}
