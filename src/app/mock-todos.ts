import { Todo } from './todo';

export const TODOS: Todo[] = [
  {completed: true, description: "Template design on Sketch | Figma | invison", type: "UI/UX", category: "design and development" },
  {completed: true, description: "Convert design into HTML + CSS template", type: "CSS", category: "design and development" },
  {completed: true, description: "Make the template resposnive", type: "CSS", category: "design and development" },
  {completed: true, description: "Make the design compatible as a minimum with IE9", type: "Browsers", category: "design and development" },
  {completed: true, description: "Use SASS to make colors easy to change (skin-able / theme-able )", type: "SASS", category: "design and development" },
  {completed: true, description: "Build on top of Angular and load data from a data source", type: "TypeScript", category: "design and development" },
  {completed: true, description: "Use Angular Material", type: "Angular", category: "design and development" },
  {completed: true, description: "Implement the filter and search functionality in both desktop and mobile", type: "Angular", category: "design and development" },
  {completed: false, description: "Develop a RESTfull APIs for CRUD operations with mongoDB or Firebase", type: "", category: "design and development" },
  {completed: true, description: "Use Flexbox | Angular Flex-Layout", type: "CSS", category: "design and development" }, 
  {completed: true, description: "Sidemenu's initial state is open with the ability to close it.", type: "", category: "improvment" },
  {completed: true, description: "The ability to mark tasks as completed", type: "", category: "improvment" },
  {completed: false, description: "Ability to rearrange tasks and groups", type: "", category: "improvment" },
  {completed: true, description: "Compatibility with touch devices", type: "", category: "improvment" },
  {completed: true, description: "Display Filter & serach elements within a dialod for handset devices", type: "", category: "improvment" },
  {completed: true, description: "Avoid rendering dummy divs with *ngIF after iterating with *ngFor by using a pipe in the *ngFor directive to filter lists based on filter arguments", type: "", category: "improvment" },
  {completed: false, description: "Deliver the final project in a git repository using git-flow", type: "Bash", category: "other" },
  {completed: true, description: "Add your own touches in the places you see fit with the reason why they are added.", type: "", category: "other" },
  {completed: false, description: "Build up a tutorial | dcoumentation for using the App", type: "Github", category: "other" }
];