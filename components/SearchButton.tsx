'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function SearchButton() {
  const { pending } = useFormStatus();
  return (
    <button className='px-4 py-4 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'>
      {pending ? (
        'Searching...'
      ) : (
        <MagnifyingGlassIcon className='w-5 h-5' />
      )}
    </button>
  );
}

export default SearchButton;
