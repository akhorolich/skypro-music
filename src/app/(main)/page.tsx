'use client';
import { Navigation } from '@/widgets/navigation';
import { Centerblock } from '@/widgets/centerblock';
import { Sidebar } from '@/widgets/right-sidebar';
import { TrackBar } from '@/widgets/trackbar';
import styles from './styles.module.css';

export default function MainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main}>
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
