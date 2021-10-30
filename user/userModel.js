// import dependencies
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const Schema = mongoose.Schema ;

const userSchema = new Schema({
    name: {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
});

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 12)
    next();
})

export default mongoose.model("User", userSchema);