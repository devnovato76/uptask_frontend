import ProfileForm from "@/components/profile/ProfileForm.tsx";
import { useAuth } from "@/hooks/useAuth.ts";


const ProfileView = () => {
    const {data, isLoading} = useAuth();

    if(isLoading) return 'Cargando...';

    if(data) return <ProfileForm data={data}/>;
}

export default ProfileView;