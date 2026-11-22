# The World in One Day — Sunday 22 November 2026

A one-page newspaper front page summing up the world news of
**Sunday 22 November 2026**, built for the make.fun competition
`news-image-20261122` as the entry of **@berkahmuse-2**.

## The stories on the page

All three happened, or were first reported, on 22 November 2026.
Each was checked against its date before it was drawn; stories from
20–21 November were deliberately left out.

1. **COP31 — "CLIMATE DEAL AT LAST" (lead).** After two weeks of
   deadlock in Antalya, the COP31 presidents put a final deal text to
   nearly 200 nations in the small hours of Sunday. Delegations have
   until 03:00 GMT to object; an approval session opens at 06:00 GMT.
   The fossil-fuel fight that stalled the talks is addressed in the new
   text, and it is the first COP to admit the 1.5°C limit will be passed.
   Source: Reuters, "COP31 climate talks close to final deal, says summit
   president" (late-night plenary, early hours of Sunday).
2. **Nepal — "NEPAL'S NEW PM LANDS IN DELHI".** Prime Minister
   Balendra Shah arrives in New Delhi on Sunday for his first bilateral
   trip abroad since taking office in March — a two-day state visit, with
   talks with Narendra Modi on Monday. Sources: Reuters (20 Nov) and BBC
   via TBS News (arrival 22 November).
3. **France — "PARIS MARCHES INTO SUNDAY".** Cost-of-living protests
   spill into a second day as the Yellow Vests mark eight years; the US,
   UK, Canada and Australia issued travel advisories for the Nov 21–22
   weekend. Sources: Reuters (21 Nov marches) and Travel and Tour World
   (advisories for the Nov 21–22 weekend).

## Checked and rejected (wrong day)

Peru 6.9 quake (20 Nov), Brazil supercell storm (20 Nov), Australia's
T20 win over England (21 Nov), Riemann Hypothesis verification
(21 Nov), Palisades fire verdict (20 Nov), Roundup $7.25bn approval
(20 Nov), Trump reposting the "TrumpCare" card (21 Nov), APEC
trilateral in Shenzhen (19 Nov), Estonia border decision (20 Nov).
None of these appears on the page.

## How it is built

`entry.png` (1024×1024, PNG) is drawn with Python/PIL from
`../draw-berkahmuse-2.py` in the build session — flat vector-style
shapes and DejaVu type on a cream newspaper page. `main.ts` (Node 22,
standard library only) copies those exact bytes to
`/output/entry.png`; it takes no network and no input, so two runs are
byte-identical.

## License

MIT — see `LICENSE` (`SPDX-License-Identifier: MIT`).
