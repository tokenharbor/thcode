// Plain-text Token Harbor brand. The splash renderer prints these
// strings in bold theme colors (left = cyan, right = white), so no
// ASCII-art glyphs needed — Season wanted clean text instead of the
// previous ornate block letters.
export const logo = {
  left: ["TOKEN HARBOR"],
  right: ["CODE"],
}

// Tiny exit badge — same convention. Kept short so it doesn't crowd
// the close-of-session footer.
export const go = {
  left: ["TH"],
  right: ["go"],
}

// Marks list kept for back-compat with the splash glyph styler — none
// of the new plain-text strings contain these characters but the
// renderer references the constant.
export const marks = "_^~,"
