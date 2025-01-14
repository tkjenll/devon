import { cwd as current } from 'process';
import { pathExists } from 'fs-extra';
import { join } from 'path';
import { config } from '@/config';

export const cwd = async (enforceExisting = false) => {
    const filename = config.get('definitionFile');
    const maxDepth = config.get('maxDepth');
    const dir = current();
    let found: string|null = null;

    await [...Array(maxDepth).keys()].reduce(async (promise, depth) => {
        await promise;

        if (found !== null) {
            return;
        }

        const depthStrings = [...Array(depth).keys()].map(() => '..');
        const path = join(dir, ...depthStrings);
        const exists = await pathExists(join(path, filename));

        if (exists) {
            found = path;
        }
    }, Promise.resolve());

    if (enforceExisting && found === null) {
        throw new Error('No devon definition file found');
    }

    return found ?? dir;
};
