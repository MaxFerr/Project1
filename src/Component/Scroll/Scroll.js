import React from 'react';


const Scroll=({children})=>{
	return(
		<div className='br3 ml2 mr2' style={{overflowY:'scroll', border: '2px solid grey', height:'700px'}} >
		{children}
		</div>

		)
}

export default Scroll;