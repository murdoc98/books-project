import { Router, Request, Response } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';

// Controllers
import getUser from './controllers/getUser.controller';
import postBookToRead from './controllers/postBookToRead.controller';
import deleteBookToRead from './controllers/deleteBookToRead.controller';
import postBookReaded from './controllers/postBookReaded.controller';
import deleteBookReaded from './controllers/deleteBookReaded.controller';

const router = Router();

const auth0 = auth({
  audience: 'https://dev-jb4f9d30.us.auth0.com/api/v2/',
  issuerBaseURL: `https://dev-jb4f9d30.us.auth0.com/`,
});

router.get('/', (req: Request, res: Response) => {
  res.status(200).json('Ok');
});

// Protected routes
router.get('/currentUser', auth0, getUser);
router.post('/bookToRead', auth0, postBookToRead);
router.delete('/bookToRead/:id', auth0, deleteBookToRead);
router.post('/bookreaded', auth0, postBookReaded);
router.delete('/bookreaded/:id', auth0, deleteBookReaded);

// Catch non implemented routes
router.all('*', (req: Request, res: Response) => {
  res.status(404).json('Route not found');
});

export default router;