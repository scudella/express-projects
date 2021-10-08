const Order = require('../models/Order');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

// create order
const createOrder = async (req, res) => {
  res.send('create order');
};

// get all orders
const getAllOrders = async (req, res) => {
  res.send('get all orders');
};

// get single order
const getSingleOrder = async (req, res) => {
  res.send('get single order');
};

// get current user orders
const getCurrentUserOrders = async (req, res) => {
  res.send('get current user orders');
};

// update order
const updateOrder = async (req, res) => {
  res.send('update order');
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
