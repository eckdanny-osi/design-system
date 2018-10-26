import pkg from './package.json'

const externals = depsBlacklist(pkg)

export default [
  {
    input: 'src/index.js',
    external: id => {
      if (externals.includes(id)) return true
      if (/module\.s?css$/.test(id)) return true
      return false
    },
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
]

function depsBlacklist({ dependencies = {}, peerDependencies = {} }) {
  return [...Object.keys(dependencies), ...Object.keys(peerDependencies)]
}
