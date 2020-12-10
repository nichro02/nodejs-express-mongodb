module.exports = mongoose => {
    //declare schema for mongoose
    const Tutorial = mongoose.model(
        'tutorial',
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            {timestamps: true}//autogenerate timestamp
        )
    )
    return Tutorial
}