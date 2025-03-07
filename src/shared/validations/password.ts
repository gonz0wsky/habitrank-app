import { msg } from "@lingui/core/macro";
import { z } from "zod";

const passwordSchema = z.string().min(6, {
  message: msg`Password must be at least 6 characters`.message,
});

const isPassword = (value: string) => passwordSchema.safeParse(value).success;

const password = (value: string) => {
  if (!isPassword(value)) {
    throw new Error("Invalid password");
  }
  return value;
};

export { passwordSchema, isPassword, password };
