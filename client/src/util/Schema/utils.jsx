import * as yup from "yup";

const STRING = yup.string().trim();
const STRING_REQUIRED = STRING.required("Required");
const EMAIL = yup.string().email("must be a valid email");
const EMAIL_REQUIRED = EMAIL.required("Required");

// email pattern will be after @ is fortunezip.com
// const FORTUNE_ZIP_EMAIL_PATTERN = EMAIL_REQUIRED.matches(
// 	/^[a-zA-Z0-9._%+-]+@fortunezip.com$/,
// 	"Email must be a valid fortunezip.com email"
// );
const FORTUNE_ZIP_EMAIL_PATTERN = EMAIL_REQUIRED;

const NUMBER = yup.number().integer().typeError("Must be a number");
const NUMBER_REQUIRED = NUMBER.required("Required");

const NUMBER_DOUBLE = yup.number().typeError("Must be a number");
const NUMBER_DOUBLE_REQUIRED = NUMBER_DOUBLE.required("Required");

const PHONE_NUMBER = yup
	.string()
	.length(11, "Must be exactly 11 digits")
	.typeError("Must be a number")
	.matches(/^[0-9]+$/, "Must be a number");
const PHONE_NUMBER_REQUIRED = PHONE_NUMBER.required("Required");

const PASSWORD = yup
	.string()
	.required("Password is required")
	.min(4, "Password length should be at least 4 characters")
	.max(12, "Password cannot exceed more than 12 characters")
	.required("Required")
	.trim();

const ORDER_NUMBER = STRING.matches(
	/^[0-9]{4}-[2]{1}[3-9]{1}$/, // 2021-23
	"Order number must be in the format: 0000-YY"
).required("Required");

export {
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
};
