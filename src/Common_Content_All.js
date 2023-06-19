import React from "react";
import "./Common_Content_All.css";
import { Navbar,NavDropdown} from "react-bootstrap";
import App from "./App";



function Commom_Content_All() {
    return (
        <><><header>
            <div className="Top_Title">
                <div>
                    <a href="./App.js">
                        <img className="JSPL_LOGO"
                            src={require('./jspl_logo.png')}
                            alt="Jspl-logo" />
                    </a>
                </div>
                <div className="Heading_line_div">
                    <h2 className="Heading_line">Rake Management System</h2>
                </div>
                <div>
                    <span class="Display_Name_Span">
                        <ion-icon name="person"></ion-icon>
                        Hi, <label className="Display_Name_Label"><strong>SAHIL MISHRA</strong></label>
                    </span>
                </div>
                <div>
                    <button className="icon-button">
                        <span className="icon">
                            <ion-icon name="log-out"></ion-icon>
                        </span>
                        <span className="text">Logout</span>
                    </button>
                </div>
            </div>

            <div className="Nav_Bar_div">
                <Navbar className="Nav_bar_type" style={{ padding: 0 }}>
                    <button className="Dashboard_btn" onClick={App}>
                        <ion-icon name="home"></ion-icon>
                        <strong>Dashboard</strong>
                    </button>
                    <button className="Report_btn">
                        <ion-icon name="analytics-sharp"></ion-icon>
                        <strong>Report</strong>
                    </button>
                    <NavDropdown title="Manage Master" transition={'Slide'} id="basic-nav-dropdown" className="Nav_bar_dropDown">
                       <nav className="Nav_bar_bropdown_list">
                           
                           <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage User</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Rake Name </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Commodity Catagory</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Sub-Commodity Catagory</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Delay</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Line No</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Station / Service Station</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Railway Siding</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1" className="Nav_bar_bropdown_list_item">Manage Wagon Type</NavDropdown.Item>
                           

                        </nav>
                       
                    </NavDropdown>


                </Navbar>



            </div>
        </header></>
        </>




    );
}


export default Commom_Content_All;