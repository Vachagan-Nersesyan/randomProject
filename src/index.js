import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import LeftComp from './components/LeftComp/LeftCompScp'
import RightComp from './components/RightComp/RightCompScp'



function App() {

  const infoArr = {
    inpTypesArr : [
      {
        id : 1,
        inptp : 'text',
        inpName : 'Name'
      },
      {
        id : 2,
        inptp : 'text',
        inpName : 'Name'
      },
      {
        id : 3,
        inptp : 'checkbox',
        inpName : {
          inpNamef: 'Male',
          inpNames: 'Female',
        }
      },
      {
        id : 4,
        inptp : 'date',
        inpName : 'Date of Birth'
      },
      {
        id : 5,
        inptp : 'email',
        inpName : 'Email'
      },
      {
        id : 6,
        inptp : 'text',
        inpName : 'Model'
      },
      {
        id : 7,
        inptp : 'text',
        inpName : 'Customer ID'
      },
    ],
    membershipInfoArr : ['Classic','Silver','Gold']
  }

  




  return (
    <div className="App">
      <div className='App_in_container'>
        <LeftComp />
        <RightComp infoArr = {infoArr} />
      </div>
    </div>
  );
}

export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

