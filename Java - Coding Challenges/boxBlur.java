/**
 * Last night you partied a little too hard. Now there's a black and white photo of you that's
 * about to go viral! You can't let this ruin your reputation, so you want to apply the box blur
 * algorithm to the photo to hide its content.
 * 
 * The pixels in the input image are represented as integers. The algorithm distorts the input image
 * in the following way: Every pixel x in the output image has a value equal to the average value of
 * the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels
 * on the border of x are then removed.
 * 
 * Return the blurred image as an integer, with the fractions rounded down.
 * 
 * Example:
 * For -
 * image = [[1, 1, 1], 
 *          [1, 7, 1], 
 *          [1, 1, 1]]
 * the output should be solution(image) = [[1]].
 * 
 * To get the value of the middle pixel in the input 3 × 3 square:
 * (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1.
 * The border pixels are cropped from the final result.
 * 
 * [execution time limit] 3 seconds (java)
 * [input] array.array.integer image
 * 
 * [output] array.array.integer
 * A blurred image represented as integers, obtained through the process in the description.
 * 
 * Tests passed: 12/12.
 */
int[][] solution(int[][] image) {
    int[][] output = new int[image.length-2][image[0].length-2];

    for (int y = 0; y < image.length; y++) {
        for (int x = 0; x < image[y].length; x++) {
            if ((x+2 < image[y].length) && (y+2 < image.length)) {
                int sum = 0;
                for (int i = 0; i < 3; i++) {
                    for (int j = 0; j < 3; j++) {
                        sum += image[y+i][x+j];
                    }
                }
                output[y][x] = (int)Math.floor(sum/9);
            }
        }
    }
    return output;
}
