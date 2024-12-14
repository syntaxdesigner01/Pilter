import { model, models, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';



const userSchema = new Schema({
    id: { type: String, unique: true, required: true },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validator.isEmail, 'Invalid email format']
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (v: string) {
                return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(v);
            },
            message: () => 'Password must be at least 6 characters long and contain at least one letter and one number.'
        }
    },
},
{
    timestamps: true
}
);

// Hash the password before saving
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = models.User || model('User', userSchema);

export default User;
