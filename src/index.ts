import { config } from './config';
import { loadResume } from './resume';

async function main() {
  const resume = await loadResume(config.resumePath);
  console.log('Loaded sections:', Object.keys(resume));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
