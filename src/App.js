import React from 'react';
import './App.css';
import Commom_Content_All from './Common_Content_All';
import 'bootstrap/dist/css/bootstrap.min.css';
import New_movement from './New_movement';
import Train_part from './Train_part';
import CopyRight from './Copy_Right';



function App() {
  return (
    <><header>
      <Commom_Content_All />
    </header>
      <New_movement />
      <Train_part />
      <footer>
        <CopyRight />
      </footer>
    </>


  );
}

export default App;
