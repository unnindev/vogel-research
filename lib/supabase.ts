import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true, // Essencial para reset de senha
  },
});

export type UserRole = "admin" | "user";

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: UserRole;
  plan?: string;
  status: "active" | "inactive" | "trial";
  created_at: string;
  updated_at: string;
}
