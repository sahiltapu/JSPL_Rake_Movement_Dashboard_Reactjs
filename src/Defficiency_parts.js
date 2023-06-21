import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
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
    </>
  );
}
export default AddDeffparts;
