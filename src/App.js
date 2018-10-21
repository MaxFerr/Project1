import React, { Component } from 'react';
import './App.css';
import Signin from './Component/Signin/Signin';
import Navbar from './Component/Navbar/Navbar';
import Searchbox from './Component/Searchbox/Searchbox';
import PatientCardLoop from './Component/PatientCardLoop/PatientCardLoop';
import Scroll from './Component/Scroll/Scroll';
import RegisterPatient from './Component/RegisterPatient/RegisterPatient';
import PatientInfo from './Component/PatientInfo/PatientInfo';

class App extends Component {
  constructor(){
    super();
    this.state={
      patients:[],
      searchfield:'',
      route:'signin',
      isSignedIn:false

    }
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
      return response.json()
    })
    .then(users=>{
      this.setState({patients:users})
    })
  }


onClickSearch=()=>{
  const mainInput=document.getElementById('mainInput');
  this.setState({searchfield:mainInput.value})
  return {searchfield:mainInput.value=''};
}

onKeyPress=(event)=>{
    if (event.charCode===13){
      this.setState({searchfield:event.target.value})
      return {searchfield:event.target.value=''};
    }
  }


onRouteChange=(route)=>{
    if(route==='signin'){
      this.setState({isSignedIn:false});
    }else if(route==='home'){
      this.setState({isSignedIn:true})
    }else if(route==='add'){
      this.setState({isSignedIn:true})
    }

      this.setState({route:route});
    }

  render() {
    const filteredPatient=this.state.patients.filter(patient=>{
      return patient.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App">
       <Navbar onRouteChange={this.onRouteChange}/>
       {this.state.route==='home'
       ?(
        <div>
           <h1> Liste de patients </h1>
           <Searchbox onClickSearch={this.onClickSearch} onKeyPress={this.onKeyPress} onRouteChange={this.onRouteChange}  />
           <Scroll>
           <PatientCardLoop onRouteChange={this.onRouteChange} patients={filteredPatient} />
           </Scroll>
           </div>
        )       
       :(this.state.route==='signin'
         ? <Signin onRouteChange={this.onRouteChange}/>
         :(this.state.route==='add'
          ?<RegisterPatient/>
          :<PatientInfo />
          )
        )
     }
      </div>
    );
  }
}

export default App;
