import { Router, Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

const router = Router();

const auth0 = auth({
  audience: 'https://dev-jb4f9d30.us.auth0.com/api/v2/',
  issuerBaseURL: `https://dev-jb4f9d30.us.auth0.com/`,
});

router.get('/', auth0, (req: Request, res: Response) => {
  res.status(200).json('Ok');
});

// Catch non implemented routes
router.all('*', (req: Request, res: Response) => {
  res.status(404).json('Route not found');
});

export default router;