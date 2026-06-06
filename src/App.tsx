import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Landing from './views/Landing';
import FounderView from './views/FounderView';
import AdvisorView from './views/AdvisorView';
import MentorsPage from './views/MentorsPage';
import LaunchpadPage from './views/LaunchpadPage';
import FinderPage from './views/FinderPage';
import type { Role, StageId } from './data/content';

type View = 'home' | Role | 'mentors' | 'launchpad' | 'finder';

export default function App() {
  const [view, setView] = useState<View>('home');
  // A stage chosen from the landing pipeline strip, carried into the founder view.
  const [pickedStage, setPickedStage] = useState<StageId | undefined>(undefined);

  // Scroll to the top whenever the top-level view changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [view]);

  function navigate(next: View) {
    setPickedStage(undefined);
    setView(next);
  }

  function pickStage(stage: StageId) {
    setPickedStage(stage);
    setView('founder');
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Nav view={view} onNavigate={navigate} />

      <main className="flex-1">
        {view === 'home' && (
          <Landing onSelectRole={navigate} onPickStage={pickStage} />
        )}
        {view === 'founder' && (
          <FounderView
            key={pickedStage ?? 'default'}
            initialStage={pickedStage}
            onOpenLaunchpad={() => navigate('launchpad')}
            onOpenFinder={() => navigate('finder')}
          />
        )}
        {view === 'advisor' && <AdvisorView onSeeMentors={() => navigate('mentors')} />}
        {view === 'mentors' && <MentorsPage onBack={() => navigate('advisor')} />}
        {view === 'launchpad' && <LaunchpadPage onBack={() => navigate('founder')} />}
        {view === 'finder' && <FinderPage onBack={() => navigate('founder')} />}
      </main>

      <Footer />
    </div>
  );
}
