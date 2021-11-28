import React from "react";

const Footer=()=>
{
    let footerstyle ={fontSize:14, textAlign: 'center',fontFamily:"sans-serif", padding:7,fontStyle:"oblique" }
    // backgroundColor:"#296338"
    return(
        <div style={{backgroundColor:"#296338", color:"white", fontSize:30}}>
            <h3 style={footerstyle}
            >CopyRight  ©  Veer Teja Viaksh Samiti Sanglia- Sikar Rajathan</h3>
            <h3 style={footerstyle}>मोबाइल न0-  7340412312
ई-मेल- veertejasangaliya@gmail.com </h3>
            
        </div>
    );
}

export default Footer;