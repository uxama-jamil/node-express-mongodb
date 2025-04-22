import model from "../model/bootcamp.js";

export const getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await model.find();
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await model.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({
        success: false,
        data: "No Data found!",
      });
    }
    return res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

export const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await model.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

export const updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

export const deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
