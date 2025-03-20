import { Hono } from 'hono';
import { getFiles } from '../queries/files';

const filesRoutes = new Hono();

filesRoutes.get('/api/files', async (c) => {
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = parseInt(c.req.query('limit') || '10', 10);

  const filesData = await getFiles(page, limit);
  return c.json(filesData);
});

export default filesRoutes;
