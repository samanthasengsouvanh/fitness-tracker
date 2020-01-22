// CONNECT TO MONGO SERVER
mongoose.connect(process.env.MONGODB_URI || "mongodb:/workoutapp", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});