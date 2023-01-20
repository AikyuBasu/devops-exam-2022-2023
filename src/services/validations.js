// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isLongEnough = (label) => label.length >= 8;

const containsSpecialChar = (label) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(label);
};

exports.isEmpty = isEmpty;
exports.isLongEnough = isLongEnough;
exports.containsSpecialChar = containsSpecialChar;
