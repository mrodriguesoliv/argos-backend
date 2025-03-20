import { db } from '@/queries/db';
import { organizations } from '@/schemas/organizations';
import { sql } from 'drizzle-orm';


export const getOrganizations = async (page: number, limit: number) => {
  try {
    const offset = (page - 1) * limit;
    const result = await db.select().from(organizations).offset(offset).limit(limit);

    const totalOrganizations = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(organizations);

    return {
      files: result,
      totalPages: Math.ceil(totalOrganizations[0].count / limit),
      totalItems: totalOrganizations[0].count,
      currentPage: page
    };
  } catch (error) {
    console.error('Erro ao acessar o banco de dados', error);
    throw new Error('Erro ao buscar os arquivos');
  }
};

export const updateOrganization = async (externalId: string, updateData: any) => {
  try {
    const { created_at, updated_at, ...dataToUpdate } = updateData;

    const result = await db
      .update(organizations)
      .set(dataToUpdate)
      .where(sql`${organizations.external_id} = ${externalId}`)
      .returning();

    if (result.length === 0) {
      throw new Error('Organização não encontrada');
    }

    console.log("Organização atualizada com sucesso:", result[0]);
    return result[0];
  } catch (error) {
    console.error('Erro ao atualizar a organização:', error);
    throw new Error('Erro ao atualizar a organização');
  }
};

