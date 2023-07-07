import ResultsList from '@/components/ResultsList';
import { getFetchUrl } from '@/lib/getFetchUrl';
import { PageResult, SearchParms } from '@/typings.t';
import { redirect } from 'next/navigation';

export const revalidate = 300;

type SearchPageProps = {
  searchParams: SearchParms;
  params: {
    term: string;
  };
};

async function SearchPage({ searchParams, params: { term } }: SearchPageProps) {
  if (!term) {
    redirect('/');
  }

  // Fetch from API...
  const response = await fetch(getFetchUrl('api/search'), {
    method: 'POST',
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });

  const results = (await response.json()) as PageResult[];

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  );
}

export default SearchPage;
