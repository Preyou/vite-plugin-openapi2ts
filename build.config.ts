import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/adapters.ts',
    'src/bin',
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    // inlineDependencies: true,
  },
})
