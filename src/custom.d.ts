import { Server } from "socket.io";

declare global {
  namespace Express {
    export interface Request {
      io?: Server,
      userIP?: String | String[] | undefined
    }
  }
}