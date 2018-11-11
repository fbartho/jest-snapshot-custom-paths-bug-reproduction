# Bug Demonstration - Custom Snapshot Resolver

**Repo Now Defunct, as fix was found!**

The purpose of this repo is to reproduce the issue described here [[jest-snapshot] Custom Snapshot Directories confuse the Obsolete Snapshot Logger #7257](https://github.com/facebook/jest/issues/7257)

## Reproduction steps

1. clone this repo
2. `yarn install`
3. Run the tests:

```shell
$ yarn test
yarn run v1.12.1
$ cp -R src/ dist; jest
 PASS  dist/__tests__/Link.react.test.js
  ✓ Link changes the class when hovered (18ms)

Snapshot Summary
 › 2 snapshot files obsolete from 2 test suites. To remove them all, run `yarn test -u`.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   2 files obsolete, 3 passed, 3 total
Time:        1.264s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.yarn test`
```

4. Notice: the tests pass, but also it says there are `2 snapshot files obsolete`. If you subsequently run `yarn test -u` it will delete these files, and then running yarn test again, will re-create them, then running `yarn test` again will once again declare that 2 snapshot files are obsolete.

### Expected behavior

I would expect it to not consider these files obsolete, and to not have this toggling behavior of deleting & recreating all the snapshots.

## Key Notes

- Pretends it's using a pre-processor/separate compile phase like `tsc` by copying the files into `dist/` before running the tests against the `dist/` directory
