import Order from "../order/Order";
const now = new Date();
const hours = now.getHours();



function Footer(){
    if (hours < 10 && hours > 22){
        return <footer className="footer">
            <p>We're closed, we welcome you to return between 10:00 AM and 10:00 PM.</p>
    </footer>
    }else{
        return <Order />
    }
    }
    ;


export default Footer