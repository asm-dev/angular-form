# Using forms, routing and tables

This project was developed as part of a learning activity on advanced Angular concepts. 

I chose to use the classic approach with `NgModules`, disabling the _standalone components_ option to consolidate my knowledge of modules, routing and forms following a classic Angular development approach.

![image](https://github.com/user-attachments/assets/ac986db3-9c44-4285-9ef9-769abc81ba84)

## Modularization and routing

I learned to create separate modules (`FormModule` and `TableModule`) and configure them with lazy-loaded routes using `loadChildren`. This lets Angular load only what is needed, improving performance and code organization.

## Form implementation

I implemented a robust and easily scalable user registration form using `ReactiveFormsModule`, achieving the following:

- Creating a `FormGroup` that uses several `FormControls`
- Learning more about reactive validations with `Validators`
- Dynamically enabling the submit button depending on whether the form is valid or not

## Conditional rendering with \*ngFor and UI manipulation

In the `table` module, I generated a table with mock data using `*ngFor`, and added a button that lets the user change the styles and toggle the visibility of the table columns using `*ngIf`. This helped me see how dynamic interfaces can be built without external libraries.
