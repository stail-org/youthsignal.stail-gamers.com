const Parser = require('rss-parser')

exports.handler = async function () {
  const parser = new Parser()
  const feed = await parser.parseURL(
    'https://ci-en.net/creator/2349/article/xml/rss'
  )
  const infoList = []
  feed.items.forEach((item, i) => {
    infoList.push({
      id: i,
      title: item.title,
      url: item.link,
      createdAt: new Date(item['dc:date']),
    })
  })

  return {
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
    },
    statusCode: 200,
    body: JSON.stringify(infoList),
  }
}
