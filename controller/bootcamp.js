import model from "../model/bootcamp.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import { asyncHandler } from "../middleware/async.js";

export const getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await model.find();
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
});

export const getBootcamp = asyncHandler(async (req, res, next) => {
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
});

export const createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await model.create(req.body);
  res.status(201).json({ success: true, data: bootcamp });
});

export const updateBootcamp = asyncHandler(async (req, res, next) => {
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
});

export const deleteBootcamp = asyncHandler(async (req, res, next) => {
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
});
