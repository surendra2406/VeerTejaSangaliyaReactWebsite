import React, { useEffect, useState } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar";
import { Form,Button,Table } from "react-bootstrap";
import  Axios  from "axios";


const AdminGairArthikSahyog =()=>
{
    const [contributorName, setContributorName]= useState("");
    const [contributionDetail, setContributionDetail] =useState("");
    const [mobile, setMobile] =useState("");
    const [estimatedAmount, setEstimatedAmount]=useState([]);
    const [showtable,setShowtable] =useState(true);
    const [showform,setShowform]=useState(false);
    const [gairSahyoglist,setGairSahyoglist] =useState([]);
    const [id, setId]=useState(0);

    useEffect(()=>{
        Axios.get("http://localhost:3001/getAllGairArthikSahyog")
        .then((resp)=>{
            setGairSahyoglist(resp.data);
            console.log(resp.data);
            console.log(gairSahyoglist);
        })
    })

//handle submit
const handleSubmit=(e)=>{
    //e.preventDefault();
    // alert("gair arthik sahyog form submit");
    const data ={
        contributorName:contributorName,
        contributionDetail:contributionDetail,
        mobile:mobile,
        estimatedAmount:estimatedAmount,
        id:id,
    }
    Axios.post("http://localhost:3001/saveOrUpdateGairArthikSahyog",{data})
    .then((resp)=>{
        if(resp.data.msg ==="saved")
         {
            alert("your Gair Arthik Sahyog detail added sucessfully");
         }
         else if(resp.data.msg ==="update")
         {
             alert("your Gair Arthik Sahyog detail updated")
         }
         else if(resp.data.msg==="error")
         {
            alert("something is wrong");
         }

    })


}


    return (
        <div>
           <div>
      {(() => {
        if (showform) {
          return (
            <div><AdminMenuBar />
           
               
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div class="square border border-success" style={{ height: 350, width: 400, margin: 30, borderColor: '#ccc', borderWidth: 1 }}>
                    <Form onSubmit={handleSubmit}>
                   
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label> ADD Contributors Detail </Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Enter Name of contributor."
                                value={contributorName}
                                onChange={(e) => { setContributorName(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="input"
                                placeholder="Enter Contribution Deatil "
                                value={contributionDetail}
                                onChange={(e) => { setContributionDetail(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="input"
                                placeholder="Enter Enter Estimated Amount "
                                value={contributionDetail}
                                onChange={(e) => { setContributionDetail(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control
                                type="input"
                                placeholder="Enter Mobile No "
                                value={mobile}
                                onChange={(e) => { setMobile(e.target.value) }}
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
                        <div>
                           
                        </div>


                    </Form> 
                </div>
               
            </div></div>
          )
        }
else if(showtable) {
          return (
            <div>   <AdminMenuBar/>        
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:20}}>
              <Button onClick={()=>setShowform(true)} style={{margin:10}}> Add Gair Arthik Sahlog detail</Button>   </div>
              
         <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
   
   <Table style={{ borderStyle: "groove", }}>
     <thead >
       <tr>
         <th>  Sr.No. </th>
         <th>  Contributor Name  </th>
         <th> Contribution Detail  </th>
         <th> Estimated Amount  </th>
         <th> Mobile No.  </th>
         <th> Action  </th>

       </tr>
     </thead>
   
     <tbody>
       {
         gairSahyoglist.map((data,index) =>
         {
          return <tr key ={index}>
             <td>  {index+1}  </td>
             <td>  {data.contributor_name}  </td>
             <td>  {data.contribution_detail}  </td>
             <td>  {data.estimatedAmount}  </td>
             <td>  {data.mobile}  </td>
            
             <td>
               <Button
                onClick={() => {
                 setContributorName(data.contributor_name);
                 setContributionDetail(data.contribution_detail);
                 setEstimatedAmount(data.estimatedAmount);
                 setMobile(data.mobile);
                 setShowform(true);
                  setShowtable(false);
                  setId(data.gairarthik_id);
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

            
            

              
        </div>
    )
}
export default AdminGairArthikSahyog;