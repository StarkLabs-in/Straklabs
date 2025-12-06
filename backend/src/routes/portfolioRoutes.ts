import { Router, Application } from 'express';
import PortfolioController from '../controllers/portfolioController';
import { PortfolioService } from '../services/portfolioService';

// Create service and controller instances and wire them into the routes
const portfolioService = new PortfolioService();
const portfolioController = new PortfolioController(portfolioService);

export function setPortfolioRoutes(app: Application) {
    app.get('/api/portfolio', portfolioController.getPortfolio.bind(portfolioController));
    app.post('/api/portfolio/projects', portfolioController.createProject.bind(portfolioController));
}