import { api } from "@/lib/axios";
import type { Complaint } from "@/types/complaint";

interface AssistantRequest {
  complaint: Complaint | null;
  message: string;
}

export async function sendAssistantMessage(
  request: AssistantRequest
) {
  const response = await api.post(
    "/complaints/assistant",
    request
  );

  return response.data;
}
