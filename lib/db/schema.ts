export interface User {
  id: string;
  email: string;
  password?: string;
  type: 'guest' | 'regular';
  createdAt: Date;
  updatedAt?: Date;
  role?: string;
}

export interface Chat {
  id: string;
  createdAt: Date;
  userId: string;
  title: string;
  visibility: 'private' | 'public';
}

export interface DBMessage {
  id: string;
  chatId: string;
  role: 'user' | 'assistant' | 'system' | 'data';
  parts: any[];
  content?: string;
  createdAt: Date;
  updatedAt?: Date;
  attachments?: any[];
}

export interface Suggestion {
  id: string;
  documentId: string;
  documentCreatedAt: Date;
  originalText: string;
  suggestedText: string;
  description: string;
  isApplied: boolean;
  createdAt: Date;
  userId: string;
}

export interface Document {
  id: string;
  createdAt: Date;
  title: string;
  content: string;
  kind: 'text' | 'code' | 'image' | 'sheet';
  userId: string;
}

export interface Vote {
  chatId: string;
  messageId: string;
  isUpvoted: boolean;
}
