// const ALBUM_LIST_URL = 'https://testingcf.jsdelivr.net/gh/nj-lizhi/song@master/audio/list-v2.js'
import { ensureFile } from "https://deno.land/std@0.177.0/fs/mod.ts";
import { list } from "./list.js"

for (const { url } of list) {
  const path = url.match(/.*audio\/(.*)/)[1]
  const path2 = `./albums/${path}`
  console.log({ url, path, path2 })
  await ensureFile(path2)
  let buffer = await fetch(url).then(r => r.arrayBuffer());
  await Deno.writeFile(path2, new Uint8Array(buffer));
}
