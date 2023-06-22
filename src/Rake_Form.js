import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Rake_Form.css";
import AddDeffparts from "./Defficiency_parts";
import AddWagonsShops from "./Wagon_Placed_Shops";

function RakeForm() {
  const cellStyle1 = {
    border: "0.3px solid white",
    padding: "8px",
    background: "#0eacb3",
    color: "white",
    fontSize: "12px",
    fontWeight: "400",
    width: "150px",
  };
  const cellStyle2 = {
    border: "0.3px solid white",
    padding: "8px",
    background: "#75d0d4",
    color: "white",
    fontSize: "13px",
    fontWeight: "300",
    width: "400px",
  };
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [AddMultipleDefficiencyinwagons, setAddMultipleDefficiencyinwagons] =
    useState(false);

  const handleClose = () => {
    setShow(false);
    setIndentType("text");
    setServingStationArrivalTime("text");
    setServingStationDepartureTime("text");
    setMarshallingofwagonsIntime("text");
    setMarshallingofwagonsOuttime("text");
    setRailwayPlacementTime("text");
    setUploadingStartTime("Text");
    setLoadingCompletionTime("Text");
    setRakeFormationCompletion("Text");
    setRakeInMotionWeighmentInTime("Text");
    setRakeInMotionWeighmentOutTime("text");
    setEot_Time("Text");
    setCnWExamTime("Text");
    setRakeRelease("text");
    setLineClear("text");
    setServing_Station_Arrival_time_Final("Text");
    setSidingArrivalTime("Text");
    setPlacement_time("Text");
    setSidingDepartureTime("text");
  };
  const [LoadedType, setLoadedType] = useState("");
  const handle_Select_Change_Loaded_Type = (event) => {
    setLoadedType(event.target.value);
    setIndentType("text");
    setServingStationArrivalTime("text");
    setServingStationDepartureTime("text");
    setMarshallingofwagonsIntime("text");
    setMarshallingofwagonsOuttime("text");
    setRailwayPlacementTime("text");
    setUploadingStartTime("Text");
    setLoadingCompletionTime("Text");
    setRakeFormationCompletion("Text");
    setRakeInMotionWeighmentInTime("Text");
    setRakeInMotionWeighmentOutTime("text");
    setEot_Time("Text");
    setCnWExamTime("text");
    setRakeRelease("text");
    setLineClear("text");
    setServing_Station_Arrival_time_Final("Text");
    setSidingArrivalTime("Text");
    setPlacement_time("text");
    setSidingDepartureTime("text");
  };
  const [IndentType, setIndentType] = useState("Text");
  const handle_Indent_Type = () => {
    setIndentType("date");
  };
  const [ServingStationArrivalTime, setServingStationArrivalTime] =
    useState("Text");
  const handle_Serving_Station_Arrival_Time = () => {
    setServingStationArrivalTime("datetime-local");
  };
  const [ServingStationDepartureTime, setServingStationDepartureTime] =
    useState("Text");
  const handle_Serving_Station_Departure_Time = () => {
    setServingStationDepartureTime("datetime-local");
  };
  const [RailwayPlacementTime, setRailwayPlacementTime] = useState("Text");
  const handle_Railway_Placement_Time = () => {
    setRailwayPlacementTime("datetime-local");
  };
  const [MarshallingofwagonsIntime, setMarshallingofwagonsIntime] =
    useState("Text");
  const handle_Marshalling_of_wagons_In_time = () => {
    setMarshallingofwagonsIntime("datetime-local");
  };
  const [MarshallingofwagonsOuttime, setMarshallingofwagonsOuttime] =
    useState("Text");
  const handle_Marshalling_of_wagons_Out_time = () => {
    setMarshallingofwagonsOuttime("datetime-local");
  };
  const [UploadingStartTime, setUploadingStartTime] = useState("Text");
  const handle_Uploading_Start_Time = () => {
    setUploadingStartTime("datetime-local");
  };
  const [LoadingCompletionTime, setLoadingCompletionTime] = useState("Text");
  const handle_Loading_Completion_Time = () => {
    setLoadingCompletionTime("datetime-local");
  };
  const [RakeFormationCompletion, setRakeFormationCompletion] =
    useState("Text");
  const handle_RakeFormationCompletion = () => {
    setRakeFormationCompletion("datetime-local");
  };
  const [RakeInMotionWeighmentInTime, setRakeInMotionWeighmentInTime] =
    useState("Text");
  const handle_RakeInMotionWeighmentInTime = () => {
    setRakeInMotionWeighmentInTime("datetime-local");
  };
  const [RakeInMotionWeighmentOutTime, setRakeInMotionWeighmentOutTime] =
    useState("Text");
  const handle_RakeInMotionWeighmentOutTime = () => {
    setRakeInMotionWeighmentOutTime("datetime-local");
  };
  const [EOT_Time, setEot_Time] = useState("Text");
  const handle_Eot_Time = () => {
    setEot_Time("datetime-local");
  };
  const [CnWExamTime, setCnWExamTime] = useState("Text");
  const handle_CnWExamTime = () => {
    setCnWExamTime("datetime-local");
  };
  const [RakeRelease, setRakeRelease] = useState("Text");
  const handle_RakeRelease_time = () => {
    setRakeRelease("datetime-local");
  };
  const [LineClear, setLineClear] = useState("Text");
  const handle_LineClear_Time = () => {
    setLineClear("datetime-local");
  };
  const [
    Serving_Station_Arrival_time_Final,
    setServing_Station_Arrival_time_Final,
  ] = useState("Text");
  const handle_Serving_Station_Arrival_time_Final = () => {
    setServing_Station_Arrival_time_Final("datetime-local");
  };
  const [irreversableButton, setirreversableButton] = useState(false);
  const handle_Irreversable_process = () => {
    alert("Warning !! Irreversable process.");
    setirreversableButton(true);
  };
  const [SidingArrivalTime, setSidingArrivalTime] = useState("");
  const handle_SidingArrivalTime = () => {
    setSidingArrivalTime("datetime-local");
  };
  const [Placement_time, setPlacement_time] = useState("");
  const handle_Placement_time = () => {
    setPlacement_time("datetime-local");
  };
  const [SidingDepartureTime, setSidingDepartureTime] = useState("");
  const handle_SidingDepartureTime = () => {
    setSidingDepartureTime("datetime-local");
  };
  return (
    <>
      <button className="Form_Button" onClick={handleShow}>
        <ion-icon name="reader" />
      </button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <table
            style={{ border: "0.3px solid gray", background: "#f2f1f1" }}
            className="Left_table_popup"
          >
            <tr>
              <td style={cellStyle1}>Rake Name</td>
              <td style={cellStyle2}>
                <select className="Rake_Name_Dropdown_Popup_Form">
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="">CON E</option>
                  <option value="">BOST E</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>Rake ID</td>
              <td style={cellStyle2}>
                <input
                  type="text"
                  readOnly={true}
                  placeholder="R202209281118071748989"
                  className="Rake_Id_Popup_Form"
                />
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>Loaded type*</td>
              <td style={cellStyle2}>
                <select
                  value={LoadedType}
                  onChange={handle_Select_Change_Loaded_Type}
                  className="Loaded_Type_Popup_Form"
                  required
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="Loaded">Loaded</option>
                  <option value="Empty">Empty</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <p style={{ marginBottom: "0" }}>Originating Station</p>
                ) : LoadedType === "Empty" ? (
                  <p style={{ marginBottom: "0" }}>Destination Station</p>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                <input type="text" className="Enter_Station_Popup_Form" />
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>Indent No. & Date</td>
              <td style={cellStyle2}>
                <input
                  type="text"
                  className="Indent_No_Popup_Form"
                  placeholder="Indent No."
                />
                <input
                  type={IndentType}
                  onClick={handle_Indent_Type}
                  placeholder="Indent Date"
                  className="Indent_Date_Popup_Form"
                />
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>Commodity</td>
              <td style={cellStyle2}>
                <select className="Commodity_Popup_Form">
                  <option value="" disabled selected>
                    Commodity
                  </option>
                  <option value="Steel">Steel</option>
                  <option value="By-Product">By-Product</option>
                  <option value="Iron">Iron</option>
                </select>
                <select className="Sub_Commodity_Popup_Form">
                  <option value="" disabled selected>
                    Sub-Commodity
                  </option>
                  <option value="Steel">Steel</option>
                  <option value="By-Product">By-Product</option>
                  <option value="Iron">Iron</option>
                </select>
                <input
                  type="text"
                  placeholder="Commodity Description"
                  className="Community_Description_popup_Form"
                />
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>Wagon Type, Loco No</td>
              <td style={cellStyle2}>
                <select className="Wagon_Type_Form_Popup">
                  <option value="" disabled selected>
                    Wagon type
                  </option>
                  <option value="">Type-1</option>
                  <option value="">Type-2</option>
                  <option value="">Type-3</option>
                </select>
                <input
                  type="text"
                  placeholder="Loco No."
                  className="Loco_No_Popup_Form"
                />
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>
                    No of Wagons loaded at Originating Station as per WWB/ NR
                    wagons enroute
                  </span>
                ) : LoadedType === "Empty" ? (
                  <span>Serving Station Arrival / Nos. of Wagons</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <input
                    type="number"
                    placeholder="Wagons Loaded"
                    className="Total_Wahons_loaded_In_Originating_Sataion"
                  />
                ) : LoadedType === "Empty" ? (
                  <>
                    <select className="Serving_Station_Arrival_Name_Popup_Form">
                      <option value="" disabled selected>
                        To Station
                      </option>
                      <option value="">JSPC</option>
                      <option value="">ABCD</option>
                    </select>
                    <input
                      type={ServingStationArrivalTime}
                      onClick={handle_Serving_Station_Arrival_Time}
                      placeholder="Arrival Date-time"
                      className="Serving_Station_Arrival_Time_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="No. of Wagons"
                      className="No_Of_Wagons_Serving_Station_Arrival_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Description</span>
                ) : LoadedType === "Empty" ? (
                  <spna>
                    Line Clear / For Siding/ Line no /Reason for Delay
                  </spna>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <input
                    type="text"
                    placeholder="Wagon Description"
                    className="Wagon_Description_Popup_Form"
                  />
                ) : LoadedType === "Empty" ? (
                  <>
                    <select className="Line_clear_Popup_Form">
                      <option value="" disabled selected>
                        Line Clear
                      </option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                    <select className="For_Siding_Popup_Form">
                      <option value="" disabled selected>
                        For Siding
                      </option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Line No."
                      className="Line_No_Popup_Form"
                    />
                    <input
                      type="text"
                      placeholder="Delay Reason"
                      className="Delay_Reason_Popup_Form"
                    />
                  </>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>No. of Wagons</span>
                ) : LoadedType === "Empty" ? (
                  <spna>Serving Station Departure</spna>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type="number"
                      placeholder="Total Wagons"
                      className="Total_Wagons_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="Loaded Wagons"
                      className="Loaded_Wagons_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="Empty Wagons"
                      className="Empty_Wagons_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <select className="Serving_Station_Departure_Popup_form">
                      <option value="" disabled selected>
                        Serving Station
                      </option>
                      <option value="">KPJP</option>
                      <option value="">JAPC</option>
                    </select>
                    <input
                      type={ServingStationDepartureTime}
                      onClick={handle_Serving_Station_Departure_Time}
                      placeholder="Departure Date-time"
                      className="Departure_Date_Popup_Form"
                    />
                  </>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <p style={{ marginBottom: "0" }}>Serving Station Arrival</p>
                ) : LoadedType === "Empty" ? (
                  <p style={{ marginBottom: "0" }}>
                    Siding Arvl. / Plmt. / At Siding/ Line no
                  </p>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <select
                      className="Serving_Station_Arrival_Name_Popup_Form"
                      style={{ width: "180px", marginRight: "20px" }}
                    >
                      <option value="" disabled selected>
                        To Station
                      </option>
                      <option value="">JSPC</option>
                      <option value="">ABCD</option>
                    </select>
                    <input
                      type={ServingStationArrivalTime}
                      onClick={handle_Serving_Station_Arrival_Time}
                      placeholder="Arrival Date-time"
                      className="Serving_Station_Arrival_Time_Popup_Form"
                      style={{ width: "180px", marginRight: "0px" }}
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <p style={{ marginBottom: "0" }}>
                    <>
                      <input
                        type={SidingArrivalTime}
                        placeholder="Arrival Time"
                        className="SidingArrivalTime_Popup_Form"
                        onClick={handle_SidingArrivalTime}
                      />
                      <input
                        type={Placement_time}
                        placeholder="Placement Time"
                        className="Placement_Time_Popup_Form"
                        onClick={handle_Placement_time}
                      />
                      <select className="At_Siding_Popup_Form">
                        <option value="" disabled selected>
                          Select
                        </option>
                        <option value="">A</option>
                        <option value="">B</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Line No."
                        className="Line_No_Siding_Arrival_Time_Popup_Form"
                      />
                    </>
                  </p>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>
                    Line Clear / For Siding/ Line no /Reason for Delay
                  </span>
                ) : LoadedType === "Empty" ? (
                  <p style={{ marginBottom: "0" }}>Railway Placement time</p>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <select className="Line_clear_Popup_Form">
                      <option value="" disabled selected>
                        Line Clear
                      </option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                    <select className="For_Siding_Popup_Form">
                      <option value="" disabled selected>
                        For Siding
                      </option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Line No."
                      className="Line_No_Popup_Form"
                    />
                    <input
                      type="text"
                      placeholder="Delay Reason"
                      className="Delay_Reason_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <input
                    type={RailwayPlacementTime}
                    onClick={handle_Railway_Placement_Time}
                    placeholder="Placement Date-Time"
                    className="Railway_Placement_Time"
                  />
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Serving Station Departure</span>
                ) : LoadedType === "Empty" ? (
                  <spna>Marshalling of wagons In time</spna>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <select className="Serving_Station_Departure_Popup_form">
                      <option value="" disabled selected>
                        Serving Station
                      </option>
                      <option value="">KPJP</option>
                      <option value="">JAPC</option>
                    </select>
                    <input
                      type={ServingStationDepartureTime}
                      onClick={handle_Serving_Station_Departure_Time}
                      placeholder="Departure Date-time"
                      className="Departure_Date_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={MarshallingofwagonsIntime}
                      onClick={handle_Marshalling_of_wagons_In_time}
                      placeholder="Marshalling of wagons In time"
                      className="Marshalling_of_wagons_In_time_Popup_Form"
                    />
                  </>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                <>
                  {LoadedType === "Loaded" ? (
                    <span>Siding Arvl. / Plmt. / At Siding/ Line no</span>
                  ) : LoadedType === "Empty" ? (
                    <span>Marshalling of wagons Out time</span>
                  ) : (
                    <p style={{ marginBottom: "0" }}>
                      Select an option above in ( * )
                    </p>
                  )}
                </>
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={SidingArrivalTime}
                      placeholder="Arrival Time"
                      className="SidingArrivalTime_Popup_Form"
                      onClick={handle_SidingArrivalTime}
                    />
                    <input
                      type={Placement_time}
                      placeholder="Placement Time"
                      className="Placement_Time_Popup_Form"
                      onClick={handle_Placement_time}
                    />
                    <select className="At_Siding_Popup_Form">
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="">A</option>
                      <option value="">B</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Line No."
                      className="Line_No_Siding_Arrival_Time_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={MarshallingofwagonsOuttime}
                      onClick={handle_Marshalling_of_wagons_Out_time}
                      placeholder="Marshalling of wagons Out time"
                      className="Marshalling_of_wagons_Out_time_Popup_Form"
                    />
                  </>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Railway Placement time</span>
                ) : LoadedType === "Empty" ? (
                  <span>Wagons placed at loading shop (Multiple)</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <span>
                    <input
                      type={RailwayPlacementTime}
                      onClick={handle_Railway_Placement_Time}
                      placeholder="Placement Date-Time"
                      className="Railway_Placement_Time"
                    />
                  </span>
                ) : LoadedType === "Empty" ? (
                  <AddWagonsShops />
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
          </table>
          <table
            style={{ border: "0.3px solid gray", background: "#f2f1f1" }}
            className="right_table_popup"
          >
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Unloading start Time</span>
                ) : LoadedType === "Empty" ? (
                  <span>Loading Completion Time & Delay Reason</span>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <span>
                    {" "}
                    <input
                      type={UploadingStartTime}
                      onClick={handle_Uploading_Start_Time}
                      placeholder="Uploading Start Time"
                      className="Uploading_Start_time_Form_Popup"
                    />
                  </span>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={LoadingCompletionTime}
                      onClick={handle_Loading_Completion_Time}
                      placeholder="Loading Completion Time"
                      className="Loading_Completion_Time_Popup_Form"
                    />
                    <input
                      type="Text"
                      placeholder="Delay Reason"
                      className="Loading_Completion_Time_Delay_Reason_Popup_Form"
                    />
                  </>
                ) : (
                  <p style={{ marginBottom: "0" }}>
                    Select an option above in ( * )
                  </p>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Unloading Completion Time & Delay Reason</span>
                ) : LoadedType === "Empty" ? (
                  <span>Rake Formation before rake release/Line No</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={LoadingCompletionTime}
                      onClick={handle_Loading_Completion_Time}
                      placeholder="Loading Completion Time"
                      className="Loading_Completion_Time_Popup_Form"
                    />
                    <input
                      type="Text"
                      placeholder="Delay Reason"
                      className="Loading_Completion_Time_Delay_Reason_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <select className="Rake_Formation_before_rake_release_Popup_Form">
                      <option value="" disabled selected>
                        Rake Release
                      </option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                    <input
                      type="number"
                      placeholder="Line No."
                      className="Rake_Formation_before_rake_release_Line_No_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Rake Formation Compl./Line No</span>
                ) : LoadedType === "Empty" ? (
                  <span>Rake release/Line No/Total Wagons Released</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={RakeFormationCompletion}
                      onClick={handle_RakeFormationCompletion}
                      className="Rake_Formation_Completion_Popup_Form"
                      placeholder="Rake Formation Completion"
                    />

                    <input
                      type="Number"
                      placeholder="Line No."
                      className="Rake_Formation_Completion_Line_No_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={RakeRelease}
                      placeholder="Release-Time"
                      onClick={handle_RakeRelease_time}
                      className="Rake_release_Popup_Form"
                    />
                    <input
                      type="Number"
                      placeholder="Line No."
                      className="Rake_Release_Line_No_Popup_Form"
                    />
                    <input
                      type="Number"
                      placeholder="Total Wagons"
                      className="Rake_Release_Total_No_Of_Wagons_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>
                    Rake Release/Line No/Total Wagons Released /Back Loading
                  </span>
                ) : LoadedType === "Empty" ? (
                  <span>Rake In-motion weighment In time</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={RakeRelease}
                      placeholder="Release-Time"
                      onClick={handle_RakeRelease_time}
                      className="Rake_release_Popup_Form"
                    />
                    <input
                      type="Number"
                      placeholder="Total wagons"
                      className="Total_No_Of_Wagons_Popup_Form"
                    />
                    <button
                      title="Warning!! irreversible process"
                      className="Backloadeing_Button_Popup_Form"
                      onClick={handle_Irreversable_process}
                      disabled={irreversableButton}
                    >
                      Back Loading
                    </button>
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={RakeInMotionWeighmentInTime}
                      placeholder="Motion Weighment In Time"
                      onClick={handle_RakeInMotionWeighmentInTime}
                      className="Rake_In_Motion_Weighment_In_Time_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>EOT / Reasons for Delay in EOT</span>
                ) : LoadedType === "Empty" ? (
                  <span>Rake In-motion weighment Out time</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={EOT_Time}
                      placeholder="Eot Time"
                      onClick={handle_Eot_Time}
                      className="EOT_Time"
                    />
                    <input
                      type="text"
                      placeholder="Eot Delay Reason"
                      className="Eot_delay_reason_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={RakeInMotionWeighmentOutTime}
                      placeholder="Motion Weighment Out Time"
                      onClick={handle_RakeInMotionWeighmentOutTime}
                      className="Rake_In_Motion_Weighment_Out_Time"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>C&W EXAM/AP READY</span>
                ) : LoadedType === "Empty" ? (
                  <span>Rake Formation Compl./Line No</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <input
                    type={CnWExamTime}
                    className="CnwExam_date_time"
                    placeholder="C&W Exam"
                    onClick={handle_CnWExamTime}
                  />
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={RakeFormationCompletion}
                      onClick={handle_RakeFormationCompletion}
                      className="Rake_Formation_Completion_Popup_Form"
                      placeholder="Rake Formation Completion"
                    />

                    <input
                      type="Number"
                      placeholder="Line No."
                      className="Rake_Formation_Completion_Line_No_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Defficiency in wagons' parts (Multiple)</span>
                ) : LoadedType === "Empty" ? (
                  <span>EOT / Reasons for Delay in EOT</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <AddDeffparts />
                     
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={EOT_Time}
                      placeholder="Eot Time"
                      onClick={handle_Eot_Time}
                      className="EOT_Time"
                    />
                    <input
                      type="text"
                      placeholder="Eot Delay Reason"
                      className="Eot_delay_reason_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Attached & Detached Wagons/ BV</span>
                ) : LoadedType === "Empty" ? (
                  <span>C&W EXAM/AP READY</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type="number"
                      placeholder="Attached Wagons"
                      className="Attached_Wagona_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="De-Attached Wagons"
                      className="De-Attached_Wagona_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <input
                    type={CnWExamTime}
                    className="CnwExam_date_time"
                    placeholder="C&W Exam"
                    onClick={handle_CnWExamTime}
                  />
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>
                    Derailment /Line no/ Rerailment/ Damage /Reasons for
                    derailment
                  </span>
                ) : LoadedType === "Empty" ? (
                  <span>Attached & Detached Wagons/ BV</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type="number"
                      placeholder="No. of Derailment wagons"
                      className="Derailment_Wagons_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="Line No."
                      className="Derailment_Wagons_Line_No_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="No. of Rerailment wagons"
                      className="Rerailment_Wagons_Line_No_Popup_Form"
                    />
                    <input
                      type="Text"
                      placeholder="Damage"
                      className="Damage_Due_to_Derailment_Popup_Form"
                    />
                    <input
                      type="Text"
                      placeholder="Reason for Derailment"
                      className="Derailment_Reason_Popup_Form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type="number"
                      placeholder="Attached Wagons"
                      className="Attached_Wagona_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="De-Attached Wagons"
                      className="De-Attached_Wagona_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Line Clear Recvd Time / To Station</span>
                ) : LoadedType === "Empty" ? (
                  <span>
                    Derailment / Line no / Rerailment / Damage / Reasons for
                    derailment
                  </span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={LineClear}
                      onClick={handle_LineClear_Time}
                      placeholder="Line clear Time"
                      className="Line_Clear_Time_PopUp_Form"
                    />
                    <select className="To_Station_Popup_Form">
                      <option value="" disabled selected>
                        To Station
                      </option>
                      <option value="">JSPC</option>
                      <option value="">ABCD</option>
                    </select>
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type="number"
                      placeholder="No. of Derailment wagons"
                      className="Derailment_Wagons_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="Line No."
                      className="Derailment_Wagons_Line_No_Popup_Form"
                    />
                    <input
                      type="number"
                      placeholder="No. of Rerailment wagons"
                      className="Rerailment_Wagons_Line_No_Popup_Form"
                    />
                    <input
                      type="Text"
                      placeholder="Damage"
                      className="Damage_Due_to_Derailment_Popup_Form"
                    />
                    <input
                      type="Text"
                      placeholder="Reason for Derailment"
                      className="Derailment_Reason_Popup_Form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>
                    Siding Departure TIme / From siding / Reasons for Delay in
                    Ready to Dep.
                  </span>
                ) : LoadedType === "Empty" ? (
                  <span>Line Clear Recvd Time / To Station</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={SidingDepartureTime}
                      className="SidingDepartureTime_Popup_Form"
                      placeholder="Departure time"
                      onClick={handle_SidingDepartureTime}
                    />
                    <select className="For_Siding_Departure_Time_Popup_Form">
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="">A</option>
                      <option value="">B</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Delay reason"
                      className="Delay_reason_Departure_Time_arrival_Popup_form"
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={LineClear}
                      onClick={handle_LineClear_Time}
                      placeholder="Line clear Time"
                      className="Line_Clear_Time_PopUp_Form"
                    />
                    <select className="To_Station_Popup_Form">
                      <option value="" disabled selected>
                        To Station
                      </option>
                      <option value="">JSPC</option>
                      <option value="">ABCD</option>
                    </select>
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <span>Serving Station Arvl. Time</span>
                ) : LoadedType === "Empty" ? (
                  <span>
                    Siding Departure TIme / From siding / Reasons for Delay in
                    Ready to Dep.
                  </span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <>
                    <input
                      type={Serving_Station_Arrival_time_Final}
                      placeholder="Serving Station arrival time"
                      className="Serving_Station_Arrival_time_Final"
                      onClick={handle_Serving_Station_Arrival_time_Final}
                    />
                  </>
                ) : LoadedType === "Empty" ? (
                  <>
                    <input
                      type={SidingDepartureTime}
                      className="SidingDepartureTime_Popup_Form"
                      placeholder="Departure time"
                      onClick={handle_SidingDepartureTime}
                    />
                    <select className="For_Siding_Departure_Time_Popup_Form">
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="">A</option>
                      <option value="">B</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Delay reason"
                      className="Delay_reason_Departure_Time_arrival_Popup_form"
                    />
                  </>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
            <tr>
              <td style={cellStyle1}>
                {LoadedType === "Loaded" ? (
                  <></>
                ) : LoadedType === "Empty" ? (
                  <span>Serving Station Arvl. Time</span>
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
              <td style={cellStyle2}>
                {LoadedType === "Loaded" ? (
                  <></>
                ) : LoadedType === "Empty" ? (
                  <input
                    type={Serving_Station_Arrival_time_Final}
                    placeholder="Serving Station arrival time"
                    className="Serving_Station_Arrival_time_Final"
                    onClick={handle_Serving_Station_Arrival_time_Final}
                  />
                ) : (
                  <span>Select an option above in ( * )</span>
                )}
              </td>
            </tr>
          </table>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RakeForm;
