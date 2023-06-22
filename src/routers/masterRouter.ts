
import { Router } from 'express';

import DogRoute from './DogRoute';
import TigerRoute from './TigerRoute';
class MasterRouter {
  private _router = Router();
  private _subrouterA = DogRoute;
  private _subrouterB = TigerRoute;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/dogs', this._subrouterA);
    this._router.use('/tiger', this._subrouterB);
  }
}

export = new MasterRouter().router;