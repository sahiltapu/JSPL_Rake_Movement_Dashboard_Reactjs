import React from "react";
import "./New_movement.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function New_movement() {
  const [NewMovementButton, setNewMovementButton] = useState(false);
  const handle_NewMovementButton_show = () => {
    setNewMovementButton(true);
  };
  const handle_NewMovementButton_close = () => {
    setNewMovementButton(false);
  };
  const handle_create_new_Rake_Id = () =>
  {
    alert("Rake ID created");
    handle_NewMovementButton_close();
  }


  return (
    <>
      <div className="Outer_div">
        <div className="inner_div">
          <button
            className="New-movement-button "
            onClick={handle_NewMovementButton_show}
          >
            <span className="icon-plus">
              <ion-icon name="add-circle"></ion-icon>
            </span>
            <span className="Text-new">New Movement</span>
          </button>
          <Modal
            show={NewMovementButton}
            onHide={handle_NewMovementButton_close}
            size="full"
          >
            <Modal.Body>
              <Button
                variant="secondary"
                onClick={handle_NewMovementButton_close}
              >
                Close
              </Button>

              <table>
                <tr>
                  <td
                    style={{
                      border: "0.3px solid white",
                      padding: "8px",
                      background: "#0eacb3",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "400",
                      width: "300px",
                    }}
                  >
                    Rake Name
                  </td>
                  <td
                    style={{
                      border: "0.3px solid white",
                      padding: "8px",
                      background: "#75d0d4",
                      color: "white",
                      fontSize: "13px",
                      fontWeight: "300",
                      width: "300px",
                    }}
                  >
                    <select className="New_Movement_Select_option">
                      <option disabled selected>
                        select
                      </option>
                      <option>A</option>
                      <option>B</option>
                      <option>C</option>
                    </select>
                  </td>
                </tr>
                <tr>
                <td
                    style={{
                      border: "0.3px solid white",
                      padding: "8px",
                      background: "#0eacb3",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "400",
                      width: "300px",
                    }}
                  >
                    Loaded Type
                  </td>
                  <td
                    style={{
                      border: "0.3px solid white",
                      padding: "8px",
                      background: "#75d0d4",
                      color: "white",
                      fontSize: "13px",
                      fontWeight: "300",
                      width: "300px",
                    }}
                  >
                    <select className="Loaded_type_New_Movement_Button">
                      <option value = "" disabled selected>
                        select
                      </option>
                      <option value="Loaded">Loaded</option>
                      <option value="Empty">Empty</option>
                    </select>
                  </td>
                </tr>
              </table>

              <div style={{textAlign:"center",alignItems:"center"}}>
                <button className="Create_rake_id_button"
                onClick={handle_create_new_Rake_Id}>
                    Create Rake ID
                </button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}
export default New_movement;
