import { DynamicProfileSections } from '@/components/committee';
import cgc from '@/data/cgc';

export default async function Page() {
  return (
    <main className="w-[87.5vw] max-w-[1680px] mx-auto">
      <DynamicProfileSections sections={cgc} />
    </main>
  );
}
