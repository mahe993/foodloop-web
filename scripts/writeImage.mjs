import { promises as fs } from 'fs';
import path from 'path';

// Directory containing the images
const directoryPath = './src/assets/images';
const relativePath = '../assets/images';

// Function to read files in a directory
const readFilesInDirectory = async (dirPath) => {
    try {
        const files = await fs.readdir(dirPath);
        return files;
    } catch (error) {
        throw new Error(`Error reading files in directory ${dirPath}: ${error}`);
    }
};

// Function to create the image map with import() statements
const createImageMap = async () => {
    try {
        // Read files in the directory
        const files = await readFilesInDirectory(directoryPath);

        // Create image map object
        const imageMap = {};

        // Iterate over files
        for (const file of files) {
            // Check if file is an image (you can adjust this condition as needed)
            if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) {
                // Add image to the image map with import() statement
                const imageName = path.basename(file, path.extname(file));
                const imagePath = path.join(relativePath, file);
                imageMap[imageName] = `import('${imagePath}')`;
            }
        }

        return imageMap;
    } catch (error) {
        throw new Error(`Error creating image map: ${error}`);
    }
};

// Function to write image map to a TypeScript file
const writeImageMapToFile = async () => {
    try {
        // Create image map
        const imageMap = await createImageMap();

        // Generate TypeScript code for the image map
        let imageMapCode = `export const images = {\n`;
        for (const imageName in imageMap) {
            imageMapCode += `    ${imageName}: ${imageMap[imageName]},\n`;
        }
        imageMapCode += `};\n`;

        // Write TypeScript code to a file
        await fs.writeFile('./src/assets/images.ts', imageMapCode);
        console.log('Image map has been written to images.ts');
    } catch (error) {
        throw new Error(`Error writing image map to file: ${error}`);
    }
};

// Invoke the function to write the image map to a TypeScript file
writeImageMapToFile().catch(error => console.error(error));
