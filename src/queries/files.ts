import { db } from '@/queries/db';
import { files } from '@/schemas/files';
import { sql } from 'drizzle-orm';

export const getFiles = async (page: number, limit: number) => {
  try {
    const offset = (page - 1) * limit;

    const result = await db.select().from(files).offset(offset).limit(limit);

    const totalFiles = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(files);

    return {
      files: result,
      totalPages: Math.ceil(totalFiles[0].count / limit),
      totalItems: totalFiles[0].count,
      currentPage: page
    };
  } catch (error) {
    console.error('Erro ao acessar o banco de dados', error);
    throw new Error('Erro ao buscar os arquivos');
  }
};
