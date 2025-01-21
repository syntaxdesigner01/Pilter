import { model, models, Schema } from 'mongoose';
import validator from 'validator';



const googleSchema = new Schema({
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validator.isEmail, 'Invalid email format']
    },
    image: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);


const GoogleUser = models.GoogleUser || model('GoogleUser', googleSchema);

export default GoogleUser;
