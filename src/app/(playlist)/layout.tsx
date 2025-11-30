import { Navigation } from '@/widgets/navigation';
import { Sidebar } from '@/widgets/right-sidebar';
import { TrackBar } from '@/widgets/trackbar';
import styles from './styles.module.css';
import { Suspense } from 'react';

export default function PlaylistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Sidebar />
        </div>
        <TrackBar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
