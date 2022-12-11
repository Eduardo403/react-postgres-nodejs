import pool from "../db.js";
/******get all tasks in the db*******/

export const getAllTasks = async (req, res, next) => {
  try {
    const dateDB = await pool.query("SELECT * FROM task");
    res.status(200).json(dateDB.rows);
  } catch (error) {
    next(error);
  }
};
/****get a singel task ********/
export const getTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const singelTask = await pool.query("SELECT * FROM task WHERE id=$1", [id]);
    if (singelTask.rows.length === 0)
      return res.status(404).json({ message: "task not found" });
    res.status(200).json(singelTask.rows);
  } catch (error) {
    next(error);
  }
};

/****create a new task *******/
export const postTasks = async (req, res, next) => {
  const { title, descrition } = req.body;
  try {
    const insetDB = await pool.query(
      "INSERT INTO task (title ,descrition) VALUES($1,$2)",
      [title, descrition]
    );
    res.status(200).json(insetDB.rows);
  } catch (error) {
    next(error);
  }
};
/**update a task *****/
export const patchTasks = async (req, res, next) => {
  const { id } = req.params;

  const { title, descrition } = req.body;
  try {
    const updateTask = await pool.query(
      "UPDATE task SET title=$1,descrition=$2 WHERE id=$3 RETURNING *",
      [title, descrition, id]
    );
    if (updateTask.rows.length === 0)
      return res.status(404).json({ message: "task not found" });
    res.status(200).json(updateTask.rows[0]);
  } catch (error) {
    next(error);
  }
};

/*****delete a task ********/
export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTask = await pool.query("DELETE FROM task WHERE id=$1", [id]);
    if (deleteTask.rowCount === 0)
      return res.status(404).json({ message: "task not found" });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
