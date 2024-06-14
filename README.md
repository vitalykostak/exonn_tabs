### Launch project

node - v20.11.0

-   `npm install` - Install project dependencies.
-   `npm run start:dev` - Start the project in the development environment using webpack.

### Architecture

Feature-Sliced Design (FSD)
Project follows the Feature-Sliced Design (FSD) architecture. Check out the FSD documentation for understanding key principles.

[Feature-Sliced Design](https://feature-sliced.design/)

### Optimization

To optimize the application performance and user experience, the project utilizes the following techniques:

-   Memoization (memo), callback memoization (useCallback), and memoized values (useMemo) are employed for optimizing component rendering and preventing unnecessary re-renders.
-   Code splitting is implemented to efficiently load and render components, improving initial page load times and overall performance.
-   When using Redux reducers, including async reducers, code splitting should also be followed to ensure efficient loading and management of state-related logic.

### Testing

Unit Testing (Jest): `npm run test:unit`
