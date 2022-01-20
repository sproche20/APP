export interface UserI{
nombre:string;
apellido:string;
correo:string;
uid:string;
password:string;
perfil:'visitante'|'admin'
}

export interface Musica{
    titulo: string,
    interprete:string,
    album:string,
    musica: string,
    /*nomportada:string,*/
    portada:string,
    id:string
 
}