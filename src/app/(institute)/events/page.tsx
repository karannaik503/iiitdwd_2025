// @ts-nocheck
import { get } from '@/sanity/lib/client';
import { queryEvents } from '@/sanity/lib/queries';
import { QueryEventsResult } from '@/sanity/types';
import EventCard from './events-card';

export default async function Page() {
  const data = await get<QueryEventsResult>(queryEvents);
  return (
    <section className="px-6 md:px-20">
      <div className="w-full grid grid-cols-1 mdLgrid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {data?.map((item, index) => (
          <EventCard event={item} key={index} />
        ))}
      </div>
    </section>
  );
}
