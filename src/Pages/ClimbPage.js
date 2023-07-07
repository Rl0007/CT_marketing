import React from "react";
import "./ClimbPage.css";
import climbpage_image from "../images/climbing.jpg";
function ClimbPage() {
  return (
    <div className="ClimbPage">
      <div className="content2">
        <div className="no_and_climb">
          <p className="number2">02</p>
          <p className="climb3">Climb</p>
        </div>
        <p className="paragraph2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          libero voluptatem veniam recusandae id laudantium perspiciatis odit,
          nemo voluptate in dolorem optio, corrupti dolor ab numquam doloremque
          itaque mollitia deserunt! Tempora nostrum
        </p>
      </div>
      <div className="bottom">
        <div className="mountain_container" id="Climbpage_scroll">
          <div className="mountain1_and2">
            <p className="mountain1">MOUNTAIN1</p>
            <p className="mountain2">MOUNTAIN2</p>
          </div>
          <div className="empty"></div>
        </div>
        {/* <div className="schedule">
          <div className="schedule_title">Schedule</div>
          <div className="schedule_table">
            <div className="row1">
              <div className="ele1">24 Nov 2023</div>
              <div className="ele2">Switzerland</div>
            </div>
            <div className="row1">
              <div className="ele1">31 Dec 2023</div>
              <div className="ele2">Kashmir</div>
            </div>
            <div className="row1">
              <div className="ele1">10 Jan 2024</div>
              <div className="ele2">Russia</div>
            </div>
            <div className="row1">
              <div className="ele1">25 Jan 2024</div>
              <div className="ele2">Moscow</div>
            </div>
          </div>
        </div> */}
        <div className="schedule_table">
          <table className="schedule">
            <tr>
              <th className="schedule_title">SCHEDULE</th>
            </tr>
            <tr>
              <td>24 Nov 2023</td>
              <td>Switzerland</td>
            </tr>
            <tr>
              <td>31 Dec 2023</td>
              <td>Kashmir</td>
            </tr>
            <tr>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
            </tr>
            <tr>
              <td> </td>
            </tr>

            <tr>
              <td>10 Jan 2024</td>
              <td>Russia</td>
            </tr>
            <tr>
              <td> </td>
            </tr>
            <tr>
              <td>31 Jan 2024</td>
              <td>Moscow</td>
            </tr>
          </table>
        </div>
        <img src={climbpage_image} alt="" className="climbpage_image" />
      </div>
    </div>
  );
}

export default ClimbPage;
