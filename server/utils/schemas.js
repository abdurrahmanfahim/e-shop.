import Joi from 'joi';

export const registerSchema = Joi.object({
  name:     Joi.string().min(2).max(50).required(),
  email:    Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email:    Joi.string().email().required(),
  password: Joi.string().required(),
});

export const contactSchema = Joi.object({
  name:    Joi.string().min(2).max(100).required(),
  phone:   Joi.string().allow('', null),
  email:   Joi.string().email().required(),
  message: Joi.string().min(10).required(),
});

export const orderSchema = Joi.object({
  billing: Joi.object({
    firstName: Joi.string().required(),
    lastName:  Joi.string().required(),
    phone:     Joi.string().required(),
    email:     Joi.string().email().required(),
    address:   Joi.string().required(),
    country:   Joi.string().required(),
    state:     Joi.string().required(),
    city:      Joi.string().required(),
    zip:       Joi.string().allow('', null),
    notes:     Joi.string().allow('', null),
  }).unknown(true).required(),
  shipping: Joi.object({
    recipientName:        Joi.string().required(),
    contactNumber:        Joi.string().required(),
    address:              Joi.string().required(),
    country:              Joi.string().required(),
    state:                Joi.string().required(),
    city:                 Joi.string().required(),
    zip:                  Joi.string().allow('', null),
    method:               Joi.string().valid('standard', 'express', 'overnight').default('standard'),
    deliveryInstructions: Joi.string().allow('', null),
  }).unknown(true).required(),
  payment: Joi.object({
    method: Joi.string().valid('card', 'cod').default('card'),
  }).unknown(true).required(),
  coupon: Joi.string().allow('', null),
});
