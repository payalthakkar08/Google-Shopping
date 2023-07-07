/* eslint-disable react/jsx-key */
import { PageResult } from '@/typings.t';
import Link from 'next/link';

type ResultsListProps = {
  results: PageResult[];
  term: string;
};

function ResultsList({ results, term }: ResultsListProps) {
  console.log({ results });
  return (
    <div className='flex md:px-5'>
      {/* Sidebar */}
      <div className='w-36 md:w-64'>
        {/* Each page */}
        {results?.map((pageResult) => (
          <div className='space-y-2' key={pageResult.job_id}>
            {pageResult.content.results.filters?.map((filter, i) => (
              <div key={i} className='p-5 border rounded-r-lg md:rounded-lg'>
                <p className='font-bold'>{filter.name}</p>
                <div className='flex flex-col'>
                  {filter.values.map((value) => (
                    <Link
                      href={`https://www.google.com${value.url}`}
                      prefetch={false}>
                      {value.value}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main Body */}
      <div className='flex-1 px-5 space-y-5 md:p-10 md:pt-0'>
        {results.map((pageResults, i) => (
          <div
            key={pageResults.job_id}
            className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {i !== 0 && <hr className='w-full col-span-full' />}
            <div className='py-5 md:col-span-2 xl:col-span-4 lg:col-span-3'>
              <div className='flex items-center space-x-2 divide-x-2'>
                <h1>Shop On Google</h1>
                <h2 className='pl-2 text-xl font-semibold'>
                  Search Results for Page {i + 1}
                </h2>
              </div>
              <h3 className='font-extralight'>
                Showing results for {decodeURIComponent(term)}
              </h3>
            </div>
            {pageResults?.content?.results?.organic?.map((item, i) => (
              <Link
                key={item.pos}
                prefetch={false}
                className={`border rounded 2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out ${
                  item.url.includes('url?url=') && 'italic'
                }`}
                href={
                  item.url.includes('url?url=')
                    ? // send to external url
                      item.url.split('url?url=')?.[1]
                    : // send to internal url
                      item.url.split('?')?.[0] // /shopping?1290842398092384092
                }>
                <div className='flex-1 p-5 border-b'>
                  <p className='text-[#1B66D2]'>{item.title}</p>
                </div>
                <div className='px-5 py-2 not-italic'>
                  <p className='font-light'>
                    {item.price_str} {item.currency}
                  </p>
                  <p className='text-[#1B66D2] font-semibold'>
                    {item.merchant.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsList;
