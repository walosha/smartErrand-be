/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

@ValidatorConstraint({ name: "nigeriaPhoneNumber", async: false })
export class NigeriaPhoneNumberValidator
  implements ValidatorConstraintInterface
{
  validate(phoneNumber: string, args: ValidationArguments) {
    const phoneNumberRegex = /^(\+?234|0)?(7\d{8}|[89]\d{9})$/;
    return phoneNumberRegex.test(phoneNumber);
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a valid Nigerian phone number`;
  }
}
