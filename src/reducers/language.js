const BASE_LANGUAGE = 'EN';

const language = (state = BASE_LANGUAGE, { type, language }) => {
  switch (type) {
    case 'TOGGLE_LANGUAGE':
			return language;
    default:
      return state;
  }
}

export default language;
