export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
}

export type PortfolioResponse = Project[];

export interface CreateProjectRequest {
    title: string;
    description: string;
    technologies: string[];
}