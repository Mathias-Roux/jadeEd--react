import React, { Suspense } from 'react'

import '../styles/Products.css'
import '../styles/Card.css'

const Spline = React.lazy(() => import('@splinetool/react-spline'));


export function Products() {
	return (
		<section className="products">
			<div className="card">
				<div className="details">
					<p className="item">Jade perls bracelet ></p>
					<p className="price">59$</p>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<Spline scene="https://prod.spline.design/RPbjpf3iVW6Jp6XI/scene.splinecode" />
				</Suspense>
			</div>
			<div className="card">
				<div className="details">
					<p className="item">Fancy block & rings ></p>
					<p className="price">129$</p>
				</div>
				<Suspense fallback={<div>Loading...</div>}>
					<Spline scene="https://prod.spline.design/moFrVGBi2taw8hnc/scene.splinecode" />
				</Suspense>
			</div>
		</section>
	)
}