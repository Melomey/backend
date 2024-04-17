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

// //get all user's requests  
// export const userRequests = async (req, res) => {
//   try {
//     const data = req.body;
//     const userRequests = await requestModel
//       .find(data)
//       .populate("userId", ["_id", "firstName", "lastName", "email"]);
//     console.log(data);
//     res.json(userRequests);
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ message: "Failed to get your request" });
//   }
// };


//get all requests
export const findRequests = async (req, res) => {
    try {
        const data = req.body
        const findRequests = await requestModel.find(data)
        console.log(data)
        res.json(findRequests)
        res.status(201).json({message: 'Form submitted successfully'});
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Failed to get request" });
    }
}

//get a specific request
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
