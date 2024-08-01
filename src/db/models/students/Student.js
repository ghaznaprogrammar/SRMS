import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    stdId: {
        type:String,
        required:true,
        unique:true
    },
    stdPassword:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const StudentModel = mongoose.model("Student", studentSchema);
export default StudentModel;
