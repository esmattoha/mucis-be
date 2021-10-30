// Import Dependencies
import joi from "@hapi/joi";

const authSchema = joi.object({
    name : joi.string(),
    email : joi.string().email().lowercase().required(),
    password : joi.string().min(6).alphanum()
});

export default authSchema ;