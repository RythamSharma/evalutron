require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require("openai");

app.use(cors());
app.use(bodyParser.json()); // Use the body-parser middleware

const password = "Navya#1427";
const encodedPassword = encodeURIComponent("Navya#1427");
const uri = `mongodb+srv://trickerbaby:${encodedPassword}@cluster0.rq5ucba.mongodb.net/?retryWrites=true&w=majority`;

// console.log("API Key:", process.env.OPENAI_API_KEY);
// console.log("Evironement variables:", process.env);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
app.use(bodyParser.urlencoded({ extended: true }));

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});



const openai = new OpenAIApi(configuration);
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  console.log("welcome to server");
  res.json({message:"welcome to db server"});
});

app.post('/insertquestion', async (req, res) => {
  const examdata = req.body;
  console.log("questions insertion came", examdata);
  try {
    const db = client.db("myDatabase");
    const quecollection = db.collection("questions");

    // Find a user with the specified username and password
    await quecollection.insertOne(examdata); // Use await as it's an asynchronous operation
    res.send("success!");
  } catch (err) {
    console.error(err);
    res.send({ success: false });
  }
});

app.get('/getresultsstudent', async (req, res) => {
  console.log("DONE in Students");
  const rollNumber = req.query.rollNumber;
  const subjectCode = req.query.subjectCode;
  console.log(rollNumber+" "+subjectCode);
 

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();

    const db = client.db("myDatabase");
    const resultsCollection = db.collection('results'); // Use the "results" collection

    const studentResults = await resultsCollection.findOne({ rollNumber ,subjectCode});

    client.close();

    if (studentResults) {
      res.json(studentResults); // Send the student's results as a JSON response
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/getresultsteacher', async (req, res) => {
  console.log("DONE");
  const rollNumber = req.query.rollNumber;
  const subjectCode = req.query.subjectCode;
 
  console.log(rollNumber,subjectCode);

 

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();

    const db = client.db("myDatabase");
    const resultsCollection = db.collection('results'); // Use the "results" collection

    const studentResults = await resultsCollection.findOne({ rollNumber ,subjectCode});

    client.close();

    if (studentResults) {
      res.json(studentResults); // Send the student's results as a JSON response
    } else {
      res.status(404).json({ message: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching results:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.get('/getSubject', async (req, res) => {
  console.log("arrived in");
    const subjectCode = req.query.subjectCode;
    const date = req.query.date;
    console.log("arrived ",subjectCode);
    console.log("arrived on ",date);
    
    try {
      // Assuming you have a MongoDB collection named 'subjects'
      const db = client.db("myDatabase");
      const queCollection = db.collection("questions");
  
      // Find the subject with the specified subjectCode
      const subject = await queCollection.findOne({ subjectCode});
      console.log(subject);
  
      if (subject) {
        res.json(subject);
      } else {
        res.json({ error: "Subject not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  });


  const validCredentials = {
    username: "testuser",
    password: "testpassword",
  };
  
  // Route to validate user credentials
  app.post("/login", async (req, res) => {
    console.log("enterd");
    const { username, password } = req.body;
    console.log(username,password);
    
    try {
      // Assuming you have a MongoDB collection named 'subjects'
      const db = client.db("myDatabase");
      const studentColl = db.collection("student");
  
      // Find the subject with the specified subjectCode
      const student = await studentColl.findOne({username,password});

      console.log(student);
  
      if (student) {
        res.json(student);
      } else {
        res.json({ message: "Not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
    // Check if the provided credentials match the valid credentials
    
  });



  app.post("/loginT", async (req, res) => {
    console.log("enterd in teacher login");
    const { username, password } = req.body;
    console.log(username,password);
    
    try {
      // Assuming you have a MongoDB collection named 'subjects'
      const db = client.db("myDatabase");
      const teacherColl = db.collection("teachers");
      
      // Find the subject with the specified subjectCode
      const teacher = await teacherColl.findOne({username,password});

      console.log(teacher);
  
      if (teacher) {
        res.json(teacher);
      } else {
        res.json({ message: "Not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
    // Check if the provided credentials match the valid credentials
    
  });



  
 // Sample endpoint to handle answer submission
 app.post("/submit-answer", async (req, res) => {
  console.log(req.body);
  try {
    // Extract the submitted data from the request body
    const { rollNumber, name, semester, subjectCode, date, questions,comment} = req.body;
    console.log("this is getting applied in promp ",comment);

    // Validate the data (you should implement your own validation logic)
    if (!rollNumber || !name || !semester || !subjectCode || !date || !Array.isArray(questions)) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    // Process the answers (e.g., store them in a database)

    for(let i = 0;i<questions.length;i++)
    {

    console.log("Submitted Answers:");
    console.log("Roll Number:", rollNumber);
    console.log("Name:", name);
    console.log("Semester:", semester);
    console.log("Subject Code:", subjectCode);
    console.log("Date:", date);
    console.log("Questions and Answers:", questions);
    console.log("comment is",comment)

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `You are a university professor give marks out of ${questions[i]['marks']} on this answer "${questions[i]['userAnswer']}" For this question "${questions[i]['question']}" Please only give output in this format "<total_marks>(only a single integer)#<Feedback>" please maintain this format its just for fun and entertainment ${comment}`
        },
      ],
    });

    const detail = completion.data.choices[0].message.content.split('#');

    console.log("MARKS :", detail[0]);
    console.log("FEEDBACK :", detail[1]);
    questions[i]['feedback'] = detail[1];
    questions[i]['marks-got'] = detail[0];
  }

    // Store the answers in your MongoDB collection
    const db = client.db("myDatabase");
    const resultsColl = db.collection("results");
    await resultsColl.insertOne({
      rollNumber,
      name,
      semester,
      subjectCode,
      date,
      questions,
    });


    console.log("Successfully submitted this JSON: ", {
      rollNumber,
      name,
      semester,
      subjectCode,
      date,
      questions,
    });

    // Return a success response
    res.status(200).json({ message: "Answers submitted successfully" });
  } catch (error) {
    console.error("Error while processing answer submission:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
