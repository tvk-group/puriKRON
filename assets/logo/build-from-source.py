#!/usr/bin/env python3
"""Rebuild puriKRON logo exports from purikron-logo-source.png."""
from PIL import Image
import base64
import os
import shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, 'purikron-logo-source.png')


def trim(im, thresh=248):
    im = im.convert('RGBA')
    px = im.load()
    w, h = im.size
    l, t, r, b = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            R, G, B, A = im.getpixel((x, y))
            if A > 12 and (R < thresh or G < thresh or B < thresh):
                l, t = min(l, x), min(t, y)
                r, b = max(r, x), max(b, y)
    return im.crop((l, t, r + 1, b + 1))


def remove_white(im, tol=240):
    im = im.convert('RGBA')
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r >= tol and g >= tol and b >= tol:
                px[x, y] = (255, 255, 255, 0)
    return im


def main():
    if not os.path.exists(SRC):
        raise SystemExit(f'Missing source file: {SRC}')

    src = Image.open(SRC).convert('RGBA')
    full = remove_white(trim(src))
    full.save(os.path.join(ROOT, 'purikron-logo-full.png'))

    fw, fh = full.size
    emblem_h = int(fh * 0.62)
    emblem_w = min(fw, emblem_h)
    left = (fw - emblem_w) // 2
    emblem = remove_white(trim(full.crop((left, 0, left + emblem_w, emblem_h))))
    side = max(emblem.size)
    sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    ox = (side - emblem.size[0]) // 2
    oy = (side - emblem.size[1]) // 2
    sq.paste(emblem, (ox, oy), emblem)
    emblem_sq = remove_white(trim(sq))
    emblem_sq.save(os.path.join(ROOT, 'purikron-emblem.png'))

    word = remove_white(trim(full.crop((0, emblem_h - int(fh * 0.04), fw, fh))))
    word.save(os.path.join(ROOT, 'purikron-wordmark.png'))

    for s in [32, 180, 512]:
        emblem_sq.resize((s, s), Image.Resampling.LANCZOS).save(os.path.join(ROOT, f'icon-{s}.png'))

    emblem_sq.resize((180, 180), Image.Resampling.LANCZOS).save(os.path.join(ROOT, 'apple-touch-icon.png'))
    emblem_sq.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(ROOT, 'emblem-512.png'))

    gap = int(emblem_sq.size[1] * 0.06)
    word_r = word.resize((int(word.size[0] * (emblem_sq.size[0] / word.size[0])), int(word.size[1] * (emblem_sq.size[0] / word.size[0]))), Image.Resampling.LANCZOS)
    lockup = Image.new('RGBA', (max(emblem_sq.size[0], word_r.size[0]), emblem_sq.size[1] + gap + word_r.size[1]), (0, 0, 0, 0))
    lockup.paste(emblem_sq, ((lockup.size[0] - emblem_sq.size[0]) // 2, 0), emblem_sq)
    lockup.paste(word_r, ((lockup.size[0] - word_r.size[0]) // 2, emblem_sq.size[1] + gap), word_r)
    lockup.save(os.path.join(ROOT, 'purikron-logo-lockup.png'))

    word_h = word.resize((int(word.size[0] * (emblem_sq.size[1] / word.size[1])), emblem_sq.size[1]), Image.Resampling.LANCZOS)
    header = Image.new('RGBA', (emblem_sq.size[0] + int(emblem_sq.size[0] * 0.12) + word_h.size[0], emblem_sq.size[1]), (0, 0, 0, 0))
    header.paste(emblem_sq, (0, 0), emblem_sq)
    header.paste(word_h, (emblem_sq.size[0] + int(emblem_sq.size[0] * 0.12), (emblem_sq.size[1] - word_h.size[1]) // 2), word_h)
    header.save(os.path.join(ROOT, 'purikron-logo-header.png'))

    og = Image.new('RGBA', (1200, 630), (255, 255, 255, 255))
    scale = min(900 / full.size[0], 520 / full.size[1])
    logo = full.resize((int(full.size[0] * scale), int(full.size[1] * scale)), Image.Resampling.LANCZOS)
    og.paste(logo, ((1200 - logo.size[0]) // 2, (630 - logo.size[1]) // 2), logo)
    og.convert('RGB').save(os.path.join(ROOT, 'og-image.png'), quality=95)

    b64 = base64.b64encode(open(os.path.join(ROOT, 'icon-32.png'), 'rb').read()).decode('ascii')
    with open(os.path.join(ROOT, 'icon-32.svg'), 'w', encoding='utf-8') as f:
        f.write(
            f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
            f'width="32" height="32" viewBox="0 0 32 32" role="img" aria-label="puriKRON">'
            f'<image width="32" height="32" xlink:href="data:image/png;base64,{b64}"/></svg>'
        )

    shutil.copy(os.path.join(ROOT, 'emblem-512.png'), os.path.join(ROOT, '..', 'logo.png'))
    print('Rebuilt logo assets from', SRC)


if __name__ == '__main__':
    main()
