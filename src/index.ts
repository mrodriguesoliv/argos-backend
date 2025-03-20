import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getFiles } from './queries/files';
import { getUsers } from './queries/users';
import { cors } from 'hono/cors';
import { getOrganizations, updateOrganization } from './queries/organizations';

const app = new Hono()

// Middleware CORS global
app.use('api/*', cors({
  origin: '*',
  allowHeaders: ['Origin', 'Content-Type', 'Authorization'],
  allowMethods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true,
}));

app.get('/', (c) => c.text('API rodando!'));

app.get('/api/files', async (c) => {
  const files = await getFiles(); 
  return c.json(files);
});

app.get('/api/users', async (c) => {
  const signin = await getUsers();
  return c.json(signin);
});

app.get('/api/organizations', async (c) => {
  const organizations = await getOrganizations();
  return c.json(organizations);
});

app.patch('/api/organizations/update/:external_id', async (c) => {
  try {
    const externalId = c.req.param('external_id');
    
    const updatedFields = await c.req.json();

    console.log("Requisição recebida para atualizar organização com external_id:", externalId);
    console.log("Dados de atualização:", updatedFields);

    const updatedOrg = await updateOrganization(externalId, updatedFields);

    return c.json(updatedOrg);
  } catch (error) {
    console.error("Erro ao processar requisição para atualizar organização:", error);
    return c.json({ success: false, message: "Erro interno ao atualizar a organização" }, 500);
  }
});


serve({
  fetch: app.fetch,
  port: 4000,
});
