import { Hono } from 'hono';
import { getUsers } from '../queries/users';

      
const usersRoutes = new Hono();

usersRoutes.get('/api/users', async (c) => {
  const users = await getUsers();
  return c.json(users);
});

export default usersRoutes;
