import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Rake_Form.css";
function AddWagonsShops() {
  const [AddMultipleDefficiencyinwagons, setAddMultipleDefficiencyinwagons] =
    useState(false);
  const handle_AddMultipleDefficiencyinwagons_Show = () => {
    setAddMultipleDefficiencyinwagons(true);
  };
  const handle_AddMultipleDefficiencyinwagons_Close = () => {
    setAddMultipleDefficiencyinwagons(false);
  };
  const [data, SetData] = useState([
    {
      Plant_Name: "",
      Line_No: "",
      No_Of_Wagons: "",
      Loading_Time: "",
      Completion_Time: "",
    },
  ]);
  const handleClick = () => {
    SetData([
      ...data,
      {
        Plant_Name: "",
        Line_No: "",
        No_Of_Wagons: "",
        Loading_Time: "",
        Completion_Time: "",
      },
    ]);
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onchangeval = [...data];
    onchangeval[i][name] = value;
    SetData(onchangeval);
  };
  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    SetData(deleteVal);
  };

  return (
    <>
      <button
        className="Wagons_placed_at_loading_shop_Button_Popup_form"
        onClick={handle_AddMultipleDefficiencyinwagons_Show}
      >
        <span>
          <ion-icon name="add-circle"></ion-icon>
        </span>
        <span>Add Items</span>
      </button>
      <Modal
        show={AddMultipleDefficiencyinwagons}
        onHide={handle_AddMultipleDefficiencyinwagons_Close}
        size="xl"
      >
        <Modal.Body>
          <Button
            variant="secondary"
            onClick={handle_AddMultipleDefficiencyinwagons_Close}
          >
            Close
          </Button>
          <h5 style={{ textAlign: "center" }}>
            Rake ID : <span>R202211301912051426466</span>
          </h5>

          <div style={{ textAlign: "center" }}>
            <table>
              <thead>
                <tr>
                  <th>Plant Name</th>
                  <th>Line No.</th>
                  <th>No. of Wagons</th>
                  <th>Loading Time</th>
                  <th>Completion Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data.map((val, i) => (
                <tbody>
                  <tr>
                    <td
                      style={{
                        border: "0.3px solid white",
                        padding: "8px",
                        background: "#75d0d4",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "300",
                        width: "200px",
                      }}
                    >
                      <select
                        className="Plant_Name_Wagon_Shop"
                        name="Plant_Name"
                        value={val.Plant_Name}
                        onChange={(e) => handleChange(e, i)}
                      >
                        <option value="" disabled selected>
                          select
                        </option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      </select>
                    </td>
                    <td
                      style={{
                        border: "0.3px solid white",
                        padding: "8px",
                        background: "#75d0d4",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "300",
                        width: "200px",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Line No."
                        name="Line_No"
                        value={val.Line_No}
                        onChange={(e) => handleChange(e, i)}
                        className="Line_No_Wagon_Shop"
                      />
                    </td>
                    <td
                      style={{
                        border: "0.3px solid white",
                        padding: "8px",
                        background: "#75d0d4",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "300",
                        width: "200px",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="No. of Wagons"
                        name="No_Of_Wagons"
                        value={val.No_Of_Wagons}
                        onChange={(e) => handleChange(e, i)}
                        className="No_of_Wagons_In_Wagon_Shop"
                      />
                    </td>
                    <td
                      style={{
                        border: "0.3px solid white",
                        padding: "8px",
                        background: "#75d0d4",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "300",
                        width: "200px",
                      }}
                    >
                      <input
                        type="datetime-local"
                        className="Loading_Time_Wagons_Shop"
                        name="Loading_Time"
                        value={val.Loading_Time}
                        onChange={(e) => handleChange(e, i)}
                      />
                    </td>
                    <td
                      style={{
                        border: "0.3px solid white",
                        padding: "8px",
                        background: "#75d0d4",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "300",
                        width: "200px",
                      }}
                    >
                      <input
                        type="datetime-local"
                        className="Completion_Time_Wagons_Shop"
                        name="Completion_Time"
                        value={val.Completion_Time}
                        onChange={(e) => handleChange(e, i)}
                      />
                    </td>
                    <td
                      style={{
                        border: "0.3px solid white",
                        padding: "8px",
                        background: "#75d0d4",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "300",
                        width: "200px",
                      }}
                    >
                      <button
                        onClick={() => handleDelete(i)}
                        style={{
                          border: "none",
                          color: "white",
                          background: "red",
                        }}
                      >
                        <ion-icon name="remove"></ion-icon>
                      </button>
                      <button
                        onClick={handleClick}
                        style={{
                          border: "none",
                          marginLeft: "3px",
                          background: "green",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <ion-icon name="add-circle"></ion-icon>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AddWagonsShops;
