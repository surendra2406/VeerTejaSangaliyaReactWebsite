import React, { useState, useEffect } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import { Form, Button, Table } from "react-bootstrap";
import Axios from "axios";




const AdminExpenditureCat = () => {

  
  const [category, setCategory] = useState("");
  const [showform, setShowform]=useState(false);
  const [showtable, setShowtable]= useState(true);
  const [id,setId]=useState(0);
  const [catlist, setCatlist] = useState([]);

  useEffect(() => {
   // alert("get all api called ")
    Axios.get("http://18.118.60.4:9393/getAllCategories")
    .then((resp) => {
     setCatlist(resp.data);
    
      //console.log(resp.data);
      //console.log(catlist);
    })
  }, [])

  const hadleSubmit = (e) => {
   
      const data = { catName: category ,catId:id};
      Axios.post('http://18.118.60.4:9393/saveAndUpdateCategory', { catName: category ,catId:id }).then((resp) => {
      console.log(resp);
      if (resp.data ="success") {
          alert("Data saved sucess")
        }
        if (resp.data ="fail") {
          alert("Some thing was wrong")
        }
      
        else  {
          alert("Data Updated");
        }
      });
    
    // e.preventDefault();
  }
  return(
    <div>
              {(() => {
                if (showform) {
                  return (
                    <div> 
                      <AdminMenuBar/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div class="square border border-success" style={{ height: 150, width: 500, margin: 30, borderColor: '#ccc', borderWidth: 1 }}>
          <Form onSubmit={hadleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Add Category Name</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => { setCategory(e.target.value) }}
              />
            </Form.Group>
            <div>
              {(() => {
                if (id == 0) {
                  return (
                    <div><Button variant="primary" type="submit">
                      Create
                    </Button></div>
                  )
                } else {
                  return (
                    <div><Button variant="primary" type="submit">
                      Update
                    </Button></div>
                  )
                }
              })()}
            </div>
          </Form>
        </div>
      </div>
         </div>
           ) } 
           else if(showtable){
                  return (
                    <div>
          <AdminMenuBar/>        
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:20}}>
           <Button onClick={()=>setShowform(true)} style={{margin:10}}> Add Category</Button>   </div>
           
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

<Table style={{ borderStyle: "groove", }}>
  <thead >
    <tr>
      <th>  Cat_Id </th>
      <th> Cat_Name   </th>
      <th> Action   </th>
    </tr>
  </thead>

  <tbody>
    {
      catlist.map((data,index) =>
      {
       
       return <tr key={index}>
          <td>  {index+1}  </td>
          <td>  {data.catName}  </td>
          <td>
            <Button
             onClick={() => {
               setShowform(true);setCategory(data.catName);setId(data.catId); setShowtable(false)
               }}> Edit</Button>
          </td>
        </tr>
                }  )}
  </tbody>
</Table>
</div>
 </div>
                  )
                }
              })()}
        </div>
  )
            }
export default AdminExpenditureCat;