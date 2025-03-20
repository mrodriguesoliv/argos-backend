import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const getUsers = async () => {
  try {
    const { data, error } = await supabase.auth.admin.listUsers();

    if (error) {
      console.error('Erro ao acessar os usuários:', error);
      throw new Error('Erro ao buscar os usuários');
    }

    return data.users;
  } catch (error) {
    console.error('Erro ao acessar o banco de dados', error);
    throw new Error('Erro ao buscar os arquivos');
  }
};
