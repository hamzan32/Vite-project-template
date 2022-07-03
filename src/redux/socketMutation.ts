import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { io } from 'socket.io-client';
enum ChatEvent {
  SendMessage = 'send_message',
  RequestAllMessages = 'request_all_messages',
  SendAllMessages = 'send_all_messages',
  ReceiveMessage = 'receive_message',
}
export const api = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APIURL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    userJoined: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        photoId,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      ) {
        try {
          await cacheDataLoaded;

          const socket = io(import.meta.env.VITE_APIURL as string, {
            transports: ['websocket', 'polling'],
            withCredentials: true,
          });

          socket.on('connect', () => {
            socket.emit(ChatEvent.RequestAllMessages);
          });

          socket.on(ChatEvent.ReceiveMessage, (message: any) => {
            updateCachedData((draft: any[]) => {
              draft.push(message);
            });
          });

          await cacheEntryRemoved;
          socket.off('connect');
          socket.off(ChatEvent.SendAllMessages);
          socket.off(ChatEvent.ReceiveMessage);
        } catch {
          // if cacheEntryRemoved resolved before cacheDataLoaded,
          // cacheDataLoaded throws
        }
      },
    }),
    getMessages: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        photoId,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      ) {
        try {
          await cacheDataLoaded;

          const socket = io(import.meta.env.VITE_APIURL as string, {
            transports: ['websocket', 'polling'],
            withCredentials: true,
          });

          socket.on('connect', () => {
            socket.emit(ChatEvent.RequestAllMessages);
          });

          socket.on(ChatEvent.ReceiveMessage, (message: any) => {
            updateCachedData((draft: any[]) => {
              draft.push(message);
            });
          });

          await cacheEntryRemoved;
          socket.off('connect');
          socket.off(ChatEvent.SendAllMessages);
          socket.off(ChatEvent.ReceiveMessage);
        } catch {
          // if cacheEntryRemoved resolved before cacheDataLoaded,
          // cacheDataLoaded throws
        }
      },
    }),
  }),
});
