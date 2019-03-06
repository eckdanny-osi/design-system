#!/usr/bin/env node

const Transform = require('stream').Transform

const filterBuffers = filter(chunk => !Buffer.isBuffer(chunk))

const filterBlackList = filter(chunk => {
  return [
    /^\nBe watching in/,
    /^Successfully compiled \d+ files with Babel/,
  ].some(re => re.test(chunk.toString()))
})

const transformCpx = filter(
  chunk => false,
  chunk =>
    Buffer.from(
      chunk
        .toString()
        .replace(/^Copied: /, '')
        .replace('-->', '->')
    )
)

process.stdin
  .pipe(filterBuffers)
  .pipe(filterBlackList)
  .pipe(transformCpx)
  .pipe(process.stdout)

process.on('exit', () => process.stdin.unpipe())

function filter(test, fmt = x => x) {
  return Transform({
    transform: (chunk, enc, cb) => {
      if (test(chunk)) cb()
      else cb(null, fmt(chunk))
    },
  })
}
