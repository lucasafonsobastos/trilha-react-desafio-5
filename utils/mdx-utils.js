import { api } from '../services/api';

import supabase from '../services/supabase';

export const getPosts = async () => {

    const { data, error } = await supabase
      .from('artigos')
      .select('*');
        
    if (error) {
        console.error('Erro ao buscar dados:', error);
    } else {
        return data;
    }
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    //const {data} = await api.get(`/post?id=eq.${id}`)

    const { data, error } = await supabase
      .from('artigos')
      .select()
      .eq('id', id);
        
    if (error) {
        console.error('Erro ao buscar dados:', error);
    } else {
        console.log(data);
        return data;
    }
}

/*

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    console.log(data)

    if(data){
        return data;
    }

    return []
}

*/