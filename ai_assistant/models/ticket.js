import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
    title:String,
    description:String,
    status:{
        type:String,
        default:"TODO"
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:null
    },
    priority:String,
    deadline:Date,
    helpfulSkill:String,
    relatedSkills:[String]
},{timestamps:true})

export const Ticket = mongoose.model("Ticket",ticketSchema)
