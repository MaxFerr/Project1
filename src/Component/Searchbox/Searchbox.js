import React from 'react';


const Searchbox=({onClickSearch,onKeyPress,onRouteChange})=>{
	return (
		<div>
		<article className="br2 bg-washed-green ba dark-gray b--black-10 mv3 w-100 w-50-m w-70-l mw6 center">		
			<div className='center'>
				<div  className=' center pa4 br3 shadow-5'>
					<input  
					className= 'hover-bg-black hover-white f4 pa2 w-50 center' 
					type='text'
					id='mainInput'
					onKeyPress={onKeyPress}

					/>
					<button 
					className= 'w-25 grow f4 link br2 ph3 pv2 dib pointer white bg-black center'
					onClick={onClickSearch}
					>Search</button>

					<button 
					className= 'w-25 grow f4 link br2 ph3 pv2 dib pointer white bg-black center'
					onClick={()=>onRouteChange('add') }	
					>Add</button>
				</div>
			</div>
			</article>			  
			</div>
		)
}

export default Searchbox;