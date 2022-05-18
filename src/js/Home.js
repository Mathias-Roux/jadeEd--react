import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'

import { gsap } from "gsap";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import '../styles/Home.css'


export function Home() {
  return (
    <section className="home">
      <Suspense fallback={<div>loading...</div>} >
        <Spline scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode" />
      </Suspense>
      <div className="description one">
        <p className="paragraph">Jade is well known for its ornamental</p>
        <p className="paragraph">use in Asian and Latin American art</p>
        <Link to="/products">My creations</Link>
      </div>
    </section>
  );
}
