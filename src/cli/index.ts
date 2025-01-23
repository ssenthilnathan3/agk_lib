import { program } from 'commander';
import * as fs from 'fs';
import * as path from 'path';

program
  .command('pull <component>')
  .description('Pull the latest version of a component')
  .action((component) => {
    const componentDir = path.resolve(__dirname, '../components', component);
    if (fs.existsSync(componentDir)) {
      console.log(`Pulled component ${component}`);
      // Logic to update component, maybe fetch latest version from a registry
    } else {
      console.log(`Component ${component} not found.`);
    }
  });

program
  .command('create <component>')
  .description('Create a new component')
  .action((component) => {
    const componentDir = path.resolve(__dirname, '../components', component);
    fs.mkdirSync(componentDir, { recursive: true });
    fs.writeFileSync(path.join(componentDir, 'index.ts'), `export { default } from './${component}'`);
    fs.writeFileSync(path.join(componentDir, `${component}.tsx`), `
      import React from 'react';
      const ${component}: React.FC = () => <div>${component}</div>;
      export default ${component};
    `);
    console.log(`Created new component: ${component}`);
  });

program.parse(process.argv);
