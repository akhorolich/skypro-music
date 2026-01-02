'use client';
import { Suspense, useEffect } from 'react';
import { getClientSession } from '@/entities/auth/lib/client';
import { useAppDispatch } from '@/shared/lib';
import { authorizationActions } from '@/entities/auth';

import { Navigation } from '@/widgets/navigation';
import { Sidebar } from '@/widgets/right-sidebar';
import { TrackBar } from '@/widgets/trackbar';
import styles from './styles.module.css';

export default function PlaylistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = async () => {
      try {
        const session = await getClientSession();
        if (!session?.access) return;
        dispatch(authorizationActions.setIsAuth(true));
        dispatch(
          authorizationActions.setAuthToken({
            refresh: session.refresh,
            access: session.access,
          }),
        );
        dispatch(authorizationActions.setUsername(session.email));
      } catch (error) {
        console.log('PlaylistLayout auth error:', error);
      }
    };
    auth();
  }, []);
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
