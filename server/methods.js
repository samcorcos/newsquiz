Meteor.methods({
  getData: function (month, year, category) {
    startDate = startDate(month, year);
    endDate = endDate(month, year);
    key = "555828fbba8186bbd0311542bc625579:9:70514653";
    response = Meteor.http.call('GET', 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times")&type_of_material:("News")&section_name:(' + category +')&begin_date=' + startDate + '&end_date=' + endDate + '&api-key=' + key)
    console.log(response)
    return response;
  }
})

function startDate(month, year) {
  return year + month + "01";
}
function endDate(month, year) {
  var day = "";
  if (month = "02") {
    day = "28";
  } else if (month = "04" || "06" || "09" || "11") {
    day = "30";
  } else { day = "31"}
  return year + month + day;
}

//
//
//   http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times")&type_of_material:("News")&section_name:("Sports")&begin_date=20130104&end_date=20130204&api-key=555828fbba8186bbd0311542bc625579:9:70514653
//
//    var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=source:("The New York Times") AND type_of_material:("News") AND section_name:("Sports" "US" "Science" "Arts" ) AND pub_date:("2014-12-13")' + '&page=' + resultsPageNumber + '&api-key=' + NYTapiKey;
//
//   NYT Key: 555828fbba8186bbd0311542bc625579:9:70514653
//
//   http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=search term&fq=filter-field:(filter-term)&additional-params=values]&api-k
//
//
//   http://api.nytimes.com/svc/search/v2/articlesearch.json?      [q=search term&fq=filter-field:(filter-term)&additional-params=values]&api-key=555828fbba8186bbd0311542bc625579:9:70514653
//
//   fq
//   Filtered search query using standard Lucene syntax.
//   The filter query can be specified with or without a limiting field: label.
//   See Filtering Your Search for more information about filtering.
//   eg:    &fq=news_desk:("Sports" "Foreign")
//  
