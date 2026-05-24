// "TOKEN HARBOR" on the left (cyan), "CODE" on the right (white).
// 3-row × 4-char block letters using ONLY █ and space — big enough
// to read across a room, but no decorative marks (Season asked for
// "clean and big", not the previous ornate underscore/caret style).
//
// Letters: T O K E N   H A R B O R (left)   |   C O D E (right)
export const logo = {
  left: [
    "                                                       ",
    "████ ████ █  █ ████ █  █  █  █ ████ ████ ████ ████ ████",
    " ██  █  █ ███  ███  ████  ████ ████ ███  █ ██ █  █ ███ ",
    " ██  ████ █  █ ████ █  █  █  █ █  █ █ ██ ████ ████ █ ██",
  ],
  right: [
    "                   ",
    "████ ████ ███  ████",
    "█    █  █ █ ██ ███ ",
    "████ ████ ███  ████",
  ],
}

// Compact exit badge — kept as a tiny "TH" so it doesn't crowd
// the close-of-session footer.
export const go = {
  left: ["    ", "████", " ██ ", " ██ "],
  right: ["    ", "█  █", "████", "█  █"],
}

// Renderer treats these glyphs as styled marks (alt-tinted, shadowed).
// We don't use them anywhere in the brand strings above — kept only
// because logo.tsx imports the constant.
export const marks = ""
