import mongoose from "mongoose";
import * as bcrypt from 'bcrypt';
import { promises } from "dns";

type User = {
    username: string
    email: string
    password: string
    matchPassword: (inputedPassword: string) => Promise<boolean>
};

const Schema = mongoose.Schema;

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }

}, { timestamps: true });


// Hash User password before saving to the database
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare inputed password with hashed password for login
userSchema.methods.matchPassword = async function (inputedPassword: string) {
    return await bcrypt.compare(inputedPassword, this.password);
}


const User = mongoose.model<User>('User', userSchema);

export default User;
