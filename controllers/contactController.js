const mongoose = require("mongoose");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /contacts
const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// @desc Get single contact
// @route GET /contacts/:id
const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

// @desc Create new contact
// @route POST /contacts
const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, address } = req.body;

    const newContact = new Contact({
      contactId: new mongoose.Types.ObjectId(),
      name,
      email,
      phone,
      address,
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = async (req, res, next) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedContact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getContacts, getContactById, createContact, updateContact, deleteContact };
