import axios from "axios";
import type { Note} from "@/types/note";
import type { FormValues } from "../components/NoteForm/NoteForm";

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}
axios.defaults.baseURL = "https://notehub-public.goit.study/api";

axios.defaults.headers.common["Authorization"] =
  `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;
    
export const fetchNotes = async (
  page: number = 1,
  perPage: number = 12,
  searchQuery: string = ""
): Promise<NotesResponse> => {
  const res = await axios.get<NotesResponse>("/notes", {
    params: {
      page,
      perPage,
      search: searchQuery,
    },
  });

  return res.data;
};

export const fetchNoteById = async (postId: string) => {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await axios.get<Note>(`/notes/${postId}`);
  return res.data;
} 

export const createNote = async (note: FormValues): Promise<Note> => {
  const res = await axios.post<Note>("/notes", note);
  return res.data;
};

export const deleteNote = async (postId: string): Promise<Note> => {
  const res = await axios.delete<Note>(`/notes/${postId}`);
  return res.data;
};