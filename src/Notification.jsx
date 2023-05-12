import './Notification.css'
import logo1 from '../../anita/src/pictures/logo1.png'
import logo2 from '../../anita/src/pictures/logo2.png'
import logo3 from '../../anita/src/pictures/logo3.png'
import logo4 from '../../anita/src/pictures/logo4.png'
import circle1 from '../../anita/src/pictures/circle1.png'
import circle2 from '../../anita/src/pictures/circle2.png'
import circle3 from '../../anita/src/pictures/circle3.png'
import circle4 from '../../anita/src/pictures/circle4.png'
import line1 from '../../anita/src/pictures/line1.png'
import line2 from '../../anita/src/pictures/line2.png'
import line3 from '../../anita/src/pictures/line3.png'
import line4 from '../../anita/src/pictures/line4.png'


const Array = [
    {   
       title : 'Success',
       text : 'Order Placed Successfully. You can check order delivery status.',
       logo : logo1,
       img : circle1 ,
       line: line1,

       



},
 {
       title : 'Error',
       text : 'Order Placed Successfully. You can check order delivery status.',
       logo : logo2,
       img : circle2 ,
       line: line2,





},
{
    
    title : 'Warning',
    text : 'Order Placed Successfully. You can check order delivery status.',
    logo : logo3,
    img : circle3 ,
    line: line3,

},
{ 
    
    title : 'Info',
    text : 'Order Placed Successfully. You can check order delivery status.',
    logo : logo4,
    img : circle4 ,
    line: line4,


}

]



function Boxes (proops){
return(


    <div className='boxes'>
         <div className='circle'>
            <img src={proops.line} className='line' alt="" />
            <img src={proops.logo} className='logo' alt="" />
            <img src={proops.img} className='img' alt="" />
          

         </div>

         <div className='Text'>
            <h1>{proops.title}</h1>
            <p>{proops.text}</p>

         </div>

    </div>
)

}


export default function Map() {
    return(
       
        (Array.map((item) => (<Boxes title={item.title} text={item.text} logo={item.logo} img={item.img} line={item.line} />)))
    )
}