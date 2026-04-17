// "use client"

// import css from "@/app/notes/NotesPage.module.css"
// import NoteList from "@/components/NoteList/NoteList";
// import { useQuery, keepPreviousData } from '@tanstack/react-query';
// import { fetchNotes } from '@/lib/api';
// import { useState } from 'react';
// import Modal from "@/components/Modal/Modal";
// import Pagination from '@/components/Pagination/Pagination';
// import NoteForm from '@/components/NoteForm/NoteForm';
// import SearchBox from '@/components/SearchBox/SearchBox';
// import { useDebouncedCallback } from "use-debounce";


// export default function App() {
//   const [page, setPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleSearch = useDebouncedCallback((value: string) => {
//     setSearchQuery(value);
//     setPage(1);
//   }, 300);

//   const { data, isLoading} = useQuery({
//     queryKey: ["notes", page, searchQuery],
//     queryFn: () => fetchNotes(page, 12, searchQuery),
//     placeholderData: keepPreviousData,
//   });

//   const notes = data?.notes ?? [];
//   const totalPages = data?.totalPages ?? 0;

//   return (
//     <div className={css.app}>
//       <header className={css.toolbar}>
//         <SearchBox text={searchQuery} onSearch={handleSearch} />

//         {totalPages > 1 && (
//           <Pagination
//             currentPage={page}
//             totalPages={totalPages}
//             onPageChange={setPage}
//           />
//         )}

//         <button onClick={openModal} className={css.button}>
//           Create note +
//         </button>
//       </header>
//       {data && notes.length > 0 && (
//         <NoteList notes={notes} />
//       )}

//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <NoteForm onClose={closeModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }