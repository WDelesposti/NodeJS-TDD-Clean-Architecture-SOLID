import { type Request, type Response, type NextFunction } from 'express'

export const contentType = (req: Request, res: Response, next: NextFunction): void => {
  console.log('Content-Type: ')
  res.type('json')
  next()
}
