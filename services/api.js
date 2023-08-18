import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://yrzdqyqgovvsgyaxbqur.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyemRxeXFnb3Z2c2d5YXhicXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzg3MDMsImV4cCI6MjAwNzg1NDcwM30.13rgCWaZCvbETjrzJ0N2VkXbohCkkLeQgTz_UAXfChI",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyemRxeXFnb3Z2c2d5YXhicXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyNzg3MDMsImV4cCI6MjAwNzg1NDcwM30.13rgCWaZCvbETjrzJ0N2VkXbohCkkLeQgTz_UAXfChI"
    }
})