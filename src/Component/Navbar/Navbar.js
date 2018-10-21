import React from 'react';

const Navbar=({onRouteChange})=>{
	return (
		<div >
		<header style={{zIndex:'1'}} className="bg-black-90 fixed w-100 ph2 pv2 pv3-ns ph3-m ph5-l mb3">
		  	<nav className="f6 fw5 ttu tracked">
			    <p className="link dim white dib mr3 pointer fl" onClick={()=>onRouteChange('home')} >Home</p>
			    <p className="link dim white dib mr3 pointer fl" >About</p>
			    <p className="link dim white dib mr3 pointer fr" onClick={()=>onRouteChange('signin')}>Sign out</p>
		    </nav>
		</header>
			   <br/>
		       <br/>
		       <br/>
		       <br/>
		       <br/>
		</div>

		)
}

export default Navbar;