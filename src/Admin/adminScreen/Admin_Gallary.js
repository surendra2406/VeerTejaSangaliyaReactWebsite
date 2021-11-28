
import React, {useEffect, useState} from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import  axios  from "axios";

const AdminGallary =()=>
{
    const [catlist, setCatlist] = useState([]);
   
    useEffect(() => {
        axios.get("http://localhost:3001/getAllCat")
        .then((resp) => {
          setCatlist(resp.data);
         
          console.log(resp.data);
         console.log(catlist);
        })
      }, [])
      // useEffect(() => {
      //   const fetchData = async () => {
      //     const result = await fetch('http://localhost:3001/getAllCat')
    
      //       // console log here to determine how to set products
      //     console.log(result.data)
      //     setCatlist(result.data)
      //   }
    
      //   fetchData()
      // }, [])

    
    return(
        <div>
             <AdminMenuBar/>
             <h1>Admin Gallary Page</h1>

             {/* {
                 catlist.map((data)=>{
                   return  <h3>{data.cat_name}</h3>
                     
                 })
             } */}
              <table>
                <thead>
                  <td> cat id</td>
                </thead>
                   {
                      catlist.map((data)=>{
                        <tr>
                        <td>{(data.cat_name)}</td>
                    </tr>
                      })
                   }

               </table>
        </div>
    )
}
export default AdminGallary;