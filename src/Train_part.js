import React from "react";
import "./Train_part.css";
import TableComponent1 from "./table1";
import TableComponent2 from "./Table2";


function Train_part() {
    return (
        <>
            <div className="Outer_Div">
                <div className="Inner_Div">
                    <div className="VDO1_DIV">
                        <p style={{ width: 160, fontWeight: "700", color: "black", paddingTop: 22, paddingLeft: 5 }}>CURRENT INBOUND RAKE(S)</p>
                        <form className="Curr_in_form">
                            <label style={{ fontWeight: "700" }}>Rake Name</label>
                            <br />
                            <input type="text" />
                            <button className="find_button">
                                <ion-icon name="search"></ion-icon>
                            </button>
                        </form>
                    </div>
                    <div className="Curr_in_div"><label><span className="Curr_in_span"><strong><h1 style={{ paddingLeft: 60, paddingTop: 25 }}>3</h1></strong></span></label></div>
                    <div className="VDO2_DIV">
                        <p style={{ width: 180, fontWeight: "700", color: "black", paddingTop: 22, paddingLeft: 5 }}>CURRENT OUTBOUND RAKE(S)</p>
                        <form className="Curr_out_form">
                            <label style={{ fontWeight: "700" }}>Rake Name</label>
                            <br />
                            <input type="text" />
                            <button className="find_button">
                                <ion-icon name="search"></ion-icon>
                            </button>
                        </form>
                    </div>
                    <div className="Curr_out_div"><label><span className="Curr_out_span"><strong><h1 style={{ paddingLeft: 60, paddingTop: 25 }}>4</h1></strong></span></label></div>
                </div>
                <div>
                    <br />
                    <div className='Rake_Movement_In_Table'>
                    <TableComponent1 />
                    </div>
                    <div className='Rake_Movement_Out_Table'>
                    <TableComponent2 />
                    </div>

                </div>
            </div>
        </>
    );

}
export default Train_part;