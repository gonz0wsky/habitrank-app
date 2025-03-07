import { msg } from "@lingui/core/macro";
import { z } from "zod";

const nicknameSchema = z.string().min(6, {
  message: msg`Nickname must be at least 6 characters`.message,
});

export { nicknameSchema };
