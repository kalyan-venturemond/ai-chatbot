import "server-only";

import type { ArtifactKind } from "@/components/artifact";
import type { VisibilityType } from "@/components/visibility-selector";
import type {
  Chat,
  DBMessage,
  Suggestion,
  User,
} from "./schema";

// Mock Data
const MOCK_USER_ID = "00000000-0000-0000-0000-000000000000";

export async function getUser(email: string): Promise<User[]> {
  return [
    {
      id: MOCK_USER_ID,
      email: email,
      password: "mock-hashed-password",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    } as unknown as User,
  ];
}

export async function createUser(email: string, password: string) {
  return [
    {
      id: MOCK_USER_ID,
      email: email,
      password: "mock-hashed-password",
      createdAt: new Date(),
    },
  ];
}

export async function createGuestUser() {
  return [
    {
      id: "guest-user-id",
      email: `guest-${Date.now()}@example.com`,
      createdAt: new Date(),
    },
  ];
}

export async function saveChat({
  id,
  userId,
  title,
  visibility,
}: {
  id: string;
  userId: string;
  title: string;
  visibility: VisibilityType;
}) {
  return [];
}

export async function deleteChatById({ id }: { id: string }) {
  return [];
}

export async function deleteAllChatsByUserId({ userId }: { userId: string }) {
  return { deletedCount: 0 };
}

export async function getChatsByUserId({
  id,
  limit,
  startingAfter,
  endingBefore,
}: {
  id: string;
  limit: number;
  startingAfter: string | null;
  endingBefore: string | null;
}) {
  return {
    chats: [],
    hasMore: false,
  };
}

export async function getChatById({ id }: { id: string }) {
  return null;
}

export async function saveMessages({ messages }: { messages: DBMessage[] }) {
  return [];
}

export async function updateMessage({
  id,
  parts,
}: {
  id: string;
  parts: DBMessage["parts"];
}) {
  return [];
}

export async function getMessagesByChatId({ id }: { id: string }) {
  return [];
}

export async function voteMessage({
  chatId,
  messageId,
  type,
}: {
  chatId: string;
  messageId: string;
  type: "up" | "down";
}) {
  return [];
}

export async function getVotesByChatId({ id }: { id: string }) {
  return [];
}

export async function saveDocument({
  id,
  title,
  kind,
  content,
  userId,
}: {
  id: string;
  title: string;
  kind: ArtifactKind;
  content: string;
  userId: string;
}) {
  return [];
}

export async function getDocumentsById({ id }: { id: string }) {
  return [];
}

export async function getDocumentById({ id }: { id: string }) {
  return {
    id,
    createdAt: new Date(),
    title: "Mock Document",
    content: "",
    kind: "text" as ArtifactKind,
    userId: MOCK_USER_ID,
  };
}

export async function deleteDocumentsByIdAfterTimestamp({
  id,
  timestamp,
}: {
  id: string;
  timestamp: Date;
}) {
  return [];
}

export async function saveSuggestions({
  suggestions,
}: {
  suggestions: Suggestion[];
}) {
  return [];
}

export async function getSuggestionsByDocumentId({
  documentId,
}: {
  documentId: string;
}) {
  return [];
}

export async function getMessageById({ id }: { id: string }) {
  return [
    {
      id,
      chatId: "mock-chat-id",
      role: "user",
      content: "",
      createdAt: new Date(),
    },
  ];
}

export async function deleteMessagesByChatIdAfterTimestamp({
  chatId,
  timestamp,
}: {
  chatId: string;
  timestamp: Date;
}) {
  return [];
}

export async function updateChatVisibilityById({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: "private" | "public";
}) {
  return [];
}

export async function updateChatTitleById({
  chatId,
  title,
}: {
  chatId: string;
  title: string;
}) {
  return [];
}

export async function getMessageCountByUserId({
  id,
  differenceInHours,
}: {
  id: string;
  differenceInHours: number;
}) {
  return 0;
}

export async function createStreamId({
  streamId,
  chatId,
}: {
  streamId: string;
  chatId: string;
}) {
  return [];
}

export async function getStreamIdsByChatId({ chatId }: { chatId: string }) {
  return [];
}
