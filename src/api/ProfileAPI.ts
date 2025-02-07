import { isAxiosError } from "axios";
import type { UpdateCurrentUserPasswordForm, UserProfileForm } from "@/types/index.ts";
import api from "@/lib/axios.ts";

export async function updateProfile(formatData: UserProfileForm) {
    try {
        const {data} = await api.put<string>('/auth/profile', formatData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
};

export async function changePassword(formatData: UpdateCurrentUserPasswordForm) {
    try {
        const {data} = await api.post<string>('/auth/update-password', formatData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
};