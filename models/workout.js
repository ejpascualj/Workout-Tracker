const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter a type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name"
        },
        duration: {
            type: Number,
            required: "Enter a duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;