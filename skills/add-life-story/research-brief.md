# 查资料子代理的提示词模板

把 `<...>` 替换后交给能联网、只读的查资料子代理（一次加多个故事时可并行）。

```
Fact research (web) for a children's historical-lives Q&A app. Do NOT edit any files in the repo.

Person / Life story: <人物或群体名>, <时代与地点>.
The app teaches children about diverse human lives across fields, eras, and world regions through a
curated dialogue between a curious boy (小念) and his dad (爸爸), anchored on one real historical
image (and optionally 1 companion image) plus a world map pin.

Return a concise brief in Chinese or English with these sections:

1. IMAGE (Family-friendly, no nudity or graphic violence)
   - Best Wikimedia Commons file (exact "File:..." name, pixel dimensions, license, author/collection).
   - Inspect what is actually visible in that exact image (clothing, tools, background, labels) so the
     dialogue only points to things truly present in the frame.
   - Give preliminary spot(x, y, r) positions (x, y in 0..1 of width/height, r in 0..0.35 of width)
     for 3-6 visual details a child would notice.

2. GEOGRAPHY & TIMELINE
   - Birth/death or active span, key year (negative if BCE), exact place name, and [lat, lon]
     (plus destination [lat, lon] if the story involves a famous journey).

3. VERIFIED FACTS (each with an https source)
   - Early life, central struggle or achievement, everyday life details, and legacy today.

4. MYTHS, LEGENDS & DISPUTES
   - Popular anecdotes without solid evidence or conflicting numbers across sources.

5. KID-FRIENDLY HOOKS
   - Concrete comparisons a 7-10 year old can picture, calm & respectful framing for hardship/death.
```

拿到资料后务必注意：
- 用 `npm run frames -- <id>` 与 `npm run grid -- <id>` 亲眼看图核对，子代理给的坐标和描述只作初值。
- 找不到可靠 https 出处的说法，不要写进台词。
