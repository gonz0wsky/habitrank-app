import { msg } from "@lingui/core/macro";
import { z } from "zod";

const emailSchema = z.string().email({ message: msg`Not valid email`.message });

const isEmail = (value: string) => emailSchema.safeParse(value).success;

const email = (value: string) => {
  if (!isEmail(value)) {
    throw new Error("Invalid email");
  }
  return value;
};

export { emailSchema, isEmail, email };
