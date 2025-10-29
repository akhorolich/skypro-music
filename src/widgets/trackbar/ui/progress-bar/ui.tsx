import { useEffect, useState } from 'react';
import { withAudio } from '@/features/audio';

import styles from './styles.module.css';

type progressBarProp = {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  max: number;
  value: number;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
};

export function ProgressBar({
  max,
  value,
  step,
  onChange,
  readOnly,
}: progressBarProp) {
  return (
    <input
      className={styles.styledProgressInput} // Применение стилей к ползунку
      type="range" // Тип элемента - ползунок
      min="0" // Минимальное значение ползунка
      max={max} // Максимальное значение, зависит от длительности аудио
      value={value} // Текущее значение ползунка
      step={step} // Шаг изменения значения
      onChange={onChange} // Обработчик события изменения
      readOnly={readOnly}
    />
  );
}
