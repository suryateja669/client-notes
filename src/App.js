import React,{useState} from 'react';
import './App.css';
import Input from './input.js';

let clientName='client1';
let notes=null;
let tableRows=null;


function App() {

  const [clientComponent,setClientComponent]=useState({
    Client:[
   
  ]}
  );

  
  const setClient=(clientName,notes)=>{
    let state=clientComponent.Client.slice();
    
    
    state.push({clientName,notes});
    console.log(state);
    if(notes.length>0){
      setClientComponent({
        Client:state
      });
    }
    addRows(state);
  };

  const addRows=(clientComponent)=>{
    const state=clientComponent;
    tableRows=state.map((client,index)=>{return(
        <tr key={index}>
          <td>
            {client.clientName}
          </td>
          <td>
            <textarea id="notesTd" rows="5" columns="200">{client.notes}</textarea> 
          </td>
        </tr>
    )})

  }

  const clientNameHandler=(event)=>{
    clientName=event.target.value;
  }

  


  const notesChange=(event)=>{
    notes=event.target.value;
  }


  


  return (
    
    <div className="App">
      <div className="primary">
        <select id="clientNames" onChange={(event)=>clientNameHandler(event)}>
          <option value="client1">client1</option>
          <option value="client2">client2</option>
          <option value="client3">client3</option>
          <option value="client4">client4</option>
          <option value="client5">client5</option>
        </select>
        <Input changed={(event)=>notesChange(event)}/>
  
        
        
        <button id="notesButton" onClick={()=>setClient(clientName,notes)}>Add notes!</button>
      </div>
      <div className="history">
        <h1>Call history</h1>
        <table>
            <thead>
              <tr>
                <th>
                    ClientNames
                </th>
                <th>
                Notes
                </th>
                </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>

        </table>

      </div>
    
    </div>
  );
}

export default App;
{/* <div className="history">
<h1>Call history</h1>


//</div> 
//*/}
