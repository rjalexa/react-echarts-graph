// graphData.js

export const nodes = [
  // Python ecosystem
  { id: "python", name: "Python", group: "python" },
  { id: "django", name: "Django", group: "python" },
  { id: "flask", name: "Flask", group: "python" },
  { id: "fastapi", name: "FastAPI", group: "python" },
  { id: "sqlalchemy", name: "SQLAlchemy", group: "python" },
  { id: "pandas", name: "Pandas", group: "python" },
  { id: "numpy", name: "NumPy", group: "python" },
  { id: "pydantic", name: "Pydantic", group: "python" },

  // React ecosystem
  { id: "react", name: "React", group: "react" },
  { id: "redux", name: "Redux", group: "react" },
  { id: "react-router", name: "React Router", group: "react" },
  { id: "nextjs", name: "Next.js", group: "react" },
  { id: "gatsby", name: "Gatsby", group: "react" },
  { id: "styled-components", name: "Styled Components", group: "react" },

  // Svelte ecosystem
  { id: "svelte", name: "Svelte", group: "svelte" },
  { id: "sveltekit", name: "SvelteKit", group: "svelte" },

  // Styling
  { id: "tailwindcss", name: "Tailwind CSS", group: "styling" },
  { id: "sass", name: "Sass", group: "styling" },

  // Bridging technologies
  { id: "graphql", name: "GraphQL", group: "bridging" },
  { id: "rest-api", name: "REST API", group: "bridging" },
  { id: "webpack", name: "Webpack", group: "bridging" },
  { id: "babel", name: "Babel", group: "bridging" },
  { id: "typescript", name: "TypeScript", group: "bridging" },
  { id: "docker", name: "Docker", group: "bridging" },
  { id: "jwt", name: "JWT", group: "bridging" },
  { id: "oauth", name: "OAuth", group: "bridging" },
];

export const links = [
  // Python internal links
  { source: "python", target: "django", value: "Web framework" },
  { source: "python", target: "flask", value: "Micro framework" },
  { source: "python", target: "fastapi", value: "API framework" },
  { source: "python", target: "sqlalchemy", value: "ORM" },
  { source: "python", target: "pandas", value: "Data analysis" },
  { source: "python", target: "numpy", value: "Numerical computing" },
  { source: "django", target: "sqlalchemy", value: "Can use" },
  { source: "flask", target: "sqlalchemy", value: "Often uses" },
  { source: "fastapi", target: "sqlalchemy", value: "Can integrate" },
  { source: "pandas", target: "numpy", value: "Depends on" },
  { source: "fastapi", target: "pydantic", value: "Uses for validation" },

  // React internal links
  { source: "react", target: "redux", value: "State management" },
  { source: "react", target: "react-router", value: "Routing" },
  { source: "react", target: "nextjs", value: "Server-side rendering" },
  { source: "react", target: "gatsby", value: "Static site generation" },
  { source: "react", target: "styled-components", value: "CSS-in-JS" },
  { source: "nextjs", target: "react", value: "Based on" },
  { source: "gatsby", target: "react", value: "Based on" },

  // Svelte links
  { source: "svelte", target: "sveltekit", value: "Full-stack framework" },

  // Styling links
  { source: "react", target: "tailwindcss", value: "Can use for styling" },
  { source: "svelte", target: "tailwindcss", value: "Can use for styling" },
  { source: "react", target: "sass", value: "Can use for styling" },
  { source: "svelte", target: "sass", value: "Can use for styling" },

  // Cross-ecosystem links
  { source: "django", target: "react", value: "Can serve as backend" },
  { source: "flask", target: "react", value: "Can serve as backend" },
  { source: "fastapi", target: "react", value: "Can serve as backend" },
  { source: "python", target: "graphql", value: "Can implement" },
  { source: "react", target: "graphql", value: "Can consume" },
  { source: "svelte", target: "graphql", value: "Can consume" },
  { source: "python", target: "rest-api", value: "Can implement" },
  { source: "react", target: "rest-api", value: "Can consume" },
  { source: "svelte", target: "rest-api", value: "Can consume" },
  { source: "react", target: "webpack", value: "Bundling" },
  { source: "svelte", target: "webpack", value: "Can use for bundling" },
  { source: "webpack", target: "babel", value: "Uses for transpiling" },
  { source: "react", target: "typescript", value: "Can be used with" },
  { source: "svelte", target: "typescript", value: "Can be used with" },
  { source: "python", target: "typescript", value: "Can use for type checking" },
  { source: "python", target: "docker", value: "Can be containerized" },
  { source: "react", target: "docker", value: "Can be containerized" },
  { source: "svelte", target: "docker", value: "Can be containerized" },
  { source: "django", target: "jwt", value: "Can use for auth" },
  { source: "fastapi", target: "jwt", value: "Can use for auth" },
  { source: "react", target: "jwt", value: "Can use for auth" },
  { source: "svelte", target: "jwt", value: "Can use for auth" },
  { source: "django", target: "oauth", value: "Can implement" },
  { source: "fastapi", target: "oauth", value: "Can implement" },
  { source: "react", target: "oauth", value: "Can integrate" },
  { source: "svelte", target: "oauth", value: "Can integrate" },
];