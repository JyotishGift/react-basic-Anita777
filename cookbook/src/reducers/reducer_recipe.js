
export default () => [
  { id: 0, name: 'pizza'},
  { id: 1, name: 'omelette' },
  { id: 2, name: 'potato' },
  { id: 3, name: 'risotto'},
  { id: 4, name: 'soup'}
]
/*
const recepts = [
  { name: 'pizza', id: 1 },
  { name: 'omelette', id: 2 }
];

const ingridients = [
  { name: 'milk', quanity: 1, recept_id: 1 },
  { name: 'eggs', recept_id: 1, quanity: 2 },
  { name: 'potato', recept_id: 2, quanity: 2 }
];

export default  function reducerRecipes(state, action) {
  switch (action.type) {
    case 'ADD_INGRIDIENTS':
      return state.map(recepts => {
        if (recepts.id === action.payload.receptId) {
          return {
            ...recepts,
            ingridients: [
              ...recepts.ingridients,
              action.payload.recept
            ]
          };
        }
      });
      return {
        ...recepts,
        ingridients: [...recepts.ingridients]
      };
  }
}

function ingridientsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGRIDIENTS':
      return [...state, action.recept];
  }
}

reducerRecipes(recepts, {
  type: 'ADD_INGRIDIENTS',
  payload: {
    recept: { name: 'salt', quanity: 1 },
    receptId: 0
  }
});
*/