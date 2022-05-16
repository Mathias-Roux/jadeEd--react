import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '../styles/About.css'

import profilePicture from '../pp.jpg'

export function About() {
	return (
		<section className="about">
				<div className="about__text">
					<p className="about__paragraph">jadeEd is an independant</p>
    				<p className="about__paragraph right">jade jewelry made by</p>
    				<p className="about__paragraph">me, Elizabeth Montes</p>
				</div>
    			<figure>
    				<img src={profilePicture} alt="profile picture" />
    				<figcaption>Hi! i am Elizabeth Montes</figcaption>
    			</figure>
		</section>
	)
}