import React, { Suspense, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { gsap } from "gsap";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

import '../styles/Home.css'


export function Home() {
  const el = useRef()
  const q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.set(q(".animated"), {
      y: '100%',
      opacity: 0
    })
    gsap.to(q(".animated"), {
      y: '0%',
      stagger: 0.33,
      opacity: 1,
      ease: 'Power1.easeOut',
      duration: 1
    })
  }, [])
  return (
    <section className="home">
      <Suspense fallback={<div className="loading"></div>} >
        <Spline scene="https://prod.spline.design/nBAbTyeZ3Nj3esfW/scene.splinecode" />
      </Suspense>
      <div className="description" ref={el}>
        <p className="paragraph animated">Jade is well known for its ornamental</p>
        <p className="paragraph animated">use in Asian and Latin American art</p>
        <Link to="/products" className="link animated">My creations</Link>
      </div>
    </section>
  );
}
