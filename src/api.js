import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

function getClient() {
  if (!supabase) {
    throw new Error(
      "Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
    );
  }
  return supabase;
}

export async function getCollection(table) {
  const { data, error } = await getClient().from(table).select("*");
  if (error) throw error;
  return data;
}

export async function createItem(table, item) {
  const { data, error } = await getClient()
    .from(table)
    .insert(item)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updateItem(table, id, item) {
  const { data, error } = await getClient()
    .from(table)
    .upsert({ ...item, id }, { onConflict: "id" })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteItem(table, id) {
  const { error } = await getClient().from(table).delete().eq("id", id);
  if (error) throw error;
}
