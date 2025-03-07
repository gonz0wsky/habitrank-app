import { msg } from "@lingui/core/macro";
import { z } from "zod";

const emailSchema = z.string().email({ message: msg`Not valid email`.message });

export { emailSchema };
