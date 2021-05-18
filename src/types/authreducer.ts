
interface Idata{
    token:string,
    user:{
        _id:string,
        firstName:string,
        lastName:string,
        email:string,
        fullName:string,
        profilePicture:string,
    }
}

 export interface authstate{
    loading:boolean,
    error:string | null,
    data:Idata | null,
    message:string | null
}

export enum authactions{
    authenticate_request='authenticate_request',
    authenticate_success='authenticate_success',
    authenticate_failure='authenticate_failure',
    clear_message='clear_message'
}
interface request{
    type:authactions.authenticate_request
}
interface clearmessage{
    type:authactions.clear_message
}
interface success{
    type:authactions.authenticate_success,
    payload:Idata,
    message:string
}
interface failure{
    type:authactions.authenticate_failure,
    payload:string,
    message:string
}
export type authaction= request | success | failure | clearmessage