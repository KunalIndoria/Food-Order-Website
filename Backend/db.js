const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://kunal_25:JAISHREERAM987654321@cluster0.s1jpu3m.mongodb.net/QuickBites?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");

        const db = mongoose.connection.db;

        const foodItemsCollection = db.collection("food_items");
        const foodCategoryCollection = db.collection("food_category");
        

        const foodItems = await foodItemsCollection.find({}).toArray();
        const foodCategory = await foodCategoryCollection.find({}).toArray();
        

        global.food_items = foodItems;
        // console.log(global.food_items)
        global.food_category = foodCategory;
        // console.log(global.food_category)

        console.log("Data fetched and stored globally");
    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    }
}


module.exports = mongoDB;