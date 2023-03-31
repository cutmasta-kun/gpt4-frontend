import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Access logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const method = `\x1b[36m${req.method}\x1b[0m`;
  const url = `\x1b[33m${req.url}\x1b[0m`;
  const date = `\x1b[35m[${new Date().toISOString()}]\x1b[0m`;
  console.log(`${date} ${method} ${url}`);
  next();
});

// Serve the compiled Svelte frontend at the root path
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

// Serve frontend assets (JS, CSS, images, etc.) from the /assets path
app.use('/assets', express.static(path.join(__dirname, '..', '..', 'frontend', 'public')));

// Set up the /api route for the future REST API
app.use('/api', (req: Request, res: Response) => {
  res.send('This will be the future API route.');
});

app.listen(port, () => {
  console.log(`\x1b[32mServer is running on port ${port}\x1b[0m`);
});
