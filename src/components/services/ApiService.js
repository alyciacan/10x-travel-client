const BASE_API_URL = 'https://alycia-10xtravel-3723508a6055.herokuapp.com/api/';

const buildURLWithParams = (baseURL, queryParams) => {
  const params = new URLSearchParams(queryParams);
  const queryString = params.toString();
  return queryString ? `${baseURL}?${queryString}` : baseURL;
};


export const getAllRates = async (pageNum) => {
    try {
      const url = buildURLWithParams(BASE_API_URL + 'partners/', { page: `${pageNum ? pageNum : 1}`})
        const response = await fetch('https://alycia-10xtravel-3723508a6055.herokuapp.com/api/partners?page=1');
        if (!response.ok) {
            throw new Error('Request failed!');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getPartnerProgramsById = async (destinationProgramId) => {
    try {
      const url = buildURLWithParams(BASE_API_URL + `partners/search/${destinationProgramId}`, {})
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Request failed!');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

export const getTransferRates = async (sourceProgId, destinationProgId) => {
  try {
    const url = buildURLWithParams(BASE_API_URL + 'transfer', {
      source: sourceProgId,
      destination: destinationProgId
    });
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error('Request failed!');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error)
  }
}

export const getProgramOptions = async () => {
  try {
    const url = buildURLWithParams(BASE_API_URL + 'programoptions', {})
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error('Request failed!');
    } else {
      return response.json();
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
