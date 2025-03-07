import { msg } from "@lingui/core/macro";
import { z } from "zod";

const passwordSchema = z.string().min(6, {
  message: msg`Password must be at least 6 characters`.message,
});

export { passwordSchema };
