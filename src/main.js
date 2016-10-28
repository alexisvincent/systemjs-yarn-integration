LockFile = require('yarn/lib/lockfile/wrapper.js').default;

LockFile.fromDirectory("./").then(handleLockfile);

function handleLockfile(lockfile) {

	console.log(lockfile);

}


