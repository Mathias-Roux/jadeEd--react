import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { gsap } from "gsap";

import Spline from '@splinetool/react-spline';

import '../styles/Home.css'


export function Home() {
  const [myObj, setMyObj] = useState(null)

  const onLoad = (spline) => {
    const obj = spline.findObjectById('cdd02075-2de9-429e-a895-cc7f3fb279c1')

    setMyObj(obj)
  }

  return (
    <section className="home">
      <Spline 
        scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode"
        onLoad={onLoad}
      />
      <div className="description one">
        <p className="paragraph">Jade is well known for its ornamental</p>
        <p className="paragraph">use in Asian and Latin American art</p>
        <Link to="/products">My creations</Link>
      </div>
    </section>
  );
}
