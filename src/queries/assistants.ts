import { db } from '@/queries/db';
import { assistants } from '@/schemas/assistants';
import { sql } from 'drizzle-orm';

export const getAssistants = async (page: number, limit: number) => {
  try {
    const offset = (page - 1) * limit;

    const result = await db.select().from(assistants).offset(offset).limit(limit);

    const totalAssistants = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(assistants);

    return {
      files: result,
      totalPages: Math.ceil(totalAssistants[0].count / limit),
      totalItems: totalAssistants[0].count,
      currentPage: page
    };
  } catch (error) {
    console.error('Erro ao acessar o banco de dados', error);
    throw new Error('Erro ao buscar os assistentes');
  }
};
