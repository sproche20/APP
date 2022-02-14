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
    nomportada:string,
    portada:string,
    id:string,
    likes?:number;
    forEach?(arg0: (musica: any) => Promise<void>);
}
export interface LikeI{
    uid:string;
    user:UserI;
    fecha:any;
    like:boolean;
}