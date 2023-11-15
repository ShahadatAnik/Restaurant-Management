import * as yup from "yup";
import {
	EMAIL,
	EMAIL_REQUIRED,
	FORTUNE_ZIP_EMAIL_PATTERN,
	NUMBER,
	NUMBER_DOUBLE,
	NUMBER_DOUBLE_REQUIRED,
	NUMBER_REQUIRED,
	ORDER_NUMBER,
	PASSWORD,
	PHONE_NUMBER,
	PHONE_NUMBER_REQUIRED,
	STRING,
	STRING_REQUIRED,
} from "./utils";

// Category
const CATEGORY_SCHEMA = {
	name: STRING_REQUIRED,
};

const CATEGORY_NULL = {
	id: null,
	name: "",
	short_name: "",
};

// Buyer
const BUYER_SCHEMA = {
	name: STRING_REQUIRED,
};

const BUYER_NULL = {
	id: null,
	name: "",
	short_name: "",
};

// Marketing
const MARKETING_SCHEMA = {
	name: STRING_REQUIRED,
};

const MARKETING_NULL = {
	id: null,
	name: "",
	short_name: "",
};

// Material
const STOCK_SCHEMA = {
	name: STRING_REQUIRED,
	description: STRING.nullable(),
};

const STOCK_NULL = {
	id: null,
	name: "",
	quantity: "",
	description: "",
};

// Purchase

// vendor page
const VENDOR_SCHEMA = {
	name: STRING_REQUIRED,
	contact_name: STRING_REQUIRED,
	contact_number: PHONE_NUMBER_REQUIRED,
	email: EMAIL_REQUIRED,
	office_address: STRING_REQUIRED,
};

const VENDOR_NULL = {
	id: null,
	name: "",
	contact_number: "",
	email: "",
	office_address: "",
};
// purchase page
const PURCHASE_SCHEMA = {
	vendor_id: NUMBER_REQUIRED,
	material_id: NUMBER_REQUIRED,
	quantity: NUMBER_DOUBLE_REQUIRED,
	price: NUMBER_DOUBLE_REQUIRED,
	isLocal: NUMBER_REQUIRED.default(0),
};

const PURCHASE_NULL = {
	id: null,
	vendor_id: null,
	material_id: null,
	quantity: "",
	price: "",
	isLocal: "",
	unit: null,
};

// Received
const RECEIVED_SCHEMA = {
	received_quantity: NUMBER_DOUBLE_REQUIRED,
};

const RECEIVED_NULL = {
	id: null,
	vendor_id: null,
	material_id: null,
	received_quantity: "",
	price: "",
	isLocal: "",
};

// Order

// Product Order
const ORDER_SCHEMA = {
	order_number: ORDER_NUMBER,
	quantity: NUMBER_DOUBLE_REQUIRED,
	marketing_id: NUMBER_REQUIRED,
	buyer_id: NUMBER_REQUIRED,
	consumption: yup.array().of(
		yup.object().shape({
			material_id: NUMBER_REQUIRED,
			assigned_quantity: NUMBER_DOUBLE_REQUIRED,
			material_unit: STRING,
		})
	),
};

const ORDER_NULL = {
	id: null,
	order_number: "",
	quantity: "",
	marketing_id: "",
	buyer_id: "",
	order_uuid: null,
	material_id: null,
	consumption: [
		{
			material_id: null,
			assigned_quantity: null,
			material_unit: null,
		},
	],
};

// Issue
// Wastage
const WASTAGE_SCHEMA = {
	order_uuid: STRING_REQUIRED,
	material_id: NUMBER_REQUIRED,
	assigned_quantity: NUMBER_DOUBLE_REQUIRED,
	remarks: STRING.nullable(),
};

const WASTAGE_NULL = {
	id: null,
	order_uuid: "",
	material_id: "",
	quantity: "",
	remarks: "",
};
// ISSUE Order page
const ORDER_ISSUE_SCHEMA = {
	quantity: NUMBER_DOUBLE_REQUIRED,
	isWastage: NUMBER_REQUIRED,
};

const ORDER_ISSUE_NULL = {
	id: null,
	order_uuid: null,
	material_id: null,
	quantity: "",
	isWastage: null,
};

// Maintenance
const MAINTENANCE_SCHEMA = {
	material_id: NUMBER_REQUIRED,
	quantity: NUMBER_DOUBLE_REQUIRED,
	description: STRING_REQUIRED,
};

const MAINTENANCE_NULL = {
	id: null,
	material_id: null,
	quantity: "",
	description: "",
};

// Spare Parts
const SPARE_PARTS_SCHEMA = {
	material_id: NUMBER_REQUIRED,
	quantity: NUMBER_DOUBLE_REQUIRED,
	description: STRING_REQUIRED,
};

const SPARE_PARTS_NULL = {
	id: null,
	material_id: null,
	quantity: "",
	description: "",
};

// Material Entry

// Material
const MATERIAL_ENTRY_SCHEMA = {
	price: NUMBER_DOUBLE_REQUIRED,
	quantity: NUMBER_DOUBLE_REQUIRED,
	purchase_type: STRING_REQUIRED,
};

const MATERIAL_ENTRY_NULL = {
	id: null,
	price: "",
	quantity: "",
	purchase_type: "",
	material_id: null,
};

// Consumption to Issue
const CONSUMPTION_TO_ISSUE_SCHEMA = {
	quantity: NUMBER_DOUBLE_REQUIRED,
};

const CONSUMPTION_TO_ISSUE_NULL = {
	id: null,
	order_uuid: null,
	order_number: null,
	material_id: null,
	material_name: null,
	material_unit: null,
	quantity: "",
};

// Waste to Issue
const WASTE_TO_ISSUE_SCHEMA = {
	quantity: NUMBER_DOUBLE_REQUIRED,
};

const WASTE_TO_ISSUE_NULL = {
	id: null,
	order_uuid: null,
	material_id: null,
	quantity: "",
};

// Login
const LOGIN_SCHEMA = {
	email: FORTUNE_ZIP_EMAIL_PATTERN,
	pass: PASSWORD,
};

const LOGIN_NULL = {
	email: "",
	pass: "",
};

// User
const USER_SCHEMA = {
	name: STRING_REQUIRED,
	email: FORTUNE_ZIP_EMAIL_PATTERN,
	department: STRING_REQUIRED,
	pass: PASSWORD,
	repeatPass: yup
		.string()
		.min(4, "Password length should be at least 4 characters")
		.max(12, "Password cannot exceed more than 12 characters")
		.oneOf([yup.ref("pass")], "Passwords do not match"),
};

const USER_NULL = {
	id: null,
	name: "",
	email: "",
	department: "",
	pass: "",
	repeatPass: "",
};

// Export
export {
	BUYER_NULL,
	BUYER_SCHEMA,
	CATEGORY_NULL,
	CATEGORY_SCHEMA,
	CONSUMPTION_TO_ISSUE_NULL,
	CONSUMPTION_TO_ISSUE_SCHEMA,
	LOGIN_NULL,
	LOGIN_SCHEMA,
	MAINTENANCE_NULL,
	MAINTENANCE_SCHEMA,
	MARKETING_NULL,
	MARKETING_SCHEMA,
	MATERIAL_ENTRY_NULL,
	MATERIAL_ENTRY_SCHEMA,
	ORDER_ISSUE_NULL,
	ORDER_ISSUE_SCHEMA,
	ORDER_NULL,
	ORDER_SCHEMA,
	PURCHASE_NULL,
	PURCHASE_SCHEMA,
	RECEIVED_NULL,
	RECEIVED_SCHEMA,
	SPARE_PARTS_NULL,
	SPARE_PARTS_SCHEMA,
	STOCK_NULL,
	STOCK_SCHEMA,
	USER_NULL,
	USER_SCHEMA,
	VENDOR_NULL,
	VENDOR_SCHEMA,
	WASTAGE_NULL,
	WASTAGE_SCHEMA,
	WASTE_TO_ISSUE_NULL,
	WASTE_TO_ISSUE_SCHEMA,
};
