import { Project } from '../models/project';

export class PortfolioService {
    private projects: Project[] = [];

    // Return a promise to match controller 'await' usage
    public async fetchProjects(): Promise<Project[]> {
        return this.projects;
    }

    // Add project and return the created project
    public async addProject(project: Project): Promise<Project> {
        this.projects.push(project);
        return project;
    }
}