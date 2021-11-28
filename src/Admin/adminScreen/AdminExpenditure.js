import React, { useEffect, useState } from "react";
import AdminMenuBar from "../adminComponent/Admin_MenuBar"
import { Form, Button, Table } from "react-bootstrap";
import Axios from "axios";
import axios from "axios";



const AdminExpenditure = () => {
  const [catlist, setCatlist] = useState([]);
  const [receiptNo, setReceiptNo] = useState("");
  const [amount, setAmount] = useState("");
  const [expDate, setExpDate] = useState("");
  const [detail, setDetail] = useState("");
  const [title, setTitle] = useState("");
  const [receiverName, setReceiverName]=useState("")
  const [status, setStatus] = useState("");
  const [catId, setCatId] = useState("");
  const [showtable, setShowtable] = useState(true);
  const [showform, setShowform] = useState(false);
  const [explist, setExplist] = useState([]);
  const [id, setId] = useState(0);
  const [totalExpenditure, setTotalExpenditure]=useState(0);
  var total=0;


  // for get all category list
  useEffect(() => {
    Axios.get("http://18.118.60.4:9393/getAllCategories")
      .then((resp) => {
        setCatlist(resp.data);
        // console.log(resp.data);
        //console.log(catlist);
      })
  }, [])

  // get all expenditure list
  useEffect(() => {
    Axios.get("http://18.118.60.4:9393/getAllExpenditures")
      .then((resp) => {
        setExplist(resp.data);
        //   console.log(resp.data);
        //  console.log(explist);
      })
  }, [])


  const handleselectchange = (e) => {
    setCatId(e.target.value);
  }

  const handleSubmit = (e) => {
    //  alert("form submit")
    axios.post("http://18.118.60.4:9393/saveAndUpdateExpenditure", {
      expdReceiptNo: receiptNo,
      expdAmount: amount,
      receiverName:receiverName,
      expdDate: expDate,
      expdDetail: detail,
      isActive: status,
      expdTitle: title,
      expenditureCatEntity: { catId: catId },
      expdId: id
    })
      .then((resp) => {

         console.log(receiptNo, amount, expDate, detail,receiverName, status, catId, id);
        if (resp.data=="success") {
          alert("your Expenditure detail added sucessful");
        }
        else if (resp.data=="fail") {
          alert("something was wrong")
        }
        else{
          alert("your Expenditure detail updated")
        }

      })
    //e.preventDefault(); 

  }

const handleSelectedCat=(e)=>{
  
 //const url=`http://18.118.60.4:9393/getExpenditureByCatId/${e.target.value}`
 Axios.post("http://18.118.60.4:9393/getExpenditureByCatId",{catId:e.target.value})
//  alert(e.target.value)
      .then((resp) => {
        // console.log(`change cat id${resp.data}`)
        // console.log()
        setExplist(resp.data);
         
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
                        <Form.Label> ADD Expenditure Detail </Form.Label>


                        <Form.Control
                          type="input"
                          placeholder="Enter Receipt No."
                          value={receiptNo}
                          onChange={(e) => { setReceiptNo(e.target.value) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Amount "
                          value={amount}
                          onChange={(e) => { setAmount(e.target.value) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Date in 2020-08-10 or YYYY-MM-DD format"
                          value={expDate}
                          onChange={(e) => { setExpDate(e.target.value) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Expenditure Detail "
                          value={detail}
                          onChange={(e) => { setDetail(e.target.value) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Receiver Name "
                          value={receiverName}
                          onChange={(e) => { setReceiverName(e.target.value) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Title of Expenditure "
                          value={title}
                          onChange={(e) => { setTitle(e.target.value) }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" >
                        <Form.Control
                          type="input"
                          placeholder="Enter Status Y or N "
                          value={status}
                          onChange={(e) => { setStatus(e.target.value) }}
                        />


                        <Form.Select name="Select ID"
                          value={catlist.cat_id}
                          onChange={handleselectchange}>
                          <option>Select ID</option>
                          {
                            catlist.map((items, key) => {
                              return <option key={key} value={items.catId}>{items.catName}</option>;
                            })}
                        </Form.Select>

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
          else if (showtable) {
            return (
              <div>   <AdminMenuBar />
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', margin: 20 }}>
                  <div>Total Expenditure{ total}</div>
                  <div><Button onClick={() => setShowform(true)} style={{ margin: 10 }}> Add Expenditure detail</Button></div>
                  <div><Form.Select name="Select ID"
                    value={catlist.cat_id}
                    onChange={handleSelectedCat}>
                    <option>Select Category</option>
                    {
                      catlist.map((items, key) => {
                        return <option key={key} value={items.catId}>{items.catName}</option>;
                      })}
                  </Form.Select></div>

                </div>



                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

                  <Table style={{ borderStyle: "groove", }}>
                    <thead >
                      <tr>
                        <th>  Sr.No</th>
                        <th> Receipt No  </th>
                        <th> Expd. Amount  </th>
                        <th> Receiver Name  </th>
                        <th> Expd. Date  </th>
                        <th> Expd. Detail  </th>
                        <th> Expd. Title  </th>
                        <th> Status  </th>
                        <th> Category Name  </th>
                        <th> Action  </th>

                      </tr>
                    </thead>

                    <tbody>
                      {
                        
                        explist.map((data, index) => {
                    
                         
                          {
                            total+=total+data.expdAmount;
                            
                            //setTotalExpenditure({data.expdAmount,...totalExpenditure});
                            //const total=(data.reduce((total,currentItem) =>  total = total + currentItem.expdAmount , 0 ))
                              // setTotalExpenditure(total);
                              }
                          return <tr key={index}>
                           {/* {setTotalExpenditure(total)} */}
                            <td>  {index}  </td>
                            <td>  {data.expdReceiptNo}  </td>
                            <td>  {data.expdAmount}  </td>
                            <td>  {data.receiverName}  </td>
                            <td>  {data.expdDate}  </td>
                            <td>  {data.expdDetail}  </td>
                            
                            <td>  {data.expdTitle}  </td>
                            <td>  {data.isActive}  </td>
                            <td>  {data.expenditureCatEntity.catName}  </td>
                            <td>
                              <Button
                                onClick={() => {

                                  setReceiptNo(data.expdReceiptNo);
                                  setAmount(data.expdAmount);
                                  setReceiverName(data.receiverName);
                                  setExpDate(data.expdDate);
                                  setDetail(data.expdDetail);
                                  setTitle(data.expdTitle);
                                  setStatus(data.isActive);
                                  setCatId(data.expenditureCatEntity.catId);
                                  setShowform(true);
                                  setShowtable(false);
                                  setId(data.expdId);
                                }}> Edit</Button>
                            </td>
                          </tr>
                          
                        })}

                       
                    </tbody>
                    {/* {setTotalExpenditure({total})} */}
                      Total Expendirure:-<h4> {total}</h4> 
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
export default AdminExpenditure;