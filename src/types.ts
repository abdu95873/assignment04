export interface ITask {   
  id: string;
  title: string;
  description: string;
  dueDate: string; 
  isCompleted: boolean;
  priority: "Low" | "Medium" | "High";
};
