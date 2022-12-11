import { Router } from "express";
import {
  deleteTasks,
  getAllTasks,
  getTask,
  patchTasks,
  postTasks,
} from "../controllers/task.controllers.js";
const routes = Router();

routes.get("/tasks", getAllTasks);

routes.get("/task/:id", getTask);

routes.post("/tasks", postTasks);

routes.put("/task/edite/:id", patchTasks);

routes.delete("/task/:id", deleteTasks);

export default routes;
