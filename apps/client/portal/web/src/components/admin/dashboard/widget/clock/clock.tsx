'use client';

import { useEffect, useMemo, useState } from 'react';

export function Clock({
  title,
  timezone,
}: {
  title: string;
  timezone: string;
}) {
  const [time, setTime] = useState(new Date());

  const hours = useMemo(() => {
    return time.getHours().toString().padStart(2, '0');
  }, [time]);
  const minutes = useMemo(() => {
    return time.getMinutes().toString().padStart(2, '0');
  }, [time]);
  const seconds = useMemo(() => {
    return time.getSeconds().toString().padStart(2, '0');
  }, [time]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="flex items-center">
        <div className="text-2xl">{hours}</div>
        <div className="px-2">:</div>
        <div className="text-2xl">{minutes}</div>
        <div className="px-2">:</div>
        <div className="text-2xl">{seconds}</div>
      </div>
      <div>{title}</div>
    </>
  );
}

export default Clock;
