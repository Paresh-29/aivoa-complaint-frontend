import { uploadComplaint } from "@/api/complaint";
import { Button } from "@/components/ui/button";
import { setComplaint, setLoading } from "@/store/complaintSlice";
import type { RootState } from "@/store/store";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function UploadArea() {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: RootState) => state.complaint.loading
  );

  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    dispatch(setLoading(true));

    try {
      const response = await uploadComplaint(file);

      dispatch(setComplaint(response));
    } catch (error) {
      console.error(error);

      toast.error("Failed to upload complaint.");
    } finally {
      dispatch(setLoading(false));
      toast.success("Complaint uploaded successfully.");
    }
  }
  return (
    <div className="space-y-4 rounded-lg border border-dashed p-6 text-center">
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <h3 className="font-semibold">
        Upload Complaint PDF
      </h3>

      <p className="text-sm text-muted-foreground">
        Drag & drop your PDF here or browse from your computer.
      </p>

      <Button variant="outline" onClick={() => inputRef.current?.click()}>
        {loading ? "Extracting..." : "Choose PDF"}
      </Button>
    </div>
  );
}
