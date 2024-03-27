import fs from 'fs';
import path from 'path';

// Define the directories
const directories = ['album/pasta'];

// Function to rename files sequentially
function renameFiles(directory) {
    // // Get list of subdirectories
    // const subdirectories = fs
    //     .readdirSync(directory, { withFileTypes: true })
    //     .filter(dirent => dirent.isDirectory())
    //     .map(dirent => dirent.name);

    // // Iterate through each subdirectory
    // for (const subdir of subdirectories) {
    //     let counter = 1;
    //     const subdirPath = path.join(directory, subdir);

    // Get list of files in the subdirectory
    const files = fs.readdirSync(directory);
    let counter = 1;
    // Rename each file sequentially
    for (const file of files) {
        const oldFilePath = path.join(directory, file);
        const newFileName = `${counter}.jpg`;
        const newFilePath = path.join(directory, newFileName);

        // Rename the file
        fs.renameSync(oldFilePath, newFilePath);

        // Increment counter
        counter++;
    }
    // }
}

// Iterate through each directory
for (const directory of directories) {
    renameFiles(directory);
}
