import { Hono } from 'hono';
import { getOrganizations } from '../queries/organizations';
import { organizations } from "@/schemas/organizations";
import { db } from "@/queries/db";
import { sql } from 'drizzle-orm';

const organizationsRoutes = new Hono();

organizationsRoutes.get('/api/organizations', async (c) => {
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = parseInt(c.req.query('limit') || '10', 10);

  const organizationsData = await getOrganizations(page, limit);
  return c.json(organizationsData);
});

organizationsRoutes.patch("/api/organizations/update/:external_id", async (c) => {
  try {
    const externalId = c.req.param("external_id");
    const updatedFields = await c.req.json();

    const { created_at, updated_at, dueDate, ...fieldsToUpdate } = updatedFields;

    if (Object.keys(fieldsToUpdate).length === 0) {
      return c.json({ success: false, message: "Nenhum dado enviado para atualização" }, 400);
    }

    const existingOrg = await db
      .select()
      .from(organizations)
      .where(sql`${organizations.external_id} = ${externalId}`)
      .first();

    if (!existingOrg) {
      return c.json({ success: false, message: "Organização não encontrada" }, 404);
    }

    await db.update(organizations)
      .set(fieldsToUpdate)
      .where(sql`${organizations.external_id} = ${externalId}`);

    return c.json({ success: true, message: "Organização atualizada com sucesso" });
  } catch (error) {
    console.error(error);
    return c.json({ success: false, message: "Erro ao atualizar a organização" }, 500);
  }
});

export default organizationsRoutes;

