import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({
    widgets: [
      {
        i: 'clock',
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        type: 'clock',
        settings: {
          title: 'Paris',
          timezone: 'Europe/Paris',
        },
      },
      {
        i: 'clock2',
        x: 2,
        y: 0,
        w: 2,
        h: 2,
        type: 'clock',
        settings: {
          title: 'Chinese',
          timezone: 'Asia/Shanghai',
        },
      },
      {
        i: 'weather',
        x: 0,
        y: 2,
        w: 2,
        h: 2,
        type: 'weather',
        settings: {
          title: 'Paris',
          location: 'Paris',
          units: 'metric',
        },
      },
    ],
  });
};
