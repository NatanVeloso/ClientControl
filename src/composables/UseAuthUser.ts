import { User } from "@supabase/supabase-js";
import useSupabase from "src/boot/supabase";
import { ref } from "vue";

const user = ref<User | null>(null);

export default function useAuthUser() {
    const { supabase } = useSupabase();

    const isLoggedIn = () => {
        return !!user.value;
    }

    const uploadImage = async (file: File) => {
        const filePath = `public/${Date.now()}_${file.name}`;
        const { data, error } = await supabase.storage.from(import.meta.env.SUPABASE_UPLOAD_AVATAR).upload(filePath, file);
        if (error) {
            console.error('Error uploading image: ', error);
            throw error;
        }
        return `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${import.meta.env.SUPABASE_UPLOAD_AVATAR}/${filePath}`;
    };

    return {
        user,
        isLoggedIn,
        uploadImage
    }
}