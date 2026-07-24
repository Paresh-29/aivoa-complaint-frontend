import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "@/store/store";
import { sendAssistantMessage } from "@/api/assistant";
import { setComplaint } from "@/store/complaintSlice";
import { toast } from "sonner";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const complaint = useSelector(
    (state: RootState) => state.complaint.complaint
  )

  const dispatch = useDispatch();

  async function handleSend() {
    if (!message.trim()) return;

    setLoading(true);

    try {

      const updatedComplaint = await sendAssistantMessage({
        complaint,
        message,
      });

      dispatch(setComplaint(updatedComplaint));
      setMessage("");

      toast.success("Complaint updated successfully.");
    } catch {
      toast.error("Failed to update complaint.");
    } finally {
      setLoading(false);
    }

  }
  return (
    <div className="space-y-4">
      <Textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe the complaint or ask the AI to update fields..."
        className="min-h-28 resize-none"
      />

      <Button className="w-full" onClick={handleSend} disabled={!message.trim() || loading}>
        {loading ? "Updating..." : "Send Message"}
      </Button>
    </div>
  );
}
