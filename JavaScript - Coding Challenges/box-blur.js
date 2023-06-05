/**
 * You want to apply the box blur algorithm to the photo to hide its content.
 * The pixels in the input image are represented as integers. The algorithm distorts the
 * input image in the following way: Every pixel x in the output image has a value equal to
 * the average value of the pixel values from the 3 × 3 square that has its center at x,
 * including x itself. All the pixels on the border of x are then removed.
 *
 * Return the blurred image as an integer, with the fractions rounded down.
 * 
 * Example:
 * For image = [[1, 1, 1], 
 *              [1, 7, 1], 
 *              [1, 1, 1]]
 * The output should be solution(image) = [[1]].
 * To get the value of the middle pixel in the input
 * 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1.
 * The border pixels are cropped from the final result.
 * 
 * [execution time limit] 4 seconds (js)
 * [input] array.array.integer image
 * 
 * [output] array.array.integer
 * A blurred image represented as integers, obtained through the process in the description.
 * 
 * Tests passed: 12/12.
 */
function solution(image) {
    const result = [];

    for (let y = 0; y < image.length; y++) {
        const averages = [];
        for (let x = 0; x < image[0].length; x++) {
            if (image[y][x] !== undefined && image[y][x + 2] !== undefined && image[y + 2]) {
                let sum = 0;
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        sum += image[y + i][x + j];
                    }
                }
                averages.push(Math.floor(sum / 9));
            }
        }
        if (averages.length > 0) {
            result.push(averages);
        }
    }
    return result;
}