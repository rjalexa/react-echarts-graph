// graphData.js

const getColor = (variable) => `var(${variable})`;

export const nodes = [
  // Python ecosystem
  { id: "python", name: "Python", itemStyle: { color: getColor('--python-color') } },
  { id: "django", name: "Django", itemStyle: { color: getColor('--python-color') } },
  { id: "flask", name: "Flask", itemStyle: { color: getColor('--python-color') } },
  { id: "fastapi", name: "FastAPI", itemStyle: { color: getColor('--python-color') } },
  { id: "sqlalchemy", name: "SQLAlchemy", itemStyle: { color: getColor('--python-color') } },
  { id: "pandas", name: "Pandas", itemStyle: { color: getColor('--python-color') } },
  { id: "numpy", name: "NumPy", itemStyle: { color: getColor('--python-color') } },
  { id: "pydantic", name: "Pydantic", itemStyle: { color: getColor('--python-color') } },

  // React ecosystem
  { id: "react", name: "React", itemStyle: { color: getColor('--react-color') } },
  { id: "redux", name: "Redux", itemStyle: { color: getColor('--react-color') } },
  { id: "react-router", name: "React Router", itemStyle: { color: getColor('--react-color') } },
  { id: "nextjs", name: "Next.js", itemStyle: { color: getColor('--react-color') } },
  { id: "gatsby", name: "Gatsby", itemStyle: { color: getColor('--react-color') } },
  { id: "styled-components", name: "Styled Components", itemStyle: { color: getColor('--react-color') } },

  // Svelte ecosystem
  { id: "svelte", name: "Svelte", itemStyle: { color: getColor('--svelte-color') } },
  { id: "sveltekit", name: "SvelteKit", itemStyle: { color: getColor('--svelte-color') } },

  // Styling
  { id: "tailwindcss", name: "Tailwind CSS", itemStyle: { color: getColor('--styling-color') } },
  { id: "sass", name: "Sass", itemStyle: { color: getColor('--styling-color') } },

  // Bridging technologies
  { id: "graphql", name: "GraphQL", itemStyle: { color: getColor('--bridging-color') } },
  { id: "rest-api", name: "REST API", itemStyle: { color: getColor('--bridging-color') } },
  { id: "webpack", name: "Webpack", itemStyle: { color: getColor('--bridging-color') } },
  { id: "babel", name: "Babel", itemStyle: { color: getColor('--bridging-color') } },
  { id: "typescript", name: "TypeScript", itemStyle: { color: getColor('--bridging-color') } },
  { id: "docker", name: "Docker", itemStyle: { color: getColor('--bridging-color') } },
  { id: "jwt", name: "JWT", itemStyle: { color: getColor('--bridging-color') } },
  { id: "oauth", name: "OAuth", itemStyle: { color: getColor('--bridging-color') } },
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