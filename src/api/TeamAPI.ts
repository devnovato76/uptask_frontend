import {isAxiosError} from 'axios';
import api from '@/lib/axios.ts';
import {teamMembersSchema, type Project, type TeamMember, type TeamMemberForm} from '@/types/index.ts';



export async function findUserByEmail({projectId, formatData}: {projectId: Project['_id'], formatData: TeamMemberForm}) {
    try {
        const url = `/projects/${projectId}/team/find`;
        const {data} = await api.post(url, formatData);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function addUserToProject({projectId, id}: {projectId: Project['_id'], id: TeamMember['_id']}) {
    try {
        const url = `/projects/${projectId}/team`;
        const { data } = await api.post<string>(url, { id });
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function getProjectTeam(projectId: Project['_id']) {
    try {
        const url = `/projects/${projectId}/team`;
        const {data} = await api(url);
        const response = teamMembersSchema.safeParse(data);
        if (response.success) {
            return response.data;
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function removeUserFromProject({
  projectId,
  userId,
}: {
  projectId: Project["_id"];
  userId: TeamMember["_id"];
}) {
  try {
    const url = `/projects/${projectId}/team/${userId}`;
    const { data } = await api.delete<string>(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
