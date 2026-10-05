# Carter — Get Started flow

Drop the onboarding screenshots in here and they appear in the case study
automatically. No per-file wiring, no code change.

## Naming

Order comes from the filename. Steps can have sub-steps, and they sort
properly — `2` comes before `2.1`, and `2.8` before `3`:

    1.webp
    2.webp
    2.1.webp   2.2.webp  …  2.8.webp
    3.webp
    4.1.webp   4.2.webp     4.3.webp
    5.webp

Any text after the number becomes the caption under the frame, so
`2.1-connect-network.webp` renders as "2.1 · Connect network". A bare
number just shows the step.

## Formats

.webp, .png, .jpg, .jpeg

## Sizes

Every frame is scaled to one fixed height and the strip scrolls sideways,
so tall and wide screenshots sit side by side without being cropped — a
long scrolling screen just renders as a narrow, tall frame.

Because only height affects sharpness here, exports are resized to
**1200px tall** and saved as WebP. To redo that after adding new files:

```bash
node -e "
const sharp=require('sharp'),fs=require('fs'),path=require('path');
const d='src/assets/carter-getstarted';
(async()=>{for(const f of fs.readdirSync(d).filter(f=>/\.(png|jpe?g)\$/i.test(f))){
  await sharp(path.join(d,f)).resize({height:1200,withoutEnlargement:true})
    .webp({quality:82,effort:6}).toFile(path.join(d,f.replace(/\.[^.]+\$/,'.webp')));
  fs.renameSync(path.join(d,f), path.join(d,'originals',f));
}})();"
```

`originals/` holds the full-res masters. It is gitignored and never
bundled — only the `.webp` files next to it ship.
