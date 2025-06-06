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
}

const EmailValidation = {
    required: fildIncomplete,
    pattern: {
        value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com)$/,
        message: '*Invalid email'
    }
}

export const VALIDATIONS = {
    fullName: NameValidation,
    phoneNumber: PhoneNumberValidation,
    email: EmailValidation,
    dateOfBirth: BirthDateValidation
}