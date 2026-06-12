import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Landing from './views/Landing';
import FounderView from './views/FounderView';
import AdvisorView from './views/AdvisorView';
import MentorsPage from './views/MentorsPage';
import LaunchpadPage from './views/LaunchpadPage';
import FinderPage from './views/FinderPage';
import { useRoute } from './lib/router';
import { brand, ui } from './data/content';
import type { StageId } from './data/content';

export default function App() {
  const { view, params } = useRoute();

  // Scroll to top and update the document title on every route change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const base = `${brand.programName} · ${brand.short} · uOttawa Engineering`;
    const section = view === 'home' ? '' : (ui.titles as Record<string, string>)[view] ?? '';
    document.title = section ? `${section} · ${base}` : base;
  }, [view]);

  const stage = (params.get('stage') as StageId | null) ?? undefined;
  const exploreTrack = params.get('track') ?? undefined;

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Nav view={view} />

      <main className="flex-1">
        {view === 'home' && <Landing />}
        {view === 'founder' && (
          <FounderView
            key={`${stage ?? 'default'}-${exploreTrack ?? ''}`}
            initialStage={stage}
            initialExploreTrack={exploreTrack}
          />
        )}
        {view === 'advisor' && <AdvisorView />}
        {view === 'mentors' && <MentorsPage />}
        {view === 'launchpad' && <LaunchpadPage />}
        {view === 'finder' && <FinderPage />}
      </main>

      <Footer />
    </div>
  );
}
