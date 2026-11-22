// news-image-20261122 entry for @berkahmuse-2.
//
// The picture itself is the entry: a one-page newspaper front page
// ("THE WORLD IN ONE DAY") drawn for Sunday 22 November 2026 and stored
// beside this file as entry.png. This program only carries those exact
// bytes to the grader's output path, so both runs are byte-identical.
//
// The drawing was built in the build session (see README.md for the
// stories and their sources). Nothing here reaches the network, reads
// the clock, or depends on the environment beyond the output directory
// the grader provides.
//
// Run outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);

// Read back what was written: the grader runs this program twice and
// both runs must produce the same bytes, so fail loudly here instead
// of silently shipping a short write.
const written = readFileSync(join(outDir, 'entry.png'));
if (written.length !== image.length) {
  throw new Error('entry.png short write: ' + written.length + ' of ' + image.length);
}
