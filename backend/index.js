const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.xlvzxps.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db("toDoList");
    const list = database.collection("list");

    // post a data
    app.post("/list", async (req, res) => {
      const item = req.body.item;
      const data = { item };
      const result = await list.insertOne(data);

      res.json(result);
    });

    // Get all data
    app.get("/list", async (req, res) => {
      const cursor = await list.find().toArray();
      res.send(cursor);
    });

    // Get single data
    app.get("/list/:id", async (req, res) => {
      const id = req.params.id;
      const options = { _id: new ObjectId(id) };
      const cursor = await list.findOne(options);

      res.send(cursor);
    });

    // Update data
    app.put("/list/:id", async (req, res) => {
      const item = req.body.item;
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateList = {
        $set: {
          name: item,
        },
      };

      const result = await list.updateOne(filter, updateList, options);
      res.send(result);
    });

    // Dlete single data
    app.delete("/list/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await list.deleteOne(query);

      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`to do list app listening on ${port}`);
});
