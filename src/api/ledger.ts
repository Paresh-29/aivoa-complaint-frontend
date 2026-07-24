import { api } from "@/lib/axios";
import type { Complaint } from "@/types/complaint";

export async function commitComplaint(complaint: Complaint) {
  const response = await api.post("/complaints", complaint);

  return response.data;
}
