import model from "../model/bootcamp.js";
import { ErrorResponse } from "../utils/errorResponse.js";

export const getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await model.find();
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    next(error);
  }
};

export const getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await model.findById(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
      );
    }
    return res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    next(error);
  }
};

export const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await model.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

export const updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await model.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({
      success: true,
      data: `Bootcamp ${req.params.id} deleted successfully!`,
    });
  } catch (error) {
    next(error);
  }
};
