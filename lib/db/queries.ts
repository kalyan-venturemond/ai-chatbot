import "server-only";

import type { ArtifactKind } from "@/components/artifact";
import type { VisibilityType } from "@/components/visibility-selector";
import type {
  Chat,
  DBMessage,
  Suggestion,
  User,
  Document,
  Vote,
} from "./schema";

// Mock Data
const MOCK_USER_ID = "00000000-0000-0000-0000-000000000000";

export async function getUser(email: string): Promise<User[]> {
  return [
    {
      id: MOCK_USER_ID,
      email: email,
      password: "mock-hashed-password",
      type: "regular",
      createdAt: new Date(),
    },
  ];
}

export async function createUser(email: string, password: string): Promise<User[]> {
  return [
    {
      id: MOCK_USER_ID,
      email: email,
      password: "mock-hashed-password",
      type: "regular",
      createdAt: new Date(),
    },
  ];
}

export async function createGuestUser(): Promise<User[]> {
  return [
    {
      id: "guest-user-id",
      email: `guest-${Date.now()}@example.com`,
      type: "guest",
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
}): Promise<Chat[]> {
  return [];
}

export async function deleteChatById({ id }: { id: string }): Promise<Chat[]> {
  return [];
}

export async function deleteAllChatsByUserId({ userId }: { userId: string }): Promise<{ deletedCount: number }> {
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
}): Promise<{ chats: Chat[]; hasMore: boolean }> {
  return {
    chats: [],
    hasMore: false,
  };
}

export async function getChatById({ id }: { id: string }): Promise<Chat | null> {
  return {
    id,
    createdAt: new Date(),
    userId: MOCK_USER_ID,
    title: "Mock Chat",
    visibility: "private",
  };
}

export async function saveMessages({ messages }: { messages: DBMessage[] }): Promise<DBMessage[]> {
  return [];
}

export async function updateMessage({
  id,
  parts,
}: {
  id: string;
  parts: DBMessage["parts"];
}): Promise<DBMessage[]> {
  return [];
}

export async function getMessagesByChatId({ id }: { id: string }): Promise<DBMessage[]> {
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
}): Promise<Vote[]> {
  return [];
}

export async function getVotesByChatId({ id }: { id: string }): Promise<Vote[]> {
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
}): Promise<Document[]> {
  return [];
}

export async function getDocumentsById({ id }: { id: string }): Promise<Document[]> {
  return [];
}

export async function getDocumentById({ id }: { id: string }): Promise<Document | null> {
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
}): Promise<Document[]> {
  return [];
}

export async function saveSuggestions({
  suggestions,
}: {
  suggestions: Suggestion[];
}): Promise<Suggestion[]> {
  return [];
}

export async function getSuggestionsByDocumentId({
  documentId,
}: {
  documentId: string;
}): Promise<Suggestion[]> {
  return [];
}

export async function getMessageById({ id }: { id: string }): Promise<DBMessage[]> {
  return [
    {
      id,
      chatId: "mock-chat-id",
      role: "user",
      parts: [],
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
}): Promise<DBMessage[]> {
  return [];
}

export async function updateChatVisibilityById({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: "private" | "public";
}): Promise<Chat[]> {
  return [];
}

export async function updateChatTitleById({
  chatId,
  title,
}: {
  chatId: string;
  title: string;
}): Promise<Chat[]> {
  return [];
}

export async function getMessageCountByUserId({
  id,
  differenceInHours,
}: {
  id: string;
  differenceInHours: number;
}): Promise<number> {
  return 0;
}

export async function createStreamId({
  streamId,
  chatId,
}: {
  streamId: string;
  chatId: string;
}): Promise<any[]> {
  return [];
}

export async function getStreamIdsByChatId({ chatId }: { chatId: string }): Promise<string[]> {
  return [];
}
