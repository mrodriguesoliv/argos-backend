import { Hono } from 'hono';
import { getAssistants } from '../queries/assistants';

const assistantsRoutes = new Hono();

assistantsRoutes.get('/api/assistants', async (c) => {
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = parseInt(c.req.query('limit') || '10', 10);

  const assistantsData = await getAssistants(page, limit);
  return c.json(assistantsData);
});

export default assistantsRoutes;
