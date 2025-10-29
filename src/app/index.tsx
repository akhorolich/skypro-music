import Navigation from '@/widgets/navigation';
import Centerblock from '@/widgets/centerblock';
import Sidebar from '@/widgets/right-sidebar';
import TrackBar from '@/widgets/trackbar';

export default function App() {
  return (
    <div className={'wrapper'}>
      <div className={'container'}>
        <div className={'main'}>
          <Navigation />
          <Centerblock />
          <Sidebar />
        </div>
        <TrackBar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
