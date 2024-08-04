
import dotenv from  "dotenv"
dotenv.config()


import express from "express"
import cors from "cors"


import AdminAuthRouter from "./src/routes/admin/Auth.js";
import StudentAuthRouter from "./src/routes/student/Auth.js";
import connectDB from "./src/db/Connection.js";




const app = express();
app.use(cors({
    origin:`${process.env.FRONTEND_DOMAIN}`
}))
app.use(express.json({limit:"20mb"}))



// database connection 
connectDB(`${process.env.MONGODB_URI}`)




app.use("/appgh/", (req,res,next)=>{
    console.log("api triggered")
    next();
})

// register routes from admin
app.use("/appgh/auth/admin", AdminAuthRouter);

// auth router for student 
app.use("/appgh/auth/student/", StudentAuthRouter)


// to get pages  fo admin portal
app.get("/appportal/admin/", AdminAuthRouter)





app.get("/", (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hi this is srms 🎉"
    })
})




export default app



