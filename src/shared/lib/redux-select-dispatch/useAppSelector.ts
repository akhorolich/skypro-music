import { useSelector } from 'react-redux';
import { RootState } from '@/shared/redux';

export const useAppSelector = useSelector.withTypes<RootState>();
