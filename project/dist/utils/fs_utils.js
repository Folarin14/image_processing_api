// Script to check if a file exists
// Attribution: https://nodejs.org/api/fs.html#fsaccesspath-mode-callback
import { accessSync, constants } from 'node:fs';
function checkFileExists(filePath) {
    try {
        accessSync(filePath, constants.F_OK);
        return true;
    }
    catch (error) {
        return false;
    }
}
export default checkFileExists;
