import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://qttaxagmfhwgxnzqebgp.supabase.co';

const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0dGF4YWdtZmh3Z3huenFlYmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQwMjA0MDYsImV4cCI6MjEwOTU5NjQwNn0.COnUBuKHFvSqwgZ0YUbc7jesVrseEHcJAy4aiR-Ye1U';

export const supabase = createClient(supabaseUrl, supabaseKey);
