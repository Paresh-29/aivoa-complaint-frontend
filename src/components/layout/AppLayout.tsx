import ComplaintPanel from "../complaint/ComplaintPanel";
import AssistantPanel from "../assistant/AssistantPanel";

export default function AppLayout() {
  return (
    <main className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <ComplaintPanel />
        </div>

        <div>
          <AssistantPanel />
        </div>
      </div>
    </main>
  )
}
