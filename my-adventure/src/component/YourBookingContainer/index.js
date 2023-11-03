import React from "react";
import './styles.css';
import Departure from "../../assets/icons/departure.png";
import Location from "../../assets/icons/location.png";
import AdultNum from "../../assets/icons/adultNum.png";
import ChildNum from "../../assets/icons/childNum.png";

function TourContainer (props) {
    const { expectedTime, route, numAdult, nameA, numChild, nameC, tourStatus } = props;
    const BUTTON_STATUS = {
        WaitingForHandling: <div className="button" style={{backgroundColor:'#FFED8C',}}/>,
        Confirmed: <div className="button" style={{backgroundColor:"#F5AE45",}}/>,
        Paid: <div className="button" style={{backgroundColor:"#2CF594",}}/>,
        Successful: <div className="button" style={{backgroundColor:"#30E742",}}/>,
      }
    var AdultList = nameA.map((name) => <li>{name}</li>)
    var ChildList = nameC.map((name) => <li>{name}</li>)
        return (
          <div className="mainView">
            <div className="column">
                <img src={Departure} style={{float:'left'}}></img>
                <h6>Expected Time:</h6><br></br><br></br>
                <img src={Location} style={{float:'left'}}></img>
                <h6>Departure and Destination:</h6><br></br><br></br>
                <img src={AdultNum} style={{float:'left'}}></img>
                <h6>Number of Adults:</h6><br></br><br></br><br></br>
                <img src={ChildNum} style={{float:'left'}}></img>
                <h6>Number of Children:</h6><br></br><br></br><br></br>
            </div>
            <div className="column">
                <p>{expectedTime.join(' - ')}</p><br></br><br></br>
                <p>{route.join(' - ')}</p><br></br><br></br>
                <p>{numAdult} adult</p><br></br>
                <ul>{AdultList}</ul>
                <p>{numChild} children</p><br></br>
                <ul>{ChildList}</ul>
            </div>
            <div className="column" style={{display:"flex",}}>
                { BUTTON_STATUS[1] }
            </div>
          </div>
    );
}
export default TourContainer;