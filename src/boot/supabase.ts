
import { createClient } from "@supabase/supabase-js";
import useAuthUser from "src/composables/UseAuthUser";

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: true
    }
});

supabase.auth.onAuthStateChange((event, session) => {
    const { user } = useAuthUser();

    user.value = session?.user || null;
})

export default function useSupabase() {
    return { supabase };
}

        