import { Pagination } from "./pagination";

export interface IncidentCreate {
    title: string;
    info: string;
}

export interface Incident {
    uuid: string;
    title: string;
    info: string;
    createdAt: Date;
    assignedTo: any;
    comments?: Array<any>;
}

export interface IncidentList {
    pagination: Pagination;
    data: Array<Incident | null>
}