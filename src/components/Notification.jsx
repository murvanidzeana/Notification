import './Notification.css';


import Succesicon from '../../src/pictures/logo1.png';
import Erroricon from '../../src/pictures/logo2.png';
import Warningicon from '../../src/pictures/logo3.png';
import Infoicon from '../../src/pictures/logo4.png'


const notificationarray={
    succes:{
        class:"n-succes",
        image: Succesicon,
        text:"Succes",

    },
    error:{
        class:"n-error",
        image:  Erroricon ,
        text:"Error",

    },
    warning:{
        class:"n-warning",
        image: Warningicon,
        text:"Warning",

    },
    info:{
        class:"n-info",
        image: Infoicon,
        text:"Info",

    }
}


export default function Notification(props){
    const item= notificationarray[props.type]
    return(
        <div className={`notification ${item.class}`}>
            <div className="notification-icon">
                <img src={item.image} alt="" />
            </div> 

            <div className="notification-text">
                <h3>{item.text}</h3>
                <p>Order Placed Successfully. You can check order delivery status. </p>.
            </div>
        </div>
    )

}