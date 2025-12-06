import express from 'express';
import bodyParser from 'body-parser';
import { setPortfolioRoutes } from './routes/portfolioRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setPortfolioRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});