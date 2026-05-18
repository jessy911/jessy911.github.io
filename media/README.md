# Project media

Drop project videos and posters in this folder. The site auto-detects them by project id:

- **Capture the Flag (VR)** → `media/ctf-vr.mp4` (and optional poster `media/ctf-vr.jpg`)

The video plays muted on loop in the expanded project card. If the file is missing, the slot shows a dashed placeholder telling you the expected path — no error, nothing breaks.

Naming:
- Recommended: `.mp4`, H.264, ~720p, under 8s loop, no audio (it auto-mutes anyway)
- Poster (optional but nice): same name, `.jpg`. Used as the frame before the video loads.

The AI training and emotion-recognition projects don't have a media slot — they were hidden because the source belongs to clients.
