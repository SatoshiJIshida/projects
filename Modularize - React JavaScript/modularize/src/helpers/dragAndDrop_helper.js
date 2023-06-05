/**
 * TESTING Jest Mock (model) of the 'react-beautiful-dnd' library
 * Based on library Jest taken from source https://stackoverflow.com/questions/53426148/mocking-react-beautiful-dnd-with-jest
 */
module.exports = {
  Droppable: ({ children }) =>
    children(
      {
        // DropZones.
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  Draggable: ({ children }) =>
    children(
      {
        // Items.
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  DragDropContext: ({ children }) => children,
};
