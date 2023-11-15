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

// Stock
const STOCK_SCHEMA = {
	name: STRING_REQUIRED,
	description: STRING,
};

const STOCK_NULL = {
	id: -1,
	name: "",
	quantity: "",
	description: "",
};

// Purchase
const PURCHASE_SCHEMA = {
	itemId: NUMBER_REQUIRED,
	quantity: NUMBER_REQUIRED,
	price: NUMBER_DOUBLE_REQUIRED,
};

const PURCHASE_NULL = {
	id: -1,
	itemId: "",
	itemName: "",
	quantity: "",
	price: "",
};

// Export
export { PURCHASE_NULL, PURCHASE_SCHEMA, STOCK_NULL, STOCK_SCHEMA };
