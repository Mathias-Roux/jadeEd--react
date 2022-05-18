import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import '../styles/App.css'
import '../styles/Navbar.css'

import { Home } from './Home.js'
import { About } from './About.js'
import { Products } from './Products.js'
import { Contact } from './Contact.js'


export function App() {

	return (
		<div className="App">

			{/*Borders*/}
			<div className="border border-top"></div>
			<div className="border border-right"></div>
			<div className="border border-bottom"></div>
			<div className="border border-left"></div>
			
			<div className="headerWrap">
				<Link to="/" className="title">jadeEd</Link>
				<Navbar />
			</div>

			{/*Routes*/}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="products" element={<Products />} />
				<Route path="contact" element={<Contact />} />
			</Routes>	
			
			<small>jadeEd_2022</small>
		</div>
	);
}

function Navbar() {
	return (
		<div className="navbar">
			<Link to='/about'>About</Link>
			<Link to='/products'>Products</Link>
			<Link to='/contact'>Contact</Link>
		</div>
	)
}