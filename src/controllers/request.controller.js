import { requestModel } from "../models/request.js";

//add requests
export const addRequest = async (req, res) => {
  try {
    const data = req.body;
    const addRequest = await requestModel.create({
      ...data,
      userId: req.user._id,
    });
    console.log(data);
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Failed to get request" });
  }
};

//get user's requests 
export const findUserRequests = async (req, res) => {
  try {
    const {email} = req.body;
    const findRequests = await requestModel
      .find({email})
      .populate("userId", ["_id", "firstName", "lastName", "email"]);
    console.log(data);
    res.json(findRequests);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Failed to get request" });
  }
};



//get all requests  
export const findRequests = async (req, res) => {
    try {
      const data = req.body;
      const findRequests = await requestModel
        .find(data)
        .populate("userId", ["_id", "firstName", "lastName", "email"]);
      console.log(data);
      res.json(findRequests);
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: "Failed to get request" });
    }
  };
  
export const getSpecificRequest = async (req, res) => {
  try {
    const getSpecificRequest = await requestModel.findById(req.params.id);
    console.log(getSpecificRequest);
    res.json(getSpecificRequest);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Failed to get request" });
  }
};
