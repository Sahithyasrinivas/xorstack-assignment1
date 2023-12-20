const axios = require('axios')
const cheerio = require('cheerio')
const url = "https://stackoverflow.com/questions/tagged/python"

axios.get(url).then(response => {
    const $ = cheerio.load(response.data)
    const questions = $(".s-post-summary--content-title")
    questions.each((index, element) => {
      const question = $(element).text()
      console.log(question)
    })
  }).catch(error => {
    console.error('Error', error);
  });