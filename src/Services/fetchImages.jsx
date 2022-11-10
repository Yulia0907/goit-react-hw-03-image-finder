import axios from 'axios';

const API_KEY = '30158154-b75a98e868b38445873354c76';

export const fetchImages = (inputValue, page) => {
  return axios(
    `https://pixabay.com/api/?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
