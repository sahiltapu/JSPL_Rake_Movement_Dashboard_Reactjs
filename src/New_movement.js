import React from "react";
import "./New_movement.css";

function New_movement() {
    return (
        <>
            <div className="Outer_div">
                <div className="inner_div">
                    <button className="New-movement-button ">
                        <span className="icon-plus">
                            <ion-icon name="add-circle"></ion-icon>
                        </span>
                        <span className="Text-new">
                            New Movement
                        </span>


                    </button>


                </div>
            </div></>

    );
}
export default New_movement;