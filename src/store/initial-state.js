export default function initialState() {
  return {
    graphData: {
      name: 'Top Level',
      children: [
        {
          name: 'Level 2: A',
          children: [
            { name: 'Son of A' },
            { name: 'Daughter of A' },
          ],
        },
        { name: 'Level 2: B' },
      ],
    },
  };
}
