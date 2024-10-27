import * as React from "react";
import { Formik, Form, Field } from "formik";
import { useTaskList } from "../../custom-hooks/useTasks";
import { v4 as uuidv4 } from "uuid";

import "./add-task.css";

interface AddTaskValues {
  title: string;
  description: string;
  category: string;
}

export const AddTask: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const { addTask } = useTaskList();

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="add-task-container" style={{ zIndex: 1000 }}>
      <h1>Add Task</h1>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
        }}
        onSubmit={(values: AddTaskValues, actions) => {
          const id = uuidv4();
          addTask({ ...values, id, status: "pending" });
          actions.setSubmitting(false);
          actions.resetForm();
          onCancel();
        }}
      >
        <Form className="add-task-form">
          <div className="field-box">
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" placeholder="Title" />
          </div>
          <div className="field-box">
            <label htmlFor="description">Description</label>
            <Field
              id="description"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="field-box">
            <label htmlFor="category">Category</label>
            <Field id="category" name="category" placeholder="Category" />
          </div>
          <div className="actions">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
