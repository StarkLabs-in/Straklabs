import { Request, Response } from 'express';
import { PortfolioService } from '../services/portfolioService';
import { Project } from '../models/project';

class PortfolioController {
    private portfolioService: PortfolioService;

    constructor(portfolioService: PortfolioService) {
        this.portfolioService = portfolioService;
    }

    public async getPortfolio(req: Request, res: Response): Promise<void> {
        try {
            const projects = await this.portfolioService.fetchProjects();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching portfolio' });
        }
    }

    public async createProject(req: Request, res: Response): Promise<void> {
        const projectData: Project = req.body;
        try {
            const newProject = await this.portfolioService.addProject(projectData);
            res.status(201).json(newProject);
        } catch (error) {
            res.status(500).json({ message: 'Error creating project' });
        }
    }
}

export default PortfolioController;