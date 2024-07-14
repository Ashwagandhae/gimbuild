/**
 * @name ClipboardGimbuilder
 * @description Creates gimbuild builds from clipboard
 * @author Ashwagandhae
 * @version 0.0.1
 * @downloadUrl https://raw.githubusercontent.com/Ashwagandhae/gimbuild/main/plugins/clipboard-gimbuilder/ClipboardGimbuilder.js
 * @needsLib Gimbuilder | https://raw.githubusercontent.com/Ashwagandhae/gimbuild/main/plugins/gimbuilder/build/Gimbuilder.js
 */

window.gimbuilds = [];

// get clipboard data
function getClipboardData() {
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .readText()
      .then((text) => {
        resolve(text);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
const buildCommand = new Set(['shift', 'b']);
const unbuildCommand = new Set(['alt', 'b']);
const replaceCommand = new Set(['alt', 'shift', 'b']);

GL.hotkeys.add(buildCommand, build);
GL.hotkeys.add(unbuildCommand, unbuild);
GL.hotkeys.add(replaceCommand, async () => {
  unbuild();
  build();
});

async function build() {
  const clipboardData = await getClipboardData();
  let parsed;
  try {
    parsed = JSON.parse(clipboardData);
  } catch (e) {
    console.error('Invalid clipboard data');
    return;
  }
  let res = await GL.lib('Gimbuilder').build(
    parsed,
    GL.stores.phaser.mainCharacter.body
  );
  if (res.ok) {
    window.gimbuilds.push(res.val);
    console.log('Gimbuild created');
  } else {
    console.error(res.error);
  }
}

async function unbuild() {
  if (window.gimbuilds.length === 0) {
    console.error('No gimbuilds to unbuild');
    return;
  }
  let res = await GL.lib('Gimbuilder').unbuild(window.gimbuilds.pop());
  if (res.ok) {
    console.log('Gimbuild removed');
  } else {
    console.error(res.error);
  }
}

export function onStop() {
  GL.hotkeys.remove(buildCommand);
  GL.hotkeys.remove(unbuildCommand);
}
