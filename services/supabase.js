import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrzdqyqgovvsgyaxbqur.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyemRxeXFnb3Z2c2d5YXhicXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzg3MDMsImV4cCI6MjAwNzg1NDcwM30.13rgCWaZCvbETjrzJ0N2VkXbohCkkLeQgTz_UAXfChI';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase)

export default supabase;