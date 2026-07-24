import {
  Card,
  CardContent,
} from "@/components/ui/card";

import AssistantHeader from "./AssistantHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import UploadArea from "./UploadArea";

export default function AssistantPanel() {
  return (
    <Card className="h-[90vh]">
      <CardContent className="flex h-full flex-col space-y-6 p-8">
        <AssistantHeader />

        <UploadArea />

        <ChatMessages />

        <ChatInput />
      </CardContent>
    </Card>
  );
}
