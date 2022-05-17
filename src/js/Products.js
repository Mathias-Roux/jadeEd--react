import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '../styles/Products.css'
import '../styles/Card.css'

import Spline from '@splinetool/react-spline';


export function Products() {
	return (
		<section className="products">
			<div className="card">
				<Spline scene="https://prod.spline.design/RPbjpf3iVW6Jp6XI/scene.splinecode" />
				<p className="item">Jade perls pracelet</p>
				<p className="price">59$</p>
			</div>
			<div className="card">
				<Spline scene="https://prod.spline.design/moFrVGBi2taw8hnc/scene.splinecode" />
				<p className="item">Fancy block & rings</p>
				<p className="price">129$</p>
			</div>
		</section>
	)
}