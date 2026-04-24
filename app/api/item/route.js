import { createClient } from 'redis';
import { NextResponse } from 'next/server';

const redisUrl = process.env.REDIS_URL;

const redisClientPromise = createClient(
  redisUrl
    ? {
        url: redisUrl,
      }
    : undefined,
)
  .on('error', (error) => {
    console.error('Redis client error', error);
  })
  .connect();

export const POST = async () => {
  const redis = await redisClientPromise;
  const result = await redis.get('item');

  return NextResponse.json({ result }, { status: 200 });
};
