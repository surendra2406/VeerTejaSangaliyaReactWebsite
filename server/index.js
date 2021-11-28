const express = require("express");
const dbcon = require("./dbconnection");
const router = new express.Router();
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors({
  // origin: 'http://localhost:3000'
  origin :'http://18.118.60.4:9393'
}));
app.enable('case sensitive routing');

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});



//rest api for  save or insert category in table
app.post("/saveOrUpdateExpdCategory", (req, res) => {
  const catName = req.body.data.categoryName;
  const catId = req.body.data.categoryId;
  //console.log(catId, catName);
  if (catId == 0) {
    const mysqlsave = "INSERT INTO tbl_expenditure_category (cat_name) VALUES (?)";
    dbcon.query(mysqlsave, catName, (err, result) => {
      if (!err) {
        res.json({ msg: "saved" });
      }
      else {
        res.json({ msg: "error" })
      }
    })
  }
  else {
    const sqlupdate = "UPDATE tbl_expenditure_category SET cat_name = ? where cat_id =?";
    dbcon.query(sqlupdate, [catName, catId], (err, result) => {
      if (!err) {
        res.json({ msg: "updated" });
      }
      else {
        res.json({ msg: "error0" })
      }
    })

  }

  //rest Api for save and update detail of Gair Arthik Sahyog Deatil
  app.post("/saveOrUpdateGairArthikSahyog", (req, res) => {
    console.log("save api gairArthik called")
    const contributorName = req.body.data.contributorName;
    const contributionDetail = req.body.data.contributionDetail;
    const mobile = req.body.data.mobile;
    const id = req.body.data.id;
    if (id === 0) {
      console.log(contributorName,contributionDetail,mobile,id)
    const saveGairArthik ="INSERT INTO tbl_gairarthik_sahyog (contributor_name,contribution_detail,mobile) VALUES (?,?,?)";
      dbcon.query(saveGairArthik, [contributorName,contributionDetail,mobile], (error, result) => {
        if (!error) {
          res.json({ msg: "saved" });
        }
        else {
          res.json({ msg: "error" })
          console.log(error);
        }
      })
    }
    else {
      //console.log(id)
      console.log("api update called");
    
      const gairarthikupdate = "UPDATE tbl_gairarthik_sahyog SET contributor_name =? contribution_detail =? mobile =?   where id =?";
      dbcon.query(gairarthikupdate, [contributorName,contributionDetail,mobile,id], (err, result) => {
        if (!err) {
          res.json({ msg: "update" });
          console.log("updated");
        }
        else {
          res.json({ msg: "error" })
          console.log(err);

        }
      })

    }

    
  })

  //rest api for save and update of expenditure 
  app.post("/saveOrUpdateExpenditure", (req, res) => {
    const receiptNo = req.body.data.receiptNo;
    const amount = req.body.data.amount;
    const expDate = req.body.data.expDate;
    const detail = req.body.data.detail;
    const title = req.body.data.title;
    const catId = req.body.data.catId;
    const status = req.body.data.status;
    const id = req.body.data.id

    //console.log(amount,expDate,detail,title,catId,receiptNo);


    if (id == 0) {
      //console.log("api save called")
      const saveExpenditureSql = "INSERT INTO tbl_expenditure (expd_receipt_no,expd_amount,expd_date,expd_detail,expd_title,status,cat_id ) VALUES (?,?,?,?,?,?,?)";
      dbcon.query(saveExpenditureSql, [receiptNo, amount, expDate, detail, title, status, catId], (error, result) => {
        if (!error) {
          res.json({ msg: "saved" });
          //console.log("not error block")
        }
        else {
          res.json({ msg: "error" })
          // console.log(" error block")
        }
      })
    }
    else {
      console.log("api update called")
      const expdupdate = "UPDATE tbl_expenditure SET expd_receipt_no =? expd_amount =? expd_date =? expd_detail =? expd_title =? status =? cat_id =?  where id =?";
      dbcon.query(expdupdate, [receiptNo, amount, expDate, detail, title, status, catId], (err, result) => {
        if (!err) {
          res.json({ msg: "update" });
        }
        else {
          res.json({ msg: "error" })
          //console.log(err);

        }
      })

    }
  })


  // get all gair arthik sahyog list
  app.get("/getAllGairArthikSahyog", (req, res) => {
    const getgairarthiksahyog = "SELECT * FROM tbl_gairarthik_sahyog";
    dbcon.query(getgairarthiksahyog, (err, result) => {
      if (!err) {
        res.json(result);
      }
      else {
        res.json(err);
      }

    })
  })


  //get all expenditure deatil list
  app.get("/getAllExpenditureDeatil", (req, res) => {
    const getexpenditure = " SELECT * FROM tbl_expenditure";
    dbcon.query(getexpenditure, (err, result) => {
      if (!err) {
        res.json(result);
      }
      else {
        res.json(err);
        //console.log(err);
      }
    })
  })


  // rest api for get all category list
  app.get("/getAllCat", (req, res) => {
    const mysql = " SELECT * FROM tbl_expenditure_category";
    dbcon.query(mysql, (err, result) => {
      if (!err) {
        res.json(result);
        //console.log(result)
      }
      else {
        console.log(err);
      }
    })
  })

  //only test blank api
  app.get("/get", (req, res) => {
    res.send("ok")
    console.log(err);

  })
  //rest api to update record into mysql database
  // app.put('/update', function (req, res) {

  //  const name =req.body.updateCategoryName;
  //  const id =req.body.updateCategoryID;

  //   const sqlupdate ="UPDATE tbl_expenditure_category SET cat_name = ? where cat_id =?";
  //   dbcon.query(sqlupdate,[name],(err, result)=>{
  // if(!err)
  // {
  //   res.json("succes");
  // }
  // else{
  //   res.json({msg:"error0"})
  // }
  //   })
});