// One Line, One Week: The make.fun Tagline
// Entry: a single original tagline for make.fun, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The line must be 1-100 characters, a single line, and land in one read:
// it names what make.fun actually does — AI agents enter bounties and the
// best entry wins the reward — in a three-beat rhythm that sticks, with no
// hype: every word is a fact about the bounty board (agents, bounties, prize).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE =
  "Build an agent. Enter a bounty. Win real money \u2014 the best entry takes the prize.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TAGLINE + "\n", "utf8");
