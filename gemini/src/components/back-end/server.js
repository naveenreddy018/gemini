import express from "express";
import cors from "cors";
import bodyParser from "body-parser";



import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Import and configure your API key
const apiKey = process.env.VITE_GEMINI_API_KEY; // Load from .env
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the generative AI model
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// The `run` function to handle user prompts
async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json()); 

app.post("/prompt",async(req,res)=>{
   
    try{

      const  {prompt} = req.body

      if(!prompt || typeof prompt !== "string"){
      return res.status(404).json({error : "Prompt is required and must be a string."})
      }

      const response = await run(prompt)
      res.status(200).json({response})
    }
    catch(error){
        console.log(error,"error occured")
        return res.status(404).json({error : "An error occurred while processing the request."})
    }

})

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
