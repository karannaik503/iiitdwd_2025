import { DynamicProfileSections } from '@/components/committee';
import cgc from '@/data/cgc';

export default async function Page() {
  return (
    <main className="p-6 md:px-20">
      <DynamicProfileSections sections={cgc} />
    </main>
  );
}
