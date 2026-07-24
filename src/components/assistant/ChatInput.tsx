import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "@/store/store";
import { sendAssistantMessage } from "@/api/assistant";
import { setComplaint } from "@/store/complaintSlice";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const complaint = useSelector(
    (state: RootState) => state.complaint.complaint
  )

  const dispatch = useDispatch();

  async function handleSend() {
    if (!message.trim()) return;

    const updatedComplaint = await sendAssistantMessage({
      complaint,
      message,
    });

    dispatch(setComplaint(updatedComplaint));

    setMessage("");
  }
  return (
    <div className="space-y-4">
      <Textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe the complaint or ask the AI to update fields..."
        className="min-h-28 resize-none"
      />

      <Button className="w-full" onClick={handleSend} disabled={!message.trim()}>
        Send Message
      </Button>
    </div>
  );
}
