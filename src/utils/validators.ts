export const INPUT_MAX_LENGTH = 255;

export const isValidInputOnUpdate = (value: string) => value.length <= INPUT_MAX_LENGTH;

export const isValidInputOnAdd = (value: string) => isValidInputOnUpdate(value) &&
    value.trim().length > 0;
