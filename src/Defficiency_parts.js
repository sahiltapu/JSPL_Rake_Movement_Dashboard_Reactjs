import React from "react";
import { useState } from "react";
import { Modal, Button, Placeholder } from "react-bootstrap";
import "./Rake_Form.css";
function AddDeffparts() {
    const [AddMultipleDefficiencyinwagons, setAddMultipleDefficiencyinwagons] =
        useState(false);
    const handle_AddMultipleDefficiencyinwagons_Show = () => {
        setAddMultipleDefficiencyinwagons(true);
    };
    const handle_AddMultipleDefficiencyinwagons_Close = () => {
        setAddMultipleDefficiencyinwagons(false);
    };
    const [data, SetData] = useState([{ Part_Detail: "", Condition: "" }]);
    const handleClick = () => {
        SetData([...data, { Part_Detail: "", Condition: "" }]);
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
                className="Defficiency_in_wagon_parts_Button_Popup_form"
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
                size="lg"
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

                        <div style={{textAlign:"center"}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Part Detail</th>
                                        <th>Condition</th>
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
                                                    width: "250px",
                                                }}
                                            >
                                                <input
                                                    name="Part_Detail"
                                                    value={val.Part_Detail}
                                                    onChange={(e) => handleChange(e, i)}
                                                    placeholder="Part Detail"
                                                    className="Part_detail_text_field"
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
                                                    width: "250px",
                                                }}
                                            >
                                                <select
                                                    name="Condition"
                                                    value={val.Condition}
                                                    onChange={(e) => handleChange(e, i)}
                                                    className="Condition_Of_Parts"
                                                >
                                                    <option value="" disabled selected>
                                                        select
                                                    </option>
                                                    <option value="Shift">Shift</option>
                                                    <option value="Defected">Defected</option>
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
                                                    width: "250px",
                                                }}
                                            >
                                                <button
                                                    onClick={() => handleDelete(i)}
                                                    style={{ border: "none", color: "white", background: "red" }}
                                                >
                                                    <ion-icon name="remove"></ion-icon>
                                                </button>
                                                <button
                                                    onClick={handleClick}
                                                    style={{ border: "none", marginLeft: "3px", background: "green", color: "white", textAlign: "center" }}
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
export default AddDeffparts;
