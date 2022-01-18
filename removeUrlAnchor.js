function removeUrlAnchor(url){
    // TODO: complete
    // we use the split method which will return an array with everything before the #
    // and after the # ex: [www.codewards.com, about] and we select indx 0
  const test = url.split('#')[0]

  console.log(test)
  }

  removeUrlAnchor('www.codewars.com#about')