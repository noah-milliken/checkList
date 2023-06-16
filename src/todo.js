
function todoFactory(category, title, description, dueDate, priority, completed = true) {
    return { category, title, description, dueDate, priority, completed }
}


let todos = [{
    category: "Work",
    title: "Project Proposal",
    description: "Prepare a detailed project proposal for the upcoming client meeting.",
    dueDate: "2023-06-20",
    priority: "High",
    completed: false
},
{
    category: "Personal",
    title: "Grocery Shopping",
    description: "Buy groceries for the week, including fruits, vegetables, and dairy products.",
    dueDate: "2023-06-16",
    priority: "Medium",
    completed: false
},
{
    category: "Health",
    title: "Gym Workout",
    description: "Hit the gym and do a full-body workout for an hour.",
    dueDate: "2023-06-17",
    priority: "Low",
    completed: false
},
{
    category: "Study",
    title: "Read Chapter 5",
    description: "Read and summarize Chapter 5 of the biology textbook.",
    dueDate: "2023-06-19",
    priority: "Medium",
    completed: false
},
{
    category: "Personal",
    title: "Call Mom",
    description: "Give Mom a call to catch up and see how she's doing.",
    dueDate: "2023-06-21",
    priority: "High",
    completed: false
}
]



export { todoFactory, todos }