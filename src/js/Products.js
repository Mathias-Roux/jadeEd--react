import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import '../styles/Products.css'
import '../styles/Card.css'

export function Products() {
	return (
		<section className="products">
			<div className="card">
				<div className="spline">spline</div>
				<p className="item">Jade perls pracelet</p>
				<p className="price">59$</p>
			</div>
			<div className="card">
				<div className="spline">spline</div>
				<p className="item">Fancy block & rings</p>
				<p className="price">129$</p>
			</div>
		</section>
	)
}