import { Request, Response } from 'express';
import { Data } from '../models/data';

export class DataController {
  async porotal(req: Request, res: Response): Promise<Response> {
    const data = new Data();
    return res.json(data.porotal());
  }

  async server(req: Request, res: Response): Promise<Response> {
    const data = new Data();
    return res.json(data.server());
  }

  async year(req: Request, res: Response): Promise<Response> {
    const data = new Data();
    return res.json(data.year());
  }

  async month(req: Request, res: Response): Promise<Response> {
    const data = new Data();
    return res.json(data.month());
  }
}