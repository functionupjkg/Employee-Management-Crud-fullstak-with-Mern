import React from 'react';

const Header = ({setIsAdding}) => {
  return (
    <div>
      <header style={{alignContent: "center"}}>
        <h1>Employee Management System</h1>
        <div style={{marginTop: "30px", marginBottom: "18px"}}>
            <button onClick={()=> setIsAdding(true)} 
            className="round-button">Add Button</button>
        </div>
      </header>
    </div>
  )
}

export default Header;
