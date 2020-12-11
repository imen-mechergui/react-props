import React from 'react'
import './App.css';
import ProfileComponent from './profile/ProfileComponent'
import image from './imen.jpg'
function App() {
  const HandelName= (name)=> alert(`Hi I am a ${name}`);
  return (
    <div className="App">
      <ProfileComponent  FullName= 'Imen Mechergui' 
      Bio= {[ "Tunisia","Physics PHD","32,Single","E-mail:mecherguiimen20@gmail.com", ]} 
      Profession="physics Teacher"
      HandelName={HandelName}>
        <hr />
        {/* children props */}
          <div style={styleObject}>
          <img class= "avatar rotate" src={image} alt="profile" />
          <hr/>

        </div>
      </ProfileComponent>


    
    </div>
  );
}

export default App;
const styleObject= { textAlign:'center', background:'black'}