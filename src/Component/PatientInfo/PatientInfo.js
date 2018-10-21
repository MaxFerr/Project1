import React from 'react';
import PatientCardLoop from '../PatientCardLoop/PatientCardLoop';
import Patientcard from '../Patientcard/Patientcard';

class PatientInfo extends React.Component{
constructor(props){
  super(props);
  this.state={
    

  }
}
render(){
  
  return (
    
      <div className="list  pointer grow pa3 mt0 measure center">
        <article className="br2 bg-washed-green shadow-5 pa3  ">
          <div className="flex items-center lh-copy pa3 ph0-l ">
        <div className="pl3 fl">
          <p className="f6 db black-100">Nom :  </p>
          <p className="f6 db black-100">Soin :  </p>
          <p className="f6 db black-100">Pathologie :  </p>
          <p className="f6 db black-100">Date :  </p>
        </div>
        <div className="pl5 fr">
          <p className="f6 db black-100">Tel :  </p>
          <p className="f6 db black-100">Adresse :  </p>
        </div>
      </div>
    </article> 
  </div>

    )
  }
}
export default PatientInfo;

