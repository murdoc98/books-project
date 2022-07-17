import { Router, Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

const router = Router();

const auth0 = auth({
  audience: 'https://dev-jb4f9d30.us.auth0.com/api/v2/',
  issuerBaseURL: `https://dev-jb4f9d30.us.auth0.com/`,
});

router.get('/', (req: Request, res: Response) => {
  res.status(200).json('Ok');
});

// Protected routes
router.get('/currentUser', auth0, (req: Request, res: Response) => {
  console.log(req.auth.payload.sub);
  res.status(200).json({ id: req.auth.payload.sub });
});
router.post('/bookToRead', auth0, (req: Request, res: Response) => {
  res.send('Not implemented yet');
});
router.put('/bookToRead/:id', auth0, (req: Request, res: Response) => {
  res.send('Not implemented yet');
});
router.delete('/bookToRead/:id', auth0, (req: Request, res: Response) => {
  res.send('Not implemented yet');
});
router.post('/bookreaded', auth0, (req: Request, res: Response) => {
  res.send('Not implemented yet');
});
router.delete('/bookreaded/:id', auth0, (req: Request, res: Response) => {
  res.send('Not implemented yet');
});

// Catch non implemented routes
router.all('*', (req: Request, res: Response) => {
  res.status(404).json('Route not found');
});

export default router;