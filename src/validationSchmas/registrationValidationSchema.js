import { z } from 'zod';

// Define the schema for login
export const registrationSchema = z.object({

  user_name: z
    .string()
    .min(1, { message: "Required username" }),

  email: z
  .email({ message: "Invalid email address." })
  .min(1, { message: "Required email" }),
    // .email({ message: "Invalid email address." }),
    
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 character" }),
  
  profile_pic_url: z
    .string(),
});

