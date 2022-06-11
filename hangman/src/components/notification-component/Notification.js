import React from "react";
import "./Notification.css";

const Notification=({showNotification})=>{
    return(
        <div className={`notificationContainer ${showNotification? 'show': ''}`} >
            <p>You have already entered this letter.</p>
        </div>
    )
}
export default Notification