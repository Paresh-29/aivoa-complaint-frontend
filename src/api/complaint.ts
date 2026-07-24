import { api } from '../lib/axios'

export async function uploadComplaint(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post(
    "/complaints/upload",
    formData
  );

  return response.data;
}
