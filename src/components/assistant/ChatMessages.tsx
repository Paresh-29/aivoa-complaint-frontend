import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatMessages() {
  return (
    <ScrollArea className="h-[350px] rounded-lg border p-4">
      <div className="text-sm text-muted-foreground">
        No conversation yet.

        <br />
        <br />

        Upload a complaint PDF or type a message below to begin.
      </div>
    </ScrollArea>
  );
}
