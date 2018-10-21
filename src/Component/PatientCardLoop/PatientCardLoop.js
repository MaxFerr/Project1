import React from 'react';
import Patientcard from '../Patientcard/Patientcard';
import PatientInfo from '../PatientInfo/PatientInfo';

class PatientCardLoop extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
clickPatientInfo=()=>{
  this.props.onRouteChange('info')
}



render (){
  const PatientLoop=this.props.patients.map((patient,i)=>{
    return (
      
      <Patientcard 
      key={i}
      name={patient.name} 
      id={patient.id} 
      email={patient.email}
      clickPatientInfo={this.clickPatientInfo}
      />

      ) 
  })
  return (
      <div>
    {PatientLoop}
    </div>

    )
  }
}


export default PatientCardLoop;