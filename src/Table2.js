import React from 'react';
import './Table.css';
import RakeForm from './Rake_Form';

const TableComponent2 = () => {
  const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    position:'relative',
    fontSize:'12px',
    fontWeight:"500"

  };

  const cellStyle = {
    border: '1px solid black',
    padding: '3px',
    width:"100px"
  };
  const Rake_ID_Style = {
    border: '1px solid black',
    padding: '3px',
    width:"115px"
  };
  const Rake_Name_Style = {
    border: '1px solid black',
    padding: '3px',
    width:'190px'
  };
  const Commodity_Style = {
    border: '1px solid black',
    padding: '3px',
    width:'250px'
  };



  return (
    <table style={tableStyle}>
      <thead>
        <tr className="tableRow">
          <th style={cellStyle}>#</th>
          <th style={Rake_Name_Style}>Rake Name</th>
          <th style={Rake_ID_Style}>Rake ID</th>
          <th style={Commodity_Style}>Commodity</th>
          <th style={cellStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="tableRow">
          <td style={cellStyle}>1</td>
          <td style={cellStyle}>BRN E</td>
          <td style={cellStyle}>R202209252112491680195</td>
          <td style={cellStyle}>TMT, SGWF--22</td>
          <td style={cellStyle}><button className='Eye_Button'><ion-icon name="eye"></ion-icon></button>
          <RakeForm /> 
          </td>
        </tr>
        <tr className="tableRow">
          <td style={cellStyle}>2</td>
          <td style={cellStyle}>SFTO-1</td>
          <td style={cellStyle}>R202209261809351982194</td>
          <td style={cellStyle}>PLATE, CCJS KOKG-18</td>
          <td style={cellStyle}><button className='Eye_Button'><ion-icon name="eye"></ion-icon></button>
          <RakeForm /> 
          </td>
        </tr>
        <tr className="tableRow">
          <td style={cellStyle}>3</td>
          <td style={cellStyle}>CON E</td>
          <td style={cellStyle}>R202209270000591599864</td>
          <td style={cellStyle}>PLATE, ICDB-19</td>
          <td style={cellStyle}><button className='Eye_Button'><ion-icon name="eye"></ion-icon></button>
          <RakeForm /> 
          </td>
        </tr>
        <tr className="tableRow">
          <td style={cellStyle}>4</td>
          <td style={cellStyle}>CON E</td>
          <td style={cellStyle}>R202209270000591599864</td>
          <td style={cellStyle}>PLATE, ICDB-19</td>
          <td style={cellStyle}><button className='Eye_Button'><ion-icon name="eye"></ion-icon></button>
          <RakeForm /> 
          </td>
        </tr>
        
        
      </tbody>
    </table>
  );
};

export default TableComponent2;
