import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jzvpsulckkwmccvlsnrx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6dnBzdWxja2t3bWNjdmxzbnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMjY0ODYsImV4cCI6MjA2NDcwMjQ4Nn0.MzHcavwWDT2Lg6PqtP7vxYLbXiRiPfPBbQa889i5Swg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
