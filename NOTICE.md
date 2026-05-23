# NOTICE

`thcode` is built from [tokenharbor/thcode](https://github.com/tokenharbor/thcode), a fork of [anomalyco/opencode](https://github.com/anomalyco/opencode).

Both repositories are MIT-licensed. The original copyright is retained in this repository's [LICENSE](./LICENSE) file.

Changes made by Token Harbor (relative to upstream opencode):

- `packages/opencode/src/cli/logo.ts` — replaced the OPEN CODE ASCII art with TH CODE branding.
- `.github/workflows/build-thcode.yml` — new CI workflow that builds a Mac arm64 binary and publishes it as a GitHub Release for the [`thcode` npm wrapper](https://github.com/tokenharbor/thcode-wrapper).
- (Future) additional rebranding patches and provider defaults pinned to `tokenharbor.ai/v1`.

If you redistribute thcode, please keep this `NOTICE.md` and the upstream `LICENSE` file alongside the binary.
