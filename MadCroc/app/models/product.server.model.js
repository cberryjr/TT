'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
	productName: {
		type: String,
		default: '',
		required: 'Please fill in a Product Name',
		trim: true
	},
    shortDescription: {
        type: String,
        default: '',
        required: 'Please fill in a Short Description',
        trim: true
    },
    category: {
        type: String,
        default: '',
        required: 'Please fill in a Category',
        trim: true
    },
    manufacturerName: {
        type: String,
        default: '',
        required: 'Please fill in a Manufacturer name',
        trim: true
    },
    partNumber: {
        type: String,
        default: '',
        required: 'Please fill in a Part Number',
        trim: true
    },
    listPrice: {
        type: String,
        default: '',
        required: 'Please fill in a List Price',
        trim: true
    },
    weight: {
        type: Number,
        default: '',
        required: 'Please fill in a Weight',
        trim: true
    },
    length: {
        type: Number,
        default: '',
        required: 'Please fill in a Length',
        trim: true
    },
    width: {
        type: Number,
        default: '',
        required: 'Please fill in a Width',
        trim: true
    },
    height: {
        type: Number,
        default: '',
        required: 'Please fill in a Height',
        trim: true
    },
    featured: {
        type: Boolean,
        default: 'false',
        required: 'Please assign if the product is Featured',
        trim: true
    },
    discontinued: {
        type: Boolean,
        default: 'false',
        required: 'Please assign if the product is Discontinued',
        trim: true
    },
    inventoried: {
        type: Boolean,
        default: 'true',
        required: 'Please assign if the product is Inventoried',
        trim: true
    },
    created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Product', ProductSchema);