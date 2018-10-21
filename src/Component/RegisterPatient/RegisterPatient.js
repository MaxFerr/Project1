import React from 'react';


const RegisterPatient=()=>{
	return(
		<div>
			<article className="br2 bg-washed-green shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw7 center">
			<main className="pa4 black-80">
	  <div className="measure center">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <legend className="f4 fw6 ph0 mh0">Enregister un patient</legend>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="name">Nom :</label>
	        <input 
	        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="name" 
	        name="name" 
	        id="patient-name"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Prénom :</label>
	        <input 
	        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="Prénom" 
	        name="Prénom"  
	        id="prenom-patient"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Rue :</label>
	        <input 
	        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="rue" 
	        name="rue"  
	        id="rue-patient"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Numéro :</label>
	        <input 
	        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="Numero" 
	        name="Numero"  
	        id="Numero-patient"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Code postal :</label>
	        <input 
	        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="Code" 
	        name="Code"  
	        id="Code-patient"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Localité :</label>
	        <input 
	        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	        type="Localite" 
	        name="Localite"  
	        id="Localite-patient"/>
	      </div>
	      
	    </fieldset>
	    <div className="">
	      <input 
	      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
	      type="submit" 
	      value="Enregistrer"/>
	    </div>
	    
	  </div>
	</main>
		</article>
		</div>

		)
}

export default RegisterPatient;