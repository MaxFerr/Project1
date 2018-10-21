import React from 'react';

const Patientcard=({name,email,id,clickPatientInfo})=>{
	return (
		
		<div className="list  pointer grow pa3 mt0 measure center"
    onClick={clickPatientInfo}
    >
		<article className="br2 bg-washed-green shadow-5 pa3  ">
  <div className="flex items-center lh-copy pa3 ph0-l ">
     
      <div className="pl3 fl">
        <p className="f6 db black-100">Nom : {name} </p>
        <p className="f6 db black-100">Pathologie : {email} </p>
      </div>
      <div className="pl5 fr">
        <p className="f6 db black-100">Tel : {id} </p>
        <p className="f6 db black-100">Adresse : {id} </p>
      </div>
  </div>
  </article> 
  </div>

		);
}

export default Patientcard;

