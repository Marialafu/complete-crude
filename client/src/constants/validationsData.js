const fildIncomplete = '*Can´t be blank'

const NameValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^[a-zA-Z]+$/,
        message: '*Non-existent name'
    }
}

const BirthDateValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
        message: '*Invalid date'
    }
}

const PhoneNumberValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^\d+$/,
        message: '*Invalid phone number'
    },
    minLength: {
        value: 10,
        message: '*Invalid phone number'
    }
}

const EmailValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: '*Invalid email'
    }
}

export const VALIDATIONS = {
    name: NameValidation,
    phone: PhoneNumberValidation,
    email: EmailValidation
}