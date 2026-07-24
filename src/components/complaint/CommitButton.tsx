import { commitComplaint } from "@/api/ledger";
import { Button } from "@/components/ui/button";
import { clearComplaint, setLoading } from "@/store/complaintSlice";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export default function CommitButton() {
  const dispatch = useDispatch();

  const complaint = useSelector((state: RootState) => state.complaint.complaint);
  const loading = useSelector((state: RootState) => state.complaint.loading)

  const handleCommit = async () => {
    if (!complaint) return;

    dispatch(setLoading(true))
    try {
      await commitComplaint(complaint);

      toast.success("Complaint committed successfully");

      dispatch(clearComplaint());
    } catch {
      toast.error("Failed to commit complaint");
    } finally {
      dispatch(setLoading(true))
    }

  }
  return (
    <Button disabled={loading} className="w-full h-12" onClick={handleCommit}>
      {loading ? "Committing..." : "Commit to QMS Ledger"}
    </Button>
  );
}
