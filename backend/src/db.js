import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import {prismaPg} from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;


const adapter = new PrismaPg({connectionString});

export const prisma = new PrismaClient({adapter});





