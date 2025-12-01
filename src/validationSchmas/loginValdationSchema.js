import { z } from 'zod';

// Define the schema for login
export const loginSchema = z.object({
  email: z
    .email({ message: "Invalid email address." })
    .min(1, { message: "Required email" }),
    // .email({ message: "Invalid email address." }),
    
  password: z
    .string()
    .min(1, { message: "Required password" }),
    
  // confirmPassword: z
  //   .string()
});

// Refine the schema to check that two fields match (e.g., password confirmation)
// export const registrationSchema = userSchema.refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match.",
//   path: ["confirmPassword"], // Specify which field the error message should be attached to
// });