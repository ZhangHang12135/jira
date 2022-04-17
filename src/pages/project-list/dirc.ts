import { Dispatch } from "react";

export interface User {
    id: number;
    name: string;
}
export interface Params {
    name: string;
    personId: number;
}
export interface SearchProps {
    params: Params;
    users: User[];
    setPrams: Dispatch<Params>;
}
export interface Project {
    id: number;
    name: string;
    personId: number;
    personName: string;
}
export interface ProjectListProps {
    list: Project[];
    users: User[];
}
