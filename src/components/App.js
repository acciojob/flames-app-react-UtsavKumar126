import React, {Component, useState} from "react";
import '../styles/App.css';

const App=()=>{

    const[name1,setName1]=useState("");
    const[name2,setName2]=useState("");
    const[relation,setRelation]=useState('');

    const Relationship=['Siblings','Friends','Love','Affection','Marriage','Enemy'];

    function calculateStatus(){
        let s1=name1;
        let s2=name2;

        for(let i=0;i<s1.length;i++){
            if(s2.indexOf(s1.charAt(i))>-1){
               s2=s2.replace(s1.charAt(i),'');
               s1=s1.replace(s1.charAt(i),'');
            }
        }
        setRelation(Relationship[(s1.length+s2.length)%6]);
        
    }
    function changeValue(){

        setName1("");
        setName2('');
        setRelation("");
    }
    return(
        <div id="main">
           {/* Do not remove the main div */}
           <input id="input1" name="name1"
           onChange={(e)=>setName1(e.target.value)} 
           value={name1} data-testid="input1"
           placeholder="Enter first name"/>
           <input id="input2" data-testid="input2" name="name2"
           onChange={(e)=>setName2(e.target.value)} 
           value={name2}
           placeholder="Enter second name"/>
           <button id="calculate_relationship" onClick={calculateStatus} data-testid="calculate_relationship">Calculate Relationship Future</button>
           <button id="clear" onClick={changeValue} data-testid="clear">Clear</button>
           {
            relation!=""?<h3 testid="answer">{relation}</h3>:""
           }
        </div>
    )
}


export default App;
