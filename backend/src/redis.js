import redis from 'ioredis';
import { config } from './config.js';

// pub
export const redis = new redis(config.redisUrl);

// sub

export const subscriber = new redis(config.redisUrl);

const BATCH_EMAILS_PREFIX = "batch:emails:";



export function setBatchEmails(batchId,emails){
    const key = BATCH_EMAILS_PREFIX + batchId
    return redis.set(key,JSON.stringify(emails),"EX",config.batchEmailsTtlSeconds)
}