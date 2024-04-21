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

// //get specific requests
export const allRequests = async (req, res) => {
  try {
    const filter = req.query
    const allRequests = await requestModel.find(filter)
    console.log(filter)
    res.json(allRequests)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "Failed to get request" });
  }
}

//search for requests
// export const findRequests = async (req, res) => {
//   try {
//     const data = req.params.fullName;
//     console.log('data', data)
//     const findRequests = await requestModel
//       .find({fullName:data})
//       .populate("userId", ["_id", "firstName", "lastName", "email"]);
//     console.log('request',findRequests);
//     res.json(findRequests);
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ message: "Failed to get request" });
//   }
// };

//get a specific request

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
